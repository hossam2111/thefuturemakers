import React, { useState } from 'react';
import { SmartImage } from '../components/SmartImage';

export const Volunteer: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    nationalId: '',
    center: 'الفيوم',
    occupation: '',
    interests: [] as string[],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const fayoumCenters = [
    'الفيوم (المدينة)',
    'سنورس',
    'إطسا',
    'طامية',
    'إبشواي',
    'يوسف الصديق',
  ];

  const interestOptions = [
    { id: 'field', label: 'البحث الميداني ودراسة الحالات' },
    { id: 'medical', label: 'الفريق الطبي والقوافل العلاجية' },
    { id: 'organization', label: 'تنظيم الفعاليات وتوزيع المساعدات' },
    { id: 'media', label: 'التصوير والتصميم وصناعة المحتوى' },
    { id: 'pr', label: 'العلاقات العامة والتواصل والتمويل' },
    { id: 'education', label: 'التدريب والتعليم وفصول محو الأمية' },
  ];

  const handleInterestToggle = (label: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(label)
        ? prev.interests.filter(i => i !== label)
        : [...prev.interests, label]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('يرجى كتابة الاسم ورقم الهاتف على الأقل');
      return;
    }
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/201003403147?text=${encodeURIComponent(
    'السلام عليكم، أرغب في الانضمام لفريق متطوعي صناع المستقبل بمحافظة الفيوم'
  )}`;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-white py-16 lg:py-20 relative overflow-hidden">
        <SmartImage
          decorative
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/teamwork-hands.jpg"
          width={1200}
          height={800}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/85 to-primary/95" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-sm font-bold bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-white/20">
            اصنع الفارق معنا
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-headline mb-4">
            تطوع معنا في صناع المستقبل (الفيوم)
          </h1>
          <p className="text-primary-container text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            الشباب هم عصب التنمية وقوة التغيير. انضم لأكبر أسرة تطوعية شبابية بمحافظة الفيوم وساهم في خدمة مجتمعك وأهلك.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 sm:px-8 py-4 bg-[#25d366] text-white hover:bg-[#20ba5a] rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-black/20 flex items-center gap-3 transition-transform hover:scale-105"
            >
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.12 0C5.58 0 .26 5.32.26 11.86c0 2.09.55 4.13 1.6 5.93L.16 24l6.36-1.67a11.8 11.8 0 0 0 5.6 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.47-8.42ZM12.13 21.76h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.22-3.77.99 1.01-3.68-.24-.38a9.83 9.83 0 0 1-1.5-5.23c0-5.43 4.42-9.85 9.86-9.85a9.8 9.8 0 0 1 6.96 2.88 9.8 9.8 0 0 1 2.89 6.97c0 5.43-4.42 9.85-9.84 9.85Zm5.4-7.37c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.15-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"/>
              </svg>
              تواصل مباشرة عبر واتساب التطوع
            </a>
          </div>
        </div>
      </section>

      {/* Main Registration Form */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-outline-variant/30 shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-6 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-5xl">check_circle</span>
                </div>
                <h3 className="text-3xl font-extrabold font-headline text-primary">
                  أهلاً بك في عائلة صناع المستقبل!
                </h3>
                <p className="text-on-surface-variant max-w-lg mx-auto leading-relaxed">
                  تم استلام بياناتك بنجاح. سيقوم مسؤول لجنة التطوع بمحافظة الفيوم بالتواصل معك لتحديد موعد المقابلة التعريفية وتنسيق انضمامك للفريق المناسب.
                </p>
                <div className="pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-white rounded-xl font-bold shadow-md hover:bg-secondary-fixed-dim"
                  >
                    تأكيد الانضمام عبر واتساب
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-outline-variant/20 pb-4">
                  <h2 className="text-2xl font-bold font-headline text-on-surface mb-1">
                    استمارة التسجيل الإلكتروني
                  </h2>
                  <p className="text-sm text-on-surface-variant">
                    املأ البيانات التالية وسنتواصل معك خلال 48 ساعة.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">
                    الاسم بالكامل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="الاسم الرباعي كما في بطاقة الرقم القومي"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none text-on-surface"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      رقم الهاتف (واتساب) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      placeholder="01xxxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none text-right font-mono"
                    />
                  </div>

                  {/* National ID */}
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      الرقم القومي (14 رقم)
                    </label>
                    <input
                      type="text"
                      maxLength={14}
                      dir="ltr"
                      placeholder="29900000000000"
                      value={formData.nationalId}
                      onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none text-right font-mono"
                    />
                  </div>
                </div>

                {/* Center / City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      المركز التابع له بالفيوم <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.center}
                      onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    >
                      {fayoumCenters.map((c, i) => (
                        <option key={i} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Occupation */}
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      الكلية / المؤهل / الوظيفة
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: طالب بكلية الهندسة / خريج تجارة"
                      value={formData.occupation}
                      onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                </div>

                {/* Interests checkboxes */}
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-3">
                    المجالات أو اللجان التي ترغب في التطوع بها:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {interestOptions.map((opt) => (
                      <label
                        key={opt.id}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                          formData.interests.includes(opt.label)
                            ? 'bg-primary/5 border-primary text-primary font-bold'
                            : 'bg-surface-container-low border-outline-variant/30 text-on-surface hover:bg-surface-container'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(opt.label)}
                          onChange={() => handleInterestToggle(opt.label)}
                          className="w-4 h-4 text-primary rounded"
                        />
                        <span className="text-xs sm:text-sm">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional notes */}
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">
                    ملاحظات أو مهارات سابقة تود إضافتها
                  </label>
                  <textarea
                    rows={3}
                    placeholder="أخبرنا عن خبراتك التطوعية السابقة أو أي مهارات تود تسخيرها..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white hover:bg-primary-hover rounded-xl font-bold text-lg shadow-lg shadow-primary/25 transition-all"
                >
                  إرسال طلب الانضمام
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
