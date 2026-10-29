import React from 'react';
import { Link } from 'react-router-dom';
import { SmartImage } from '../components/SmartImage';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header Hero */}
      <section className="bg-primary text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-sm font-bold bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-white/20">
            تعرف علينا
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-4">
            من نحن
          </h1>
          <p className="text-primary-container text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            في محافظة الفيوم، نعمل جاهدين للوصول إلى الأسر الأكثر احتياجاً في كافة القرى والمراكز، وتقديم الدعم المباشر ومشاريع التمكين الاقتصادي، معتمدين على كوادرنا الشابة من المتطوعين المخلصين.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold font-headline text-on-surface mb-4">
                نسعى لبناء إنسان طموح ومجتمع متكافل بالفيوم
              </h2>
              <div className="w-16 h-1.5 bg-[#fcb900] rounded-full mb-6" />
              <p className="text-on-surface-variant leading-relaxed text-lg">
                انطلقت جمعية صناع المستقبل للتنمية بالفيوم بهدف تأسيس نموذج تنموي رائد يعتمد على سواعد الشباب وطاقاتهم، لتحقيق نهضة مجتمعية شاملة تنقل الأسر من دائرة الاحتياج إلى رحاب الاكتفاء والإنتاجية.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">visibility</span>
                </div>
                <h3 className="font-bold font-headline text-xl mb-2 text-primary">رؤيتنا</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  تنمية مجتمعية شاملة خيرها للإنسانية، يقدمها شباب مبشرون بالأمل، فالمصريون صناع المستقبل. شباب - أمل - نماء.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
                <div className="w-12 h-12 bg-[#fcb900]/15 text-[#a37600] rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">flag</span>
                </div>
                <h3 className="font-bold font-headline text-xl mb-2 text-[#a37600]">رسالتنا</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  نكتشف ونطوّر إمكانات قادة مجتمعيين متميزين من خلال دعم ودمج وتأهيل في مجالات التنمية، بالتعاون مع شراكات فاعلة في ريف وحضر الفيوم.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-primary/10 rounded-full absolute -top-8 -right-4 xl:-right-8 w-64 h-64 -z-10 blur-xl" />
            <div className="bg-gradient-to-tr from-primary/10 to-surface-container rounded-3xl overflow-hidden aspect-square sm:aspect-[4/3] border-8 border-white shadow-2xl relative flex items-center justify-center">
              <SmartImage
                alt="فلاح وسط الحقول والنخيل في الفيوم"
                className="absolute inset-0 h-full w-full object-cover"
                src="/images/egypt-countryside.jpg"
                width={1200}
                height={800}
                fallbackIcon="diversity_3"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-3 sm:p-5 rounded-2xl shadow-md text-center border border-outline-variant/20">
                <p className="font-bold text-primary font-headline text-base sm:text-xl">
                  سنوات مستمرة من العطاء والتطوع الميداني
                </p>
                <p className="text-xs text-on-surface-variant mt-1">تغطية لكافة مراكز الفيوم: سنورس، إطسا، طامية، إبشواي، يوسف الصديق</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold font-headline text-on-surface mb-4">
              القيم التي تحركنا
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              نستمد قوتنا من مجموعة من المبادئ الراسخة التي تحكم كافة أنشطتنا التنموية وتعاملنا مع المستفيدين والشركاء.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white border border-outline-variant/20 rounded-3xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary">التطوع والعطاء</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                نؤمن بأن كل جهد يقدمه الشباب قادر على تغيير حياة الكثيرين، وأن التطوع هو المحرك الأساسي لنهضة الأمم.
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-outline-variant/20 rounded-3xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-green-700">الشفافية والأمانة</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                نلتزم بالشفافية المطلقة في توجيه أموال المتبرعين ووصول المساعدات لمستحقيها بناءً على بحوث ميدانية دقيقة.
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-outline-variant/20 rounded-3xl shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">trending_up</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-warning">التنمية المستدامة</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                لا نكتفي بتقديم المساعدات العاجلة، بل نسعى لتمكين الأسر اقتصادياً عبر مشاريع صغيرة تضمن لهم دخلاً ثابتاً ومستقلاً.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Legal Registration Section */}
      <section className="py-20 bg-white" id="registration">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold font-headline text-on-surface mb-4">
              البيانات التسجيلية الرسمية
            </h2>
            <div className="w-16 h-1.5 bg-[#fcb900] rounded-full mx-auto mb-4" />
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              جمعية مرخصة ومسجلة رسمياً لدى وزارة التضامن الاجتماعي - جمهورية مصر العربية
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl overflow-hidden shadow-lg">
              <div className="bg-primary px-8 py-5 flex items-center gap-3">
                <span className="material-symbols-outlined text-white text-2xl">verified</span>
                <h3 className="font-bold text-white text-xl font-headline">
                  بيانات التسجيل والترخيص القانوني
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-outline-variant/20">
                <div className="p-8 space-y-6">
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1 font-bold">الاسم الرسمي المشهر</p>
                    <p className="font-bold text-on-surface text-lg">جمعية صناع المستقبل للتنمية بمحافظة الفيوم</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1 font-bold">رقم القيد</p>
                    <p className="font-bold text-primary text-xl">قيد الاستكمال</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1 font-bold">سنة القيد</p>
                    <p className="font-bold text-on-surface text-xl">قيد الاستكمال</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1 font-bold">تاريخ الإشهار</p>
                    <p className="font-bold text-on-surface">قيد الاستكمال</p>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1 font-bold">الجهة الإدارية المشرفة</p>
                    <p className="font-bold text-on-surface text-lg">مديرية التضامن الاجتماعي - الفيوم</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1 font-bold">كود النشاط الضريبي</p>
                    <p className="font-bold text-on-surface">قيد الاستكمال</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1 font-bold">الرقم الضريبي</p>
                    <p className="font-bold text-on-surface">قيد الاستكمال</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1 font-bold">الموقع الرسمي والنطاق</p>
                    <p className="font-bold text-primary font-mono text-lg" dir="ltr">thefuture-makers.com</p>
                  </div>
                </div>
              </div>

              <div className="px-8 py-5 bg-green-50 border-t border-outline-variant/20 flex items-center gap-3">
                <span className="material-symbols-outlined text-green-600">check_circle</span>
                <p className="text-sm text-green-800 font-semibold">
                  مسجلة ومرخصة رسمياً وفقاً لأحكام القانون رقم 149 لسنة 2019 لتنظيم ممارسة العمل الأهلي ولائحته التنفيذية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold font-headline text-on-surface mb-6">
            فريق العمل والمتطوعون (الفيوم)
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
            نفخر بامتلاكنا أكبر قوة تطوعية منظمة ومُدربة للتعامل مع دراسات الحالة وتنظيم القوافل الطبية والتنموية بجميع أنحاء محافظة الفيوم.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/volunteer"
              className="px-8 py-4 bg-primary text-white hover:bg-primary-hover rounded-2xl font-bold transition-all shadow-lg shadow-primary/20"
            >
              انضم لفريقنا التطوعي بالفيوم
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
