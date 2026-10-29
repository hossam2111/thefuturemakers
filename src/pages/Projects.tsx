import React from 'react';
import { Link } from 'react-router-dom';
import { SmartImage } from '../components/SmartImage';

export const Projects: React.FC = () => {
  const campaigns = [
    {
      id: 'winter-warmth',
      title: 'بطانية الشتاء 2026',
      badge: 'موسمي',
      icon: 'ac_unit',
      image: '/images/winter-warmth.jpg',
      imageAlt: 'طفلان يرتديان ملابس شتوية دافئة',
      desc: 'توفير بطاطين وملابس شتوية للأسر الأكثر احتياجاً في قرى ومراكز محافظة الفيوم لمواجهة البرد القارس.',
      percent: 75,
      target: '500,000 EGP',
      raised: '375,000 EGP',
    },
    {
      id: 'orphans-sponsorship',
      title: 'كفالة الأيتام والأسر المعيلة',
      badge: 'رعاية اجتماعية',
      icon: 'family_restroom',
      image: '/images/children-smiling.jpg',
      imageAlt: 'أطفال يبتسمون بسعادة',
      desc: 'دعم شهري ثابت لتغطية نفقات التعليم والغذاء والدواء لعدد 250 أسرة معيلة وأيتام بقرى الفيوم.',
      percent: 68,
      target: '250,000 EGP',
      raised: '170,000 EGP',
    },
    {
      id: 'medical-convoys',
      title: 'قوافل الرعاية الطبية',
      badge: 'صحة',
      icon: 'medical_services',
      image: '/images/medical-doctor-boy.jpg',
      imageAlt: 'طبيب يفحص طفلاً بالسماعة الطبية بحضور والدته',
      desc: 'تسيير قوافل طبية دورية للقرى النائية وتوفير كشوفات وصيدلية مجانية وتحويلات للعمليات الجراحية العاجلة.',
      percent: 94,
      target: '180,000 EGP',
      raised: '170,000 EGP',
    },
  ];

  const mainPrograms = [
    {
      icon: 'storefront',
      image: '/images/shop-owner-woman.jpg',
      imageAlt: 'سيدة تدير متجراً صغيراً خاصاً بها',
      title: 'التمكين الاقتصادي (مشروعات صغيرة)',
      desc: 'نستبدل المساعدة المؤقتة بمصدر دخل دائم للأسرة من خلال تمويل مشاريع تجارية وزراعية صغيرة (أكشاك، ماكينات خياطة، ورش، تربية طيور).',
    },
    {
      icon: 'ecg',
      image: '/images/medical-equipment.jpg',
      imageAlt: 'جهاز قياس ضغط الدم على طاولة الكشف',
      title: 'الرعاية الطبية والعمليات',
      desc: 'التكفل بمصاريف العمليات الجراحية الكبرى وتوفير الأجهزة التعويضية وصرف الروشتات الشهرية لأصحاب الأمراض المزمنة في الفيوم.',
    },
    {
      icon: 'kitchen',
      image: '/images/food-aid-packing.jpg',
      imageAlt: 'متطوعات يجهزن أكياس المساعدات الغذائية',
      title: 'المساعدات العينية والغذائية',
      desc: 'توزيع كراتين المواد الغذائية واللحوم وتوفير الاحتياجات الأساسية للمنازل (تسقيف، وصلات مياه نظيفة) وتجهيز الفتيات اليتيمات للزواج.',
    },
    {
      icon: 'school',
      image: '/images/literacy-books.jpg',
      imageAlt: 'فتيات يحملن الكتب الدراسية',
      title: 'الدعم التعليمي ومحو الأمية',
      desc: 'سداد المصروفات الدراسية للطلبة غير القادرين، وتوفير الشنط والأدوات المدرسية، ورعاية فصول محو الأمية لكبار السن.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-sm font-bold bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-white/20">
            أعمالنا على الأرض
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-headline mb-6">
            الخدمات والمشاريع التنموية بالفيوم
          </h1>
          <p className="text-primary-container text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            جهود مستمرة لتوظيف التبرعات في مكانها الصحيح لبناء الإنسان وتمكينه من العيش بكرامة عبر برامج مستدامة وحملات دورية.
          </p>
        </div>
      </section>

      {/* Ongoing Campaigns */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 border-b border-outline-variant/20 pb-6">
            <div>
              <h2 className="text-3xl font-bold font-headline text-on-surface mb-2">
                الحملات والمشاريع الجارية
              </h2>
              <p className="text-on-surface-variant">
                الفرص المتاحة للمساهمة والتبرع الآن لدعم خطط الفرع القادمة في محافظة الفيوم.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((camp) => (
              <div
                key={camp.id}
                className="bg-white rounded-3xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="bg-primary/5 h-48 flex items-center justify-center relative overflow-hidden">
                  <SmartImage
                    alt={camp.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    src={camp.image}
                    width={1200}
                    height={800}
                    fallbackIcon={camp.icon}
                    fallbackClassName="bg-primary/5"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" aria-hidden="true" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm text-primary">
                      {camp.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold font-headline mb-3 text-on-surface">
                    {camp.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
                    {camp.desc}
                  </p>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm mb-1 font-bold">
                      <span className="text-on-surface-variant">نسبة الإنجاز</span>
                      <span className="text-primary font-mono" dir="ltr">{camp.percent}%</span>
                    </div>

                    <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden flex" dir="ltr">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${camp.percent}%` }}
                      />
                    </div>

                    <div className="flex justify-between text-xs text-on-surface-variant font-bold">
                      <div className="flex flex-col">
                        <span className="font-normal text-[10px]">الهدف</span>
                        <span dir="ltr" className="font-mono">{camp.target}</span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-normal text-[10px]">تم جمعه</span>
                        <span dir="ltr" className="font-mono text-primary font-bold">{camp.raised}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/#donate"
                    className="w-full mt-6 py-3 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl font-bold transition-colors text-center block"
                  >
                    تبرع الآن
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Core Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline text-on-surface mb-2">
              برامجنا التنموية المستدامة بالفيوم
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4 mb-4" />
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              نقدم حزمة متكاملة من الخدمات التنموية المصممة لانتشال الأسر من دائرة الفقر وتوفير احتياجاتهم بحلول علمية مدروسة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainPrograms.map((prog, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-3xl border border-outline-variant/30 bg-surface-container-lowest hover:border-primary/40 transition-colors shadow-sm overflow-hidden"
              >
                <SmartImage
                  alt={prog.imageAlt}
                  className="h-44 w-full object-cover"
                  src={prog.image}
                  width={1200}
                  height={800}
                  fallbackIcon={prog.icon}
                />
                <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                      {prog.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline mb-3 text-on-surface">
                      {prog.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed text-sm">
                      {prog.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-2">
              تحتاج إلى مساعدة أو دعم بالفيوم؟
            </h2>
            <p className="text-white/80 max-w-xl">
              إذا كنت أو أي شخص تعرفه في حاجة إلى إحدى الخدمات المذكورة، يمكنك تقديم طلب إلكتروني فوراً ليقوم فريق البحث الميداني بزيارتك وتقييم الحالة.
            </p>
          </div>
          <Link
            to="/request-aid"
            className="px-8 py-4 bg-[#fcb900] text-[#1b1c1e] hover:bg-[#e5a800] rounded-xl font-bold text-lg transition-colors shadow-lg flex items-center gap-2 flex-shrink-0 whitespace-nowrap"
          >
            <span className="material-symbols-outlined" aria-hidden="true">description</span>
            تقديم طلب مساعدة
          </Link>
        </div>
      </section>
    </div>
  );
};
