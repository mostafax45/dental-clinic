-- ============================================================
-- عيادة الابتسامة الذهبية - MySQL Database Schema
-- ============================================================
 
CREATE DATABASE IF NOT EXISTS dental_clinic
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
 
USE dental_clinic;
 

CREATE TABLE users (
    id            INT UNSIGNED    NOT NULL AUTO_INCREMENT,
    name          VARCHAR(100)    NOT NULL,
    email         VARCHAR(150)    NOT NULL UNIQUE,
    phone         VARCHAR(20)     NOT NULL,
    auth_provider ENUM('email','google') NOT NULL DEFAULT 'email',
    created_at    TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_users_email (email),
    INDEX idx_users_phone (phone)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 

CREATE TABLE doctors (
    id               INT UNSIGNED    NOT NULL AUTO_INCREMENT,
    name             VARCHAR(100)    NOT NULL,
    specialty        VARCHAR(100)    NOT NULL,
    photo_url        VARCHAR(500)    DEFAULT NULL,
    bio              TEXT            DEFAULT NULL,
    years_experience TINYINT UNSIGNED NOT NULL DEFAULT 0,
    rating           DECIMAL(3,2)    NOT NULL DEFAULT 0.00 COMMENT 'Avg rating 0.00 - 5.00',
    is_active        TINYINT(1)      NOT NULL DEFAULT 1,
    created_at       TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at       TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_doctors_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 

CREATE TABLE services (
    id          INT UNSIGNED    NOT NULL AUTO_INCREMENT,
    name        VARCHAR(100)    NOT NULL,
    description TEXT            DEFAULT NULL,
    price       DECIMAL(10,2)   DEFAULT NULL COMMENT 'NULL means price on consultation',
    is_active   TINYINT(1)      NOT NULL DEFAULT 1,
    created_at  TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 

INSERT INTO services (name, description) VALUES
  ('فحص وتنظيف أسنان',  'فحص شامل للفم والأسنان مع تنظيف احترافي'),
  ('علاج عصب',           'علاج قنوات الجذر بأحدث التقنيات وبأقل ألم ممكن'),
  ('تبييض الأسنان',      'احصل على ابتسامة بيضاء مشرقة في جلسة واحدة'),
  ('زراعة أسنان',        'زرع الأسنان الدائم بتقنية ثلاثية الأبعاد'),
  ('تقويم أسنان',        'تقويم شفاف وتقليدي لاحتياجات مختلفة'),
  ('حشوات وترميمات',    'حشوات طبية وترميمات بمواد عالية الجودة'),
  ('تركيب تيجان',        'تيجان زيركون وبورسلين عالية الجودة'),
  ('خلع أسنان',          'خلع آمن بأقل ألم وأسرع تعافي'),
  ('استشارة طبية',       'استشارة مع أحد أطبائنا المتخصصين');
 

CREATE TABLE schedules (
    id           INT UNSIGNED NOT NULL AUTO_INCREMENT,
    doctor_id    INT UNSIGNED NOT NULL,
    day_of_week  ENUM('sunday','monday','tuesday','wednesday','thursday','friday','saturday') NOT NULL,
    start_time   TIME         NOT NULL,
    end_time     TIME         NOT NULL,
    is_available TINYINT(1)   NOT NULL DEFAULT 1,
    PRIMARY KEY (id),
    UNIQUE KEY uq_doctor_day (doctor_id, day_of_week),
    INDEX idx_schedules_doctor (doctor_id),
    CONSTRAINT fk_schedules_doctor
        FOREIGN KEY (doctor_id) REFERENCES doctors(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 

CREATE TABLE bookings (
    id           INT UNSIGNED  NOT NULL AUTO_INCREMENT,
    user_id      INT UNSIGNED  NOT NULL,
    doctor_id    INT UNSIGNED  NOT NULL,
    service_id   INT UNSIGNED  NOT NULL,
    booking_date DATE          NOT NULL,
    booking_time TIME          NOT NULL,
    status       ENUM('pending','confirmed','completed','cancelled') NOT NULL DEFAULT 'pending',
    notes        TEXT          DEFAULT NULL,
    created_at   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_bookings_user    (user_id),
    INDEX idx_bookings_doctor  (doctor_id),
    INDEX idx_bookings_date    (booking_date),
    INDEX idx_bookings_status  (status),
    CONSTRAINT fk_bookings_user
        FOREIGN KEY (user_id)    REFERENCES users(id)    ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_bookings_doctor
        FOREIGN KEY (doctor_id)  REFERENCES doctors(id)  ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_bookings_service
        FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 

CREATE TABLE reviews (
    id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id    INT UNSIGNED NOT NULL,
    doctor_id  INT UNSIGNED NOT NULL,
    booking_id INT UNSIGNED NOT NULL UNIQUE COMMENT 'One review per booking only',
    rating     TINYINT      NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment    TEXT         DEFAULT NULL,
    created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_reviews_doctor (doctor_id),
    INDEX idx_reviews_user   (user_id),
    CONSTRAINT fk_reviews_user
        FOREIGN KEY (user_id)    REFERENCES users(id)    ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_reviews_doctor
        FOREIGN KEY (doctor_id)  REFERENCES doctors(id)  ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_reviews_booking
        FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 

CREATE TABLE doctor_credentials (
    id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
    doctor_id  INT UNSIGNED NOT NULL,
    title      VARCHAR(200) NOT NULL COMMENT 'e.g. بكالوريوس طب الأسنان',
    institution VARCHAR(200) NOT NULL COMMENT 'e.g. جامعة القاهرة',
    year        YEAR        DEFAULT NULL,
    type        ENUM('degree','certification','experience','award') NOT NULL DEFAULT 'degree',
    created_at  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_credentials_doctor (doctor_id),
    CONSTRAINT fk_credentials_doctor
        FOREIGN KEY (doctor_id) REFERENCES doctors(id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
-- ============================================================
-- Trigger: auto-update doctor rating after INSERT on reviews
-- ============================================================
DELIMITER $$
CREATE TRIGGER trg_update_rating_after_insert
AFTER INSERT ON reviews
FOR EACH ROW
BEGIN
    UPDATE doctors
    SET rating = (
        SELECT ROUND(AVG(rating), 2)
        FROM reviews
        WHERE doctor_id = NEW.doctor_id
    )
    WHERE id = NEW.doctor_id;
END$$
 
CREATE TRIGGER trg_update_rating_after_delete
AFTER DELETE ON reviews
FOR EACH ROW
BEGIN
    UPDATE doctors
    SET rating = COALESCE((
        SELECT ROUND(AVG(rating), 2)
        FROM reviews
        WHERE doctor_id = OLD.doctor_id
    ), 0.00)
    WHERE id = OLD.doctor_id;
END$$
DELIMITER ;sys_config