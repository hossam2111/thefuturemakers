import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const RequestAid: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedRequestId, setSubmittedRequestId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    applicantName: '',
    nationalId: '',
    phone: '',
    city: '',
    village: '',
    addressDetails: '',
    aidType: 'تدخل طبي',
    description: '',
  });

  const fayoumCenters = [
    'الفيوم',
    'سنورس',
    'إطسا',
    'طامية',
    'إبشواي',
    'يوسف الصديق',
  ];

  const aidTypes = [
    { id: 'medical', label: 'تدخل طبي', icon: 'medical_services' },
    { id: 'economic', label: 'تمكين اقتصادي', icon: 'trending_up' },
    { id: 'housing', label: 'سكن كريم', icon: 'home_work' },
    { id: 'education', label: 'دعم تعليمي', icon: 'school' },
  ];

  const handleStep1Next = () => {
    if (!formData.applicantName.trim() || !formData.phone.trim() || !formData.city.trim()) {
      setErrorMsg('أكمل الاسم ورقم الهاتف والمدينة/المركز قبل الانتقال للخطوة التالية.');
      return;
    }
    setErrorMsg(null);
    setStep(2);
  };

  const handleStep2Next = () => {
    if (!formData.aidType || formData.description.trim().length < 10) {
      setErrorMsg('أدخل نوع المساعدة ووصفاً واضحاً للحالة (لا يقل عن 10 أحرف) قبل المراجعة النهائية.');
      return;
    }
    setErrorMsg(null);
    setStep(3);
  };

  const handleSubmitFinal = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `REQ-FYM-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRequestId(generatedId);
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface-container-low py-12">
      <div className="max-w-3xl mx-auto px-6 w-full">
        
        {/* Header Hero */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-4 hover:underline">
            <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
            العودة للصفحة الرئيسية
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold font-headline text-primary mb-3">
            طلب مساعدة جديد (محافظة الفيوم)
          </h1>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            أدخل البيانات الأساسية للحالة، وسيتم تسجيل الطلب فوراً وإعطاؤك رقم متابعة يمكن التحقق به لاحقاً ومتابعة تقرير الزيارة الميدانية.
          </p>
        </div>

        {/* Stepper Progress */}
        {!submittedRequestId && (
          <div className="mb-10">
            <div className="flex items-center justify-between relative max-w-md mx-auto">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-outline-variant/30 -translate-y-1/2 -z-10" />
              <div
                className="absolute top-1/2 right-0 h-1 bg-primary -translate-y-1/2 -z-10 transition-all duration-300"
                style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
              />

              {[1, 2, 3].map((s) => (
                <div key={s} className="flex flex-col items-center gap-2 bg-surface-container-low px-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      step >= s
                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                        : 'bg-white border-2 border-outline-variant/40 text-on-surface-variant'
                    }`}
                  >
                    {step > s ? (
                      <span className="material-symbols-outlined text-base">check</span>
                    ) : (
                      s
                    )}
                  </div>
                  <span className={`text-xs font-bold ${step >= s ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {s === 1 ? 'البيانات الأساسية' : s === 2 ? 'تفاصيل الحالة' : 'المراجعة والإرسال'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-bold flex items-center gap-3 animate-fade-in">
            <span className="material-symbols-outlined text-xl">error</span>
            {errorMsg}
          </div>
        )}

        {/* Step Container Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-outline-variant/30 shadow-xl">
          
          {/* SUCCESS SCREEN */}
          {submittedRequestId ? (
            <div className="text-center py-8 space-y-6 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-5xl">check_circle</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-headline text-primary">
                تم تسجيل طلب المساعدة بنجاح
              </h2>
              <p className="text-on-surface-variant max-w-md mx-auto text-sm leading-relaxed">
                شكراً لك. تم إدراج الطلب في سجلات البحث الاجتماعي الخاصة بفرع صناع المستقبل بالفيوم.
              </p>

              <div className="bg-surface-container p-6 rounded-2xl border border-primary/20 max-w-sm mx-auto">
                <p className="text-xs font-bold text-on-surface-variant mb-1">رقم متابعة الطلب الخاص بك</p>
                <p className="font-mono text-2xl font-black text-primary tracking-wider" dir="ltr">
                  {submittedRequestId}
                </p>
                <p className="text-[11px] text-on-surface-variant mt-2">
                  احتفظ بهذا الرقم للاستعلام به في الصفحة الرئيسية عبر نافذة التحقق من الطلب.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="px-8 py-3.5 bg-primary text-white rounded-xl font-bold shadow-md hover:bg-primary-hover transition-colors"
                >
                  العودة للرئيسية
                </Link>
                <button
                  onClick={() => {
                    setSubmittedRequestId(null);
                    setStep(1);
                    setFormData({
                      applicantName: '',
                      nationalId: '',
                      phone: '',
                      city: '',
                      village: '',
                      addressDetails: '',
                      aidType: 'تدخل طبي',
                      description: '',
                    });
                  }}
                  className="px-8 py-3.5 bg-surface-container-low border border-outline-variant/40 rounded-xl font-bold text-on-surface hover:bg-surface-container transition-colors"
                >
                  تقديم طلب جديد
                </button>
              </div>
            </div>
          ) : step === 1 ? (
            /* STEP 1: Basic Information */
            <div className="space-y-6">
              <h2 className="text-xl font-bold font-headline text-on-surface pb-3 border-b border-outline-variant/20">
                1. البيانات الأساسية لمقدم الطلب
              </h2>

              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  الاسم الرباعي <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="أدخل الاسم الرباعي كما في بطاقة الرقم القومي"
                  value={formData.applicantName}
                  onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    onChange={(e) => setFormData({ ...formData, nationalId: e.target.value.replace(/\D/g, '') })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none text-right font-mono"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">
                    رقم الهاتف للتواصل <span className="text-red-500">*</span>
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">
                    المركز / المدينة بالفيوم <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                  >
                    <option value="">اختر المركز...</option>
                    {fayoumCenters.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">
                    القرية / الحي
                  </label>
                  <input
                    type="text"
                    placeholder="اسم القرية أو المنطقة"
                    value={formData.village}
                    onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  العنوان التفصيلي (لزيارة الباحث الاجتماعي)
                </label>
                <input
                  type="text"
                  placeholder="الشارع، علامة مميزة بجوار المنزل"
                  value={formData.addressDetails}
                  onChange={(e) => setFormData({ ...formData, addressDetails: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleStep1Next}
                  className="px-8 py-3.5 bg-primary text-white hover:bg-primary-hover rounded-xl font-bold flex items-center gap-2 shadow-md transition-all"
                >
                  التالي
                  <span className="material-symbols-outlined rtl:rotate-180 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ) : step === 2 ? (
            /* STEP 2: Case Details */
            <div className="space-y-6">
              <h2 className="text-xl font-bold font-headline text-on-surface pb-3 border-b border-outline-variant/20">
                2. تفاصيل الحالة ونوع المساعدة
              </h2>

              <div>
                <label className="block text-sm font-bold text-on-surface mb-3">
                  نوع المساعدة المطلوبة <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {aidTypes.map((t) => (
                    <label
                      key={t.id}
                      className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        formData.aidType === t.label
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-outline-variant/30 hover:border-outline-variant text-on-surface'
                      }`}
                    >
                      <input
                        type="radio"
                        name="aid_type"
                        checked={formData.aidType === t.label}
                        onChange={() => setFormData({ ...formData, aidType: t.label })}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="material-symbols-outlined text-2xl">{t.icon}</span>
                      <span className="font-bold text-sm">{t.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  وصف الحالة ولمبررات الطلب <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="اكتب هنا تفاصيل المشكلة، الوضع المعيشي، وعدد أفراد الأسرة، وطبيعة التدخل المطلوب بالتفصيل..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none resize-none text-sm leading-relaxed"
                />
                <p className="text-xs text-on-surface-variant mt-1">يجب ألا يقل الوصف عن 10 أحرف.</p>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-outline-variant/40 rounded-xl font-bold text-on-surface hover:bg-surface-container transition-colors"
                >
                  السابق
                </button>
                <button
                  type="button"
                  onClick={handleStep2Next}
                  className="px-8 py-3.5 bg-primary text-white hover:bg-primary-hover rounded-xl font-bold flex items-center gap-2 shadow-md transition-all"
                >
                  مراجعة الطلب
                  <span className="material-symbols-outlined rtl:rotate-180 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ) : (
            /* STEP 3: Review and Final Submission */
            <div className="space-y-6">
              <h2 className="text-xl font-bold font-headline text-on-surface pb-3 border-b border-outline-variant/20">
                3. مراجعة وتأكيد الطلب
              </h2>

              <p className="text-sm text-on-surface-variant">
                يرجى مراجعة بيانات الطلب أدناه قبل الإرسال النهائي لفرع الفيوم:
              </p>

              <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-xs text-on-surface-variant block font-bold">الاسم:</span>
                    <span className="font-bold text-on-surface">{formData.applicantName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-on-surface-variant block font-bold">رقم الهاتف:</span>
                    <span className="font-bold text-primary font-mono" dir="ltr">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-xs text-on-surface-variant block font-bold">الرقم القومي:</span>
                    <span className="font-bold text-on-surface font-mono" dir="ltr">
                      {formData.nationalId || 'غير مدخل'}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-on-surface-variant block font-bold">الموقع:</span>
                    <span className="font-bold text-on-surface">
                      {formData.village ? `${formData.village} - ` : ''}{formData.city} (محافظة الفيوم)
                    </span>
                  </div>
                </div>

                <div className="border-t border-outline-variant/20 pt-4">
                  <span className="text-xs text-on-surface-variant block font-bold mb-1">نوع المساعدة:</span>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-full">
                    {formData.aidType}
                  </span>
                </div>

                <div className="border-t border-outline-variant/20 pt-4">
                  <span className="text-xs text-on-surface-variant block font-bold mb-1">شرح وتفاصيل الحالة:</span>
                  <p className="text-sm text-on-surface leading-relaxed whitespace-pre-wrap">
                    {formData.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-outline-variant/40 rounded-xl font-bold text-on-surface hover:bg-surface-container transition-colors"
                >
                  السابق وتعديل
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmitFinal}
                  className="px-8 py-3.5 bg-secondary text-white hover:bg-secondary-fixed-dim rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-secondary/20 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                      جارٍ الإرسال...
                    </>
                  ) : (
                    <>
                      تأكيد وإرسال الطلب
                      <span className="material-symbols-outlined rtl:rotate-180 text-sm">send</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
