import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notice, setNotice] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setNotice('يرجى إدخال البريد الإلكتروني وكلمة المرور');
      return;
    }
    setNotice('جاري التحقق من الصلاحيات... بوابة موظفي فرع الفيوم جاهزة ومحمية.');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 bg-surface-container-low">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-outline-variant/30 overflow-hidden">
        {/* Accent Top Decorative Stripe */}
        <div className="h-2 bg-gradient-to-r from-primary via-[#fcb900] to-primary" />

        <div className="p-8 sm:p-10">
          {/* Lock Icon Badge */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-4xl">lock</span>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold font-headline text-on-surface mb-2">
              تسجيل دخول الموظفين
            </h1>
            <p className="text-sm text-on-surface-variant">
              الرجاء إدخال بيانات الدخول للوصول إلى لوحة التحكم بفرع الفيوم.
            </p>
          </div>

          {notice && (
            <div className="mb-6 p-4 rounded-xl bg-primary-container text-primary text-xs font-bold animate-fade-in flex items-center gap-2">
              <span className="material-symbols-outlined text-base">info</span>
              {notice}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                  person
                </span>
                <input
                  type="text"
                  required
                  placeholder="admin@thefuture-makers.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary rounded-xl py-3 pr-12 pl-4 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all outline-none"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-bold text-on-surface">
                  كلمة المرور
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    setNotice('يرجى مراجعة مسؤول تقنية المعلومات بالفرع لإعادة تعيين كلمة المرور.');
                  }}
                  className="text-xs text-primary font-bold hover:underline"
                >
                  نسيت كلمة المرور؟
                </a>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                  key
                </span>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary rounded-xl py-3 pr-12 pl-4 focus:ring-2 focus:ring-primary/20 text-on-surface transition-all outline-none font-mono"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-white hover:bg-primary-hover rounded-xl font-bold text-lg shadow-md transition-all active:scale-[0.98] mt-2"
            >
              دخول
            </button>
          </form>

          {/* Return Home Link */}
          <div className="mt-8 pt-6 border-t border-outline-variant/20 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:underline"
            >
              <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
              العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
