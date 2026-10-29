# النشر على Hostinger

الكود على فرع `master`، والملفات الجاهزة للاستضافة (ناتج `npm run build`) بتتولّد تلقائياً على فرع `hostinger`
كل ما تعمل push على `master` (GitHub Actions: `.github/workflows/build-hostinger.yml`).

## الطريقة 1: ربط Git (الأسهل، وتحديثات تلقائية)

1. من hPanel: Websites > Manage > Advanced > Git.
2. Repository: `https://github.com/hossam2111/thefuturemakers.git`
3. Branch: `hostinger`
4. Install path: اتركه فاضي (يعني `public_html`) لو الدومين الأساسي، أو مجلد الدومين لو إضافي.
5. Deploy. وبعدين فعّل Auto deployment (Webhook) لو عايز كل push يتنشر لوحده.

## الطريقة 2: رفع يدوي

1. نزّل الفرع `hostinger` كـ ZIP من GitHub (Code > Download ZIP بعد اختيار الفرع)، أو شغّل `npm run build` محلياً.
2. ارفع كل محتويات الملفات (مش المجلد نفسه) إلى `public_html` عن طريق File Manager.
3. تأكد إن `.htaccess` اتنقل (ملف مخفي)، لأنه اللي بيخلي `/about` و`/request-aid` تشتغل من غير 404.

## ربط الدومين

- الدومين `thefuture-makers.com`: لو مسجل عند Hostinger، يتضاف من Websites > Add website.
- لو مسجل في مكان تاني، غيّر الـ Nameservers لقيم Hostinger، أو اعمل A record للـ IP اللي بيظهر في hPanel.
- فعّل SSL (Let's Encrypt) من Security > SSL، وبعدين فعّل Force HTTPS.

## التطوير المحلي

```
npm install
npm run dev
npm run build
```
