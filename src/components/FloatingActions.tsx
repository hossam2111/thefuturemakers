import React from 'react';

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Floating Facebook Button */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        aria-label="تابعنا على فيسبوك"
        className="fixed bottom-[4.5rem] left-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-2xl shadow-black/25 ring-2 ring-white/80 transition-transform hover:scale-110 focus-visible:outline-white sm:bottom-24 sm:left-5 sm:h-14 sm:w-14 sm:ring-4 md:left-6"
      >
        <svg aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.33 0 2.46.1 2.8.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.12c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0Z"/>
        </svg>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/201003403147"
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="fixed bottom-4 left-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-black/25 ring-2 ring-white/80 transition-transform hover:scale-110 focus-visible:outline-white sm:bottom-5 sm:left-5 sm:h-14 sm:w-14 sm:ring-4 md:bottom-6 md:left-6"
      >
        <svg aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.12 0C5.58 0 .26 5.32.26 11.86c0 2.09.55 4.13 1.6 5.93L.16 24l6.36-1.67a11.8 11.8 0 0 0 5.6 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.47-8.42ZM12.13 21.76h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.22-3.77.99 1.01-3.68-.24-.38a9.83 9.83 0 0 1-1.5-5.23c0-5.43 4.42-9.85 9.86-9.85a9.8 9.8 0 0 1 6.96 2.88 9.8 9.8 0 0 1 2.89 6.97c0 5.43-4.42 9.85-9.84 9.85Zm5.4-7.37c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.15-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"/>
        </svg>
      </a>
    </>
  );
};
