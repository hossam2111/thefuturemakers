import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'استفسار عام',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('يرجى استكمال الحقول المطلوبة');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-sm font-bold bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-white/20">
            يسعدنا تواصلك دائماً
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-headline mb-4">
            تواصل معنا (الفيوم)
          </h1>
          <p className="text-primary-container text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            أرسل استفسارك أو شكواك أو مقترحك مباشرة، وسيتم تسجيل الرسالة ومراجعتها من قِبل فريق العمل بفرع الفيوم.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Details Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-outline-variant/30 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold font-headline text-on-surface pb-3 border-b border-outline-variant/20">
                معلومات التواصل
              </h2>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-container text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-surface mb-1">المقر الرئيسي بالفيوم</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    حي الجامعة، مقابل مجمع المصالح الحكومية، مركز الفيوم، محافظة الفيوم
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-surface mb-1">الخط الساخن والواتساب</h3>
                  <p className="text-sm text-on-surface-variant mb-1 font-mono" dir="ltr">01026236435</p>
                  <p className="text-xs text-on-surface-variant font-mono" dir="ltr">01020040935</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-container text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-surface mb-1">البريد الإلكتروني</h3>
                  <a href="mailto:info@thefuture-makers.com" className="text-sm text-primary hover:underline font-mono" dir="ltr">
                    info@thefuture-makers.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-warning/20 text-[#a37600] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">schedule</span>
                </div>
                <div>
                  <h3 className="font-bold text-on-surface mb-1">مواعيد العمل الرسمية</h3>
                  <p className="text-sm text-on-surface-variant">
                    يومياً من السبت إلى الخميس: 9:00 ص – 5:00 م
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Box */}
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white shadow-lg">
              <h3 className="font-bold font-headline text-xl mb-2">تفضل المحادثة المباشرة؟</h3>
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                يمكنك التحدث مع مسؤولي خدمة الجمهور بالفرع عبر واتساب مباشرة للرد على الاستفسارات العاجلة.
              </p>
              <a
                href="https://wa.me/201026236435"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-white text-primary hover:bg-white/90 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                فتح واتساب الآن
                <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Contact Form Column (Span 2) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-outline-variant/30 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-bold font-headline text-primary">
                    تم إرسال رسالتك بنجاح!
                  </h3>
                  <p className="text-on-surface-variant max-w-md mx-auto text-sm leading-relaxed">
                    شكراً لتواصلك مع جمعية صناع المستقبل بالفيوم. سيقوم الفريق المختص بمراجعة رسالتك والرد عليك في أقرب وقت.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        subject: 'استفسار عام',
                        message: '',
                      });
                    }}
                    className="mt-4 px-8 py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-md"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-outline-variant/20 pb-4">
                    <h2 className="text-2xl font-bold font-headline text-on-surface mb-1">
                      أرسل لنا رسالة
                    </h2>
                    <p className="text-sm text-on-surface-variant">
                      يتم حفظ الرسالة مباشرة في النظام ومراجعتها من إدارة الفرع.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      الاسم بالكامل <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="الاسم الثلاثي"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-on-surface mb-2">
                        رقم الهاتف <span className="text-red-500">*</span>
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

                    <div>
                      <label className="block text-sm font-bold text-on-surface mb-2">
                        البريد الإلكتروني (اختياري)
                      </label>
                      <input
                        type="email"
                        dir="ltr"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none text-right font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      موضوع الرسالة <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    >
                      <option value="استفسار عام">استفسار عام</option>
                      <option value="التطوع بالفرع">التطوع بالفرع</option>
                      <option value="التبرع والمساهمات">التبرع والمساهمات</option>
                      <option value="شكوى أو مقترح">شكوى أو مقترح</option>
                      <option value="متابعة طلب مساعدة">متابعة طلب مساعدة</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      نص الرسالة <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="اكتب رسالتك أو استفسارك بوضوح هنا..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 outline-none resize-none text-sm leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white hover:bg-primary-hover rounded-xl font-bold text-lg shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2"
                  >
                    إرسال الرسالة
                    <span className="material-symbols-outlined rtl:rotate-180 text-base">send</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
