// قاموس الترجمات
const translations = {
  ar: {
    // Navbar
    "navbar-brand": "النيل للرخام والجرانيت",
    "nav-home": "الرئيسية",
    "nav-about": "من نحن",
    "nav-products": "المنتجات",
    "nav-products-marble": "رخام مصري",
    "nav-products-granite": "جرانيت مصري",
    "nav-products-imported-marble": "رخام مستورد",
    "nav-products-imported-granite": "جرانيت مستورد",
    "nav-products-quartz": "كوارتز",
    "nav-services": "الخدمات",
    "nav-equipment": "الآلات والمعدات",
    "nav-contact": "تواصل معنا",
    // Hero Section
    "hero-home-title": "النيل للرخام والجرانيت",
    "hero-home-subtitle": "جودة فاخرة وتصاميم عصرية لكل مشروع",
    "hero-contact-btn": "تواصل معنا الآن",
    "hero-products-btn": "استعرض منتجاتنا",
    // Intro Section
    "intro-text": "متخصصون في تقديم أفضل أنواع الرخام والجرانيت منذ أكثر من 20 عامًا.",
    // Features Section
    "feature-home-title": "لماذا تختار النيل للرخام والجرانيت؟",
    "feature-item1": "جودة عالية",
    "feature-desc1": "نقدم أجود أنواع الرخام والجرانيت بمعايير عالمية.",
    "feature-item2": "خبرة طويلة",
    "feature-desc2": "أكثر من 20 عامًا في مجال توريد وتركيب الرخام والجرانيت.",
    "feature-item3": "تنوع المنتجات",
    "feature-desc3": "تشكيلة واسعة من الرخام والجرانيت المصري والمستورد.",
    // Featured Products Section
    "featured-products-title": "منتجاتنا المميزة",
    "carousel-egyptian-marble-title": "رخام مصري",
    "carousel-egyptian-marble-desc": "جودة فاخرة بألوان طبيعية",
    "carousel-egyptian-marble-btn": "اكتشف المزيد",
    "carousel-egyptian-granite-title": "جرانيت مصري",
    "carousel-egyptian-granite-desc": "متانة وأناقة في آن واحد",
    "carousel-egyptian-granite-btn": "اكتشف المزيد",
    "carousel-imported-marble-title": "رخام مستورد",
    "carousel-imported-marble-desc": "تشكيلة عالمية بتصاميم عصرية",
    "carousel-imported-marble-btn": "اكتشف المزيد",
    "carousel-imported-granite-title": "جرانيت مستورد",
    "carousel-imported-granite-desc": "أناقة عالمية بألوان تناسب كل الأذواق",
    "carousel-imported-granite-btn": "اكتشف المزيد",
    "carousel-imported-quartz-title": "كوارتز",
    "carousel-imported-quartz-desc": "لعشاق الجمال والأناقة والرقي",
    "carousel-imported-quartz-btn": "اكتشف المزيد",
    // Product Cards 
    "product-card-galala-title": "رخام جلالة",
    "product-card-galala-desc": "رخام مصري فاخر بألوان كريمي، مثالي للأرضيات والجدران.",
    "product-card-galala-btn": "تفاصيل أكثر",
    "product-card-aswan-title": "جرانيت أسوان",
    "product-card-aswan-desc": "جرانيت أحمر متين، مثالي للمطابخ والواجهات الخارجية.",
    "product-card-aswan-btn": "تفاصيل أكثر",
    "product-card-imported-marble-title": "رخام مستورد",
    "product-card-imported-marble-desc": "تشكيلة عالمية بتصاميم عصرية وألوان متنوعة تناسب جميع الأذواق.",
    "product-card-imported-marble-btn": "تفاصيل أكثر",
    // Equipment & Services Section
    "equipment-services-heading": "استيراد أحدث معدات الرخام والجرانيت",
    "equipment-services-des": "نستورد من الصين مباشرة أفضل الآلات مثل منشار هين (24 أسطوانة، عرض بريدج 9 متر)، منشار BM الإيطالي، جلايات تلميع، وفرايز أوتوماتيك بنظام تحكم 'هو هو' الأحدث.",
    "equipment-services-item1": "نوفر قطع غيار أصلية وفنيين للصيانة",
    "equipment-services-item2": "ضمان شامل على جميع المعدات",
    "equipment-services-item3": "تدريب كامل على تشغيل المعدات",
    "equipment-services-btn": "اكتشف المزيد عن معداتنا",
    // CTA Section
    "cta-title": "جاهز لتحويل مشروعك إلى تحفة فنية؟",
    "cta-desc": "تواصل معانا النهاردة واطلب استشارتك المجانية!",
    "cta-btn-email": "ارسل رسالة",
    "cta-btn-call": "اتصل بنا",
    // Footer
    "footer-about": "شركة رائدة في مجال توريد وتركيب الرخام والجرانيت في مصر والوطن العربي منذ عام 1995",
    "footer-quick-links": "روابط سريعة",
    "nav-home-footer": "الرئيسية",
    "nav-about-footer": "من نحن",
    "nav-services-footer": "الخدمات",
    "nav-equipment-footer": "الآلات والمعدات",
    "nav-contact-footer": "تواصل معنا",
    "footer-contact-info": "معلومات التواصل",
    "footer-address": "قطعة أرض رقم ٣٩، بناحية عرب أبو ساعد، الصف، حلوان، القاهرة",
    "footer-phone": "00201000392433",
    "footer-email": "info@nile-marble.com",
    "footer-hours": "الأحد - الخميس: 9 صباحًا - 5 مساءً",
    "footer-copyright": "© 2025 النيل الدولية للرخام والجرانيت - جميع الحقوق محفوظة",
// Breadcrumb
"breadcrumb-home": "الرئيسية",
"breadcrumb-about": "من نحن",
// Hero Section
"about-title": "مجموعة شركات النيل",
"about-desc": "رائدون في استيراد معدات الرخام والجرانيت، التصنيع، والتكنولوجيا الصناعية مع شراكات دولية قوية",
"about-nile-international": "شركة النيل الدولية للتوكيلات التجارية والتوريدات العمومية",
"about-nile-international-desc": "نحن متخصصون في استيراد معدات تصنيع الرخام والجرانيت مباشرة من الصين، مع ضمان أعلى مستويات الجودة وأفضل الأسعار. نقدم حلولاً متكاملة تشمل توريد جميع أنواع المعدات، توفير قطع الغيار الأصلية، وخدمات الصيانة والتجديد من خلال فريق من الفنيين المدربين. بصفتنا الوكيل الحصري والموزع المعتمد لشركات عالمية رائدة مثل Rizhao Haien Machinery، Shanghai BM AQ، Hesheng Machinery، وJulun Machinery، نحن نعزز مكانتنا كشريك موثوق في السوق المحلي والدولي.",
"about-nile-marble": "شركة النيل للرخام والجرانيت",
"about-nile-marble-desc": "يقع مصنعنا في المنطقة الصناعية بعرب أبو ساعد بحلوان، وهو متخصص في تقطيع وتصنيع الرخام والجرانيت باستخدام أحدث التقنيات. نهدف إلى تلبية احتياجات السوق المحلي والدولي من خلال تقديم منتجات عالية الجودة تتماشى مع المعايير العالمية، مع التركيز على الدقة والكفاءة في جميع مراحل الإنتاج.",
"about-shanghai": "شركة Shanghai Shanzhou Electronic Technology",
"about-shanghai-desc": "في إطار سعينا لتطوير صناعة الرخام والجرانيت، استحوذت مجموعة النيل على 49% من أسهم شركة Shanghai Shanzhou Electronic Technology Co., Ltd الصينية. هذه الشركة متخصصة في التكنولوجيا الصناعية، بما في ذلك تطوير المعدات الإلكترونية، إنترنت الأشياء، الاستشارات الفنية، نقل التكنولوجيا، والبحث والتطوير في مجالات متعددة مثل مبيعات المكونات الإلكترونية، معدات الاتصالات، وآلات البناء. هذا التعاون يعزز قدرتنا على تقديم حلول تكنولوجية مبتكرة تدعم الصناعة على مستوى عالمي.",
// Mission, Vision, Values
"vision-title": "رؤيتنا",
"vision-text": "أن نكون الرواد عالميًا في توفير حلول متكاملة لصناعة الرخام والجرانيت، من خلال تقديم معدات متطورة، تكنولوجيا مبتكرة، وخدمات استثنائية تلبي احتياجات عملائنا.",
"values-title": "قيمنا",
"value1": "الجودة: التزامنا بتقديم منتجات وخدمات بأعلى المعايير.",
"value2": "الابتكار: السعي المستمر لتطوير حلول تكنولوجية جديدة.",
"value3": "خدمة العملاء: وضع احتياجات عملائنا في صميم عملياتنا.",
// Achievements/Stats
"stats-title": "إنجازاتنا",
"stat-years": "20+",
"stat-years-desc": "سنة خبرة",
"stat-projects": "1000+",
"stat-projects-desc": "مشروع مكتمل",
"stat-countries": "50+",
"stat-countries-desc": "دولة تصدير",
"stat-clients": "200+",
"stat-clients-desc": "عميل دائم",
// Footer
"footer-quick-links": "روابط سريعة",
"nav-home-footer": "الرئيسية",
"nav-products-footer": "المنتجات",
"nav-equipment-footer": "الآلات والمعدات",
"nav-about-footer": "من نحن",
"nav-contact-footer": "اتصل بنا",
"footer-products": "المنتجات",
"nav-products-marble-footer": "رخام",
"nav-products-granite-footer": "جرانيت",
"footer-cutting-machines": "آلات القطع",
"footer-polishing-machines": "آلات التلميع",
"footer-contact-info": "معلومات التواصل",
"footer-address": "قطعة أرض رقم ٣٩، بناحية عرب أبو ساعد، الصف، حلوان، القاهرة",
"footer-phone": "00201000392433",
"footer-email": "info@nile-marble.com",
"footer-copyright": "© 2025 النيل الدولية للرخام والجرانيت - جميع الحقوق محفوظة",
    
    // صفحة تواصل معنا
    "breadcrumb-home": "الرئيسية",
        "breadcrumb-contact": "تواصل معنا",
        // Contact Section
        "contact-title": "تواصل معنا",
        "contact-subtitle": "يسعدنا تلقي استفساراتكم وأسئلتكم عبر النموذج التالي:",
        "contact-name-label": "الاسم بالكامل",
        "contact-name-error": "الرجاء إدخال الاسم بالكامل",
        "contact-email-label": "البريد الإلكتروني",
        "contact-email-error": "الرجاء إدخال بريد إلكتروني صحيح",
        "contact-phone-label": "رقم الهاتف",
        "contact-phone-error": "الرجاء إدخال رقم هاتف صحيح",
        "contact-subject-label": "موضوع الرسالة",
        "contact-subject-default": "اختر موضوع الرسالة",
        "contact-subject-inquiry": "استفسار عام",
        "contact-subject-products": "استفسار عن المنتجات",
        "contact-subject-equipment": "استفسار عن المعدات",
        "contact-subject-services": "استفسار عن الخدمات",
        "contact-subject-other": "موضوع آخر",
        "contact-subject-error": "الرجاء اختيار موضوع الرسالة",
        "contact-message-label": "الرسالة",
        "contact-message-error": "الرجاء كتابة رسالتك",
        "contact-consent-label": "أوافق على سياسة الخصوصية وشروط الاستخدام",
        "contact-consent-error": "يجب الموافقة على الشروط لإرسال الرسالة",
        "submit-text": "إرسال الرسالة",
        "success-message": "تم إرسال رسالتك بنجاح، سنتواصل معك قريباً!",
        "error-message": "حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى لاحقاً.",
        "contact-info-title": "معلومات التواصل",
        "contact-address-title": "المقر الرئيسي",
        "contact-address": "قطعة أرض رقم ٣٩، بناحية عرب أبو ساعد، الصف، حلوان، القاهرة، مصر",
        "contact-phone-title": "الهواتف",
        "contact-phone-1": "00201000392433",
        "contact-phone-2": "00201224220121",
        "call-now-btn": "اتصل الآن",
        "contact-whatsapp-title": "واتساب",
        "contact-whatsapp-number": "00201000392433",
        "contact-wechat-title": "WeChat",
        "contact-wechat-number": "00201000392333",
        "contact-email-title": "البريد الإلكتروني",
        "contact-email-1": "nile_international_trading@yahoo.com",
        "contact-email-2": "mahmoudmokhtar1988@gmail.com",
        "contact-hours-title": "ساعات العمل",
        "contact-hours": "من الأحد إلى الخميس: 8 صباحاً - 5 مساءً\nالجمعة والسبت: إجازة",
    
    // صفحة الخدمات
   "breadcrumb-home": "الرئيسية",
    "breadcrumb-services": "خدماتنا",
    "services-title": "خدماتنا",
    "service-supply-title": "توريد الرخام والجرانيت",
    "service-supply-desc": "نقدم مجموعة واسعة من أجود أنواع الرخام والجرانيت المحلي والمستورد، حيث نختار المواد بعناية لتلبية احتياجات المشاريع المختلفة، سواء كانت سكنية أو تجارية. نضمن جودة عالية وأسعار تنافسية من خلال شبكة موردين موثوقين، مع توفير خيارات متنوعة من الألوان والتصاميم لتناسب جميع الأذواق. كما نقدم خدمات استشارية لمساعدة العملاء في اختيار المواد المناسبة لمشاريعهم.",
    "service-manufacture-title": "تصنيع وتقطيع",
    "service-manufacture-desc": "في مصنعنا المتطور بالمنطقة الصناعية بحلوان، نستخدم أحدث التقنيات والآلات لتصنيع وتقطيع الرخام والجرانيت بدقة عالية. نقوم بإنتاج الألواح، الترابيع، والقطع المخصصة حسب متطلبات العملاء، مع التركيز على تحقيق أعلى معايير الجودة. فريقنا من المهندسين والفنيين يضمن تنفيذ التصاميم بدقة لتلبية احتياجات المشاريع المعمارية والديكورية المختلفة.",
    "service-installation-title": "تركيب",
    "service-installation-desc": "نوفر خدمات تركيب احترافية للأرضيات، الحوائط، والسلالم باستخدام فريق فني مدرب وذو خبرة. نضمن الدقة في التنفيذ والالتزام بالمواعيد، مع التركيز على تحقيق التشطيب المثالي الذي يعكس جمال الرخام والجرانيت. نقدم حلولاً مخصصة لضمان تثبيت المواد بأمان واستدامة، مع تقديم نصائح للعناية بالأسطح بعد التركيب للحفاظ على مظهرها الأنيق.",
    "service-equipment-title": "استيراد الآلات والمعدات",
    "service-equipment-desc": "نقدم خدمات استيراد معدات وآلات تصنيع الرخام والجرانيت من أفضل المصانع في الصين، مع ضمان جودة المعدات وملاءمتها لاحتياجات السوق المحلي. بالإضافة إلى التوريد، نوفر خدمات الصيانة الدورية وتوفير قطع الغيار الأصلية لضمان استمرارية عمل الآلات بكفاءة عالية، مما يساعد عملائنا على تحسين إنتاجيتهم وتقليل التكاليف على المدى الطويل.",
    "service-maintenance-title": "خدمات ما بعد البيع",
    "service-maintenance-desc": "نلتزم بتقديم دعم فني شامل بعد البيع، يشمل صيانة الآلات والمعدات وتوفير قطع الغيار الأصلية بسرعة وكفاءة. فريقنا من الفنيين المتخصصين يقدم خدمات استشارية وإصلاحات ميدانية لضمان استمرار عمل المعدات بأعلى أداء. نهدف إلى بناء علاقات طويلة الأمد مع عملائنا من خلال تقديم حلول موثوقة وسريعة لتلبية احتياجاتهم.",
    "service-export-title": "تصدير",
    "service-export-desc": "نصدر الرخام والجرانيت المصري عالي الجودة إلى الأسواق العالمية، مع الالتزام بأعلى معايير التعبئة والتغليف لضمان وصول المنتجات بأمان. نقدم خدمات لوجستية متكاملة تشمل الشحن والتخليص الجمركي، مع توفير خيارات مخصصة لتلبية متطلبات العملاء الدوليين. خبرتنا في التصدير تمكننا من المنافسة في الأسواق العالمية مع الحفاظ على جودة المنتج وسمعة العلامة التجارية.",
    "services-contact-text": "للمزيد من المعلومات حول خدماتنا، لا تتردد في التواصل معنا.",
    "services-contact-btn": "تواصل معنا الآن",
    ////////egyptian-marble
    // Head
    "page-title": "رخام مصري | أفضل أنواع الرخام المحلي 2025 - النيل للرخام والجرانيت",
    "meta-description": "أفضل أنواع الرخام المصري: جلالة، صني، منيا سيلفيا، تريستا وأكثر. جودة عالمية من النيل للرخام والجرانيت.",

    // Breadcrumb
    "breadcrumb-home": "الرئيسية",
    "breadcrumb-current": "رخام مصري",

    // Hero Section
    "hero-egyptian-marble-title": "رخام مصري فاخر",
    "hero-egyptian-marble-subtitle": "تشكيلة 2025 من محاجر الجلالة وسيناء",
    "egyptian-marble-desc": "رخام مصري عالي الجودة من محاجر الجلالة، سيناء، وأسوان. يتميز بتنوع الألوان، الصلابة، والمظهر الفاخر، مما يجعله مثاليًا للأرضيات، الحوائط، والديكورات.",

    // Marble Types (مثال لـ Extra Galala)
    // Marble Types
    "extra-galala-title": "إكسترا جلالة",
    "extra-galala-desc": "بيج فاتح للأرضيات الفاخرة",
    "extra-galala-btn": "عرض التفاصيل",
    "minya-sylvia-title": "منيا سيلفيا",
    "minya-sylvia-desc": "أصفر أنيق للحوائط",
    "minya-sylvia-btn": "عرض التفاصيل",
    "triesta-title": "تريستا",
    "triesta-desc": "رمادي عصري للديكورات",
    "triesta-btn": "عرض التفاصيل",
    "mil-grey-dark-title": "غامق جراي ميل",
    "mil-grey-dark-desc": "رمادي داكن للمطابخ",
    "mil-grey-dark-btn": "عرض التفاصيل",
    "galala-title": "جلالة",
    "galala-desc": "كريمي فاخر للسلالم",
    "galala-btn": "عرض التفاصيل",
    "samaha-title": "سماحة",
    "samaha-desc": "بيج دافئ للديكورات",
    "samaha-btn": "عرض التفاصيل",
    "sunny-dark-title": "صني داكن",
    "sunny-dark-desc": "ذهبي غامق للأرضيات",
    "sunny-dark-btn": "عرض التفاصيل",
    "maroon-title": "مارون",
    "maroon-desc": "بني محمر للواجهات",
    "maroon-btn": "عرض التفاصيل",
    "mil-brown-title": "ميلي برون",
    "mil-brown-desc": "برونزي فاتح للحوائط",
    "mil-brown-btn": "عرض التفاصيل",
    "serpentine-egyptian-title": "سيرباجينتي مصري",
    "serpentine-egyptian-desc": "أخضر داكن للديكورات",
    "serpentine-egyptian-btn": "عرض التفاصيل",
    "golden-cream-title": "جولدن كريم",
    "golden-cream-desc": "كريمي ذهبي للسلالم",
    "golden-cream-btn": "عرض التفاصيل",
    "khatmia-title": "خاتمية",
    "khatmia-desc": "وردي فاتح للأرضيات",
    "khatmia-btn": "عرض التفاصيل",
    "alba-rosa-title": "ألبا روزا",
    "alba-rosa-desc": "وردي أنيق للحوائط",
    "alba-rosa-btn": "عرض التفاصيل",
    "tumbled-title": "تمبلد",
    "tumbled-desc": "رمادي فاتح للديكورات",
    "tumbled-btn": "عرض التفاصيل",
    "golden-sinai-title": "جولدن سينا",
    "golden-sinai-desc": "ذهبي فاتح للواجهات",
    "golden-sinai-btn": "عرض التفاصيل",
    "sinai-pearl-title": "سينا بيرل",
    "sinai-pearl-desc": "أبيض لؤلؤي للأرضيات",
    "sinai-pearl-btn": "عرض التفاصيل",
    // Modals (مشتركة)
    "modal-material-name": "اسم الخامة:",
    "modal-material-type": "نوع الخامة:",
    "modal-color": "اللون:",
    "modal-origin": "بلد المنشأ:",
    "modal-slab-dimensions": "أبعاد الألواح:",
    "modal-slab-thickness": "سماكة الألواح:",
    "modal-tile-thickness": "سماكة البلاطات:",
    "modal-finishes": "التشطيبات:",
    "modal-uses": "الاستخدامات:",
    "modal-order-now": "اطلب الآن",
    "modal-close-btn": "إغلاق",
    // Modal: Extra Galala
    "extraGalalaModalLabel": "إكسترا جلالة",
    "extra-galala-material-name": "إكسترا جلالة",
    "extra-galala-material-type": "رخام",
    "extra-galala-color": "بيج فاتح",
    "extra-galala-origin": "محجر رخام مصري",
    "extra-galala-slab-dimensions": "265-295 × 165-195 سم",
    "extra-galala-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "extra-galala-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "extra-galala-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "extra-galala-uses": "جال وش، ترابيع مفرز، طويلة",
    // Modal: Minya Sylvia
    "minyaSylviaModalLabel": "منيا سيلفيا",
    "minya-sylvia-material-name": "منيا سيلفيا",
    "minya-sylvia-material-type": "رخام",
    "minya-sylvia-color": "أصفر",
    "minya-sylvia-origin": "محجر رخام مصري",
    "minya-sylvia-slab-dimensions": "265-295 × 165-195 سم",
    "minya-sylvia-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "minya-sylvia-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "minya-sylvia-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "minya-sylvia-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Triesta
    "triestaModalLabel": "تريستا",
    "triesta-material-name": "تريستا",
    "triesta-material-type": "رخام",
    "triesta-color": "رمادي",
    "triesta-origin": "محجر رخام مصري",
    "triesta-slab-dimensions": "265-295 × 165-195 سم",
    "triesta-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "triesta-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "triesta-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "triesta-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Mil Grey Dark
    "milGreyDarkModalLabel": "غامق جراي ميل",
    "mil-grey-dark-material-name": "غامق جراي ميل",
    "mil-grey-dark-material-type": "رخام",
    "mil-grey-dark-color": "رمادي داكن",
    "mil-grey-dark-origin": "محجر رخام مصري",
    "mil-grey-dark-slab-dimensions": "265-295 × 165-195 سم",
    "mil-grey-dark-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "mil-grey-dark-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "mil-grey-dark-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "mil-grey-dark-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Galala
    "galalaModalLabel": "جلالة",
    "galala-material-name": "جلالة",
    "galala-material-type": "رخام",
    "galala-color": "كريمي",
    "galala-origin": "محجر رخام مصري",
    "galala-slab-dimensions": "265-295 × 165-195 سم",
    "galala-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "galala-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "galala-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "galala-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Samaha
    "samahaModalLabel": "سماحة",
    "samaha-material-name": "سماحة",
    "samaha-material-type": "رخام",
    "samaha-color": "بيج دافئ",
    "samaha-origin": "محجر رخام مصري",
    "samaha-slab-dimensions": "265-295 × 165-195 سم",
    "samaha-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "samaha-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "samaha-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "samaha-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Sunny Dark
    "sunnyDarkModalLabel": "صني داكن",
    "sunny-dark-material-name": "صني داكن",
    "sunny-dark-material-type": "رخام",
    "sunny-dark-color": "ذهبي غامق",
    "sunny-dark-origin": "محجر رخام مصري",
    "sunny-dark-slab-dimensions": "265-295 × 165-195 سم",
    "sunny-dark-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "sunny-dark-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "sunny-dark-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "sunny-dark-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Maroon
    "maroonModalLabel": "مارون",
    "maroon-material-name": "مارون",
    "maroon-material-type": "رخام",
    "maroon-color": "بني محمر",
    "maroon-origin": "محجر رخام مصري",
    "maroon-slab-dimensions": "265-295 × 165-195 سم",
    "maroon-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "maroon-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "maroon-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "maroon-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Mil Brown
    "milBrownModalLabel": "ميلي برون",
    "mil-brown-material-name": "ميلي برون",
    "mil-brown-material-type": "رخام",
    "mil-brown-color": "برونزي فاتح",
    "mil-brown-origin": "محجر رخام مصري",
    "mil-brown-slab-dimensions": "265-295 × 165-195 سم",
    "mil-brown-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "mil-brown-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "mil-brown-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "mil-brown-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Serpentine Egyptian
    "serpentineEgyptianModalLabel": "سيرباجينتي مصري",
    "serpentine-egyptian-material-name": "سيرباجينتي مصري",
    "serpentine-egyptian-material-type": "رخام",
    "serpentine-egyptian-color": "أخضر داكن",
    "serpentine-egyptian-origin": "محجر رخام مصري",
    "serpentine-egyptian-slab-dimensions": "265-295 × 165-195 سم",
    "serpentine-egyptian-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "serpentine-egyptian-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "serpentine-egyptian-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "serpentine-egyptian-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Golden Cream
    "goldenCreamModalLabel": "جولدن كريم",
    "golden-cream-material-name": "جولدن كريم",
    "golden-cream-material-type": "رخام",
    "golden-cream-color": "كريمي ذهبي",
    "golden-cream-origin": "محجر رخام مصري",
    "golden-cream-slab-dimensions": "265-295 × 165-195 سم",
    "golden-cream-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "golden-cream-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "golden-cream-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "golden-cream-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Khatmia
    "khatmiaModalLabel": "خاتمية",
    "khatmia-material-name": "خاتمية",
    "khatmia-material-type": "رخام",
    "khatmia-color": "وردي فاتح",
    "khatmia-origin": "محجر رخام مصري",
    "khatmia-slab-dimensions": "265-295 × 165-195 سم",
    "khatmia-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "khatmia-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "khatmia-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "khatmia-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Alba Rosa
    "albaRosaModalLabel": "ألبا روزا",
    "alba-rosa-material-name": "ألبا روزا",
    "alba-rosa-material-type": "رخام",
    "alba-rosa-color": "وردي",
    "alba-rosa-origin": "محجر رخام مصري",
    "alba-rosa-slab-dimensions": "265-295 × 165-195 سم",
    "alba-rosa-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "alba-rosa-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "alba-rosa-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "alba-rosa-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Tumbled
    "tumbledModalLabel": "تمبلد",
    "tumbled-material-name": "تمبلد",
    "tumbled-material-type": "رخام",
    "tumbled-color": "رمادي فاتح",
    "tumbled-origin": "محجر رخام مصري",
    "tumbled-slab-dimensions": "265-295 × 165-195 سم",
    "tumbled-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "tumbled-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "tumbled-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "tumbled-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Golden Sinai
    "goldenSinaiModalLabel": "جولدن سينا",
    "golden-sinai-material-name": "جولدن سينا",
    "golden-sinai-material-type": "رخام",
    "golden-sinai-color": "ذهبي فاتح",
    "golden-sinai-origin": "محجر رخام مصري",
    "golden-sinai-slab-dimensions": "265-295 × 165-195 سم",
    "golden-sinai-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "golden-sinai-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "golden-sinai-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "golden-sinai-uses": "جال وش، ترابيع مفرز، طويلة",

    // Modal: Sinai Pearl
    "sinaiPearlModalLabel": "سينا بيرل",
    "sinai-pearl-material-name": "سينا بيرل",
    "sinai-pearl-material-type": "رخام",
    "sinai-pearl-color": "أبيض لؤلؤي",
    "sinai-pearl-origin": "محجر رخام مصري",
    "sinai-pearl-slab-dimensions": "265-295 × 165-195 سم",
    "sinai-pearl-slab-thickness": "15-50 ملم (حتى 200 ملم حسب الطلب)",
    "sinai-pearl-tile-thickness": "10-40 ملم (حتى 200 ملم حسب الطلب)",
    "sinai-pearl-finishes": "لمع، هوند، برشد، أسيد، رمالة، غشيم، مدقوق",
    "sinai-pearl-uses": "جال وش، ترابيع مفرز، طويلة",
    //////////////////////////


    // Features Section
   "features-eg-marble-title": "لماذا تختار الرخام المصري؟",
    "feature-quality-title": "جودة عالمية",
    "feature-quality-desc": "صلابة وجودة عالية منافسة عالميًا",
    "feature-colors-title": "تنوع الألوان",
    "feature-colors-desc": "ألوان وأنواع تناسب كل الأذواق",
    "feature-price-title": "أسعار تنافسية",
    "feature-price-desc": "جودة عالية بأسعار اقتصادية",
    "feature-durability-title": "متانة طويلة",
    "feature-durability-desc": "عمر افتراضي طويل ومظهر فاخر",
    "feature-spaces-title": "مناسب لجميع المساحات",
    "feature-spaces-desc": "للأرضيات، الجدران، والمطابخ",
    "feature-eco-title": "صديق للبيئة",
    "feature-eco-desc": "مواد طبيعية 100% بدون ضرر",
    // Tips and FAQ
   "tips-faq-title": "نصائح وأسئلة شائعة عن الرخام المصري",
    "tips-title": "نصائح لاختيار الرخام المصري",
    "tip-1": "اختر رخام جلالة للون فاتح وسعر مناسب.",
    "tip-2": "قس المساحة بدقة لتجنب الهدر.",
    "tip-3": "استخدم طبقة حماية لمقاومة البقع.",
    "faq-title": "أسئلة شائعة",
    "faq-question-1": "ما الفرق بين الرخام المصري والمستورد؟",
    "faq-answer-1-intro": "الرخام المصري يتميز ب:",
    "faq-answer-1-item1": "أسعار أكثر تنافسية.",
    "faq-answer-1-item2": "جودة عالية تضاهي المستورد.",
    "faq-answer-1-item3": "توفير وقت الشحن.",
    "faq-answer-1-item4": "دعم المنتج المحلي.",
    "faq-question-2": "كيف أحافظ على الرخام المصري؟",
    "faq-answer-2-intro": "لحماية الرخام المصري:",
    "faq-answer-2-item1": "استخدم مواد تنظيف لطيفة بدون أحماض",
    "faq-answer-2-item2": "ضع طبقة حماية (سيلر) كل 6-12 شهر",
    "faq-answer-2-item3": "تجنب السوائل الملونة لفترات طويلة",
    "faq-answer-2-item4": "استخدم ألواح تحت الأواني الساخنة",
    "faq-question-3": "ما أفضل أنواع الرخام المصري للمطابخ؟",
    "faq-answer-3-intro": "أفضل الخيارات للمطابخ:",
    "faq-answer-3-item1": "جلالة: مقاوم للبقع وسهل التنظيف",
    "faq-answer-3-item1-strong": "جلالة:",
    "faq-answer-3-item1-desc": "مقاوم للبقع وسهل التنظيف",
    "faq-answer-3-item2": "صني: يخفي آثار الاستخدام اليومي",
    "faq-answer-3-item2-strong": "صني:",
    "faq-answer-3-item2-desc": "يخفي آثار الاستخدام اليومي",
    "faq-answer-3-item3": "تريستا: مظهر عصري وأنيق",
    "faq-answer-3-item3-strong": "تريستا:",
    "faq-answer-3-item3-desc": "مظهر عصري وأنيق",
    "faq-answer-3-contact": "يمكنك <a href='contact.html'>استشارة خبرائنا</a> لاختيار الأنسب لمطبخك.",
    "faq-answer-3-contact-link": "استشارة خبرائنا",
    "faq-question-4": "هل يمكن استخدام الرخام المصري في الحمامات؟",
    "faq-answer-4-intro": "نعم، مع مراعاة:",
    "faq-answer-4-item1": "اختيار أنواع ذات امتصاصية منخفضة مثل الجلالة",
    "faq-answer-4-item2": "تركيب طبقة حماية ضد المياه",
    "faq-answer-4-item3": "تنظيف بانتظام لمنع تراكم الصابون",
    "faq-answer-4-item4": "تهوية جيدة للحمام",
    "faq-cta-btn": "تواصل معنا لأي استفسار",

    // Call to Action
    "cta-title": "جاهزون لمساعدتك في اختيار الرخام المصري المثالي",
    "cta-desc": "اتصل بنا الآن للحصول على استشارة مجانية وعروض خاصة",
    "cta-call-btn": "اتصل الآن",
    "cta-whatsapp-btn": "واتساب",
    "cta-contact-btn": "تواصل معنا",
    "cta-browse-btn": "تصفح التشكيلة",
    "cta-visit-text": "أو قم بزيارة معرضنا في:",
    "cta-address": "قطعة أرض رقم ٣٩، بناحية عرب أبو ساعد، الصف، حلوان، القاهرة",

    // Footer
    "footer-text": "© 2025 النيل للرخام والجرانيت. جميع الحقوق محفوظة.",
    "download-catalog": "تحميل الكتالوج",

    ///////////////////////////////
    /////////////////////////////egyptian-granite
    // Meta Tags
    "page-title": "جرانيت مصري | أجود أنواع الجرانيت الطبيعي بأسعار تنافسية 2025 | النيل للرخام",
    "meta-description": "أفضل تشكيلة جرانيت مصري من أسوان، حلايب، والجلالة. جرانيت للمطابخ، الأرضيات، والواجهات بجودة عالمية وأسعار مناسبة.",
    // Breadcrumb
    "breadcrumb-home": "الرئيسية",
    "breadcrumb-current": "جرانيت مصري",

    // Hero Section
    "egyptian-granite-title": "جرانيت مصري طبيعي بجودة عالمية",
    "egyptian-granite-subtitle": "تشكيلة مميزة من محاجر أسوان وحلايب 2025",
    "egyptian-granite-desc": "جرانيت مصري يتميز بصلابته الفائقة وتصاميمه الطبيعية الفريدة، مستخرج من أفضل محاجر أسوان، حلايب، والجلالة، مثالي للمطابخ، الأرضيات، والواجهات.",

    // Granite Items
    "egyptian-granite-item1": "جرانيت حلايب",
    "egyptian-granite-item1-desc": "أبيض رمادي فاخر للمطابخ والأرضيات",
    "egyptian-granite-item2": "جرانيت نيو حلايب",
    "egyptian-granite-item2-desc": "رمادي فاتح عصري للديكورات الداخلية",
    "egyptian-granite-item3": "جرانيت رمادي الشركة",
    "egyptian-granite-item3-desc": "رمادي داكن متين للأرضيات والمطابخ",
    "egyptian-granite-item4": "جرانيت رمادي",
    "egyptian-granite-item4-desc": "لون موحد أنيق للسلالم والواجهات",
    "egyptian-granite-item5": "جرانيت جندولة",
    "egyptian-granite-item5-desc": "داكن بيج للأرضيات والديكورات الخارجية",
    "egyptian-granite-item6": "جرانيت أحمر أسواني",
    "egyptian-granite-item6-desc": "أحمر غني للواجهات والديكورات الفاخرة",
    "egyptian-granite-item7": "جرانيت أحمر رويال",
    "egyptian-granite-item7-desc": "أحمر داكن ملكي للمطابخ والسلالم",
    "egyptian-granite-item8": "جرانيت روزا هودي",
    "egyptian-granite-item8-desc": "وردي مميز للأرضيات الفاخرة",
    "egyptian-granite-item9": "جرانيت روزا النصر",
    "egyptian-granite-item9-desc": "وردي رمادي للواجهات والمطابخ",
    "egyptian-granite-item10": "جرانيت فيردي أخضر",
    "egyptian-granite-item10-desc": "أخضر داكن طبيعي للأرضيات الخارجية",

    // Features Section
    "features-eg-granite-title": "لماذا تختار الجرانيت المصري؟",
    "feature1-eg-granite-title": "من أفضل المحاجر",
    "feature1-eg-granite-desc": "مستخرج من محاجر أسوان وحلايب المشهورة عالميًا",
    "feature2-eg-granite-title": "مقاومة فائقة",
    "feature2-eg-granite-desc": "صلابة 6-7 على مقياس موس لمقاومة الخدوش",
    "feature3-eg-granite-title": "ألوان طبيعية",
    "feature3-eg-granite-desc": "تصاميم فريدة لا تتكرر مع تباين طبيعي في العروق",

 // FAQ Section
 "faq-eg-granite-title": "أسئلة شائعة عن الجرانيت المصري",
 "faq-eg-granite-question1": "ما هي أفضل أنواع الجرانيت المصري للمطابخ؟",
 "faq-eg-granite-answer1-intro": "أفضل 3 أنواع لأسطح المطابخ:",
 "faq-eg-granite-answer1-item1": "<strong>جرانيت حلايب:</strong> أبيض رمادي بمقاومة عالية للبقع.",
 "faq-eg-granite-answer1-item2": "<strong>جرانيت نيو حلايب:</strong> تصميم عصري بألوان فاتحة.",
 "faq-eg-granite-answer1-item3": "<strong>جرانيت رمادي الشركة:</strong> متانة فائقة وسطح أملس.",
 "faq-eg-granite-answer1-recommend": "نوصي باستخدام طبقة حماية (Sealer) للحفاظ على اللمعان. <a href=\"services.html\">تعرف على خدماتنا</a>.",
 "faq-eg-granite-question2": "ما هي أفضل أنواع الجرانيت المصري للواجهات الخارجية؟",
 "faq-eg-granite-answer2-intro": "أفضل 3 أنواع للواجهات:",
 "faq-eg-granite-answer2-item1": "<strong>جرانيت أحمر أسواني:</strong> لون أحمر مميز ومقاومة عالية للعوامل الجوية.",
 "faq-eg-granite-answer2-item2": "<strong>جرانيت رمادي الشركة:</strong> متانة فائقة وسعر اقتصادي.",
 "faq-eg-granite-answer2-item3": "<strong>جرانيت جندولة:</strong> تصميمات طبيعية جذابة للواجهات.",
 "faq-answer2-tip-title": "نصيحة:",
 "faq-answer2-tip": "ننصح باستخدام <a href=\"services.html\">طبقة حماية</a> سنويًا للحفاظ على المظهر.",
 "faq-eg-granite-question3": "كيف يتميز الجرانيت المصري عن المستورد؟",
 "faq-answer3-table-header1": "وجه المقارنة",
 "faq-answer3-table-header2": "الجرانيت المصري",
 "faq-answer3-table-header3": "الجرانيت المستورد",
 "faq-answer3-table-row1-col1": "السعر",
 "faq-answer3-table-row1-col2": "<i class=\"fas fa-check text-success\"></i> أكثر اقتصادية (أقل بـ 20-30%)",
 "faq-answer3-table-row1-col3": "<i class=\"fas fa-times text-danger\"></i> أعلى سعرًا",
 "faq-answer3-table-row2-col1": "التوفر",
 "faq-answer3-table-row2-col2": "<i class=\"fas fa-check text-success\"></i> متوفر بكميات كبيرة",
 "faq-answer3-table-row2-col3": "<i class=\"fas fa-times text-danger\"></i> قد يتطلب انتظار الشحن",
 "faq-answer3-table-row3-col1": "جودة التصنيع",
 "faq-answer3-table-row3-col2": "متقاربة عند اختيار مورد موثوق",
 "faq-answer3-contact": "للحصول على <strong>استشارة مجانية</strong>، <a href=\"contact.html\">تواصل مع خبرائنا</a>.",
 "faq-question4": "كيف أنظف الجرانيت المصري دون إتلافه؟",
 "faq-answer4-text": "استخدم منظفات متعادلة (pH-neutral) مثل الصابون السائل المخفف بالماء. تجنب المواد الحمضية مثل الخل أو الليمون. امسح السطح بقطعة قماش ناعمة وجففه للحفاظ على اللمعان. <a href=\"blog/granite-care.html\">اقرأ دليل العناية بالجرانيت</a>.",
    // CTA Section
    "cta-title": "اطلب جرانيت مصري بأفضل الأسعار",
    "cta-consultation": "اطلب استشارة مجانية",
    "cta-call": "اتصل بنا",
/////////////////////////////////////
/////////////////////////////////////
// imported-marble.html Translations
"page-title-imported-marble": "رخام مستورد | أفضل أنواع الرخام الإيطالي والتركي بأسعار تنافسية - النيل للرخام",
"meta-description-imported-marble": "أجود أنواع الرخام المستورد من إيطاليا، تركيا، وإسبانيا بأسعار مميزة. تشكيلة واسعة للأرضيات، المطابخ، والحمامات مع توريد وتركيب بمعايير عالمية.",
"breadcrumb-current-imported-marble": "رخام مستورد",
"imported-marble-title": "رخام مستورد بجودة عالمية",
"imported-marble-subtitle": "تشكيلة فاخرة من الرخام الإيطالي، التركي، والإسباني 2025",
"imported-marble-desc": "اكتشف أجود أنواع الرخام المستورد من إيطاليا، تركيا، وإسبانيا، مثالي للأرضيات الفاخرة، المطابخ العصرية، والحمامات بتصاميم أنيقة ومتانة استثنائية.",
// Marble Items
"marble-item1": "أونكس براون",
"marble-item1-desc": "رخام بني فاخر للمطابخ والحمامات",
"marble-item2": "أتلانتك وايت",
"marble-item2-desc": "رخام أبيض نقي للأرضيات الفاخرة",
"marble-item3": "أثينا وايت",
"marble-item3-desc": "رخام كلاسيكي للحمامات والمطابخ",
"marble-item4": "أرابيسكاتو رمادي أوروبيكو",
"marble-item4-desc": "رخام رمادي عصري للأرضيات",
"marble-item5": "أرابيسكاتو شيرافايولي",
"marble-item5-desc": "رخام فاخر للمطابخ والحمامات",
"marble-item6": "أرابيسكاتو كرّارا",
"marble-item6-desc": "رخام إيطالي أنيق للأرضيات",
"marble-item7": "أرديزيا أه سباكّو",
"marble-item7-desc": "رخام داكن للواجهات والأرضيات",
"marble-item8": "آفوريو أونيتو",
"marble-item8-desc": "رخام كريمي للمطابخ الكلاسيكية",
"marble-item9": "أفوريو فيناتو",
"marble-item9-desc": "رخام فاخر للأرضيات والحمامات",
"marble-item10": "أكوا جراي",
"marble-item10-desc": "رخام رمادي عصري للحمامات",
"marble-item11": "إمبرادور دارك",
"marble-item11-desc": "رخام بني داكن للمطابخ الفاخرة",
"marble-item12": "إمبرادور لايت",
"marble-item12-desc": "رخام بني فاتح للأرضيات",
"marble-item13": "إمبرادور",
"marble-item13-desc": "رخام بني أنيق للحمامات",
"marble-item14": "أوريو",
"marble-item14-desc": "رخام أسود وأبيض للأرضيات",
"marble-item15": "أونكس بلو",
"marble-item15-desc": "رخام أزرق فاخر للحمامات",
"marble-item16": "أونكس",
"marble-item16-desc": "رخام شفاف فاخر للإضاءة",
"marble-item17": "باندا وايت",
"marble-item17-desc": "رخام أحادي للمطابخ الحديثة",
"marble-item18": "برلاتو سيليا إيطالي",
"marble-item18-desc": "رخام كريمي للأرضيات الفاخرة",
"marble-item19": "بريشيا أرورا",
"marble-item19-desc": "رخام بني فاخر للحمامات",
"marble-item20": "بريشيا داينو",
"marble-item20-desc": "رخام كلاسيكي للأرضيات",
"marble-item21": "بورتورو أبيض",
"marble-item21-desc": "رخام أبيض فاخر للمطابخ",
"marble-item22": "بورتورو ذهبي",
"marble-item22-desc": "رخام ذهبي أنيق للحمامات",
"marble-item23": "بونى وايت",
"marble-item23-desc": "رخام أبيض نقي للأرضيات",
"marble-item24": "بيانكو سيفك برازيلي",
"marble-item24-desc": "رخام أبيض للمطابخ الحديثة",
"marble-item25": "ترافنتينو والنت إيراني",
"marble-item25-desc": "رخام كلاسيكي للأرضيات",
"marble-item26": "جراي ماربل",
"marble-item26-desc": "رخام رمادي عصري للحمامات",
"marble-item27": "روزا أرابكو",
"marble-item27-desc": "رخام وردي أنيق للأرضيات",
"marble-item28": "روزا برتغالي",
"marble-item28-desc": "رخام وردي كلاسيكي للحمامات",
"marble-item29": "روزا ليفانتي",
"marble-item29-desc": "رخام وردي فاخر للمطابخ",
"marble-item30": "سها وايت",
"marble-item30-desc": "رخام أبيض نقي للأرضيات",
"marble-item31": "كرارا إيطالي",
"marble-item31-desc": "رخام أبيض فاخر للدرج والمطابخ",
"marble-item32": "كرارا تركي",
"marble-item32-desc": "رخام أبيض اقتصادي للأرضيات",
"marble-item33": "مايسك وايت",
"marble-item33-desc": "رخام أبيض لامع للحمامات",
"marble-item34": "نقي وردي",
"marble-item34-desc": "رخام وردي أنيق للمطابخ",
"marble-item35": "هيميليان وايت أونكس",
"marble-item35-desc": "رخام شفاف للإضاءة والديكور",
"marble-item36": "وايت بريز",
"marble-item36-desc": "رخام أبيض عصري للحمامات",
"marble-item37": "باندا وايت 2",
"marble-item37-desc": "رخام أحادي للمطابخ الحديثة",
"marble-item38": "أونكس هندي",
"marble-item38-desc": "رخام شفاف للديكور والإضاءة",
"marble-item39": "إندو إيطالي",
"marble-item39-desc": "رخام فاخر للأرضيات",
// Show More Button
"showMoreBtn": "عرض المزيد",
// Features Section
"features-title-imported-marble": "لماذا تختار الرخام المستورد؟",
"feature1-title-imported-marble": "تصاميم فاخرة",
"feature1-desc-imported-marble": "تنوع ألوان وأنماط مثل كرارا إيطالي وإمبرادور دارك",
"feature2-title-imported-marble": "جودة عالية",
"feature2-desc-imported-marble": "مقاوم للبقع والخدوش مع طبقة حماية (Sealer)",
"feature3-title-imported-marble": "مصادر عالمية",
"feature3-desc-imported-marble": "مستورد من إيطاليا، تركيا، وإسبانيا بجودة مضمونة",
// FAQ Section
"faq-title-imported-marble": "أسئلة شائعة عن الرخام المستورد",
"faq-question1-imported-marble": "كيف أختار رخام مستورد لمطبخي؟",
"faq-answer1-imported-marble": "اختاري نوعًا مثل <strong>كرارا إيطالي</strong> لمظهر أبيض نقي، أو <strong>إمبرادور دارك</strong> للون غامق أنيق بسبب مقاومته للبقع مع طبقة حماية (Sealer). اطلعي على <a href='imported-marble.html'>تشكيلتنا</a> لاختيار المناسب.",
"faq-question2-imported-marble": "ما الفرق بين الرخام المستورد والمحلي؟",
"faq-answer2-imported-marble": "الرخام المستورد يتميز بـ:<ul><li><strong>تنوع الألوان:</strong> مثل <strong>كرارا إيطالي</strong> و<strong>إمبرادور دارك</strong> بأنماط فريدة.</li><li><strong>أقل مسامية:</strong> يجعله أكثر مقاومة للبقع مقارنة بالرخام المحلي.</li><li><strong>تصاميم فاخرة:</strong> مثالية للمشاريع الراقية.</li></ul>الرخام المصري قد يكون <strong>أوفر في السعر</strong> لبعض المشاريع. <a href='contact.html'>اتصلي بنا</a> لمساعدتك في الاختيار.",
"faq-question3-imported-marble": "أين أجد رخام مستورد بأسعار مناسبة في القاهرة؟",
"faq-answer3-imported-marble": "في النيل للرخام والجرانيت، نقدم تشكيلة واسعة من الرخام المستورد بأسعار تنافسية. زورينا في <a href='contact.html'>معرضنا بالقاهرة</a> أو <a href='tel:+201000392433'>اتصلي الآن</a> للحصول على عرض سعر.",
"faq-question4-imported-marble": "هل الرخام المستورد مناسب للأرضيات؟",
"faq-answer4-imported-marble": "نعم، خاصة أنواع مثل <strong>برلاتو سيليا إيطالي</strong> أو <strong>إمبرادور لايت</strong> التي تتميز بمتانة عالية ومقاومة للخدوش. نوصي باستخدام طبقة حماية (Sealer) سنويًا. <a href='services.html'>تعرفي على خدمات التركيب لدينا</a>.",
"faq-question5-imported-marble": "كيف أنظف الرخام المستورد دون إتلافه؟",
"faq-answer5-imported-marble": "استخدمي منظفات متعادلة (pH-neutral) مثل الصابون السائل المخفف بالماء. تجنبي المواد الكاشطة مثل البيكربونات أو الخل. امسحي السطح بقطعة قماش ناعمة وجففيه للحفاظ على اللمعان. <a href='blog/marble-care.html'>اقرأي دليل العناية بالرخام</a>.",
"faq-question6-imported-marble": "كم يبلغ سعر متر الرخام المستورد في مصر 2025؟",
"faq-answer6-imported-marble": "يختلف السعر حسب النوع والبلد الأصلي:<table class='table table-bordered'><tr><th>النوع</th><th>السعر (للمتر)</th></tr><tr><td>كرارا إيطالي</td><td>1,500 - 2,200 جنيه</td></tr><tr><td>إمبرادور دارك (إسباني)</td><td>1,000 - 1,600 جنيه</td></tr></table><p class='text-muted'>الأسعار قد تختلف حسب الكمية والموقع. <a href='tel:+201000392433'>اتصلي الآن</a> لعرض سعر دقيق.</p>",
// CTA Section
"cta-title-imported-marble": "جاهزون لمساعدتك في اختيار الرخام المستورد المثالي",
"cta-consultation-imported-marble": "اطلب استشارة مجانية",
"cta-call-imported-marble": "<i class='fas fa-phone me-2'></i> اتصل بنا",
////////////////////////
/////////////imported-granite
// Breadcrumb
"breadcrumb-home": "الرئيسية",
"breadcrumb-imported-granite": "جرانيت مستورد",

// Hero Section
"imported-granite-title": "جرانيت مستورد بجودة عالمية",
"imported-granite-desc": "استمتع بتشكيلة واسعة من الجرانيت المستورد من الهند، البرازيل، وإيطاليا، مثالي للمطابخ، الأرضيات، والواجهات بتصاميم فريدة ومتانة استثنائية.",

// Granite Items (54 items)
  // Granite Items (كاملة من 1 إلى 54)
  "granite-item1": "أحمر الكنتي",
  "granite-item1-desc": "جرانيت برازيلي بلون أحمر نابض مثالي للمطابخ",
  "granite-item2": "أخضر هندي",
  "granite-item2-desc": "لون أخضر غني لأرضيات وواجهات فاخرة",
  "granite-item3": "أريزونا جرانيت",
  "granite-item3-desc": "تصميم عصري لأسطح المطابخ والحمامات",
  "granite-item4": "أزول شيلو",
  "granite-item4-desc": "جرانيت برازيلي متين للواجهات الخارجية",
  "granite-item5": "اسكربيو براون",
  "granite-item5-desc": "لون بني دافئ للمطابخ التقليدية",
  "granite-item6": "الأحمر الملكي",
  "granite-item6-desc": "جرانيت فاخر لأسطح المطابخ والأرضيات",
  "granite-item7": "الهنا",
  "granite-item7-desc": "تصميم راقي للحمامات والمطابخ",
  "granite-item8": "بلاك أيس",
  "granite-item8-desc": "جرانيت أسود متين للواجهات الخارجية",
  "granite-item9": "بلاك جولد",
  "granite-item9-desc": "جرانيت أسود مع عروق ذهبية للفخامة",
  "granite-item10": "بورتو جولد",
  "granite-item10-desc": "جرانيت بألوان ذهبية للمطابخ",
  "granite-item11": "تاتينك",
  "granite-item11-desc": "جرانيت بلون فريد للأرضيات الفاخرة",
  "granite-item12": "تروبيكال براون",
  "granite-item12-desc": "لون بني طبيعي للمطابخ والحمامات",
  "granite-item13": "تريكاتو جولد نيوويف",
  "granite-item13-desc": "جرانيت ذهبي عصري للأسطح",
  "granite-item14": "تريكاتو جولد",
  "granite-item14-desc": "جرانيت ذهبي فاخر للمطابخ",
  "granite-item15": "ريفر بوك",
  "granite-item15-desc": "جرانيت بتصميم طبيعي للواجهات",
  "granite-item16": "رين فورست براون",
  "granite-item16-desc": "جرانيت بني دافئ للأرضيات",
  "granite-item17": "سي روك",
  "granite-item17-desc": "جرانيت بتصميم بحري للحمامات",
  "granite-item18": "سيسيليا",
  "granite-item18-desc": "جرانيت كريمي للمطابخ الكلاسيكية",
  "granite-item19": "سيلفر جراي",
  "granite-item19-desc": "جرانيت رمادي عصري للأسطح",
  "granite-item20": "فررس وود",
  "granite-item20-desc": "جرانيت بمظهر خشبي للأرضيات",
  "granite-item21": "فلوكانو وايت",
  "granite-item21-desc": "جرانيت أبيض نقي للمطابخ الحديثة",
  "granite-item22": "فنتاج باندا",
  "granite-item22-desc": "جرانيت أحادي للحمامات الفاخرة",
  "granite-item23": "كوبرا",
  "granite-item23-desc": "جرانيت بتصميم مميز للواجهات",
  "granite-item24": "كوفي وود",
  "granite-item24-desc": "جرانيت بني دافئ للأرضيات",
  "granite-item25": "كيوي انوكس",
  "granite-item25-desc": "جرانيت بتصميم فريد للمطابخ",
  "granite-item26": "نيرو إسباني",
  "granite-item26-desc": "جرانيت أسود لامع للأسطح الفاخرة",
  "granite-item27": "وودن سان مايكا",
  "granite-item27-desc": "جرانيت بمظهر خشبي للأرضيات",
  "granite-item28": "ينج يانج",
  "granite-item28-desc": "جرانيت بتصميم متوازن للحمامات",
  "granite-item29": "هيمالايان بلو",
  "granite-item29-desc": "جرانيت أزرق غني للواجهات",
  "granite-item30": "إنديان جوبارانا",
  "granite-item30-desc": "جرانيت هندي طبيعي للأرضيات",
  "granite-item31": "دارك جرين",
  "granite-item31-desc": "جرانيت أخضر داكن للواجهات",
  "granite-item32": "فورست جرين",
  "granite-item32-desc": "جرانيت أخضر طبيعي للأرضيات",
  "granite-item33": "آيس وايت",
  "granite-item33-desc": "جرانيت أبيض نقي للمطابخ الحديثة",
  "granite-item34": "جايسلمر جولد",
  "granite-item34-desc": "جرانيت ذهبي للمطابخ الفاخرة",
  "granite-item35": "نيو فيسكونت وايت",
  "granite-item35-desc": "جرانيت أبيض للحمامات الحديثة",
  "granite-item36": "باراديسو كلاسيكو",
  "granite-item36-desc": "جرانيت كلاسيكي للأرضيات",
  "granite-item37": "آر إف براون",
  "granite-item37-desc": "جرانيت بني غني للمطابخ",
  "granite-item38": "أسود غابة هندي",
  "granite-item38-desc": "جرانيت أسود داكن للواجهات",
  "granite-item39": "ميركوري بلاك",
  "granite-item39-desc": "جرانيت أسود لامع للأسطح",
  "granite-item40": "رين فورست جرين",
  "granite-item40-desc": "جرانيت أخضر غني للأرضيات",
  "granite-item41": "ريفر بلو",
  "granite-item41-desc": "جرانيت أزرق طبيعي للواجهات",
  "granite-item42": "جلاكسي ستار",
  "granite-item42-desc": "جرانيت هندي فاخر للمطابخ",
  "granite-item43": "إيرث جرين",
  "granite-item43-desc": "جرانيت أخضر طبيعي للأرضيات",
  "granite-item44": "جلاسير وايت",
  "granite-item44-desc": "جرانيت أبيض نقي للمطابخ",
  "granite-item45": "فانتسي سلاب",
  "granite-item45-desc": "جرانيت بتصميم فريد للأسطح",
  "granite-item46": "حسن جرين",
  "granite-item46-desc": "جرانيت أخضر غني للأرضيات",
  "granite-item47": "إمبريال وايت",
  "granite-item47-desc": "جرانيت أبيض فاخر للمطابخ",
  "granite-item48": "آيفوري براون",
  "granite-item48-desc": "جرانيت بني دافئ للأرضيات",
  "granite-item49": "مون وايت",
  "granite-item49-desc": "جرانيت أبيض لامع للحمامات",
  "granite-item50": "باندا وايت",
  "granite-item50-desc": "جرانيت أحادي للمطابخ الحديثة",
  "granite-item51": "رايموند",
  "granite-item51-desc": "جرانيت بتصميم عصري للأسطح",
  "granite-item52": "تان براون",
  "granite-item52-desc": "جرانيت بني غني للمطابخ",
  "granite-item53": "نيو إمبريال ريد",
  "granite-item53-desc": "جرانيت أحمر فاخر للأرضيات",
  "granite-item54": "وايت جالاكسي",
  "granite-item54-desc": "جرانيت أبيض لامع للمطابخ",


// Features Section
"features-imp-granite-title": "لماذا تختار الجرانيت المستورد؟",
"feature1-imp-granite-title": "تصاميم فريدة",
"feature1-imp-granite-desc": "تنوع ألوان وأنماط مثل جلاكسي ستار وأزول شيلو لمظهر فاخر",
"feature2-imp-granite-title": "متانة عالية",
"feature2-imp-granite-desc": "مقاوم للخدوش، الحرارة، والبقع لاستخدام طويل الأمد",
"feature3-imp-granite-title": "مصادر عالمية",
"feature3-imp-granite-desc": "مستورد من الهند، البرازيل، وإيطاليا بجودة مضمونة",

// FAQ Section

    // FAQ Section
    "faq-imp-gra-title": "أسئلة شائعة عن الجرانيت المستورد",
    "faq-imp-gra-question1": "ما هو أفضل نوع جرانيت مستورد لأسطح المطبخ؟",
    "faq-imp-gra-answer1": "جرانيت مثل <strong>جلاكسي ستار</strong> و<strong>الأحمر الملكي</strong> مثالي لأسطح المطبخ بسبب متانته وجماله. اطلع على <a href=\"imported-granite.html\">تشكيلتنا</a> لاختيار المناسب.",
    "faq-imp-gra-question2": "ما هي مميزات الجرانيت المستورد مقارنة بالمحلي؟",
    "faq-imp-gra-answer2": "يتميز الجرانيت المستورد بـ:<ul><li><strong>تنوع الألوان:</strong> مثل <a href=\"/imported-granite.html\">الأحمر الملكي</a> و<strong>جلاكسي ستار</strong> الذي لا يتوفر محليًا.</li><li><strong>صلابة أعلى:</strong> أنواع مثل <strong>بلاك أيس</strong> تتميز بمقاومة عالية للخدوش.</li><li><strong>تصاميم فريدة:</strong> كالنقوش الطبيعية في جرانيت <strong>أزول شيلو</strong> البرازيلي.</li></ul>الجرانيت المصري قد يكون <strong>أوفر في السعر</strong> لبعض المشاريع. <a href=\"contact.html\">اتصل بنا</a> لمساعدتك في الاختيار.",
    "faq-imp-gra-question3": "كم يبلغ سعر متر الجرانيت المستورد في مصر 2025؟",
    "faq-imp-gra-answer3": "يختلف السعر حسب النوع والبلد الأصلي:<table class=\"table table-bordered\"><tr><th>النوع</th><th>السعر (للمتر)</th></tr><tr><td>جرانيت أحمر الكنتي (برازيلي)</td><td>1,200 - 1,800 جنيه</td></tr><tr><td>جرانيت جلاكسي ستار (هندي)</td><td>900 - 1,400 جنيه</td></tr></table><p class=\"text-muted\">الأسعار قد تختلف حسب الكمية والموقع. <a href=\"tel:+201000392433\">اتصل الآن</a> لعرض سعر دقيق.</p>",
    "faq-imp-gra-question4": "ما أفضل نوع جرانيت مستورد للواجهات الخارجية؟",
    "faq-imp-gra-answer4": "<p>أنواع الجرانيت المناسبة للواجهات:</p><ol><li><strong>بلاك أيس:</strong> مقاوم للعوامل الجوية ولون داكن لا يظهر الأتربة.</li><li><strong>أزول شيلو:</strong> يتميز بصلابة عالية وتصميم جذاب.</li></ol><p>نوصي باستخدام <strong>طبقة حماية (سيلر)</strong> سنويًا للحفاظ على المظهر. <a href=\"services.html\">تعرف على خدمات التركيب لدينا</a>.</p>",
    "faq-imp-gra-question5": "كيف أعرف الجرانيت المستورد الأصلي من المقلد؟",
    "faq-imp-gra-answer5": "<p>إليك 3 طرق للتمييز:</p><ul><li><strong>الشهادة:</strong> تأكد من وجود <strong>شهادة منشأ</strong> من البلد المنتج (مثل الهند أو البرازيل).</li><li><strong>التجانس:</strong> الجرانيت الأصلي تكون عروقه طبيعية وغير متكررة.</li><li><strong>الامتصاص:</strong> ضع نقطة ماء، إذا امتصها بسرعة فقد يكون مغشوشًا.</li></ul><div class=\"alert alert-warning\">احذر من الأسعار المنخفضة جدًا! <a href=\"blog/how-to-spot-fake-granite.html\">اقرأ دليلنا الكامل</a>.</div>",
    "faq-imp-gra-question6": "ما الدول الأفضل لاستيراد الجرانيت منها؟",
    "faq-imp-gra-answer6": "<div class=\"row\"><div class=\"col-md-6\"><h5>1. الهند</h5><p>أشهر الأنواع: <strong>جلاكسي ستار</strong>، <strong>أخضر هندي</strong>.<br>المميزات: أسعار تنافسية، ألوان مميزة.</p></div><div class=\"col-md-6\"><h5>2. البرازيل</h5><p>أشهر الأنواع: <strong>أزول شيلو</strong>، <strong>أحمر الكنتي</strong>.<br>المميزات: صلابة عالية، تصميمات فريدة.</p></div></div><p class=\"mt-3\">في <strong>النيل للجرانيت</strong> نستورد مباشرة من المحاجر لتجنب الوسطاء. <a href=\"about.html\">تعرف على مصادرنا</a>.</p>",

// CTA Section
"cta-imp-gra-title": "جاهزون لمساعدتك في اختيار الجرانيت المستورد المثالي",
"cta-button1": "اطلب استشارة مجانية",
"cta-button2": "اتصل بنا",

    // Page Title and Meta Description
    "page-title-imported-granite": "جرانيت مستورد | أجود أنواع الجرانيت الهندي والبرازيلي 2025 | النيل للرخام",
    "meta-description-imported-granite": "اكتشف تشكيلة فاخرة من الجرانيت المستورد من الهند، البرازيل، وإيطاليا للمطابخ، الأرضيات، والواجهات بجودة عالمية وأسعار تنافسية 2025.",
////////////////////////////////////
////////////////////الكوارتز
// Breadcrumb
"breadcrumb-home": "الرئيسية",
"breadcrumb-quartz": "كوارتز",
// Hero Section
"quartz-title": "كوارتز عالي الجودة لأسطح المطابخ والحمامات",
"quartz-subtitle": "الكوارتز حجر صناعي يتكون من 93% كوارتز طبيعي و7% راتنجات، مما يجعله الأكثر مقاومة للخدوش والبقع مقارنة بالرخام الطبيعي.",
// Quartz Items
"quartz-item1": "كوارتز أبيض كلاسيكي",
"quartz-item1-desc": "مثالي للمطابخ الحديثة، مقاوم للبقع",
"quartz-item2": "كوارتز رمادي عصري",
"quartz-item2-desc": "تصميم أنيق للحمامات الفاخرة",
"quartz-item3": "كوارتز أسود لامع",
"quartz-item3-desc": "يضيف لمسة فخامة لأي مساحة",
"quartz-item4": "كوارتز بيج دافئ",
"quartz-item4-desc": "مثالي للمطابخ التقليدية",
"quartz-item5": "كوارتز أبيض رخامي",
"quartz-item5-desc": "تصميم فاخر للمطابخ الكبيرة",
"quartz-item6": "كوارتز رمادي فاتح",
"quartz-item6-desc": "يوفر مظهراً نظيفاً وحديثاً",
"quartz-item7": "كوارتز أسود مطفي",
"quartz-item7-desc": "مثالي للتصاميم المعاصرة",
"quartz-item8": "كوارتز أبيض لؤلؤي",
"quartz-item8-desc": "يضيف لمعاناً أنيقاً للأسطح",
"quartz-item9": "كوارتز رمادي غامق",
"quartz-item9-desc": "يوفر مظهراً قوياً وعصرياً",
"quartz-item10": "كوارتز بيج فاتح",
"quartz-item10-desc": "مثالي للمساحات الدافئة",
"quartz-item11": "كوارتز أبيض نقي",
"quartz-item11-desc": "تصميم بسيط وأنيق للمطابخ",
"quartz-item12": "كوارتز أسود رخامي",
"quartz-item12-desc": "يضيف لمسة درامية للأسطح",
"quartz-item13": "كوارتز رمادي لامع",
"quartz-item13-desc": "مثالي للحمامات الحديثة",
"quartz-item14": "كوارتز بيج رخامي",
"quartz-item14-desc": "تصميم كلاسيكي للمطابخ",
"quartz-item15": "كوارتز أبيض مع رذاذ",
"quartz-item15-desc": "يوفر مظهراً مميزاً للأسطح",
"quartz-item16": "كوارتز رمادي مخطط",
"quartz-item16-desc": "تصميم عصري للمساحات الكبيرة",
"quartz-item17": "كوارتز أسود مع بقع بيضاء",
"quartz-item17-desc": "مثالي للتصاميم الجريئة",
"quartz-item18": "كوارتز أبيض مع خطوط رمادية",
"quartz-item18-desc": "تصميم راقي للمطابخ",
"quartz-item19": "كوارتز رمادي مع بقع",
"quartz-item19-desc": "يضيف لمسة فنية للأسطح",
"quartz-item21": "كوارتز بيج لامع",
"quartz-item21-desc": "مثالي للحمامات الفاخرة",
"quartz-item22": "كوارتز أبيض مع رذاذ أسود",
"quartz-item22-desc": "تصميم مميز للمطابخ الحديثة",
"quartz-item23": "كوارتز أسود مع خطوط بيضاء",
"quartz-item23-desc": "يضيف لمسة فخامة للأسطح",
"quartz-item24": "كوارتز رمادي فاتح لامع",
"quartz-item24-desc": "تصميم نظيف للمساحات الحديثة",
"quartz-item26": "كوارتز بيج مع خطوط",
"quartz-item26-desc": "مثالي للمطابخ الكلاسيكية",
"quartz-item27": "كوارتز أبيض مع بقع رمادية",
"quartz-item27-desc": "تصميم فريد للأسطح",
"quartz-item29": "كوارتز رمادي مع خطوط بيضاء",
"quartz-item29-desc": "تصميم أنيق للحمامات",
"quartz-item30": "كوارتز بيج فاتح لامع",
"quartz-item30-desc": "مثالي للمساحات الدافئة",
"quartz-item32": "كوارتز أبيض مع خطوط ",
"quartz-item32-desc": "تصميم مميز للمطابخ الحديثة",
"quartz-item33": "كوارتز رمادي مع رذاذ أبيض",
"quartz-item33-desc": "يضيف لمسة فنية للأسطح",
"quartz-item34": "كوارتز أسود مع رذاذ",
"quartz-item34-desc": "يوفر مظهراً جريئاً للمطابخ",
"quartz-item35": "كوارتز أسود لامع مع خطوط",
"quartz-item35-desc": "مثالي للتصاميم الفاخرة",
"quartz-item36": "كوارتز بيج مع بقع رمادية",
"quartz-item36-desc": "تصميم كلاسيكي للمطابخ",
"quartz-item37": "كوارتز أبيض مع بقع سوداء",
"quartz-item37-desc": "يوفر مظهراً جريئاً للأسطح",
"quartz-item38": "كوارتز رمادي مع خطوط سوداء",
"quartz-item38-desc": "تصميم عصري للحمامات",
"quartz-item39": "كوارتز أبيض لامع مع رذاذ",
"quartz-item39-desc": "مثالي للمطابخ الفاخرة",
// Features Section
"features-quartz-title": "لماذا تختار الكوارتز؟",
"feature1-title": "مقاوم للخدوش",
"feature1-quartz-desc": "صلابة 7 على مقياس موس تجعله الأكثر تحملاً للاستخدام اليومي",
"feature2-quartz-title": "مقاوم للبقع",
"feature2-quartz-desc": "سطح غير مسامي لا يمتص السوائل أو الزيوت",
"feature3-quartz-title": "سهل التنظيف",
"feature3-quartz-desc": "لا يحتاج إلى تلميع أو صيانة دورية",
// FAQ Section
"faq-quartz-title": "أسئلة شائعة عن الكوارتز",
"faq-quartz-question1": "هل الكوارتز مناسب لأسطح المطابخ؟",
"faq-quartz-answer1": "<p>نعم، الكوارتز هو <strong>الخيار الأمثل</strong> لأسطح المطابخ بسبب:</p><ul><li>مقاومته العالية للخدوش</li><li>عدم امتصاصه للبقع</li><li>تنوع الألوان والتصاميم</li></ul>",
"faq-quartz-question2": "ما الفرق بين الكوارتز والرخام الصناعي؟",
"faq-quartz-answer2": `<p>الاختلافات الرئيسية:</p>
  <table class="table table-bordered">
    <tr><th>المقارنة</th><th>الكوارتز</th><th>الرخام الصناعي</th></tr>
    <tr><td>المكونات</td><td>93% كوارتز طبيعي + 7% راتنج</td><td>80% كربونات كالسيوم + 20% راتنج</td></tr>
    <tr><td>المقاومة</td><td>أكثر مقاومة للخدوش والبقع</td><td>أقل مقاومة ويحتاج صيانة دورية</td></tr>
    <tr><td>السعر</td><td>أعلى بنسبة 15-20%</td><td>أكثر اقتصادية</td></tr>
  </table>
  <p>للمطابخ نوصي <strong>بالكوارتز</strong> لقوته، وللحمامات يمكن استخدام الرخام الصناعي لتوفير التكلفة.</p>`,
"faq-quartz-question3": "كيف أنظف أسطح الكوارتز بطريقة صحيحة؟",
"faq-quartz-answer3": `<div class="row">
    <div class="col-md-6">
      <h5>ما يجب فعله:</h5>
      <ul class="list-check">
        <li>استخدم قطعة قماش ناعمة مبللة بالماء الدافئ</li>
        <li>استخدم صابون لطيف خالي من الكحول</li>
        <li>جفف السطح بعد التنظيف</li>
      </ul>
    </div>
    <div class="col-md-6">
      <h5>ما يجب تجنبه:</h5>
      <ul class="list-cross">
        <li>المواد الكاشطة (مثل السلك)</li>
        <li>المنظفات الحمضية (مثل الليمون)</li>
        <li>تعريضه لدرجات حرارة عالية مباشرة</li>
      </ul>
    </div>
  </div>`,
"faq-table-comparison": "المقارنة",
"faq-table-quartz": "الكوارتز",
"faq-table-engineered-marble": "الرخام الصناعي",
"faq-table-composition": "المكونات",
"faq-table-quartz-composition": "93% كوارتز طبيعي + 7% راتنج",
"faq-table-marble-composition": "80% كربونات كالسيوم + 20% راتنج",
"faq-table-resistance": "المقاومة",
"faq-table-quartz-resistance": "أكثر مقاومة للخدوش والبقع",
"faq-table-marble-resistance": "أقل مقاومة ويحتاج صيانة دورية",
"faq-table-price": "السعر",
"faq-table-quartz-price": "أعلى بنسبة 15-20%",
"faq-table-marble-price": "أكثر اقتصادية",
"faq-table-recommendation": "للمطابخ نوصي <strong>بالكوارتز</strong> لقوته، وللحمامات يمكن استخدام الرخام الصناعي لتوفير التكلفة.",
"faq-do-title": "ما يجب فعله:",
"faq-do1": "استخدم قطعة قماش ناعمة مبللة بالماء الدافئ",
"faq-do2": "استخدم صابون لطيف خالي من الكحول",
"faq-do3": "جفف السطح بعد التنظيف",
"faq-avoid-title": "ما يجب تجنبه:",
"faq-avoid1": "المواد الكاشطة (مثل السلك)",
"faq-avoid2": "المنظفات الحمضية (مثل الليمون)",
"faq-avoid3": "تعريضه لدرجات حرارة عالية مباشرة",
// CTA Section
"cta-title": "جاهزون لمساعدتك في اختيار الكوارتز المثالي",
"cta-consultation": "اطلب استشارة مجانية",
"cta-call": "اتصل بنا",
// Page Metadata
"page-title-quartz": "كوارتز | أفضل أنواع الكوارتز للمطابخ والحمامات 2025 | النيل للرخام",
"meta-description-quartz": "اكتشف أجود أنواع الكوارتز المصري والمستورد لأسطح المطابخ والحمامات بأسعار تنافسية. كوارتز مقاوم للخدوش والبقع بجودة عالمية 2025.",
///////////////////////////////
//////////////////////////equipment-page
 // Breadcrumb
 "breadcrumb-home": "الرئيسية",
 "breadcrumb-equipment": "الآلات والمعدات",
 // Hero Section
 "hero-title": "الآلات والمعدات",
 "hero-subtitle": "أحدث التقنيات العالمية لتصنيع الرخام والجرانيت بكفاءة وجودة عالية",
 "hero-button": "تصفح المعدات",
 // Features Section
 "features-title": "لماذا تختار معدات النيل؟",
 "feature1-title": "ضمان 3 سنوات",
 "feature1-desc": "ضمان شامل على جميع المعدات مع خدمة صيانة دورية",
 "feature2-title": "تركيب وتدريب",
 "feature2-desc": "فريق فني متخصص للتركيب والتدريب على التشغيل",
 "feature3-title": "شحن سريع",
 "feature3-desc": "توصيل المعدات خلال 45 يوم من تاريخ الطلب",
 // Equipment Section
 "equipment-title": "آلاتنا ومعداتنا",
 "equipment1-title": "جلاية هين",
 "equipment1-desc": "مواتير إيطالي Di Rossi، مكونات كهربائية ألمانية",
 "equipment1-button": "عرض التفاصيل",
 "equipment2-title": "منشار هين أو BM",
 "equipment2-desc": "منشار عالي الجودة لقص الرخام والجرانيت بدقة",
 "equipment2-button": "عرض التفاصيل",
 "equipment3-title": "طاليات بلوك جرانيت",
 "equipment3-desc": "24 أسطوانة، عرض البريدج أكثر من 9 متر",
 "equipment3-button": "عرض التفاصيل",
 "equipment4-title": "جلايات لتلميع الجرانيت",
 "equipment4-desc": "جلايات متطورة لتلميع الجرانيت بجودة عالية",
 "equipment4-button": "عرض التفاصيل",
 "equipment5-title": "فرايز أوتوماتيك",
 "equipment5-desc": "لتقطيع الرخام والجرانيت بدقة وسرعة عالية",
 "equipment5-button": "عرض التفاصيل",
 "equipment6-title": "قطع غيار أصلية",
 "equipment6-desc": "جميع قطع الغيار متوفرة في مستودعاتنا",
 "equipment6-button": "عرض التفاصيل",
 // Partners Section
 "partners-title": "شركاؤنا الدوليون",
 // FAQ Section
 "faq-title": "أسئلة شائعة",
 "faq-question1": "ما هي فترة الضمان على المعدات؟",
 "faq-answer1": "جميع معداتنا تأتي بضمان مصنع لمدة 3 سنوات على الأجزاء الرئيسية، مع توفر قطع الغيار الأصلية في مستودعاتنا بمصر. كما نقدم خدمة صيانة دورية وفحص شامل كل 6 أشهر.",
 "faq-question2": "هل توفرون خدمة التركيب والتدريب؟",
 "faq-answer2": "نعم، لدينا فريق فني متخصص يقوم بتركيب المعدات وتدريب العاملين على التشغيل الأمثل. يشمل التدريب: التشغيل الأساسي، الصيانة اليومية، استكشاف الأخطاء البسيطة وإصلاحها.",
 "faq-question3": "ما هي مدة التوصيل بعد الطلب؟",
 "faq-answer3": "مدة التوصيل تتراوح بين 45-60 يوم من تاريخ تأكيد الطلب والدفع. للمشاريع العاجلة، لدينا خيار الشحن السريع خلال 30 يوم برسوم إضافية.",
 // CTA Section
 "cta-title": "جاهزون لبدء مشروعك؟",
 "cta-subtitle": "نقدم مجموعة واسعة من الآلات المستوردة من أفضل المصانع العالمية. تواصل معنا اليوم للحصول على استشارة مجانية!",
 "cta-call": "اتصل الآن",
 "cta-whatsapp": "واتساب",
 "cta-message": "ارسل رسالة",
 // Modals
 "modal1-title": "جلاية هين - مواصفات فنية",
 "modal1-specs": "المواصفات الرئيسية:",
 "modal1-spec1": "مواتير إيطالي Di Rossi",
 "modal1-spec2": "مكونات كهربائية ألمانية",
 "modal1-spec3": "نظام تحكم حديث PLC",
 "modal1-spec4": "شاشة تحكم تعمل باللمس",
 "modal1-spec5": "إمكانية البرمجة والتحكم عن بعد",
 "modal1-performance": "الأداء:",
 "modal1-performance1": "سرعة التشغيل",
 "modal1-performance1-value": "95%",
 "modal1-performance2": "توفير الطاقة",
 "modal1-performance2-value": "80%",
 "modal1-quote": "اطلب عرض سعر",
 "modal1-close": "إغلاق",
 "modal2-title": "منشار هين أو BM - مواصفات فنية",
 "modal2-specs": "المواصفات الرئيسية:",
 "modal2-spec1": "قوة قطع تصل إلى 300 مم",
 "modal2-spec2": "نظام تبريد بالماء",
 "modal2-spec3": "شفرة ماسية عالية الجودة",
 "modal2-spec4": "نظام تثبيت أوتوماتيكي",
 "modal2-spec5": "لوحة تحكم رقمية",
 "modal2-performance": "الأداء:",
 "modal2-performance1": "دقة القطع",
 "modal2-performance1-value": "98%",
 "modal2-performance2": "سرعة الإنتاج",
 "modal2-performance2-value": "90%",
 "modal2-quote": "اطلب عرض سعر",
 "modal2-close": "إغلاق",
 "modal3-title": "طاليات بلوك جرانيت - مواصفات فنية",
 "modal3-specs": "المواصفات الرئيسية:",
 "modal3-spec1": "24 أسطوانة قص",
 "modal3-spec2": "عرض البريدج أكثر من 9 متر",
 "modal3-spec3": "وزن الجهاز 25 طن",
 "modal3-spec4": "نظام تحكم PLC متطور",
 "modal3-spec5": "إنتاجية تصل إلى 1000 م²/يوم",
 "modal3-performance": "الأداء:",
 "modal3-performance1": "كفاءة التشغيل",
 "modal3-performance1-value": "95%",
 "modal3-performance2": "توفير الطاقة",
 "modal3-performance2-value": "80%",
 "modal3-quote": "اطلب عرض سعر",
 "modal3-close": "إغلاق",
 "modal4-title": "جلايات لتلميع الجرانيت - مواصفات فنية",
 "modal4-specs": "المواصفات الرئيسية:",
 "modal4-spec1": "رؤوس تلميع متعددة (12-24)",
 "modal4-spec2": "نظام تحكم أوتوماتيكي",
 "modal4-spec3": "سطح تلميع أملس بدقة عالية",
 "modal4-spec4": "مواتير موفرة للطاقة",
 "modal4-spec5": "تصميم مقاوم للتآكل",
 "modal4-performance": "الأداء:",
 "modal4-performance1": "كفاءة التلميع",
 "modal4-performance1-value": "88%",
 "modal4-performance2": "توفير الطاقة",
 "modal4-performance2-value": "72%",
 "modal4-quote": "اطلب عرض سعر",
 "modal4-close": "إغلاق",
 "modal5-title": "فرايز أوتوماتيك - مواصفات فنية",
 "modal5-specs": "المواصفات الرئيسية:",
 "modal5-spec1": "تقطيع بدقة تصل إلى 0.1 مم",
 "modal5-spec2": "نظام تحكم CNC",
 "modal5-spec3": "سرعة تشغيل عالية",
 "modal5-spec4": "تصميم مقاوم للاهتزاز",
 "modal5-spec5": "أدوات قطع ماسية",
 "modal5-performance": "الأداء:",
 "modal5-performance1": "دقة التشغيل",
 "modal5-performance1-value": "87%",
 "modal5-performance2": "توفير الطاقة",
 "modal5-performance2-value": "73%",
 "modal5-quote": "اطلب عرض سعر",
 "modal5-close": "إغلاق",
 "modal6-title": "قطع غيار أصلية - مواصفات",
 "modal6-specs": "المواصفات الرئيسية:",
 "modal6-spec1": "قطع غيار أصلية 100%",
 "modal6-spec2": "متوفرة لجميع المعدات",
 "modal6-spec3": "ضمان لمدة سنة على القطع",
 "modal6-spec4": "شحن سريع خلال 7 أيام",
 "modal6-spec5": "دعم فني للتركيب",
 "modal6-performance": "الأداء:",
 "modal6-performance1": "توفر القطع",
 "modal6-performance1-value": "90%",
 "modal6-performance2": "مدة الخدمة",
 "modal6-performance2-value": "85%",
 "modal6-quote": "اطلب عرض سعر",
 "modal6-close": "إغلاق",
 // Page Metadata
 "page-title": "الآلات والمعدات | معدات تصنيع الرخام والجرانيت - شركة النيل",
 "meta-description": "نقدم أحدث الماكينات والمعدات لتقطيع وصقل الرخام والجرانيت، مع إمكانيات استيراد واسعة من شراكات دولية عالية الجودة.",
 "meta-keywords": "معدات رخام, معدات جرانيت, استيراد آلات, تقطيع رخام, جلايات, النيل للرخام",
 "og-title": "الآلات والمعدات - شركة النيل للرخام والجرانيت",
 "og-description": "استيراد وتوريد معدات تصنيع الرخام والجرانيت بأعلى جودة مع ضمان 3 سنوات وخدمات تركيب."

  },
   en: {
// Navbar
"navbar-brand": "Nile for Marble and Granite",
"nav-home": "Home",
"nav-about": "About Us",
"nav-products": "Products",
"nav-products-marble": "Egyptian Marble",
"nav-products-granite": "Egyptian Granite",
"nav-products-imported-marble": "Imported Marble",
"nav-products-imported-granite": "Imported Granite",
"nav-products-quartz": "Quartz",
"nav-services": "Services",
"nav-equipment": "Machinery & Equipment",
"nav-contact": "Contact Us",
// Hero Section
"hero-home-title": "Nile for Marble and Granite",
"hero-home-subtitle": "Premium Quality and Modern Designs for Every Project",
"hero-contact-btn": "Contact Us Now",
"hero-products-btn": "Explore Our Products",
// Intro Section
"intro-text": "Specializing in providing the finest marble and granite for over 20 years.",
// Features Section
"feature-home-title": "Why Choose Nile for Marble and Granite?",
"feature-item1": "High Quality",
"feature-desc1": "We offer the finest marble and granite with international standards.",
"feature-item2": "Long Experience",
"feature-desc2": "Over 20 years in supplying and installing marble and granite.",
"feature-item3": "Product Variety",
"feature-desc3": "A wide range of Egyptian and imported marble and granite.",
// Featured Products Section
"featured-products-title": "Our Featured Products",
"carousel-egyptian-marble-title": "Egyptian Marble",
"carousel-egyptian-marble-desc": "Premium quality with natural colors",
"carousel-egyptian-marble-btn": "Discover More",
"carousel-egyptian-granite-title": "Egyptian Granite",
"carousel-egyptian-granite-desc": "Durability and elegance combined",
"carousel-egyptian-granite-btn": "Discover More",
"carousel-imported-marble-title": "Imported Marble",
"carousel-imported-marble-desc": "Global collection with modern designs",
"carousel-imported-marble-btn": "Discover More",
"carousel-imported-granite-title": "Imported Granite",
"carousel-imported-granite-desc": "Global elegance with colors to suit all tastes",
"carousel-imported-granite-btn": "Discover More",
"carousel-imported-quartz-title": "Quartz",
"carousel-imported-quartz-desc": "For lovers of beauty, elegance, and sophistication",
"carousel-imported-quartz-btn": "Discover More",
// Product Cards
"product-card-galala-title": "Galala Marble",
"product-card-galala-desc": "Luxurious Egyptian marble with creamy colors, ideal for floors and walls.",
"product-card-galala-btn": "More Details",
"product-card-aswan-title": "Aswan Granite",
"product-card-aswan-desc": "Durable red granite, perfect for kitchens and exterior facades.",
"product-card-aswan-btn": "More Details",
"product-card-imported-marble-title": "Imported Marble",
"product-card-imported-marble-desc": "A global collection with modern designs and varied colors to suit all tastes.",
"product-card-imported-marble-btn": "More Details",
// Equipment & Services Section
"equipment-services-heading": "Importing the Latest Marble and Granite Equipment",
"equipment-services-des": "We import directly from China the best machines such as Hein saw (24 blades, 9-meter bridge width), Italian BM saw, polishing machines, and automatic routers with the latest 'Hu Hu' control system.",
"equipment-services-item1": "We provide genuine spare parts and maintenance technicians",
"equipment-services-item2": "Comprehensive warranty on all equipment",
"equipment-services-item3": "Full training on equipment operation",
"equipment-services-btn": "Discover More About Our Equipment",
// CTA Section
"cta-title": "Ready to Transform Your Project into a Masterpiece?",
"cta-desc": "Contact us today and request your free consultation!",
"cta-btn-email": "Send a Message",
"cta-btn-call": "Call Us",
// Footer
"footer-about": "A leading company in supplying and installing marble and granite in Egypt and the Arab world since 1995",
"footer-quick-links": "Quick Links",
"nav-home-footer": "Home",
"nav-about-footer": "About Us",
"nav-services-footer": "Services",
"nav-equipment-footer": "Machinery & Equipment",
"nav-contact-footer": "Contact Us",
"footer-contact-info": "Contact Information",
"footer-address": "Plot No. 39, Arab Abu Saed, Al-Saff, Helwan, Cairo",
"footer-phone": "00201000392433",
"footer-email": "info@nile-marble.com",
"footer-hours": "Sunday - Thursday: 9 AM - 5 PM",
"footer-copyright": "© 2025 Nile International for Marble and Granite - All Rights Reserved",
// About Page
    // Breadcrumb
    "breadcrumb-home": "Home",
    "breadcrumb-about": "About Us",
    // Hero Section
    "about-title": "Nile Group of Companies",
    "about-desc": "Pioneers in importing marble and granite equipment, manufacturing, and industrial technology with strong international partnerships",
    "about-nile-international": "Nile International for Commercial Agencies and General Supplies",
    "about-nile-international-desc": "We specialize in importing marble and granite processing equipment directly from China, ensuring the highest quality standards and competitive prices. We provide comprehensive solutions, including the supply of all types of equipment, genuine spare parts, and maintenance and refurbishment services through a team of trained technicians. As the exclusive agent and authorized distributor for leading global companies such as Rizhao Haien Machinery, Shanghai BM AQ, Hesheng Machinery, and Julun Machinery, we strengthen our position as a trusted partner in the local and international markets.",
    "about-nile-marble": "Nile for Marble and Granite",
    "about-nile-marble-desc": "Located in the Arab Abu Saed industrial zone in Helwan, our factory specializes in cutting and manufacturing marble and granite using state-of-the-art technologies. We aim to meet the needs of local and international markets by delivering high-quality products that align with global standards, focusing on precision and efficiency in all production stages.",
    "about-shanghai": "Shanghai Shanzhou Electronic Technology",
    "about-shanghai-desc": "As part of our commitment to advancing the marble and granite industry, Nile Group acquired 49% of the shares of Shanghai Shanzhou Electronic Technology Co., Ltd in China. This company specializes in industrial technology, including the development of electronic equipment, IoT, technical consulting, technology transfer, and R&D in various fields such as electronic component sales, communication equipment, and construction machinery. This collaboration enhances our ability to deliver innovative technological solutions that support the industry on a global scale.",
    // Mission, Vision, Values
    "vision-title": "Our Vision",
    "vision-text": "To be global leaders in providing comprehensive solutions for the marble and granite industry through advanced equipment, innovative technology, and exceptional services that meet our clients' needs.",
    "values-title": "Our Values",
    "value1": "Quality: Our commitment to delivering products and services of the highest standards.",
    "value2": "Innovation: Continuously striving to develop new technological solutions.",
    "value3": "Customer Service: Placing our clients' needs at the core of our operations.",
    // Achievements/Stats
    "stats-title": "Our Achievements",
    "stat-years": "20+",
    "stat-years-desc": "Years of Experience",
    "stat-projects": "1000+",
    "stat-projects-desc": "Completed Projects",
    "stat-countries": "50+",
    "stat-countries-desc": "Export Countries",
    "stat-clients": "200+",
    "stat-clients-desc": "Loyal Clients",
    // Footer
    "footer-quick-links": "Quick Links",
    "nav-home-footer": "Home",
    "nav-products-footer": "Products",
    "nav-equipment-footer": "Machinery & Equipment",
    "nav-about-footer": "About Us",
    "nav-contact-footer": "Contact Us",
    "footer-products": "Products",
    "nav-products-marble-footer": "Marble",
    "nav-products-granite-footer": "Granite",
    "footer-cutting-machines": "Cutting Machines",
    "footer-polishing-machines": "Polishing Machines",
    "footer-contact-info": "Contact Information",
    "footer-address": "Plot No. 39, Arab Abu Saed, Al-Saff, Helwan, Cairo",
    "footer-phone": "00201000392433",
    "footer-email": "info@nile-marble.com",
    "footer-copyright": "© 2025 Nile International for Marble and Granite - All Rights Reserved",
    // Contact Page
   // Breadcrumb
   "breadcrumb-home": "Home",
   "breadcrumb-contact": "Contact Us",
   // Contact Section
   "contact-title": "Contact Us",
   "contact-subtitle": "We are happy to receive your inquiries and questions through the following form:",
   "contact-name-label": "Full Name",
   "contact-name-error": "Please enter your full name",
   "contact-email-label": "Email Address",
   "contact-email-error": "Please enter a valid email address",
   "contact-phone-label": "Phone Number",
   "contact-phone-error": "Please enter a valid phone number",
   "contact-subject-label": "Message Subject",
   "contact-subject-default": "Select message subject",
   "contact-subject-inquiry": "General Inquiry",
   "contact-subject-products": "Product Inquiry",
   "contact-subject-equipment": "Equipment Inquiry",
   "contact-subject-services": "Service Inquiry",
   "contact-subject-other": "Other",
   "contact-subject-error": "Please select a message subject",
   "contact-message-label": "Message",
   "contact-message-error": "Please write your message",
   "contact-consent-label": "I agree to the Privacy Policy and Terms of Use",
   "contact-consent-error": "You must agree to the terms to send the message",
   "submit-text": "Send Message",
   "success-message": "Your message has been sent successfully. We will contact you soon!",
   "error-message": "An error occurred while sending the message. Please try again later.",
   "contact-info-title": "Contact Information",
   "contact-address-title": "Main Office",
   "contact-address": "Plot No. 39, Arab Abu Saed, Al-Saff, Helwan, Cairo, Egypt",
   "contact-phone-title": "Phones",
   "contact-phone-1": "00201000392433",
   "contact-phone-2": "00201224220121",
   "call-now-btn": "Call Now",
   "contact-whatsapp-title": "WhatsApp",
   "contact-whatsapp-number": "00201000392433",
   "contact-wechat-title": "WeChat",
   "contact-wechat-number": "00201000392333",
   "contact-email-title": "Email",
   "contact-email-1": "nile_international_trading@yahoo.com",
   "contact-email-2": "mahmoudmokhtar1988@gmail.com",
   "contact-hours-title": "Working Hours",
   "contact-hours": "Sunday to Thursday: 8 AM - 5 PM\nFriday and Saturday: Closed",
  
  
    // Services Page
    // النصوص الإنجليزية...
    "breadcrumb-home": "Home",
    "breadcrumb-services": "Our Services",
    "services-title": "Our Services",
    "service-supply-title": "Marble and Granite Supply",
    "service-supply-desc": "We offer a wide range of premium local and imported marble and granite, carefully selected to meet the needs of various projects, whether residential or commercial. We guarantee high quality and competitive prices through a reliable network of suppliers, providing diverse color and design options to suit all tastes. We also provide consultancy services to assist clients in choosing the right materials for their projects.",
    "service-manufacture-title": "Manufacturing and Cutting",
    "service-manufacture-desc": "In our advanced factory in the Helwan Industrial Zone, we utilize the latest technologies and machinery to manufacture and cut marble and granite with high precision. We produce slabs, tiles, and custom pieces according to client requirements, focusing on achieving the highest quality standards. Our team of engineers and technicians ensures accurate execution of designs to meet the needs of various architectural and decorative projects.",
    "service-installation-title": "Installation",
    "service-installation-desc": "We provide professional installation services for floors, walls, and stairs using a trained and experienced technical team. We ensure precision in execution and adherence to deadlines, focusing on achieving a perfect finish that reflects the beauty of marble and granite. We offer customized solutions to ensure secure and sustainable installation, along with maintenance tips to preserve the elegant appearance of the surfaces.",
    "service-equipment-title": "Importing Machinery and Equipment",
    "service-equipment-desc": "We offer importation services for marble and granite processing machinery and equipment from top Chinese factories, ensuring quality and suitability for local market needs. In addition to supply, we provide periodic maintenance services and genuine spare parts to ensure the machinery operates at high efficiency, helping our clients improve productivity and reduce long-term costs.",
    "service-maintenance-title": "After-Sales Services",
    "service-maintenance-desc": "We are committed to providing comprehensive after-sales technical support, including maintenance of machinery and equipment and the swift provision of genuine spare parts. Our team of specialized technicians offers consultancy and on-site repair services to ensure equipment operates at peak performance. We aim to build long-term relationships with our clients by delivering reliable and prompt solutions to meet their needs.",
    "service-export-title": "Export",
    "service-export-desc": "We export high-quality Egyptian marble and granite to global markets, adhering to the highest packaging standards to ensure safe delivery. We provide integrated logistics services, including shipping and customs clearance, with customized options to meet international clients' requirements. Our expertise in exporting enables us to compete in global markets while maintaining product quality and brand reputation.",
    "services-contact-text": "For more information about our services, feel free to contact us.",
    "services-contact-btn": "Contact Us Now",
    //////////////////Egyptian-marble
    // Head
    "page-title": "Egyptian Marble | Best Local Marble Types 2025 - Nile Marble & Granite",
    "meta-description": "Best types of Egyptian marble: Galala, Sunny, Minya Sylvia, Triesta, and more. World-class quality from Nile Marble & Granite.",
    // Breadcrumb
    "breadcrumb-home": "Home",
    "breadcrumb-current": "Egyptian Marble",

    // Hero Section
    "hero-egyptian-marble-title": "Luxury Egyptian Marble",
    "hero-egyptian-marble-subtitle": "2025 Collection from Galala and Sinai Quarries",
    "egyptian-marble-desc": "High-quality Egyptian marble from Galala, Sinai, and Aswan quarries. Known for its color variety, durability, and luxurious appearance, ideal for flooring, walls, and decorations.",

    // Marble Types (مثال لـ Extra Galala)
    // Marble Types
    "extra-galala-title": "Extra Galala",
    "extra-galala-desc": "Light beige for luxurious flooring",
    "extra-galala-btn": "View Details",
    "minya-sylvia-title": "Minya Sylvia",
    "minya-sylvia-desc": "Elegant yellow for walls",
    "minya-sylvia-btn": "View Details",
    "triesta-title": "Triesta",
    "triesta-desc": "Modern gray for decorations",
    "triesta-btn": "View Details",
    "mil-grey-dark-title": "Mil Grey Dark",
    "mil-grey-dark-desc": "Dark gray for kitchens",
    "mil-grey-dark-btn": "View Details",
    "galala-title": "Galala",
    "galala-desc": "Luxury creamy for stairs",
    "galala-btn": "View Details",
    "samaha-title": "Samaha",
    "samaha-desc": "Warm beige for decorations",
    "samaha-btn": "View Details",
    "sunny-dark-title": "Sunny Dark",
    "sunny-dark-desc": "Dark golden for flooring",
    "sunny-dark-btn": "View Details",
    "maroon-title": "Maroon",
    "maroon-desc": "Reddish brown for facades",
    "maroon-btn": "View Details",
    "mil-brown-title": "Mil Brown",
    "mil-brown-desc": "Light bronze for walls",
    "mil-brown-btn": "View Details",
    "serpentine-egyptian-title": "Egyptian Serpentine",
    "serpentine-egyptian-desc": "Dark green for decorations",
    "serpentine-egyptian-btn": "View Details",
    "golden-cream-title": "Golden Cream",
    "golden-cream-desc": "Golden creamy for stairs",
    "golden-cream-btn": "View Details",
    "khatmia-title": "Khatmia",
    "khatmia-desc": "Light pink for flooring",
    "khatmia-btn": "View Details",
    "alba-rosa-title": "Alba Rosa",
    "alba-rosa-desc": "Elegant pink for walls",
    "alba-rosa-btn": "View Details",
    "tumbled-title": "Tumbled",
    "tumbled-desc": "Light gray for decorations",
    "tumbled-btn": "View Details",
    "golden-sinai-title": "Golden Sinai",
    "golden-sinai-desc": "Light golden for facades",
    "golden-sinai-btn": "View Details",
    "sinai-pearl-title": "Sinai Pearl",
    "sinai-pearl-desc": "Pearly white for flooring",
    "sinai-pearl-btn": "View Details",
// Modals (مشتركة)
"modal-material-name": "Material Name:",
"modal-material-type": "Material Type:",
"modal-color": "Color:",
"modal-origin": "Origin:",
"modal-slab-dimensions": "Slab Dimensions:",
"modal-slab-thickness": "Slab Thickness:",
"modal-tile-thickness": "Tile Thickness:",
"modal-finishes": "Finishes:",
"modal-uses": "Uses:",
"modal-order-now": "Order Now",
"modal-close-btn": "Close",

// Modal: Extra Galala
"extraGalalaModalLabel": "Extra Galala",
"extra-galala-material-name": "Extra Galala",
"extra-galala-material-type": "Marble",
"extra-galala-color": "Light Beige",
"extra-galala-origin": "Egyptian Marble Quarry",
"extra-galala-slab-dimensions": "265-295 × 165-195 cm",
"extra-galala-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"extra-galala-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"extra-galala-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"extra-galala-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Minya Sylvia
"minyaSylviaModalLabel": "Minya Sylvia",
"minya-sylvia-material-name": "Minya Sylvia",
"minya-sylvia-material-type": "Marble",
"minya-sylvia-color": "Yellow",
"minya-sylvia-origin": "Egyptian Marble Quarry",
"minya-sylvia-slab-dimensions": "265-295 × 165-195 cm",
"minya-sylvia-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"minya-sylvia-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"minya-sylvia-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"minya-sylvia-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Triesta
"triestaModalLabel": "Triesta",
"triesta-material-name": "Triesta",
"triesta-material-type": "Marble",
"triesta-color": "Gray",
"triesta-origin": "Egyptian Marble Quarry",
"triesta-slab-dimensions": "265-295 × 165-195 cm",
"triesta-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"triesta-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"triesta-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"triesta-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Mil Grey Dark
"milGreyDarkModalLabel": "Mil Grey Dark",
"mil-grey-dark-material-name": "Mil Grey Dark",
"mil-grey-dark-material-type": "Marble",
"mil-grey-dark-color": "Dark Gray",
"mil-grey-dark-origin": "Egyptian Marble Quarry",
"mil-grey-dark-slab-dimensions": "265-295 × 165-195 cm",
"mil-grey-dark-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"mil-grey-dark-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"mil-grey-dark-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"mil-grey-dark-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Galala
"galalaModalLabel": "Galala",
"galala-material-name": "Galala",
"galala-material-type": "Marble",
"galala-color": "Creamy",
"galala-origin": "Egyptian Marble Quarry",
"galala-slab-dimensions": "265-295 × 165-195 cm",
"galala-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"galala-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"galala-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"galala-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Samaha
"samahaModalLabel": "Samaha",
"samaha-material-name": "Samaha",
"samaha-material-type": "Marble",
"samaha-color": "Warm Beige",
"samaha-origin": "Egyptian Marble Quarry",
"samaha-slab-dimensions": "265-295 × 165-195 cm",
"samaha-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"samaha-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"samaha-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"samaha-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Sunny Dark
"sunnyDarkModalLabel": "Sunny Dark",
"sunny-dark-material-name": "Sunny Dark",
"sunny-dark-material-type": "Marble",
"sunny-dark-color": "Dark Golden",
"sunny-dark-origin": "Egyptian Marble Quarry",
"sunny-dark-slab-dimensions": "265-295 × 165-195 cm",
"sunny-dark-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"sunny-dark-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"sunny-dark-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"sunny-dark-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Maroon
"maroonModalLabel": "Maroon",
"maroon-material-name": "Maroon",
"maroon-material-type": "Marble",
"maroon-color": "Reddish Brown",
"maroon-origin": "Egyptian Marble Quarry",
"maroon-slab-dimensions": "265-295 × 165-195 cm",
"maroon-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"maroon-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"maroon-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"maroon-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Mil Brown
"milBrownModalLabel": "Mil Brown",
"mil-brown-material-name": "Mil Brown",
"mil-brown-material-type": "Marble",
"mil-brown-color": "Light Bronze",
"mil-brown-origin": "Egyptian Marble Quarry",
"mil-brown-slab-dimensions": "265-295 × 165-195 cm",
"mil-brown-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"mil-brown-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"mil-brown-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"mil-brown-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Serpentine Egyptian
"serpentineEgyptianModalLabel": "Egyptian Serpentine",
"serpentine-egyptian-material-name": "Egyptian Serpentine",
"serpentine-egyptian-material-type": "Marble",
"serpentine-egyptian-color": "Dark Green",
"serpentine-egyptian-origin": "Egyptian Marble Quarry",
"serpentine-egyptian-slab-dimensions": "265-295 × 165-195 cm",
"serpentine-egyptian-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"serpentine-egyptian-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"serpentine-egyptian-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"serpentine-egyptian-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Golden Cream
"goldenCreamModalLabel": "Golden Cream",
"golden-cream-material-name": "Golden Cream",
"golden-cream-material-type": "Marble",
"golden-cream-color": "Golden Creamy",
"golden-cream-origin": "Egyptian Marble Quarry",
"golden-cream-slab-dimensions": "265-295 × 165-195 cm",
"golden-cream-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"golden-cream-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"golden-cream-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"golden-cream-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Khatmia
"khatmiaModalLabel": "Khatmia",
"khatmia-material-name": "Khatmia",
"khatmia-material-type": "Marble",
"khatmia-color": "Light Pink",
"khatmia-origin": "Egyptian Marble Quarry",
"khatmia-slab-dimensions": "265-295 × 165-195 cm",
"khatmia-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"khatmia-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"khatmia-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"khatmia-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Alba Rosa
"albaRosaModalLabel": "Alba Rosa",
"alba-rosa-material-name": "Alba Rosa",
"alba-rosa-material-type": "Marble",
"alba-rosa-color": "Pink",
"alba-rosa-origin": "Egyptian Marble Quarry",
"alba-rosa-slab-dimensions": "265-295 × 165-195 cm",
"alba-rosa-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"alba-rosa-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"alba-rosa-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"alba-rosa-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Tumbled
"tumbledModalLabel": "Tumbled",
"tumbled-material-name": "Tumbled",
"tumbled-material-type": "Marble",
"tumbled-color": "Light Gray",
"tumbled-origin": "Egyptian Marble Quarry",
"tumbled-slab-dimensions": "265-295 × 165-195 cm",
"tumbled-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"tumbled-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"tumbled-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"tumbled-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Golden Sinai
"goldenSinaiModalLabel": "Golden Sinai",
"golden-sinai-material-name": "Golden Sinai",
"golden-sinai-material-type": "Marble",
"golden-sinai-color": "Light Golden",
"golden-sinai-origin": "Egyptian Marble Quarry",
"golden-sinai-slab-dimensions": "265-295 × 165-195 cm",
"golden-sinai-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"golden-sinai-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"golden-sinai-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"golden-sinai-uses": "Wall cladding, cut-to-size tiles, long strips",

// Modal: Sinai Pearl
"sinaiPearlModalLabel": "Sinai Pearl",
"sinai-pearl-material-name": "Sinai Pearl",
"sinai-pearl-material-type": "Marble",
"sinai-pearl-color": "Pearly White",
"sinai-pearl-origin": "Egyptian Marble Quarry",
"sinai-pearl-slab-dimensions": "265-295 × 165-195 cm",
"sinai-pearl-slab-thickness": "15-50 mm (up to 200 mm upon request)",
"sinai-pearl-tile-thickness": "10-40 mm (up to 200 mm upon request)",
"sinai-pearl-finishes": "Polished, Honed, Brushed, Acid, Sandblasted, Bush-hammered",
"sinai-pearl-uses": "Wall cladding, cut-to-size tiles, long strips",



  // Features Section
    "features-eg-marble-title": "Why Choose Egyptian Marble?",
    "feature-quality-title": "World-Class Quality",
    "feature-quality-desc": "High durability and globally competitive quality",
    "feature-colors-title": "Color Variety",
    "feature-colors-desc": "Colors and types to suit all tastes",
    "feature-price-title": "Competitive Prices",
    "feature-price-desc": "High quality at affordable prices",
    "feature-durability-title": "Long-Lasting Durability",
    "feature-durability-desc": "Long lifespan with a luxurious appearance",
    "feature-spaces-title": "Suitable for All Spaces",
    "feature-spaces-desc": "For flooring, walls, and kitchens",
    "feature-eco-title": "Eco-Friendly",
    "feature-eco-desc": "100% natural materials, harmless",
// Tips and FAQ Section
"tips-faq-title": "Tips and FAQs About Egyptian Marble",
"tips-title": "Tips for Choosing Egyptian Marble",
"tip-1": "Choose Galala marble for a light color and affordable price.",
"tip-2": "Measure the area accurately to avoid waste.",
"tip-3": "Use a protective sealant to resist stains.",
"faq-title": "Frequently Asked Questions",
"faq-question-1": "What is the difference between Egyptian and imported marble?",
"faq-answer-1-intro": "Egyptian marble is distinguished by:",
"faq-answer-1-item1": "More competitive prices.",
"faq-answer-1-item2": "High quality comparable to imported marble.",
"faq-answer-1-item3": "Reduced shipping time.",
"faq-answer-1-item4": "Support for local products.",
"faq-question-2": "How do I maintain Egyptian marble?",
"faq-answer-2-intro": "To protect Egyptian marble:",
"faq-answer-2-item1": "Use gentle, acid-free cleaning products",
"faq-answer-2-item2": "Apply a protective sealant every 6-12 months",
"faq-answer-2-item3": "Avoid prolonged exposure to colored liquids",
"faq-answer-2-item4": "Use coasters under hot cookware",
"faq-question-3": "What are the best types of Egyptian marble for kitchens?",
"faq-answer-3-intro": "The best options for kitchens:",
"faq-answer-3-item1": "Galala: Stain-resistant and easy to clean",
"faq-answer-3-item1-strong": "Galala:",
"faq-answer-3-item1-desc": "Stain-resistant and easy to clean",
"faq-answer-3-item2": "Sunny: Hides daily wear marks",
"faq-answer-3-item2-strong": "Sunny:",
"faq-answer-3-item2-desc": "Hides daily wear marks",
"faq-answer-3-item3": "Triesta: Modern and elegant look",
"faq-answer-3-item3-strong": "Triesta:",
"faq-answer-3-item3-desc": "Modern and elegant look",
"faq-answer-3-contact": "You can <a href='contact.html'>consult our experts</a> to choose the best option for your kitchen.",
"faq-answer-3-contact-link": "consult our experts",
"faq-question-4": "Can Egyptian marble be used in bathrooms?",
"faq-answer-4-intro": "Yes, with the following considerations:",
"faq-answer-4-item1": "Choose low-absorption types like Galala",
"faq-answer-4-item2": "Apply a water-resistant sealant",
"faq-answer-4-item3": "Clean regularly to prevent soap buildup",
"faq-answer-4-item4": "Ensure good bathroom ventilation",
"faq-cta-btn": "Contact us for any inquiries",

    // Call to Action
    "cta-title": "Ready to Help You Choose the Perfect Egyptian Marble",
    "cta-desc": "Contact us now for a free consultation and special offers",
    "cta-call-btn": "Call Now",
    "cta-whatsapp-btn": "WhatsApp",
    "cta-contact-btn": "Contact Us",
    "cta-browse-btn": "Browse Collection",
    "cta-visit-text": "Or visit our showroom at:",
    "cta-address": "Plot No. 39, Arab Abu Saed, Al-Saff, Helwan, Cairo",

    // Footer
    "footer-text": "© 2025 Nile Marble & Granite. All rights reserved.",
    "download-catalog": "Download Catalog",
    //////////////////////////
    /////////////////egyptian-granite
    // Meta Tags
    "page-title": "Egyptian Granite | Premium Natural Granite at Competitive Prices 2025 | Nile Marble",
    "meta-description": "The finest collection of Egyptian granite from Aswan, Halayeb, and Galala. Granite for kitchens, flooring, and facades with world-class quality and affordable prices.",
    // Breadcrumb
    "breadcrumb-home": "Home",
    "breadcrumb-current": "Egyptian Granite",

    // Hero Section
    "egyptian-granite-title": "Premium Egyptian Granite with World-Class Quality",
    "egyptian-granite-subtitle": "Exclusive Collection from Aswan and Halayeb Quarries 2025",
    "egyptian-granite-desc": "Egyptian granite renowned for its exceptional durability and unique natural designs, sourced from the finest quarries in Aswan, Halayeb, and Galala, ideal for kitchens, flooring, and facades.",

    // Granite Items
    "egyptian-granite-item1": "Halayeb Granite",
    "egyptian-granite-item1-desc": "Luxurious white-grey for kitchens and flooring",
    "egyptian-granite-item2": "New Halayeb Granite",
    "egyptian-granite-item2-desc": "Light grey modern for interior decor",
    "egyptian-granite-item3": "Company Grey Granite",
    "egyptian-granite-item3-desc": "Durable dark grey for flooring and kitchens",
    "egyptian-granite-item4": "Grey Granite",
    "egyptian-granite-item4-desc": "Elegant uniform color for stairs and facades",
    "egyptian-granite-item5": "Gandola Granite",
    "egyptian-granite-item5-desc": "Dark beige for outdoor flooring and decor",
    "egyptian-granite-item6": "Aswan Red Granite",
    "egyptian-granite-item6-desc": "Rich red for luxurious facades and decor",
    "egyptian-granite-item7": "Royal Red Granite",
    "egyptian-granite-item7-desc": "Deep red royal for kitchens and stairs",
    "egyptian-granite-item8": "Rosa Hody Granite",
    "egyptian-granite-item8-desc": "Distinctive pink for luxurious flooring",
    "egyptian-granite-item9": "Rosa Nasr Granite",
    "egyptian-granite-item9-desc": "Pink-grey for facades and kitchens",
    "egyptian-granite-item10": "Verdi Green Granite",
    "egyptian-granite-item10-desc": "Natural dark green for outdoor flooring",

    // Features Section
    "features-eg-granite-title": "Why Choose Egyptian Granite?",
    "feature1-eg-granite-title": "From Top Quarries",
    "feature1-eg-granite-desc": "Sourced from world-renowned Aswan and Halayeb quarries",
    "feature2-eg-granite-title": "Superior Durability",
    "feature2-eg-granite-desc": "Hardness of 6-7 on Mohs scale for scratch resistance",
    "feature3-eg-granite-title": "Natural Colors",
    "feature3-eg-granite-desc": "Unique designs with natural vein variations",

    // FAQ Section
    "faq-eg-granite-title": "Frequently Asked Questions About Egyptian Granite",
    "faq-eg-granite-question1": "What are the best types of Egyptian granite for kitchens?",
    "faq-eg-granite-answer1-intro": "Top 3 types for kitchen countertops:",
    "faq-eg-granite-answer1-item1": "<strong>Halayeb Granite:</strong> White-grey with high stain resistance.",
    "faq-eg-granite-answer1-item2": "<strong>New Halayeb Granite:</strong> Modern design with light colors.",
    "faq-eg-granite-answer1-item3": "<strong>Company Grey Granite:</strong> Exceptional durability and smooth surface.",
    "faq-answer1-recommend": "We recommend applying a protective sealer to maintain shine. <a href=\"services.html\">Learn about our services</a>.",
    "faq-eg-granite-question2": "What are the best types of Egyptian granite for exterior facades?",
    "faq-eg-granite-answer2-intro": "Top 3 types for facades:",
    "faq-eg-granite-answer2-item1": "<strong>Aswan Red Granite:</strong> Distinctive red color with high weather resistance.",
    "faq-eg-granite-answer2-item2": "<strong>Company Grey Granite:</strong> Superior durability and cost-effective.",
    "faq-eg-granite-answer2-item3": "<strong>Gandola Granite:</strong> Attractive natural designs for facades.",
    "faq-answer2-tip-title": "Tip:",
    "faq-answer2-tip": "We recommend applying a <a href=\"services.html\">protective coating</a> annually to maintain appearance.",
    "faq-eg-granite-question3": "How does Egyptian granite compare to imported granite?",
    "faq-answer3-table-header1": "Comparison Aspect",
    "faq-answer3-table-header2": "Egyptian Granite",
    "faq-answer3-table-header3": "Imported Granite",
    "faq-answer3-table-row1-col1": "Price",
    "faq-answer3-table-row1-col2": "<i class=\"fas fa-check text-success\"></i> More economical (20-30% cheaper)",
    "faq-answer3-table-row1-col3": "<i class=\"fas fa-times text-danger\"></i> Higher price",
    "faq-answer3-table-row2-col1": "Availability",
    "faq-answer3-table-row2-col2": "<i class=\"fas fa-check text-success\"></i> Available in large quantities",
    "faq-answer3-table-row2-col3": "<i class=\"fas fa-times text-danger\"></i> May require shipping delays",
    "faq-answer3-table-row3-col1": "Manufacturing Quality",
    "faq-answer3-table-row3-col2": "Comparable when choosing a trusted supplier",
    "faq-answer3-contact": "For a <strong>free consultation</strong>, <a href=\"contact.html\">contact our experts</a>.",
    "faq-eg-granite-question4": "How to clean Egyptian granite without damaging it?",
    "faq-answer4-text": "Use pH-neutral cleaners like diluted liquid soap with water. Avoid acidic substances like vinegar or lemon. Wipe with a soft cloth and dry to maintain shine. <a href=\"blog/granite-care.html\">Read our granite care guide</a>.",
    // CTA Section
    "cta-title": "Order Egyptian Granite at the Best Prices",
    "cta-consultation": "Request a Free Consultation",
    "cta-call": "Call Us",

    /////////////////////////////
    /////////////////////////////////
    
    // imported-marble.html Translations
    "page-title-imported-marble": "Imported Marble | Premium Italian and Turkish Marble at Competitive Prices | Nile Marble",
    "meta-description-imported-marble": "The finest imported marble from Italy, Turkey, and Spain at competitive prices. Wide collection for flooring, kitchens, and bathrooms with world-class supply and installation.",
    "breadcrumb-current-imported-marble": "Imported Marble",
    "imported-marble-title": "Premium Imported Marble",
    "imported-marble-subtitle": "Luxurious Collection of Italian, Turkish, and Spanish Marble 2025",
    "imported-marble-desc": "Discover the finest imported marble from Italy, Turkey, and Spain, ideal for luxurious flooring, modern kitchens, and bathrooms with elegant designs and exceptional durability.",
    // Marble Items
    "marble-item1": "Onyx Brown",
    "marble-item1-desc": "Luxurious brown marble for kitchens and bathrooms",
    "marble-item2": "Atlantic White",
    "marble-item2-desc": "Pure white marble for luxurious flooring",
    "marble-item3": "Athena White",
    "marble-item3-desc": "Classic marble for bathrooms and kitchens",
    "marble-item4": "Arabescato Grigio Orobico",
    "marble-item4-desc": "Modern grey marble for flooring",
    "marble-item5": "Arabescato Cervaioli",
    "marble-item5-desc": "Luxurious marble for kitchens and bathrooms",
    "marble-item6": "Arabescato Carrara",
    "marble-item6-desc": "Elegant Italian marble for flooring",
    "marble-item7": "Ardesia a Spacco",
    "marble-item7-desc": "Dark marble for facades and flooring",
    "marble-item8": "Afyon Unito",
    "marble-item8-desc": "Creamy marble for classic kitchens",
    "marble-item9": "Afyon Venato",
    "marble-item9-desc": "Luxurious marble for flooring and bathrooms",
    "marble-item10": "Aqua Grey",
    "marble-item10-desc": "Modern grey marble for bathrooms",
    "marble-item11": "Emperador Dark",
    "marble-item11-desc": "Dark brown marble for luxurious kitchens",
    "marble-item12": "Emperador Light",
    "marble-item12-desc": "Light brown marble for flooring",
    "marble-item13": "Emperador",
    "marble-item13-desc": "Elegant brown marble for bathrooms",
    "marble-item14": "Orio",
    "marble-item14-desc": "Black and white marble for flooring",
    "marble-item15": "Onyx Blue",
    "marble-item15-desc": "Luxurious blue marble for bathrooms",
    "marble-item16": "Onyx",
    "marble-item16-desc": "Luxurious translucent marble for lighting",
    "marble-item17": "Panda White",
    "marble-item17-desc": "Monochromatic marble for modern kitchens",
    "marble-item18": "Perlato Sicilia Italian",
    "marble-item18-desc": "Creamy marble for luxurious flooring",
    "marble-item19": "Breccia Aurora",
    "marble-item19-desc": "Luxurious brown marble for bathrooms",
    "marble-item20": "Breccia Daino",
    "marble-item20-desc": "Classic marble for flooring",
    "marble-item21": "Portoro White",
    "marble-item21-desc": "Luxurious white marble for kitchens",
    "marble-item22": "Portoro Gold",
    "marble-item22-desc": "Elegant golden marble for bathrooms",
    "marble-item23": "Bony White",
    "marble-item23-desc": "Pure white marble for flooring",
    "marble-item24": "Bianco Sivec Brazilian",
    "marble-item24-desc": "White marble for modern kitchens",
    "marble-item25": "Travertino Walnut Iranian",
    "marble-item25-desc": "Classic marble for flooring",
    "marble-item26": "Grey Marble",
    "marble-item26-desc": "Modern grey marble for bathrooms",
    "marble-item27": "Rosa Arabico",
    "marble-item27-desc": "Elegant pink marble for flooring",
    "marble-item28": "Rosa Portogallo",
    "marble-item28-desc": "Classic pink marble for bathrooms",
    "marble-item29": "Rosa Levante",
    "marble-item29-desc": "Luxurious pink marble for kitchens",
    "marble-item30": "Soha White",
    "marble-item30-desc": "Pure white marble for flooring",
    "marble-item31": "Carrara Italian",
    "marble-item31-desc": "Luxurious white marble for stairs and kitchens",
    "marble-item32": "Carrara Turkish",
    "marble-item32-desc": "Economical white marble for flooring",
    "marble-item33": "Maysk White",
    "marble-item33-desc": "Glossy white marble for bathrooms",
    "marble-item34": "Pure Pink",
    "marble-item34-desc": "Elegant pink marble for kitchens",
    "marble-item35": "Himalayan White Onyx",
    "marble-item35-desc": "Translucent marble for lighting and decor",
    "marble-item36": "White Breeze",
    "marble-item36-desc": "Modern white marble for bathrooms",
    "marble-item37": "Panda White 2",
    "marble-item37-desc": "Monochromatic marble for modern kitchens",
    "marble-item38": "Indian Onyx",
    "marble-item38-desc": "Translucent marble for decor and lighting",
    "marble-item39": "Indo Italian",
    "marble-item39-desc": "Luxurious marble for flooring",
    // Show More Button
    "showMoreBtn": "Show More",
    // Features Section
    "features-title-imported-marble": "Why Choose Imported Marble?",
    "feature1-title-imported-marble": "Luxurious Designs",
    "feature1-desc-imported-marble": "Variety of colors and patterns like Carrara Italian and Emperador Dark",
    "feature2-title-imported-marble": "High Quality",
    "feature2-desc-imported-marble": "Stain and scratch resistant with a sealer",
    "feature3-title-imported-marble": "Global Sources",
    "feature3-desc-imported-marble": "Imported from Italy, Turkey, and Spain with guaranteed quality",
    // FAQ Section
    "faq-title-imported-marble": "Frequently Asked Questions About Imported Marble",
    "faq-question1-imported-marble": "How to choose imported marble for my kitchen?",
    "faq-answer1-imported-marble": "Choose a type like <strong>Carrara Italian</strong> for a pure white look, or <strong>Emperador Dark</strong> for an elegant dark color due to its stain resistance with a sealer. Check out <a href='imported-marble.html'>our collection</a> to pick the right one.",
    "faq-question2-imported-marble": "What is the difference between imported and local marble?",
    "faq-answer2-imported-marble": "Imported marble stands out with:<ul><li><strong>Color Variety:</strong> Like <strong>Carrara Italian</strong> and <strong>Emperador Dark</strong> with unique patterns.</li><li><strong>Lower Porosity:</strong> Makes it more stain-resistant compared to local marble.</li><li><strong>Luxurious Designs:</strong> Ideal for high-end projects.</li></ul>Egyptian marble may be <strong>more cost-effective</strong> for some projects. <a href='contact.html'>Contact us</a> to help you choose.",
    "faq-question3-imported-marble": "Where to find imported marble at affordable prices in Cairo?",
    "faq-answer3-imported-marble": "At Nile for Marble and Granite, we offer a wide range of imported marble at competitive prices. Visit <a href='contact.html'>our Cairo showroom</a> or <a href='tel:+201000392433'>call now</a> for a quote.",
    "faq-question4-imported-marble": "Is imported marble suitable for flooring?",
    "faq-answer4-imported-marble": "Yes, especially types like <strong>Perlato Sicilia Italian</strong> or <strong>Emperador Light</strong>, which offer high durability and scratch resistance. We recommend applying a sealer annually. <a href='services.html'>Learn about our installation services</a>.",
    "faq-question5-imported-marble": "How to clean imported marble without damaging it?",
    "faq-answer5-imported-marble": "Use pH-neutral cleaners like diluted liquid soap with water. Avoid abrasive substances like baking soda or vinegar. Wipe with a soft cloth and dry to maintain shine. <a href='blog/marble-care.html'>Read our marble care guide</a>.",
    "faq-question6-imported-marble": "How much is the price of imported marble per meter in Egypt 2025?",
    "faq-answer6-imported-marble": "Prices vary by type and origin:<table class='table table-bordered'><tr><th>Type</th><th>Price (per meter)</th></tr><tr><td>Carrara Italian</td><td>EGP 1,500 - 2,200</td></tr><tr><td>Emperador Dark (Spanish)</td><td>EGP 1,000 - 1,600</td></tr></table><p class='text-muted'>Prices may vary based on quantity and location. <a href='tel:+201000392433'>Call now</a> for an accurate quote.</p>",
    // CTA Section
    "cta-title-imported-marble": "Ready to Help You Choose the Perfect Imported Marble",
    "cta-consultation-imported-marble": "Request a Free Consultation",
    "cta-call-imported-marble": "<i class='fas fa-phone me-2'></i> Call Us",
    ///////////////////////////
    /////////////imported granite
    // Breadcrumb
    "breadcrumb-home": "Home",
    "breadcrumb-imported-granite": "Imported Granite",

    // Hero Section
    "imported-granite-title": "Premium Imported Granite",
    "imported-granite-desc": "Discover a wide range of imported granite from India, Brazil, and Italy, perfect for kitchens, flooring, and facades with unique designs and exceptional durability.",

    // Granite Items (54 items)
   // Granite Items (كاملة من 1 إلى 54)
   "granite-item1": "Red Kenti",
   "granite-item1-desc": "Brazilian granite with a vibrant red color, ideal for kitchens",
   "granite-item2": "Indian Green",
   "granite-item2-desc": "Rich green color for luxurious flooring and facades",
   "granite-item3": "Arizona Granite",
   "granite-item3-desc": "Modern design for kitchen and bathroom surfaces",
   "granite-item4": "Azul Shilo",
   "granite-item4-desc": "Durable Brazilian granite for exterior facades",
   "granite-item5": "Scorpio Brown",
   "granite-item5-desc": "Warm brown color for traditional kitchens",
   "granite-item6": "Royal Red",
   "granite-item6-desc": "Luxurious granite for kitchen countertops and flooring",
   "granite-item7": "Alhena",
   "granite-item7-desc": "Elegant design for bathrooms and kitchens",
   "granite-item8": "Black Ice",
   "granite-item8-desc": "Durable black granite for exterior facades",
   "granite-item9": "Black Gold",
   "granite-item9-desc": "Black granite with golden veins for luxury",
   "granite-item10": "Porto Gold",
   "granite-item10-desc": "Granite with golden hues for kitchens",
   "granite-item11": "Tatink",
   "granite-item11-desc": "Unique colored granite for luxurious flooring",
   "granite-item12": "Tropical Brown",
   "granite-item12-desc": "Natural brown color for kitchens and bathrooms",
   "granite-item13": "Tricato Gold Newwave",
   "granite-item13-desc": "Modern golden granite for surfaces",
   "granite-item14": "Tricato Gold",
   "granite-item14-desc": "Luxurious golden granite for kitchens",
   "granite-item15": "River Book",
   "granite-item15-desc": "Granite with a natural design for facades",
   "granite-item16": "Rainforest Brown",
   "granite-item16-desc": "Warm brown granite for flooring",
   "granite-item17": "Sea Rock",
   "granite-item17-desc": "Granite with a marine design for bathrooms",
   "granite-item18": "Cecilia",
   "granite-item18-desc": "Creamy granite for classic kitchens",
   "granite-item19": "Silver Gray",
   "granite-item19-desc": "Modern gray granite for surfaces",
   "granite-item20": "Ferrus Wood",
   "granite-item20-desc": "Granite with a wooden appearance for flooring",
   "granite-item21": "Volcano White",
   "granite-item21-desc": "Pure white granite for modern kitchens",
   "granite-item22": "Vintage Panda",
   "granite-item22-desc": "Monochrome granite for luxurious bathrooms",
   "granite-item23": "Cobra",
   "granite-item23-desc": "Granite with a distinctive design for facades",
   "granite-item24": "Coffee Wood",
   "granite-item24-desc": "Warm brown granite for flooring",
   "granite-item25": "Kiwi Anox",
   "granite-item25-desc": "Granite with a unique design for kitchens",
   "granite-item26": "Nero Spanish",
   "granite-item26-desc": "Glossy black granite for luxurious surfaces",
   "granite-item27": "Wooden Sun Mica",
   "granite-item27-desc": "Granite with a wooden appearance for flooring",
   "granite-item28": "Yin Yang",
   "granite-item28-desc": "Granite with a balanced design for bathrooms",
   "granite-item29": "Himalayan Blue",
   "granite-item29-desc": "Rich blue granite for facades",
   "granite-item30": "Indian Juparana",
   "granite-item30-desc": "Natural Indian granite for flooring",
   "granite-item31": "Dark Green",
   "granite-item31-desc": "Dark green granite for facades",
   "granite-item32": "Forest Green",
   "granite-item32-desc": "Natural green granite for flooring",
   "granite-item33": "Ice White",
   "granite-item33-desc": "Pure white granite for modern kitchens",
   "granite-item34": "Jaiselmer Gold",
   "granite-item34-desc": "Golden granite for luxurious kitchens",
   "granite-item35": "New Viscount White",
   "granite-item35-desc": "White granite for modern bathrooms",
   "granite-item36": "Paradiso Classico",
   "granite-item36-desc": "Classic granite for flooring",
   "granite-item37": "RF Brown",
   "granite-item37-desc": "Rich brown granite for kitchens",
   "granite-item38": "Indian Forest Black",
   "granite-item38-desc": "Dark black granite for facades",
   "granite-item39": "Mercury Black",
   "granite-item39-desc": "Glossy black granite for surfaces",
   "granite-item40": "Rainforest Green",
   "granite-item40-desc": "Rich green granite for flooring",
   "granite-item41": "River Blue",
   "granite-item41-desc": "Natural blue granite for facades",
   "granite-item42": "Galaxy Star",
   "granite-item42-desc": "Luxurious Indian granite for kitchens",
   "granite-item43": "Earth Green",
   "granite-item43-desc": "Natural green granite for flooring",
   "granite-item44": "Glacier White",
   "granite-item44-desc": "Pure white granite for kitchens",
   "granite-item45": "Fantasy Slab",
   "granite-item45-desc": "Granite with a unique design for surfaces",
   "granite-item46": "Hassan Green",
   "granite-item46-desc": "Rich green granite for flooring",
   "granite-item47": "Imperial White",
   "granite-item47-desc": "Luxurious white granite for kitchens",
   "granite-item48": "Ivory Brown",
   "granite-item48-desc": "Warm brown granite for flooring",
   "granite-item49": "Moon White",
   "granite-item49-desc": "Glossy white granite for bathrooms",
   "granite-item50": "Panda White",
   "granite-item50-desc": "Monochrome granite for modern kitchens",
   "granite-item51": "Raymond",
   "granite-item51-desc": "Granite with a modern design for surfaces",
   "granite-item52": "Tan Brown",
   "granite-item52-desc": "Rich brown granite for kitchens",
   "granite-item53": "New Imperial Red",
   "granite-item53-desc": "Luxurious red granite for flooring",
   "granite-item54": "White Galaxy",
   "granite-item54-desc": "Glossy white granite for kitchens",
   // Features Section
    "features-imp-granite-title": "Why Choose Imported Granite?",
    "feature1-imp-granite-title": "Unique Designs",
    "feature1-imp-granite-desc": "Variety of colors and patterns like Galaxy Star and Azul Shilo for a luxurious look",
    "feature2-imp-granite-title": "High Durability",
    "feature2-imp-granite-desc": "Resistant to scratches, heat, and stains for long-term use",
    "feature3-imp-granite-title": "Global Sources",
    "feature3-imp-granite-desc": "Sourced from India, Brazil, and Italy with guaranteed quality",

    // FAQ Section
  // FAQ Section
  "faq-imp-gra-title": "Frequently Asked Questions About Imported Granite",
  "faq-imp-gra-question1": "What is the best type of imported granite for kitchen countertops?",
  "faq-imp-gra-answer1": "Granite like <strong>Galaxy Star</strong> and <strong>Royal Red</strong> is ideal for kitchen countertops due to its durability and beauty. Check out <a href=\"imported-granite.html\">our collection</a> to choose the right one.",
  "faq-imp-gra-question2": "What are the advantages of imported granite compared to local granite?",
  "faq-imp-gra-answer2": "Imported granite offers:<ul><li><strong>Color Variety:</strong> Unique options like <a href=\"/imported-granite.html\">Royal Red</a> and <strong>Galaxy Star</strong> not available locally.</li><li><strong>Higher Hardness:</strong> Types like <strong>Black Ice</strong> offer superior scratch resistance.</li><li><strong>Unique Patterns:</strong> Natural veining in Brazilian <strong>Azul Shilo</strong>.</li></ul>Egyptian granite may be <strong>more cost-effective</strong> for some projects. <a href=\"contact.html\">Contact us</a> to help you choose.",
  "faq-imp-gra-question3": "How much is the price per meter of imported granite in Egypt 2025?",
  "faq-imp-gra-answer3": "Prices vary by type and origin:<table class=\"table table-bordered\"><tr><th>Type</th><th>Price (per meter)</th></tr><tr><td>Red Kenti Granite (Brazilian)</td><td>EGP 1,200 - 1,800</td></tr><tr><td>Galaxy Star Granite (Indian)</td><td>EGP 900 - 1,400</td></tr></table><p class=\"text-muted\">Prices may vary based on quantity and location. <a href=\"tel:+201000392433\">Call now</a> for an accurate quote.</p>",
  "faq-imp-gra-question4": "What is the best type of imported granite for exterior facades?",
  "faq-imp-gra-answer4": "<p>Suitable granite types for facades:</p><ol><li><strong>Black Ice:</strong> Weather-resistant with a dark color that hides dust.</li><li><strong>Azul Shilo:</strong> High durability and attractive design.</li></ol><p>We recommend applying a <strong>protective sealant</strong> annually to maintain appearance. <a href=\"services.html\">Learn about our installation services</a>.</p>",
  "faq-imp-gra-question5": "How can I tell if imported granite is authentic or fake?",
  "faq-imp-gra-answer5": "<p>Here are 3 ways to identify authentic granite:</p><ul><li><strong>Certificate:</strong> Ensure a <strong>certificate of origin</strong> from the producing country (e.g., India or Brazil).</li><li><strong>Consistency:</strong> Authentic granite has natural, non-repetitive veining.</li><li><strong>Absorption:</strong> Place a drop of water; if absorbed quickly, it may be fake.</li></ul><div class=\"alert alert-warning\">Beware of very low prices! <a href=\"blog/how-to-spot-fake-granite.html\">Read our full guide</a>.</div>",
  "faq-imp-gra-question6": "Which countries are the best for importing granite?",
  "faq-imp-gra-answer6": "<div class=\"row\"><div class=\"col-md-6\"><h5>1. India</h5><p>Popular types: <strong>Galaxy Star</strong>, <strong>Indian Green</strong>.<br>Advantages: Competitive prices, unique colors.</p></div><div class=\"col-md-6\"><h5>2. Brazil</h5><p>Popular types: <strong>Azul Shilo</strong>, <strong>Red Kenti</strong>.<br>Advantages: High durability, unique designs.</p></div></div><p class=\"mt-3\">At <strong>Nile for Granite</strong>, we import directly from quarries to avoid middlemen. <a href=\"about.html\">Learn about our sources</a>.</p>",

    // CTA Section
    "cta-imp-gra-title": "Ready to Help You Choose the Perfect Imported Granite",
    "cta-button1": "Request a Free Consultation",
    "cta-button2": "Contact Us",
  // Page Title and Meta Description
  "page-title-imported-granite": "Imported Granite | Finest Indian and Brazilian Granite 2025 | Nile for Marble",
  "meta-description-imported-granite": "Explore a luxurious collection of imported granite from India, Brazil, and Italy for kitchens, flooring, and facades with world-class quality and competitive prices in 2025.",
  //////////////////////////////////////////////////
//////////////////////////////////////////quartz
// Breadcrumb
"breadcrumb-home": "Home",
"breadcrumb-products": "Products",
"breadcrumb-quartz": "Quartz",
// Hero Section
"quartz-title": "High-Quality Quartz for Kitchen and Bathroom Countertops",
"quartz-subtitle": "Quartz is an engineered stone made of 93% natural quartz and 7% resin, making it more resistant to scratches and stains compared to natural marble.",
// Quartz Items
"quartz-item1": "Classic White Quartz",
"quartz-item1-desc": "Ideal for modern kitchens, stain-resistant",
"quartz-item2": "Modern Gray Quartz",
"quartz-item2-desc": "Sleek design for luxury bathrooms",
"quartz-item3": "Glossy Black Quartz",
"quartz-item3-desc": "Adds a touch of elegance to any space",
"quartz-item4": "Warm Beige Quartz",
"quartz-item4-desc": "Perfect for traditional kitchens",
"quartz-item5": "Marble White Quartz",
"quartz-item5-desc": "Luxury design for large kitchens",
"quartz-item6": "Light Gray Quartz",
"quartz-item6-desc": "Offers a clean and modern look",
"quartz-item7": "Matte Black Quartz",
"quartz-item7-desc": "Ideal for contemporary designs",
"quartz-item8": "Pearly White Quartz",
"quartz-item8-desc": "Adds a glossy elegance to surfaces",
"quartz-item9": "Dark Gray Quartz",
"quartz-item9-desc": "Provides a bold and modern appearance",
"quartz-item10": "Light Beige Quartz",
"quartz-item10-desc": "Ideal for warm spaces",
"quartz-item11": "Pure White Quartz",
"quartz-item11-desc": "Simple and elegant design for kitchens",
"quartz-item12": "Marble Black Quartz",
"quartz-item12-desc": "Adds a dramatic touch to surfaces",
"quartz-item13": "Glossy Gray Quartz",
"quartz-item13-desc": "Ideal for modern bathrooms",
"quartz-item14": "Marble Beige Quartz",
"quartz-item14-desc": "Classic design for kitchens",
"quartz-item15": "White Quartz with Speckles",
"quartz-item15-desc": "Offers a unique look for surfaces",
"quartz-item16": "Striped Gray Quartz",
"quartz-item16-desc": "Modern design for large spaces",
"quartz-item17": "Black Quartz with White Spots",
"quartz-item17-desc": "Ideal for bold designs",
"quartz-item18": "White Quartz with Gray Veins",
"quartz-item18-desc": "Sophisticated design for kitchens",
"quartz-item19": "Gray Quartz with Spots",
"quartz-item19-desc": "Adds an artistic touch to surfaces",
"quartz-item21": "Glossy Beige Quartz",
"quartz-item21-desc": "Ideal for luxury bathrooms",
"quartz-item22": "White Quartz with Black Speckles",
"quartz-item22-desc": "Distinctive design for modern kitchens",
"quartz-item23": "Black Quartz with White Veins",
"quartz-item23-desc": "Adds a touch of luxury to surfaces",
"quartz-item24": "Glossy Light Gray Quartz",
"quartz-item24-desc": "Clean design for modern spaces",
"quartz-item26": "Beige Quartz with Veins",
"quartz-item26-desc": "Ideal for classic kitchens",
"quartz-item27": "White Quartz with Gray Spots",
"quartz-item27-desc": "Unique design for surfaces",
"quartz-item29": "Gray Quartz with White Veins",
"quartz-item29-desc": "Elegant design for bathrooms",
"quartz-item30": "Glossy Light Beige Quartz",
"quartz-item30-desc": "Ideal for warm spaces",
"quartz-item32": "White Quartz with Veins",
"quartz-item32-desc": "Distinctive design for modern kitchens",
"quartz-item33": "Gray Quartz with White Speckles",
"quartz-item33-desc": "Adds an artistic touch to surfaces",
"quartz-item34": "Black Quartz with Speckles",
"quartz-item34-desc": "Offers a bold look for kitchens",
"quartz-item35": "Glossy Black Quartz with Veins",
"quartz-item35-desc": "Ideal for luxury designs",
"quartz-item36": "Beige Quartz with Gray Spots",
"quartz-item36-desc": "Classic design for kitchens",
"quartz-item37": "White Quartz with Black Spots",
"quartz-item37-desc": "Offers a bold look for surfaces",
"quartz-item38": "Gray Quartz with Black Veins",
"quartz-item38-desc": "Modern design for bathrooms",
"quartz-item39": "Glossy White Quartz with Speckles",
"quartz-item39-desc": "Ideal for luxury kitchens",
// Features Section
"features-quartz-title": "Why Choose Quartz?",
"feature1-quartz-title": "Scratch-Resistant",
"feature1-quartz-desc": "Hardness of 7 on Mohs scale makes it highly durable for daily use",
"feature2-quartz-title": "Stain-Resistant",
"feature2-quartz-desc": "Non-porous surface does not absorb liquids or oils",
"feature3-quartz-title": "Easy to Clean",
"feature3-quartz-desc": "Requires no polishing or regular maintenance",
// FAQ Section
"faq-quartz-title": "Frequently Asked Questions About Quartz",
"faq-quartz-question1": "Is quartz suitable for kitchen countertops?",
"faq-quartz-answer1": "<p>Yes, quartz is <strong>the optimal choice</strong> for kitchen countertops due to:</p><ul><li>High scratch resistance</li><li>Non-absorbent to stains</li><li>Variety of colors and designs</li></ul>",
"faq-quartz-question2": "What is the difference between quartz and engineered marble?",
"faq-quartz-answer2": `<p>Main differences:</p>
  <table class="table table-bordered">
    <tr><th>Comparison</th><th>Quartz</th><th>Engineered Marble</th></tr>
    <tr><td>Composition</td><td>93% natural quartz + 7% resin</td><td>80% calcium carbonate + 20% resin</td></tr>
    <tr><td>Resistance</td><td>More resistant to scratches and stains</td><td>Less resistant, requires regular maintenance</td></tr>
    <tr><td>Price</td><td>15-20% higher</td><td>More economical</td></tr>
  </table>
  <p>For kitchens, we recommend <strong>quartz</strong> for its durability, while engineered marble can be used in bathrooms to save costs.</p>`,
"faq-quartz-question3": "How to properly clean quartz surfaces?",
"faq-quartz-answer3": `<div class="row">
    <div class="col-md-6">
      <h5>What to do:</h5>
      <ul class="list-check">
        <li>Use a soft cloth dampened with warm water</li>
        <li>Use mild soap free of alcohol</li>
        <li>Dry the surface after cleaning</li>
      </ul>
    </div>
    <div class="col-md-6">
      <h5>What to avoid:</h5>
      <ul class="list-cross">
        <li>Abrasive materials (e.g., steel wool)</li>
        <li>Acidic cleaners (e.g., lemon-based)</li>
        <li>Direct exposure to high temperatures</li>
      </ul>
    </div>
  </div>`,
"faq-table-comparison": "Comparison",
"faq-table-quartz": "Quartz",
"faq-table-engineered-marble": "Engineered Marble",
"faq-table-composition": "Composition",
"faq-table-quartz-composition": "93% natural quartz + 7% resin",
"faq-table-marble-composition": "80% calcium carbonate + 20% resin",
"faq-table-resistance": "Resistance",
"faq-table-quartz-resistance": "More resistant to scratches and stains",
"faq-table-marble-resistance": "Less resistant, requires regular maintenance",
"faq-table-price": "Price",
"faq-table-quartz-price": "15-20% higher",
"faq-table-marble-price": "More economical",
"faq-table-recommendation": "For kitchens, we recommend <strong>quartz</strong> for its durability, while engineered marble can be used in bathrooms to save costs.",
"faq-do-title": "What to do:",
"faq-do1": "Use a soft cloth dampened with warm water",
"faq-do2": "Use mild soap free of alcohol",
"faq-do3": "Dry the surface after cleaning",
"faq-avoid-title": "What to avoid:",
"faq-avoid1": "Abrasive materials (e.g., steel wool)",
"faq-avoid2": "Acidic cleaners (e.g., lemon-based)",
"faq-avoid3": "Direct exposure to high temperatures",
// CTA Section
"cta-title": "Ready to Help You Choose the Perfect Quartz",
"cta-consultation": "Request a Free Consultation",
"cta-call": "Call Us",

/////////////////////////////////
//////////////////////////Equipment-page
 // Breadcrumb
 "breadcrumb-home": "Home",
 "breadcrumb-equipment": "Machinery & Equipment",
 // Hero Section
 "hero-title": "Machinery & Equipment",
 "hero-subtitle": "The latest global technologies for manufacturing marble and granite with high efficiency and quality",
 "hero-button": "Browse Equipment",
 // Features Section
 "features-title": "Why Choose Nile's Equipment?",
 "feature1-title": "3-Year Warranty",
 "feature1-desc": "Comprehensive warranty on all equipment with periodic maintenance services",
 "feature2-title": "Installation & Training",
 "feature2-desc": "Specialized technical team for installation and operator training",
 "feature3-title": "Fast Shipping",
 "feature3-desc": "Equipment delivery within 45 days from the order date",
 // Equipment Section
 "equipment-title": "Our Machinery & Equipment",
 "equipment1-title": "Haien Polishing Machine",
 "equipment1-desc": "Italian Di Rossi motors, German electrical components",
 "equipment1-button": "View Details",
 "equipment2-title": "Haien or BM Saw",
 "equipment2-desc": "High-quality saw for precise marble and granite cutting",
 "equipment2-button": "View Details",
 "equipment3-title": "Granite Block Cutting Machine",
 "equipment3-desc": "24 blades, bridge width over 9 meters",
 "equipment3-button": "View Details",
 "equipment4-title": "Granite Polishing Machines",
 "equipment4-desc": "Advanced polishing machines for high-quality granite finishing",
 "equipment4-button": "View Details",
 "equipment5-title": "Automatic CNC Router",
 "equipment5-desc": "For precise and high-speed marble and granite cutting",
 "equipment5-button": "View Details",
 "equipment6-title": "Original Spare Parts",
 "equipment6-desc": "All spare parts available in our warehouses",
 "equipment6-button": "View Details",
 // Partners Section
 "partners-title": "Our International Partners",
 // FAQ Section
 "faq-title": "Frequently Asked Questions",
 "faq-question1": "What is the warranty period for the equipment?",
 "faq-answer1": "All our equipment comes with a 3-year factory warranty on main components, with original spare parts available in our warehouses in Egypt. We also provide periodic maintenance and comprehensive inspections every 6 months.",
 "faq-question2": "Do you provide installation and training services?",
 "faq-answer2": "Yes, we have a specialized technical team that handles equipment installation and trains operators for optimal performance. Training includes basic operation, daily maintenance, and troubleshooting minor issues.",
 "faq-question3": "What is the delivery time after placing an order?",
 "faq-answer3": "Delivery time ranges between 45-60 days from the date of order confirmation and payment. For urgent projects, we offer expedited shipping within 30 days for an additional fee.",
 // CTA Section
 "cta-title": "Ready to Start Your Project?",
 "cta-subtitle": "We offer a wide range of imported machinery from the world’s top manufacturers. Contact us today for a free consultation!",
 "cta-call": "Call Now",
 "cta-whatsapp": "WhatsApp",
 "cta-message": "Send a Message",
 // Modals
 "modal1-title": "Haien Polishing Machine - Technical Specifications",
 "modal1-specs": "Main Specifications:",
 "modal1-spec1": "Italian Di Rossi motors",
 "modal1-spec2": "German electrical components",
 "modal1-spec3": "Advanced PLC control system",
 "modal1-spec4": "Touchscreen control panel",
 "modal1-spec5": "Remote programming and control capabilities",
 "modal1-performance": "Performance:",
 "modal1-performance1": "Operating Speed",
 "modal1-performance1-value": "95%",
 "modal1-performance2": "Energy Efficiency",
 "modal1-performance2-value": "80%",
 "modal1-quote": "Request a Quote",
 "modal1-close": "Close",
 "modal2-title": "Haien or BM Saw - Technical Specifications",
 "modal2-specs": "Main Specifications:",
 "modal2-spec1": "Cutting capacity up to 300 mm",
 "modal2-spec2": "Water cooling system",
 "modal2-spec3": "High-quality diamond blade",
 "modal2-spec4": "Automatic clamping system",
 "modal2-spec5": "Digital control panel",
 "modal2-performance": "Performance:",
 "modal2-performance1": "Cutting Precision",
 "modal2-performance1-value": "98%",
 "modal2-performance2": "Production Speed",
 "modal2-performance2-value": "90%",
 "modal2-quote": "Request a Quote",
 "modal2-close": "Close",
 "modal3-title": "Granite Block Cutting Machine - Technical Specifications",
 "modal3-specs": "Main Specifications:",
 "modal3-spec1": "24 cutting blades",
 "modal3-spec2": "Bridge width over 9 meters",
 "modal3-spec3": "Machine weight 25 tons",
 "modal3-spec4": "Advanced PLC control system",
 "modal3-spec5": "Productivity up to 1000 m²/day",
 "modal3-performance": "Performance:",
 "modal3-performance1": "Operational Efficiency",
 "modal3-performance1-value": "95%",
 "modal3-performance2": "Energy Efficiency",
 "modal3-performance2-value": "80%",
 "modal3-quote": "Request a Quote",
 "modal3-close": "Close",
 "modal4-title": "Granite Polishing Machines - Technical Specifications",
 "modal4-specs": "Main Specifications:",
 "modal4-spec1": "Multiple polishing heads (12-24)",
 "modal4-spec2": "Automatic control system",
 "modal4-spec3": "High-precision smooth polishing surface",
 "modal4-spec4": "Energy-efficient motors",
 "modal4-spec5": "Corrosion-resistant design",
 "modal4-performance": "Performance:",
 "modal4-performance1": "Polishing Efficiency",
 "modal4-performance1-value": "88%",
 "modal4-performance2": "Energy Efficiency",
 "modal4-performance2-value": "72%",
 "modal4-quote": "Request a Quote",
 "modal4-close": "Close",
 "modal5-title": "Automatic CNC Router - Technical Specifications",
 "modal5-specs": "Main Specifications:",
 "modal5-spec1": "Cutting precision up to 0.1 mm",
 "modal5-spec2": "CNC control system",
 "modal5-spec3": "High operating speed",
 "modal5-spec4": "Vibration-resistant design",
 "modal5-spec5": "Diamond cutting tools",
 "modal5-performance": "Performance:",
 "modal5-performance1": "Operational Precision",
 "modal5-performance1-value": "87%",
 "modal5-performance2": "Energy Efficiency",
 "modal5-performance2-value": "73%",
 "modal5-quote": "Request a Quote",
 "modal5-close": "Close",
 "modal6-title": "Original Spare Parts - Specifications",
 "modal6-specs": "Main Specifications:",
 "modal6-spec1": "100% original spare parts",
 "modal6-spec2": "Available for all equipment",
 "modal6-spec3": "1-year warranty on parts",
 "modal6-spec4": "Fast shipping within 7 days",
 "modal6-spec5": "Technical support for installation",
 "modal6-performance": "Performance:",
 "modal6-performance1": "Parts Availability",
 "modal6-performance1-value": "90%",
 "modal6-performance2": "Service Life",
 "modal6-performance2-value": "85%",
 "modal6-quote": "Request a Quote",
 "modal6-close": "Close",
 // Page Metadata
 "page-title": "Machinery & Equipment | Marble and Granite Processing Equipment - Nile Company",
 "meta-description": "We offer the latest machinery and equipment for cutting and polishing marble and granite, with extensive import capabilities from high-quality international partnerships.",
 "meta-keywords": "marble equipment, granite equipment, imported machinery, marble cutting, polishing machines, Nile for Marble",
 "og-title": "Machinery & Equipment - Nile Company for Marble and Granite",
 "og-description": "Import and supply of marble and granite processing equipment with the highest quality, 3-year warranty, and installation services."

  }
};

// دالة تغيير اللغة
// function changeLanguage(lang) {
//   for (const key in translations[lang]) {
//       const element = document.getElementById(key);
//       if (element) {
//           if (key === 'contact-hours') {
//               element.innerHTML = translations[lang][key].replace('\n', '<br>');
//           }else if (key.includes("faq-answer-3-contact")) {
//             element.innerHTML = translations[lang][key];
//           } 
//           else {
//               element.innerHTML = translations[lang][key];
//           }
//       }
//   }
// دالة تغيير اللغة
// دالة تغيير اللغة
// 



// كائن الترجمات (يحتوي فقط على الصفحة الرئيسية للاختصار، يمكن توسيعه)

  
  // دالة تغيير اللغة
  function changeLanguage(lang) {
    try {
// إعادة تحميل تنسيقات القوائم لضمان المحاذاة الصحيحة
const faqLists = document.querySelectorAll('.faq-answer ul, .faq-answer ol');
faqLists.forEach(list => {
  list.style.display = 'none';
  requestAnimationFrame(() => {
    list.style.display = 'block';
  });
});
      // تحديث النصوص بناءً على المعرفات
      for (const key in translations[lang]) {
        const elements = document.querySelectorAll(`[data-translate="${key}"], #${key}`);
        if (elements.length > 0) {
          elements.forEach(element => {
            // استخدام innerHTML للنصوص اللي فيها HTML (زي الجداول والروابط)
            if (key.includes("faq-answer") || key.includes("table") || key.includes("contact") || key.includes("tip") || key.includes("item") || key.includes("desc")) {
              element.innerHTML = translations[lang][key];
            } else {
              element.innerHTML = translations[lang][key];
            }
          });
        }
      }
  
      // تحديث لغة الصفحة واتجاه النص
      const html = document.documentElement;
      html.setAttribute("lang", lang);
      html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  
      // تحديث العنوان ووصف الصفحة بناءً على اسم الصفحة
      const currentPath = window.location.pathname.split("/").pop() || "index.html";
      let titleAr, titleEn, descAr, descEn;
  
      if (currentPath === "index.html") {
        titleAr = translations[lang]["page-title"] || "النيل للرخام والجرانيت - الرئيسية";
        titleEn = translations[lang]["page-title"] || "Nile for Marble and Granite - Home";
        descAr = translations[lang]["meta-description"] || "شركة النيل للرخام والجرانيت تقدم أفضل أنواع الرخام والجرانيت المصري والمستورد.";
        descEn = translations[lang]["meta-description"] || "Nile for Marble and Granite offers the finest Egyptian and imported marble and granite.";
      } else if (currentPath === "about.html") {
        titleAr = "النيل للرخام والجرانيت - عن الشركة";
        titleEn = "Nile for Marble and Granite - About Us";
        descAr = "تعرف على شركة النيل للرخام والجرانيت، متخصصين في صناعة الرخام والجرانيت وتوريدهم للمشروعات الكبرى.";
        descEn = "Learn about Nile for Marble and Granite, specialists in marble and granite manufacturing and supply.";
      } else if (currentPath === "contact.html") {
        titleAr = "النيل للرخام والجرانيت - تواصل معنا";
        titleEn = "Nile for Marble and Granite - Contact Us";
        descAr = "اتصل بشركة النيل للرخام والجرانيت - نوفر أفضل أنواع الرخام المصري والمستورد والجرانيت.";
        descEn = "Contact Nile for Marble and Granite - we provide the best types of Egyptian and imported marble and granite.";
      } else if (currentPath === "services.html") {
        titleAr = "النيل للرخام والجرانيت - خدماتنا";
        titleEn = "Nile for Marble and Granite - Our Services";
        descAr = "اكتشف خدماتنا في توريد وتصنيع وتركيب الرخام والجرانيت، بالإضافة إلى استيراد المعدات.";
        descEn = "Discover our services in supplying, manufacturing, and installing marble and granite.";
      }else if (currentPath === "egyptian-granite.html") {
        titleAr = "جرانيت مصري | أجود أنواع الجرانيت الطبيعي بأسعار تنافسية 2025 | النيل للرخام";
        titleEn = "Egyptian Granite | Premium Natural Granite at Competitive Prices 2025 | Nile Marble";
        descAr = "أفضل تشكيلة جرانيت مصري من أسوان، حلايب، والجلالة. جرانيت للمطابخ، الأرضيات، والواجهات بجودة عالمية وأسعار مناسبة.";
        descEn = "The finest collection of Egyptian granite from Aswan, Halayeb, and Galala. Granite for kitchens, flooring, and facades with world-class quality and affordable prices.";
      } else if (currentPath === "imported-marble.html") {
        titleKey = "page-title-imported-marble";
        descKey = "meta-description-imported-marble";
      } 
      else if (currentPath === "imported-granite.html") {
        titleAr = "جرانيت مستورد | أجود أنواع الجرانيت الهندي والبرازيلي 2025 | النيل للرخام";
        titleEn = "Egyptian Granite | Premium Natural Granite at Competitive Prices 2025 | Nile Marble";
        descAr = "أفضل تشكيلة جرانيت مصري من أسوان، حلايب، والجلالة. جرانيت للمطابخ، الأرضيات، والواجهات بجودة عالمية وأسعار مناسبة.";
        descEn = "اكتشف تشكيلة فاخرة من الجرانيت المستورد من الهند، البرازيل، وإيطاليا للمطابخ، الأرضيات، والواجهات بجودة عالمية وأسعار تنافسية 2025.";
      }
      else {
        titleAr = "النيل للرخام والجرانيت";
        titleEn = "Imported Granite | Finest Indian and Brazilian Granite 2025 | Nile for Marble";
        descAr = "شركة النيل للرخام والجرانيت تقدم أفضل أنواع الرخام والجرانيت المصري والمستورد.";
        descEn = "Explore a luxurious collection of imported granite from India, Brazil, and Italy for kitchens, flooring, and facades with world-class quality and competitive prices in 2025.";
      }
  
      document.title = lang === "ar" ? titleAr : titleEn;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", lang === "ar" ? descAr : descEn);
      }
  
      // تحديث aria-label للأزرار
      const buttons = document.querySelectorAll("button[aria-label]");
      buttons.forEach(button => {
        const ariaLabel = button.getAttribute("aria-label");
        if (ariaLabel) {
          const newLabel = lang === "ar" ? ariaLabel : ariaLabel.replace("عرض تفاصيل", "View details").replace("إغلاق", "Close");
          button.setAttribute("aria-label", newLabel);
        }
      });
  
    } catch (error) {
      console.error("Error changing language:", error);
    }
  }
  
  // دالة إضافة الـ active class
  function setActiveNav() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === currentPath) {
        link.classList.add("active");
      }
      if (href.includes("marble") || href.includes("granite") || href.includes("quartz")) {
        const productsLink = document.getElementById("nav-products");
        if (productsLink && (currentPath.includes("marble") || currentPath.includes("granite") || currentPath.includes("quartz"))) {
          productsLink.classList.add("active");
        }
      }
    });
  }
 
  
  // تحميل متأخر لخريطة Google
  function loadGoogleMap() {
    const mapContainer = document.getElementById('googleMap');
    if (mapContainer && !mapContainer.classList.contains('loaded')) {
      mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d31.12345678901234!3d29.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU5JzE1LjYiTiAzMcKwMDcnMjguNCJF!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
      mapContainer.classList.add('loaded');
    }
  }
  
  // إدارة التمرير (شريط التقدم وزر العودة لأعلى)
  function handleScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
      progressBar.style.width = scrolled + "%";
    }
  
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    }
  }
  
  // ربط الأحداث عند تحميل الصفحة
  // ... (باقي الكود الموحد كما هو: translations, changeLanguage, setActiveNav, إلخ)

// ربط الأحداث عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    // إعداد اللغة
    const langSelect = document.querySelector(".lang-switch");
    if (langSelect) {
      const savedLang = localStorage.getItem("language") || "ar";
      langSelect.value = savedLang;
      changeLanguage(savedLang);
  
      langSelect.addEventListener("change", () => {
        const selectedLang = langSelect.value;
        localStorage.setItem("language", selectedLang);
        changeLanguage(selectedLang);
      });
    } else {
      changeLanguage("ar");
    }
  
    // إعداد تفاعل الأسئلة الشائعة (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const faqItem = question.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
        });
        if (!isActive) {
          faqItem.classList.add('active');
          // إعادة تحميل تنسيقات القوائم في الإجابة المفتوحة
          const faqAnswerLists = faqItem.querySelectorAll('.faq-answer ul, .faq-answer ol');
          faqAnswerLists.forEach(list => {
            list.style.display = 'none';
            setTimeout(() => {
              list.style.display = 'block';
            }, 0);
          });
        }
      });
    });
  
    // ... (باقي الكود: setActiveNav, backToTop, showMoreBtn, إلخ)
  
  
    // إعداد الـ active class
    setActiveNav();
  
    // زر العودة لأعلى
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
      backToTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    // عرض المزيد
    const items = document.querySelectorAll('#granite-items .item, #marble-items .item');
    const showMoreBtn = document.getElementById('showMoreBtn');
    const itemsPerPage = 12;
    let currentItems = itemsPerPage;
  
    if (items.length > 0) {
      for (let i = itemsPerPage; i < items.length; i++) {
        items[i].classList.add('hidden');
      }
      if (items.length <= itemsPerPage) {
        showMoreBtn.style.display = 'none';
      }
      showMoreBtn.addEventListener('click', () => {
        const nextItems = currentItems + itemsPerPage;
        for (let i = currentItems; i < nextItems && i < items.length; i++) {
          items[i].classList.remove('hidden');
        }
        currentItems = nextItems;
        if (currentItems >= items.length) {
          showMoreBtn.style.display = 'none';
        }
      });
    }
  
    // Lazy loading للصور
    document.querySelectorAll('img').forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
  
    // التحقق من صحة النموذج
    // const form = document.getElementById('contactForm');
    // if (form) {
    //   form.addEventListener('submit', (event) => {
    //     if (!form.checkValidity()) {
    //       event.preventDefault();
    //       event.stopPropagation();
    //     } else {
    //       event.preventDefault();
    //       const submitText = document.getElementById('submit-text');
    //       const submitSpinner = document.getElementById('submit-spinner');
    //       const submitBtn = document.getElementById('contact-submit-btn');
    //       if (submitText && submitSpinner && submitBtn) {
    //         submitText.classList.add('d-none');
    //         submitSpinner.classList.remove('d-none');
    //         submitBtn.disabled = true;
    //       }
  
    //       setTimeout(() => {
    //         if (submitText && submitSpinner && submitBtn) {
    //           submitText.classList.remove('d-none');
    //           submitSpinner.classList.add('d-none');
    //           submitBtn.disabled = false;
    //         }
  
    //         const formSuccess = document.getElementById('form-success');
    //         const formError = document.getElementById('form-error');
    //         if (formSuccess && formError) {
    //           formSuccess.classList.remove('d-none');
    //           formError.classList.add('d-none');
    //           form.reset();
    //           form.classList.remove('was-validated');
    //           setTimeout(() => {
    //             formSuccess.classList.add('d-none');
    //           }, 5000);
    //         }
    //       }, 2000);
    //     }
    //     form.classList.add('was-validated');
    //   });
    // }
      const contactForm = document.getElementById('contactForm');

      contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // التحقق من صحة النموذج
      if (!this.checkValidity()) {
        event.stopPropagation();
        this.classList.add('was-validated');
        return;
      }
    
      // إظهار أيقونة التحميل
      const submitText = document.getElementById('submit-text');
      const submitSpinner = document.getElementById('submit-spinner');
      const submitBtn = document.getElementById('contact-submit-btn');
      submitText.classList.add('d-none');
      submitSpinner.classList.remove('d-none');
      submitBtn.disabled = true;
    
      // جمع بيانات النموذج
      const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
    
      // إرسال الرسالة عبر EmailJS
      emailjs.send('service_fk8e6sj', 'template_r8cooot', templateParams)
        .then(() => {
          // إظهار رسالة النجاح
          const formSuccess = document.getElementById('form-success');
          const formError = document.getElementById('form-error');
          formSuccess.classList.remove('d-none');
          formError.classList.add('d-none');
          this.reset();
          this.classList.remove('was-validated');
          setTimeout(() => {
            formSuccess.classList.add('d-none');
          }, 5000);
        }, (error) => {
          const formSuccess = document.getElementById('form-success');
          const formError = document.getElementById('form-error');
          formSuccess.classList.add('d-none');
          formError.classList.remove('d-none');
        })
        .finally(() => {
          submitText.classList.remove('d-none');
          submitSpinner.classList.add('d-none');
          submitBtn.disabled = false;
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // IntersectionObserver للتحريكات وlazy loading
    const animateElements = document.querySelectorAll('.animate__animated, .lazy-load');
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target.classList.contains('animate__animated')) {
              const animation = target.getAttribute('data-animate') || 'animate__fadeIn';
              target.classList.add(animation);
            }
            if (target.classList.contains('lazy-load')) {
              target.classList.add('loaded');
              if (target.id === 'googleMap') {
                loadGoogleMap();
              }
            }
            observer.unobserve(target);
          }
        });
      }, { threshold: 0.2 });
  
      animateElements.forEach(el => observer.observe(el));
    }
  });
  
  // إعداد حدث التمرير
  window.addEventListener('scroll', handleScroll);
  ///
