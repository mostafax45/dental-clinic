
const doctors = [
  { id:1, emoji:'👨‍⚕️', name:'د. أحمد سامي محمود', spec:'أخصائي تقويم الأسنان', exp:12, rating:4.9, reviews:128, color:'#e8f4f8', tags:['تقويم شفاف','تقويم تقليدي','علاج الفك'],
    about:'حاصل على البورد الأوروبي في تقويم الأسنان، مع خبرة 12 عاماً في علاج حالات التقويم المعقدة للكبار والأصغر سناً.',
    experience:[{title:'أستاذ مساعد بكلية الأسنان',place:'جامعة القاهرة',year:'2018 - حتى الآن'},{title:'زمالة تقويم الأسنان الأوروبية',place:'ألمانيا - برلين',year:'2015 - 2017'},{title:'أخصائي تقويم',place:'مستشفى المعادي التخصصي',year:'2012 - 2018'}],
    reviewsList:[{name:'محمد علي',date:'مارس 2024',text:'الدكتور أحمد متميز جداً في التقويم، شرح لي كل خطوة بالتفصيل والنتائج ممتازة.'},{name:'سارة خالد',date:'فبراير 2024',text:'أنصح به بشدة! تقويم شفاف احترافي والتعامل رائع.'},{name:'عمر حسن',date:'يناير 2024',text:'خبرة عالية ودقة في العمل، شكراً دكتور.'},{name:'نور محمود',date:'ديسمبر 2023',text:'نتائج رائعة في وقت أقل من المتوقع!'}]},
  { id:2, emoji:'👩‍⚕️', name:'د. منى حسام الدين', spec:'أخصائية زراعة الأسنان', exp:9, rating:4.8, reviews:96, color:'#fdf0e8', tags:['زراعة فورية','جيوب اللثة','تعويضات فورية'],
    about:'متخصصة في زراعة الأسنان بتقنية الحاسوب ثلاثي الأبعاد، وعمليات رفع الجيب الجيبي وزراعة العظام.',
    experience:[{title:'أخصائية زراعة أسنان',place:'مركز القاهرة للزراعة',year:'2019 - حتى الآن'},{title:'دبلوم زراعة الأسنان الدولي',place:'إيطاليا - ميلان',year:'2017 - 2018'},{title:'طبيبة عامة',place:'وزارة الصحة',year:'2015 - 2019'}],
    reviewsList:[{name:'أميرة سعد',date:'أبريل 2024',text:'عملية الزراعة كانت أسهل بكثير مما توقعت، الدكتورة منى محترفة جداً.'},{name:'كريم طاهر',date:'مارس 2024',text:'زرعت 4 أسنان والنتيجة مذهلة، الألم كان صفر تقريباً.'},{name:'هبة عادل',date:'فبراير 2024',text:'متابعة ممتازة قبل وبعد العملية، أنصح بالدكتورة بشدة.'},{name:'يوسف نادر',date:'يناير 2024',text:'دقة عالية واحترافية في العمل.'}]},
  { id:3, emoji:'👨‍⚕️', name:'د. طارق عبد الله وهبة', spec:'أخصائي علاج الجذور والأعصاب', exp:15, rating:4.9, reviews:203, color:'#e8f5ec', tags:['علاج العصب','المجهر الجراحي','إعادة العلاج'],
    about:'أحد رواد علاج قنوات الجذر في مصر، يستخدم أحدث تقنيات المجهر الجراحي وملفات النيكل تيتانيوم لضمان أعلى دقة.',
    experience:[{title:'استشاري علاج جذور الأسنان',place:'مركز التميز لطب الأسنان',year:'2015 - حتى الآن'},{title:'دكتوراه في علاج الجذور',place:'كلية طب الأسنان - جامعة عين شمس',year:'2013'},{title:'بكالوريوس طب وجراحة الأسنان',place:'جامعة القاهرة',year:'2009'}],
    reviewsList:[{name:'مريم إبراهيم',date:'أبريل 2024',text:'علاج العصب مع دكتور طارق كان تجربة مختلفة تماماً، لا ألم ودقة عالية جداً.'},{name:'أحمد السيد',date:'مارس 2024',text:'الأفضل في علاج الأعصاب المصابة، شكراً يا دكتور.'},{name:'فاطمة علي',date:'فبراير 2024',text:'تجربة رائعة، الدكتور صبور ومتقن في عمله.'},{name:'عبدالرحمن حاتم',date:'يناير 2024',text:'أنقذ سنتي من الخلع، ممتنن جداً.'}]},
  { id:4, emoji:'👩‍⚕️', name:'د. ريم ياسين إبراهيم', spec:'أخصائية تجميل الأسنان', exp:8, rating:4.7, reviews:87, color:'#faeaf5', tags:['تبييض','فينير','ابتسامة هوليود'],
    about:'متخصصة في تجميل الابتسامة وتصميمها رقمياً، معروفة بنتائج طبيعية تحسن شكل الابتسامة مع الحفاظ على صحة الأسنان.',
    experience:[{title:'أخصائية تجميل أسنان',place:'عيادة الابتسامة الذهبية',year:'2020 - حتى الآن'},{title:'دبلوم تجميل الأسنان',place:'فرنسا - باريس',year:'2018 - 2019'},{title:'ماجستير طب الأسنان',place:'جامعة الأزهر',year:'2016'}],
    reviewsList:[{name:'لينا حامد',date:'أبريل 2024',text:'ابتسامة هوليود حلمي بقى حقيقة! الدكتورة ريم فنانة حقيقية.'},{name:'دينا مصطفى',date:'مارس 2024',text:'فينير طبيعي جداً، محدش يعرف إنه مش أصلي. شكراً دكتورة.'},{name:'شيرين وليد',date:'فبراير 2024',text:'تصميم الابتسامة كان احترافي جداً وشرحت كل التفاصيل.'},{name:'مي سامي',date:'يناير 2024',text:'نتيجة مذهلة، ثقتي في نفسي زادت كتير.'}]},
  { id:5, emoji:'👨‍⚕️', name:'د. عمر فاروق الشناوي', spec:'أخصائي أمراض اللثة وجراحة الفم', exp:11, rating:4.8, reviews:115, color:'#e8eef8', tags:['اللثة','الخلع الجراحي','عمليات الفك'],
    about:'خبير في علاج أمراض اللثة المزمنة والجراحة التقويمية للفك، يستخدم تقنية الليزر في علاج التهابات اللثة.',
    experience:[{title:'استشاري أمراض اللثة',place:'مستشفى أبو الريش التخصصي',year:'2017 - حتى الآن'},{title:'دكتوراه جراحة الفم',place:'جامعة الإسكندرية',year:'2016'},{title:'طبيب مقيم - قسم الجراحة',place:'مستشفى قصر العيني',year:'2013 - 2017'}],
    reviewsList:[{name:'رامي فتحي',date:'أبريل 2024',text:'خلع ضرس العقل كان سريع ومريح، دكتور عمر ماهر جداً.'},{name:'نادين أشرف',date:'مارس 2024',text:'علاج اللثة مع الليزر فرق كبير، التعافي كان سريع.'},{name:'مصطفى حسين',date:'فبراير 2024',text:'عملية الفك كانت ناجحة 100%، شكراً يا دكتور.'},{name:'إيمان صلاح',date:'يناير 2024',text:'متابعة ممتازة ومريح في التعامل.'}]}
];

let currentUser = null;
let bookings = [];
let selectedTime = null;
let pendingBookingAfterLogin = false;

function init() {
  const today = new Date();
  const minDate = today.toISOString().split('T')[0];
  const dateInput = document.getElementById('booking-date');
  dateInput.min = minDate;
  dateInput.value = minDate;
  renderDoctorsGrid();
  populateDoctorSelect();
  updateTimeSlots();
}

function renderDoctorsGrid() {
  const grid = document.getElementById('doctors-grid');
  grid.innerHTML = doctors.map(d => `
    <div class="doctor-card" onclick="openDoctorProfile(${d.id})">
      <div class="doc-banner" style="background:${d.color}">${d.emoji}</div>
      <div class="doc-info">
        <div class="doc-name">${d.name}</div>
        <div class="doc-spec">${d.spec}</div>
        <div class="doc-meta">
          <span>⏱ ${d.exp} سنة خبرة</span>
          <span class="stars">${'★'.repeat(Math.floor(d.rating))}${'☆'.repeat(5-Math.floor(d.rating))}</span>
          <span style="font-size:12px;color:var(--muted)">${d.rating} (${d.reviews})</span>
        </div>
        <div class="doc-tags">${d.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="doc-actions">
          <button class="btn btn-primary" style="flex:1;padding:9px;font-size:13px" onclick="event.stopPropagation();bookWithDoc(${d.id})">احجز الآن</button>
          <button class="btn btn-outline" style="padding:9px 14px;font-size:13px" onclick="event.stopPropagation();openDoctorProfile(${d.id})">الملف</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openDoctorProfile(id) {
  const d = doctors.find(x => x.id === id);
  document.getElementById('profile-hero').innerHTML = `
    <div class="profile-avatar" style="background:${d.color}">${d.emoji}</div>
    <div class="profile-info">
      <h1>${d.name}</h1>
      <div class="profile-spec">${d.spec}</div>
      <div class="profile-rating">
        <span class="big-stars">${'★'.repeat(Math.floor(d.rating))}${'☆'.repeat(5-Math.floor(d.rating))}</span>
        <span style="font-weight:700;font-size:20px">${d.rating}</span>
        <span style="color:var(--muted);font-size:14px">(${d.reviews} تقييم)</span>
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:18px">
        <span style="background:var(--accent);color:var(--primary);padding:6px 14px;border-radius:20px;font-size:13px;font-weight:700">⏱ ${d.exp} سنة خبرة</span>
        ${d.tags.map(t=>`<span class="tag">${t}</span>`).join('')}
      </div>
      <p style="color:var(--muted);font-size:14px;line-height:1.8;max-width:600px;margin-bottom:20px">${d.about}</p>
      <button class="btn btn-primary" style="padding:11px 28px;font-size:15px" onclick="bookWithDoc(${d.id})">احجز مع ${d.name.split(' ').slice(0,2).join(' ')}</button>
    </div>`;
  document.getElementById('tab-experience').innerHTML = d.experience.map(e => `
    <div class="exp-item">
      <div class="exp-title">${e.title}</div>
      <div class="exp-place">📍 ${e.place}</div>
      <div class="exp-year">📅 ${e.year}</div>
    </div>`).join('');
  document.getElementById('tab-reviews').innerHTML = `
    <div style="background:var(--accent);padding:20px;border-radius:14px;margin-bottom:24px;display:flex;align-items:center;gap:20px">
      <div style="text-align:center">
        <div style="font-size:48px;font-weight:900;color:var(--primary)">${d.rating}</div>
        <div class="stars" style="font-size:22px">${'★'.repeat(Math.floor(d.rating))}</div>
        <div style="font-size:13px;color:var(--muted)">${d.reviews} تقييم</div>
      </div>
    </div>
    <div class="reviews-grid">${d.reviewsList.map(r => `
      <div class="review-card">
        <div class="reviewer">
          <div class="rev-avatar">${r.name[0]}</div>
          <div><div class="rev-name">${r.name}</div><div class="rev-date">${r.date}</div></div>
          <div class="stars" style="margin-right:auto;font-size:13px">★★★★★</div>
        </div>
        <div class="rev-text">${r.text}</div>
      </div>`).join('')}
    </div>`;
  document.getElementById('tab-schedule').innerHTML = `
    <div style="text-align:center;padding:48px 20px">
      <div style="font-size:52px;margin-bottom:16px">📅</div>
      <h3 style="font-size:20px;margin-bottom:8px">المواعيد المتاحة</h3>
      <p style="color:var(--muted);margin-bottom:24px">احجز موعدك الآن مع ${d.name.split(' ').slice(0,2).join(' ')}</p>
      <button class="btn btn-primary" style="padding:13px 36px;font-size:15px" onclick="bookWithDoc(${d.id})">احجز الآن</button>
    </div>`;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-btn')[0].classList.add('active');
  document.getElementById('tab-experience').classList.add('active');
  showPage('doc-profile', null);
}

function switchTab(id, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + id).classList.add('active');
}

function bookWithDoc(id) {
  document.getElementById('booking-doc-select').value = id;
  updateBookingPreview();
  showPage('booking', document.querySelectorAll('.nav-links button')[2]);
}

function populateDoctorSelect() {
  const sel = document.getElementById('booking-doc-select');
  doctors.forEach(d => {
    const o = document.createElement('option');
    o.value = d.id;
    o.textContent = d.emoji + ' ' + d.name + ' - ' + d.spec;
    sel.appendChild(o);
  });
}

function updateBookingPreview() {
  const id = parseInt(document.getElementById('booking-doc-select').value);
  const d = doctors.find(x => x.id === id);
  const card = document.getElementById('selected-doc-card');
  if (d) {
    card.style.display = 'block';
    document.getElementById('sidebar-doc-info').innerHTML = `
      <div style="font-size:36px;background:${d.color};padding:10px;border-radius:10px">${d.emoji}</div>
      <div>
        <div style="font-weight:700;font-size:14px">${d.name.split(' ').slice(0,3).join(' ')}</div>
        <div style="color:var(--primary);font-size:12px;font-weight:600">${d.spec}</div>
        <div class="stars" style="font-size:13px">${'★'.repeat(Math.floor(d.rating))} ${d.rating}</div>
      </div>`;
  } else {
    card.style.display = 'none';
  }
}

function updateTimeSlots() {
  const container = document.getElementById('time-slots-container');
  const date = document.getElementById('booking-date').value;
  if (!date) {
    container.innerHTML = '<div style="color:var(--muted);font-size:13px;grid-column:1/-1">اختر تاريخاً أولاً</div>';
    return;
  }
  const times = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'];
  const unavailable = [2, 5, 8];
  container.innerHTML = times.map((t, i) =>
    `<button class="time-slot ${unavailable.includes(i) ? 'unavailable' : ''}" ${unavailable.includes(i) ? 'disabled' : `onclick="selectTime(this,'${t}')"`}>${t}</button>`
  ).join('');
  selectedTime = null;
}

function selectTime(el, time) {
  document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  selectedTime = time;
}

function proceedBooking() {
  const docId = parseInt(document.getElementById('booking-doc-select').value);
  const service = document.getElementById('booking-service').value;
  const date = document.getElementById('booking-date').value;
  if (!docId) { showToast('اختر الطبيب أولاً'); return; }
  if (!service) { showToast('اختر الخدمة المطلوبة'); return; }
  if (!date) { showToast('اختر التاريخ'); return; }
  if (!selectedTime) { showToast('اختر وقت الموعد'); return; }
  if (!currentUser) { pendingBookingAfterLogin = true; openAuth('login'); return; }
  const d = doctors.find(x => x.id === docId);
  document.getElementById('booking-summary').innerHTML = `
    <div style="font-size:13px;font-weight:700;color:var(--muted);margin-bottom:16px">ملخص الحجز</div>
    <div style="display:flex;gap:16px;align-items:center;margin-bottom:16px">
      <span style="font-size:40px">${d.emoji}</span>
      <div><div style="font-weight:800;font-size:15px">${d.name}</div><div style="color:var(--primary);font-size:13px">${d.spec}</div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div style="background:white;padding:12px;border-radius:10px;border:1px solid var(--border)"><div style="font-size:11px;color:var(--muted)">الخدمة</div><div style="font-weight:700;font-size:14px">${service}</div></div>
      <div style="background:white;padding:12px;border-radius:10px;border:1px solid var(--border)"><div style="font-size:11px;color:var(--muted)">التاريخ</div><div style="font-weight:700;font-size:14px">${date}</div></div>
      <div style="background:white;padding:12px;border-radius:10px;border:1px solid var(--border)"><div style="font-size:11px;color:var(--muted)">الوقت</div><div style="font-weight:700;font-size:14px">${selectedTime}</div></div>
      <div style="background:white;padding:12px;border-radius:10px;border:1px solid var(--border)"><div style="font-size:11px;color:var(--muted)">المريض</div><div style="font-weight:700;font-size:14px">${currentUser.name}</div></div>
    </div>`;
  document.getElementById('booking-step1').style.display = 'none';
  document.getElementById('booking-step2').style.display = 'block';
  document.getElementById('step2').classList.add('active');
  document.getElementById('line1').classList.add('done');
}

function backToStep1() {
  document.getElementById('booking-step1').style.display = 'block';
  document.getElementById('booking-step2').style.display = 'none';
  document.getElementById('step2').classList.remove('active');
  document.getElementById('line1').classList.remove('done');
}

function confirmBooking() {
  const docId = parseInt(document.getElementById('booking-doc-select').value);
  const d = doctors.find(x => x.id === docId);
  const service = document.getElementById('booking-service').value;
  const date = document.getElementById('booking-date').value;
  const notes = document.getElementById('booking-notes').value;
  const booking = { id: Date.now(), doctor: d, service, date, time: selectedTime, notes, status: 'upcoming' };
  bookings.unshift(booking);
  showToast('✓ تم تأكيد حجزك بنجاح!');
  setTimeout(() => {
    renderBookings();
    showPage('my-bookings', document.querySelectorAll('.nav-links button')[3]);
  }, 800);
  backToStep1();
  document.getElementById('booking-doc-select').value = '';
  document.getElementById('booking-service').value = '';
  document.getElementById('booking-notes').value = '';
  selectedTime = null;
  updateTimeSlots();
  updateBookingPreview();
  document.getElementById('selected-doc-card').style.display = 'none';
}

function renderBookings() {
  const list = document.getElementById('bookings-list');
  if (!currentUser) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">🔒</div><div class="empty-title">يرجى تسجيل الدخول</div><button class="btn btn-primary" style="margin-top:16px" onclick="openAuth('login')">تسجيل الدخول</button></div>`;
    return;
  }
  if (!bookings.length) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">📅</div><div class="empty-title">لا توجد حجوزات بعد</div><p style="color:var(--muted);margin-top:8px">احجز موعدك الأول الآن</p><button class="btn btn-primary" style="margin-top:16px" onclick="showPage('booking',document.querySelectorAll('.nav-links button')[2])">احجز الآن</button></div>`;
    return;
  }
  list.innerHTML = bookings.map(b => `
    <div class="booking-item">
      <div class="booking-doc-avatar">${b.doctor.emoji}</div>
      <div class="booking-info">
        <div class="booking-doc-name">${b.doctor.name}</div>
        <div class="booking-spec-text">${b.doctor.spec}</div>
        <div class="booking-datetime">
          <span>📋 ${b.service}</span>
          <span>📅 ${b.date}</span>
          <span>⏰ ${b.time}</span>
        </div>
        ${b.notes ? `<div style="font-size:12px;color:var(--muted);margin-top:6px">💬 ${b.notes}</div>` : ''}
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
        <span class="badge badge-upcoming">قادم</span>
        <button onclick="cancelBooking(${b.id})" style="font-size:12px;color:var(--danger);background:none;border:1px solid var(--danger);padding:5px 12px;border-radius:8px;cursor:pointer;font-family:Cairo,sans-serif">إلغاء</button>
      </div>
    </div>`).join('');
}

function cancelBooking(id) {
  if (!confirm('هل تريد إلغاء هذا الموعد؟')) return;
  bookings = bookings.filter(b => b.id !== id);
  renderBookings();
  showToast('تم إلغاء الموعد');
}

function showPage(name, navBtn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  if (navBtn) {
    document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));
    navBtn.classList.add('active');
  }
  if (name === 'my-bookings') renderBookings();
  window.scrollTo(0, 0);
}

function openAuth(mode) {
  document.getElementById('auth-modal').classList.add('show');
  switchAuth(mode);
}

function closeModal() {
  document.getElementById('auth-modal').classList.remove('show');
  pendingBookingAfterLogin = false;
}

function switchAuth(mode) {
  document.getElementById('login-form').style.display = mode === 'login' ? 'block' : 'none';
  document.getElementById('register-form').style.display = mode === 'register' ? 'block' : 'none';
  document.getElementById('login-tab').classList.toggle('active', mode === 'login');
  document.getElementById('register-tab').classList.toggle('active', mode === 'register');
}

function loginWithGoogle() {
  completeLogin({ name: 'مستخدم Google', email: 'user@gmail.com', phone: '' });
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const phone = document.getElementById('login-phone').value.trim();
  if (!email || !phone) { showToast('يرجى ملء جميع البيانات'); return; }
  completeLogin({ name: email.split('@')[0], email, phone });
}

function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  if (!name || !email || !phone) { showToast('يرجى ملء جميع البيانات'); return; }
  completeLogin({ name, email, phone });
}

function completeLogin(user) {
  currentUser = user;
  closeModal();
  document.getElementById('nav-user-area').style.display = 'none';
  document.getElementById('nav-logged-area').style.display = 'flex';
  document.getElementById('nav-greeting').textContent = 'أهلاً، ' + user.name.split(' ')[0];
  document.getElementById('my-bookings-nav').style.display = 'block';
  showToast('أهلاً بك ' + user.name.split(' ')[0] + '! 👋');
  if (pendingBookingAfterLogin) { pendingBookingAfterLogin = false; setTimeout(proceedBooking, 500); }
}

function logout() {
  currentUser = null;
  document.getElementById('nav-user-area').style.display = 'flex';
  document.getElementById('nav-logged-area').style.display = 'none';
  document.getElementById('my-bookings-nav').style.display = 'none';
  showToast('تم تسجيل الخروج بنجاح');
  showPage('home', document.querySelectorAll('.nav-links button')[0]);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

document.getElementById('auth-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

init();
