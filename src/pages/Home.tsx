import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SmartImage } from '../components/SmartImage';

export const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'membership' | 'request'>('membership');
  const [nationalId, setNationalId] = useState('');
  const [verificationResult, setVerificationResult] = useState<string | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nationalId || nationalId.length !== 14) {
      setVerificationResult('يرجى إدخال رقم قومي صحيح مكون من 14 رقماً.');
      return;
    }
    if (activeTab === 'membership') {
      setVerificationResult(`تم التحقق بنجاح من الرقم القومي (${nationalId}): السجل قيد المراجعة لدى فرع الفيوم.`);
    } else {
      setVerificationResult(`الطلب المرتبط بالرقم (${nationalId}) تم استلامه وهو قيد الفحص والبحث الميداني بمحافظة الفيوم.`);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="brand-hero-surface relative overflow-hidden py-16 lg:py-24">
        {/* Background Decorative SVG Lines */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
          <svg className="h-full w-full text-primary" viewBox="0 0 696 316" fill="none">
            <path d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M-300 -250C-300 -250 -230 180 200 320C650 450 720 850 720 850" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-secondary-container text-secondary text-xs font-bold rounded-full border border-secondary/30 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              جمعية صناع المستقبل بالفيوم
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-headline leading-[1.15] text-primary">
              نصنع المستقبل... <br />
              <span className="text-warning">بالتمكين والتنمية</span>
            </h1>

            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed font-medium">
              نعمل في قلب محافظة الفيوم لنبني مجتمعاً متكافئاً، من خلال مشاريع تنموية مستدامة تستهدف الإنسان أولاً وتصنع له مستقبلاً كريماً ومشرقاً.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/request-aid"
                className="px-8 py-4 bg-primary text-white hover:bg-primary-hover rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/25 flex items-center gap-2"
              >
                ابدأ طلب مساعدة
                <span className="material-symbols-outlined rtl:rotate-180">arrow_right_alt</span>
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 bg-secondary text-white hover:bg-secondary-fixed-dim rounded-2xl font-bold text-lg transition-all shadow-lg shadow-secondary/20"
              >
                تعرف على مشاريعنا
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-4 text-sm text-on-surface-variant font-medium">
              <div className="flex -space-x-2 rtl:space-x-reverse" aria-hidden="true">
                <span className="flex w-9 h-9 items-center justify-center rounded-full border-2 border-white bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                </span>
                <span className="flex w-9 h-9 items-center justify-center rounded-full border-2 border-white bg-secondary text-white">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </span>
                <span className="flex w-9 h-9 items-center justify-center rounded-full border-2 border-white bg-warning text-[#1b1c1e]">
                  <span className="material-symbols-outlined text-[18px]">groups</span>
                </span>
              </div>
              <span className="font-semibold">بإشراف مديرية التضامن الاجتماعي بمحافظة الفيوم</span>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="relative h-[380px] lg:h-[540px] rounded-3xl overflow-hidden border border-secondary/30 shadow-2xl shadow-primary/20 group">
            <SmartImage
              alt="فلاح وابنه يجمعان العلف في حقول الفيوم"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              src="/images/hero-volunteers.jpg"
              width={1000}
              height={930}
              loading="eager"
              fallbackIcon="diversity_3"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-secondary/30 mix-blend-multiply" />
            <div className="absolute bottom-6 right-6 left-6 p-6 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white">
              <span className="px-3 py-1 bg-[#fcb900] text-[#1b1c1e] text-xs font-bold rounded-full inline-block mb-2">
                ميدان الفيوم 2026
              </span>
              <p className="font-bold text-lg">سواعد شبابية متطوعة تخدم كل قرى ومراكز الفيوم</p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Widget */}
      <section className="relative z-20 max-w-4xl mx-auto px-6 -mt-10 mb-16 w-full">
        <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-[0px_20px_48px_-12px_rgba(0,40,38,0.12)] border border-outline-variant/30 flex flex-col gap-6">
          <div className="flex gap-3 sm:gap-4 border-b border-outline-variant/30 pb-4">
            <button
              onClick={() => { setActiveTab('membership'); setVerificationResult(null); }}
              className={`font-bold text-sm sm:text-lg whitespace-nowrap pb-4 -mb-[17px] transition-colors border-b-2 ${
                activeTab === 'membership'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-on-surface-variant hover:text-on-surface'
              }`}
            >
              التحقق من العضوية
            </button>
            <button
              onClick={() => { setActiveTab('request'); setVerificationResult(null); }}
              className={`font-bold text-sm sm:text-lg whitespace-nowrap pb-4 -mb-[17px] transition-colors border-b-2 ${
                activeTab === 'request'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-on-surface-variant hover:text-on-surface'
              }`}
            >
              التحقق من الطلب
            </button>
          </div>

          <form onSubmit={handleVerify} className="flex flex-col md:flex-row items-end gap-4 pt-2">
            <div className="flex-1 w-full relative">
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                type="text"
                maxLength={14}
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value.replace(/\D/g, ''))}
                placeholder="أدخل الرقم القومي الخاص بك (14 رقم)"
                className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-4 pr-11 pl-3 sm:pr-12 sm:pl-4 focus:ring-2 focus:ring-primary/20 text-lg font-bold tracking-widest text-left outline-none placeholder:text-xs placeholder:tracking-normal sm:placeholder:text-lg sm:placeholder:tracking-widest"
                dir="ltr"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-[#fcb900] text-[#1b1c1e] hover:bg-[#e5a800] rounded-xl font-bold text-lg transition-transform active:scale-95 shadow-md whitespace-nowrap"
            >
              تحقق الآن
            </button>
          </form>

          {verificationResult && (
            <div className="p-4 rounded-xl bg-primary-container text-primary font-bold text-sm border border-primary/20 animate-fade-in flex items-center gap-2">
              <span className="material-symbols-outlined">info</span>
              {verificationResult}
            </div>
          )}

          <p className="text-xs text-on-surface-variant font-medium">
            يمكنك التحقق من حالة عضويتك أو حالة دراسة طلب المساعدة باستخدام الرقم القومي المسجل لدى فرع الفيوم.
          </p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-12 border-b border-outline-variant/20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-outline-variant/20">
          <div className="p-4">
            <h3 className="text-5xl font-extrabold font-headline text-primary mb-2 font-mono">
              +5,400
            </h3>
            <p className="text-lg font-bold text-on-surface">أسرة مستفيدة</p>
            <p className="text-sm text-on-surface-variant mt-2 font-medium">تم التحقق منها ودعمها في الفيوم</p>
          </div>
          <div className="p-4">
            <h3 className="text-5xl font-extrabold font-headline text-warning mb-2 font-mono">
              +52
            </h3>
            <p className="text-lg font-bold text-on-surface">قرية نغطيها</p>
            <p className="text-sm text-on-surface-variant mt-2 font-medium">في مختلف مراكز محافظة الفيوم</p>
          </div>
          <div className="p-4">
            <h3 className="text-5xl font-extrabold font-headline text-secondary mb-2 font-mono">
              +950
            </h3>
            <p className="text-lg font-bold text-on-surface">متطوع ميداني</p>
            <p className="text-sm text-on-surface-variant mt-2 font-medium">جاهزون للتدخل السريع والقوافل</p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-surface to-primary-container/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="border-r-4 border-secondary pr-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold font-headline text-primary mb-4">
                خدماتنا التنموية بالفيوم
              </h2>
              <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
                نقدم حزمة متكاملة من التدخلات التي تهدف إلى تحسين جودة الحياة في مجتمعاتنا المحلية بالفيوم، مع التركيز على الاستدامة والتمكين المباشر.
              </p>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-primary font-bold hover:underline shrink-0 text-lg"
            >
              عرض كافة الخدمات
              <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Economic Empowerment (Span 2) */}
            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group min-h-[320px]">
              <SmartImage
                alt="بائعان أمام محل خضروات وفاكهة في الغردقة"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/small-business-vendor.jpg"
                width={800}
                height={1200}
                fallbackIcon="trending_up"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-secondary/40" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 text-white">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-2">تمكين اقتصادي</h3>
                <p className="text-white/90 leading-relaxed max-w-md">
                  دعم المشروعات الصغيرة ومتناهية الصغر للشباب والنساء المعيلات لضمان مصدر دخل مستدام وتحويل الأسر من الاحتياج إلى الإنتاج.
                </p>
              </div>
            </div>

            {/* Educational Support */}
            <div className="bg-white rounded-3xl border border-outline-variant/30 hover:shadow-xl transition-shadow flex flex-col min-h-[320px] overflow-hidden">
              <SmartImage
                alt="مقاعد خشبية داخل فصل دراسي في القاهرة"
                className="h-40 w-full object-cover"
                src="/images/education-classroom.jpg"
                width={1200}
                height={801}
                fallbackIcon="school"
              />
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center -mt-12 sm:-mt-14 mb-auto text-primary ring-4 ring-white">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h3 className="text-xl font-bold font-headline text-on-surface mb-3 mt-6">دعم تعليمي</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  برامج محو الأمية، وتوفير المستلزمات والشنط المدرسية، وكفالة الطلاب المتفوقين دراسياً في قرى الفيوم.
                </p>
              </div>
            </div>

            {/* Health Interventions */}
            <div className="bg-white rounded-3xl border border-outline-variant/30 hover:shadow-xl transition-shadow flex flex-col min-h-[320px] overflow-hidden">
              <SmartImage
                alt="طبيب عربي يرتدي المعطف الأبيض داخل منشأة طبية"
                className="h-40 w-full object-cover"
                src="/images/medical-checkup.jpg"
                width={1200}
                height={794}
                fallbackIcon="medical_services"
              />
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center -mt-12 sm:-mt-14 mb-auto text-warning ring-4 ring-white">
                  <span className="material-symbols-outlined">medical_services</span>
                </div>
                <h3 className="text-xl font-bold font-headline text-on-surface mb-3 mt-6">تدخلات صحية</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  قوافل طبية متخصصة في قرى الفيوم، وتوفير الأدوية وإجراء العمليات الجراحية العاجلة للمرضى غير القادرين.
                </p>
              </div>
            </div>

            {/* Decent Housing (Span 2) */}
            <div className="bg-white rounded-3xl border border-outline-variant/30 hover:shadow-xl transition-shadow flex flex-col min-h-[300px] lg:col-span-2 overflow-hidden">
              <SmartImage
                alt="منزل ريفي وسط الحقول والنخيل في مصر"
                className="h-40 w-full object-cover"
                src="/images/housing-construction.jpg"
                width={1200}
                height={800}
                fallbackIcon="home_work"
              />
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center -mt-12 sm:-mt-14 mb-auto text-primary ring-4 ring-white">
                  <span className="material-symbols-outlined">home_work</span>
                </div>
                <h3 className="text-xl font-bold font-headline text-on-surface mb-3 mt-6">سكن كريم</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
                  ترميم المنازل وتوفير أسقف آمنة ووصلات مياه نظيفة وكهرباء للأسر الأكثر احتياجاً في مراكز الفيوم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Branch Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="border-r-4 border-primary pr-6">
              <h2 className="text-3xl font-extrabold font-headline text-primary mb-2">أخبار وفعاليات الفرع</h2>
              <p className="text-on-surface-variant text-lg">
                تابع أحدث فعاليات وأنشطة صناع المستقبل في مختلف مراكز وقرى محافظة الفيوم
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <SmartImage
                alt="سماعة طبية ومعطف أبيض دون ظهور وجوه المرضى"
                className="h-48 w-full object-cover"
                src="/images/medical-convoy-child.jpg"
                width={1200}
                height={801}
                fallbackIcon="campaign"
                fallbackClassName="bg-primary/10"
              />
              <div className="p-6">
                <span className="text-xs font-bold text-secondary">الفيوم • إطسا</span>
                <h3 className="text-xl font-bold font-headline text-on-surface mt-2 mb-3">
                  إطلاق قافلة طبية شاملة لخدمة 600 أسرة
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  نظم فريق المتطوعين بالفرع قافلة طبية شاملة شملت عيادات باطنة، أطفال، عظام مع توفير العلاج بالمجان.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <SmartImage
                alt="يدا حرفي تعملان على نول خشبي في مصر"
                className="h-48 w-full object-cover"
                src="/images/sewing-workshop.jpg"
                width={1200}
                height={836}
                fallbackIcon="work"
                fallbackClassName="bg-secondary/10"
              />
              <div className="p-6">
                <span className="text-xs font-bold text-secondary">الفيوم • سنورس</span>
                <h3 className="text-xl font-bold font-headline text-on-surface mt-2 mb-3">
                  تسليم 15 مشروع تمكين اقتصادي للمرأة المعيلة
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  تسليم ماكينات خياطة ومستلزمات إنتاج ومنافذ بيع لدعم أمهات الأيتام لتحقيق اكتفاء ذاتي.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <SmartImage
                alt="قارئ بين رفوف الكتب في مكتبة بالقاهرة"
                className="h-48 w-full object-cover"
                src="/images/volunteer-training.jpg"
                width={1200}
                height={708}
                fallbackIcon="groups"
                fallbackClassName="bg-warning/10"
              />
              <div className="p-6">
                <span className="text-xs font-bold text-secondary">الفيوم • مركز الشباب</span>
                <h3 className="text-xl font-bold font-headline text-on-surface mt-2 mb-3">
                  تخريج دفعة جديدة من قادة التطوع الشباب
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  اختتام ورش العمل التدريبية لفرق التطوع لتأهيلهم لقيادة العمل الميداني والبحث الاجتماعي.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Channels Section */}
      <section id="donate" className="brand-gradient relative overflow-hidden py-20 text-white">
        <SmartImage
          decorative
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity"
          src="/images/donation-volunteers.jpg"
          width={1200}
          height={800}
        />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-primary text-xs font-bold rounded-full mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">favorite</span>
              ساهم في التغيير وصناعة المستقبل
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold font-headline text-white mb-4">
              وسائل التبرع الرسمية
            </h2>
            <p className="text-white/90 text-lg">
              تبرعك يصنع فارقاً حقيقياً في حياة آلاف الأسر في الفيوم، اختر الوسيلة الأنسب لك وكن شريكاً في الأثر.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-[#1b1c1e]">
            <div className="flex flex-col gap-8">
              {/* Vodafone Cash */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl text-warning" aria-hidden="true">
                    phone_iphone
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-on-surface mb-1">فودافون كاش / محافظ إلكترونية</h3>
                  <p className="text-on-surface-variant text-sm mb-3">
                    يمكنك التبرع فوراً عبر محفظة فودافون كاش على الرقم المعتمد:
                  </p>
                  <div className="bg-surface-container-low px-4 sm:px-5 py-3 rounded-xl font-mono text-xl sm:text-2xl font-bold text-primary inline-block border border-primary/10 tracking-wider" dir="ltr">
                    01003403147
                  </div>
                </div>
              </div>

              <div className="h-px bg-outline-variant/30 w-full" />

              {/* Bank Transfer */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    account_balance
                  </span>
                </div>
                <div className="w-full min-w-0">
                  <h3 className="text-xl font-bold text-on-surface mb-1">التحويل البنكي والزكاة</h3>
                  <p className="text-on-surface-variant text-sm mb-4">
                    حسابنا البنكي المعتمد لاستقبال التبرعات والصدقات والزكاة:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30">
                      <p className="text-xs text-on-surface-variant mb-1 font-bold">اسم المستفيد</p>
                      <p className="font-bold text-on-surface">جمعية صناع المستقبل للتنمية بالفيوم</p>
                    </div>
                    <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30">
                      <p className="text-xs text-on-surface-variant mb-1 font-bold">رقم الحساب الدولي (IBAN)</p>
                      <p className="font-mono font-bold text-primary text-sm break-all" dir="ltr">
                        EG390004603000006204030002652
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
