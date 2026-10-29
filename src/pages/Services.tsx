import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SmartImage } from '../components/SmartImage';

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', title: 'كافة الخدمات' },
    { id: 'economic', title: 'تمكين اقتصادي' },
    { id: 'health', title: 'رعاية صحية' },
    { id: 'education', title: 'دعم تعليمي' },
    { id: 'housing', title: 'سكن كريم' },
  ];

  const services = [
    {
      category: 'economic',
      icon: 'storefront',
      image: '/images/small-business-vendor.jpg',
      imageAlt: 'بائعان أمام محل خضروات وفاكهة في الغردقة',
      title: 'تمويل المشروعات متناهية الصغر',
      desc: 'توفير التمويل والمعدات اللازمة لبدء مشروعات تجارية أو حرفية (أكشاك، ماكينات خياطة، ورش نجارة وحدادة) للأسر المنتجة بالفيوم.',
      target: 'الشباب والمرأة المعيلة',
    },
    {
      category: 'economic',
      icon: 'psychology',
      image: '/images/vocational-training.jpg',
      imageAlt: 'دفوف ومشغولات يدوية في قرية بأسوان',
      title: 'التدريب المهني والحرفي',
      desc: 'دورات تدريبية متقدمة في الحرف اليدوية، التصنيع الغذائي، وصيانة الأجهزة لتمكين الشباب من دخول سوق العمل.',
      target: 'خريجو المؤهلات المتوسطة والباحثون عن عمل',
    },
    {
      category: 'health',
      icon: 'medical_services',
      image: '/images/medical-checkup.jpg',
      imageAlt: 'طبيب عربي يرتدي المعطف الأبيض داخل منشأة طبية',
      title: 'القوافل الطبية والعلاج المجاني',
      desc: 'قوافل طبية تجوب قرى مراكز الفيوم (سنورس، إطسا، طامية، إبشواي) للكشف وصرف العلاج المجاني وإجراء الفحوصات والتحاليل.',
      target: 'أهالي القرى الأكثر احتياجاً',
    },
    {
      category: 'health',
      icon: 'ecg',
      image: '/images/medical-equipment.jpg',
      imageAlt: 'سماعة طبية بيد شخص يرتدي معطفاً أبيض دون ظهور الوجه',
      title: 'كفالة العمليات الجراحية العاجلة',
      desc: 'التكفل بكامل تكاليف العمليات الجراحية الدقيقة وقوائم الانتظار بالتنسيق مع المستشفيات والمراكز التخصصية.',
      target: 'الحالات الحرجة وغير القادرين',
    },
    {
      category: 'education',
      icon: 'school',
      image: '/images/education-classroom.jpg',
      imageAlt: 'مقاعد خشبية داخل فصل دراسي في القاهرة',
      title: 'كفالة طالب العلم وسداد المصروفات',
      desc: 'سداد المصروفات المدرسية والجامعية للطلاب المتفوقين دراسياً من الأسر المتعثرة مادياً لضمان استمرار تعليمهم.',
      target: 'الطلاب الأيتام وغير القادرين',
    },
    {
      category: 'education',
      icon: 'menu_book',
      image: '/images/literacy-books.jpg',
      imageAlt: 'رفوف الكتب داخل مكتبة الإسكندرية',
      title: 'مبادرة محو الأمية وتعليم الكبار',
      desc: 'فصول مسائية لتعليم القراءة والكتابة والحساب بشهادات معتمدة بالتعاون مع الهيئة العامة لتعليم الكبار بالفيوم.',
      target: 'كبار السن والراغبون في التعلم',
    },
    {
      category: 'housing',
      icon: 'roofing',
      image: '/images/housing-construction.jpg',
      imageAlt: 'منزل ريفي وسط الحقول والنخيل في مصر',
      title: 'تسقيف المنازل وترميم الجدران',
      desc: 'بناء أسقف خشبية وخرسانية متينة وترميم الحوائط لمنازل الأسر المعرضة لمخاطر الأمطار والسيول بقرى الفيوم.',
      target: 'المنازل المتهالكة وغير الآمنة',
    },
    {
      category: 'housing',
      icon: 'water_drop',
      image: '/images/clean-water.jpg',
      imageAlt: 'مياه جارية في الفيوم',
      title: 'توصيل مياه الشرب النظيفة',
      desc: 'مد شبكات وعدادات مياه الشرب النقية للمنازل المحرومة لضمان بيئة صحية وكريمة للأطفال والأسر.',
      target: 'الأسر غير القادرة على رسوم التوصيل',
    },
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-sm font-bold bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-white/20">
            دليل الخدمات الشامل
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold font-headline mb-4">
            خدماتنا التنموية بمحافظة الفيوم
          </h1>
          <p className="text-primary-container text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            تعرف على كافة مجالات الدعم المباشر والتمكين المجتمعي التي تقدمها جمعية صناع المستقبل للأسر المستحقة.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all flex flex-col overflow-hidden"
              >
                <SmartImage
                  alt={srv.imageAlt}
                  className="h-44 w-full object-cover"
                  src={srv.image}
                  width={1200}
                  height={800}
                  fallbackIcon={srv.icon}
                />
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary-container text-primary flex items-center justify-center -mt-14 sm:-mt-16 mb-6 ring-4 ring-white">
                    <span className="material-symbols-outlined text-3xl">{srv.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-3 text-on-surface">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between gap-3">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-on-surface-variant font-bold">الفئة المستهدفة</span>
                    <span className="text-xs font-bold text-secondary">{srv.target}</span>
                  </div>
                  <Link
                    to="/request-aid"
                    className="px-4 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-xl text-xs font-bold transition-colors shrink-0 whitespace-nowrap"
                  >
                    تقديم طلب
                  </Link>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Action CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold font-headline mb-4">
            هل تنطبق عليك أو على أسرة تعرفها شروط الاستحقاق؟
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            فريق البحث الاجتماعي بفرع الفيوم جاهز لاستقبال الطلبات وإجراء الزيارات الميدانية للتحقق ودراسة الحالة بدقة وسرية تامة.
          </p>
          <Link
            to="/request-aid"
            className="px-10 py-4 bg-[#fcb900] text-[#1b1c1e] hover:bg-[#e5a800] rounded-2xl font-bold text-lg shadow-xl inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined">edit_document</span>
            ابدأ تسجيل طلب مساعدة الآن
          </Link>
        </div>
      </section>
    </div>
  );
};
