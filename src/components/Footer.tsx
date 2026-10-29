import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-24 lg:pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Branch Info & Logo */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img
              alt="شعار صناع المستقبل"
              width={56}
              height={56}
              className="w-14 h-14 object-contain rounded-xl bg-white p-1"
              src="/thefuturemakers-logo.svg"
            />
            <div className="flex flex-col">
              <span className="font-headline font-bold text-xl leading-none text-white">
                صناع المستقبل
              </span>
              <span className="text-[10px] text-white/70 font-bold">
                محافظة الفيوم
              </span>
            </div>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            نسعى لبناء مجتمع متكافل ومستدام من خلال تقديم الدعم والمساعدة للفئات الأكثر احتياجاً في مختلف قرى ومراكز محافظة الفيوم.
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="فيسبوك"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
            <a
              href="mailto:info@thefuture-makers.com"
              aria-label="البريد الإلكتروني"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                alternate_email
              </span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-r-2 border-secondary pr-3">
            روابط سريعة
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                من نحن
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition-colors">
                الخدمات والمشاريع
              </Link>
            </li>
            <li>
              <Link to="/volunteer" className="hover:text-white transition-colors">
                تطوع معنا
              </Link>
            </li>
            <li>
              <Link to="/request-aid" className="hover:text-white transition-colors">
                تقديم طلب مساعدة
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-6 border-r-2 border-secondary pr-3">
            تواصل معنا
          </h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary leading-none">
                location_on
              </span>
              <span>حي الجامعة، مقابل مجمع المصالح الحكومية، مركز الفيوم، محافظة الفيوم</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">
                call
              </span>
              <a href="https://wa.me/201003403147" target="_blank" rel="noreferrer" className="hover:text-white hover:underline font-mono" dir="ltr">
                01003403147
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">
                mail
              </span>
              <a href="mailto:info@thefuture-makers.com" className="hover:text-white hover:underline font-mono" dir="ltr">
                info@thefuture-makers.com
              </a>
            </li>
          </ul>
        </div>

        {/* Staff Portal Card */}
        <div>
          <div className="bg-black/20 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h4 className="font-bold mb-2 flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-warning" aria-hidden="true">
                lock
              </span>
              البوابة الداخلية
            </h4>
            <p className="text-white/70 text-xs mb-6 leading-relaxed">
              منصة لموظفي الفرع والمتطوعين المسجلين فقط بالفيوم لإدارة الحالات وقواعد البيانات.
            </p>
            <Link
              to="/login"
              className="w-full py-3 bg-[#fcb900] text-[#1b1c1e] hover:bg-[#e5a800] rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              دخول فريق العمل
            </Link>
          </div>
        </div>

      </div>

      {/* Legal & Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p>© {new Date().getFullYear()} جمعية صناع المستقبل للتنمية بالفيوم. جميع الحقوق محفوظة.</p>
          <p className="text-white/40">
            مديرية التضامن الاجتماعي الفيوم | النطاق: <span className="text-white/60 font-mono" dir="ltr">thefuture-makers.com</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link to="/about#registration" className="hover:text-white underline">
            البيانات التسجيلية
          </Link>
          <span className="text-white/50">
            منصة صناع المستقبل — The Future Makers
          </span>
        </div>
      </div>
    </footer>
  );
};
