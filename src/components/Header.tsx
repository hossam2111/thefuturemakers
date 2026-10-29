import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: 'الرئيسية', path: '/' },
    { title: 'من نحن', path: '/about' },
    { title: 'المشاريع والخدمات', path: '/projects' },
    { title: 'تطوع معنا', path: '/volunteer' },
    { title: 'تواصل معنا', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/95 shadow-sm shadow-primary/5 backdrop-blur-xl">
      <div className="h-1 w-full brand-gradient" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        
        {/* Brand Logo & Title */}
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            alt="شعار صناع المستقبل"
            width={64}
            height={64}
            className="mt-1 h-12 w-12 rounded-2xl bg-white object-contain shadow-md shadow-primary/10 ring-1 ring-primary/10 sm:h-14 sm:w-14"
            src="/thefuturemakers-logo.svg"
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-headline text-base font-bold leading-none text-primary sm:text-xl">
              صناع المستقبل
            </span>
            <span className="text-[10px] font-bold text-on-surface-variant sm:text-xs">
              بالفيوم
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-semibold text-on-surface lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-full px-2 py-1 transition-colors ${
                isActive(link.path)
                  ? 'text-primary font-bold'
                  : 'hover:text-primary'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="rounded-xl border border-primary/20 bg-primary-container px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary-fixed/70"
          >
            دخول فريق العمل
          </Link>
          <Link
            to="/request-aid"
            className="rounded-xl bg-secondary text-white px-4 py-2.5 text-sm font-bold shadow-lg shadow-secondary/25 transition-colors hover:bg-secondary-fixed-dim sm:px-5"
          >
            ابدأ طلب مساعدة
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-container text-primary lg:hidden"
          aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-primary/10 bg-white px-4 py-6 shadow-xl lg:hidden animate-fade-in">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-4 py-3 font-bold transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary-container text-primary'
                    : 'text-on-surface hover:bg-surface-container'
                }`}
              >
                {link.title}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2.5 pt-4 border-t border-outline-variant/20">
              <Link
                to="/request-aid"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-xl bg-secondary text-white py-3.5 font-bold shadow-md shadow-secondary/20"
              >
                ابدأ طلب مساعدة
              </Link>
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-xl border border-primary/20 bg-primary-container py-3 font-bold text-primary"
              >
                دخول فريق العمل
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
