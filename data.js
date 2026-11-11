/* ============================================================
   SAYT MA'LUMOTLARI — saytdagi hamma narsa shu fayldan olinadi.
   Yangi loyiha, sertifikat yoki yutuq qo'shish uchun faqat shu
   faylni tahrirlaysan. HTML/CSS'ga tegish shart emas.

   Har bir matn ikki tilda yoziladi:  { uz: "...", en: "..." }
   ============================================================ */

const SITE = {
  name: "Murodulla Shonazarov",

  /* ---------- ALOQA HAVOLALARI ----------
     Bo'sh qoldirilsa, saytda "hali qo'shilmagan" deb ko'rinadi.
     Misol: telegram: "https://t.me/username"                    */
  links: {
    telegram: "https://t.me/murodulla_xamidullayevich",
    linkedin: "https://www.linkedin.com/in/murodulla-xamidullayevich-3547743a8/",
    github:   "https://github.com/murodullaxamidullayevich-cyber",
    email:    "murodullaxamidullayevich@gmail.com"
  },

  /* ---------- FEEDBACK ----------
     Fikrlar FormSubmit orqali shu emailga keladi.
     Birinchi xabardan keyin Gmail'ga tasdiqlash xati keladi — "Activate" bosiladi.   */
  feedbackEmail: "murodullaxamidullayevich@gmail.com",

  /* ---------- HERO TERMINALI ---------- */
  terminal: {
    uz: [
      ["$ whoami", "Sun'iy intellekt talabasi · TATU, 2-kurs"],
      ["$ now", "AI agent va shu saytni yaratyapman"],
      ["$ stack", "C++ · Python · HTML/CSS/JS"]
    ],
    en: [
      ["$ whoami", "AI student · TATU, 2nd year"],
      ["$ now", "Building an AI agent and this website"],
      ["$ stack", "C++ · Python · HTML/CSS/JS"]
    ]
  },

  /* ---------- MEN HAQIMDA: qisqa faktlar ---------- */
  facts: [
    { k: { uz: "Universitet", en: "University" },
      v: { uz: "Muhammad al-Xorazmiy nomidagi TATU", en: "TATU (Tashkent University of Information Technologies)" } },
    { k: { uz: "Kurs", en: "Year" },
      v: { uz: "2-kurs", en: "2nd year" } },
    { k: { uz: "Shahar", en: "City" },
      v: { uz: "Toshkent, O'zbekiston", en: "Tashkent, Uzbekistan" } },
    { k: { uz: "Yo'nalish", en: "Focus" },
      v: { uz: "Sun'iy intellekt, machine learning", en: "Artificial intelligence, machine learning" } },
    { k: { uz: "Tillar", en: "Languages" },
      v: { uz: "O'zbek, ingliz", en: "Uzbek, English" } }
  ],

  /* ---------- KO'NIKMALAR ---------- */
  skills: [
    { group: { uz: "Dasturlash tillari", en: "Languages" },
      items: ["C++", "C++/CLI", "Python", "HTML", "CSS", "JavaScript"] },
    { group: { uz: "Informatika asoslari", en: "CS fundamentals" },
      items: ["Data Structures & Algorithms", "OOP", "Discrete math"] },
    { group: { uz: "Sun'iy intellekt", en: "AI" },
      items: ["Prompt engineering", "LLM API", "Machine learning"] },
    { group: { uz: "Vositalar", en: "Tools" },
      items: ["VS Code", "Visual Studio", "Git", "GitHub", "Windows Forms"] }
  ],

  /* ---------- LOYIHALAR ----------
     status:  "done" (tugallangan) | "progress" (jarayonda) | "planned" (rejada)
     github / demo: havola bo'lsa yoziladi, bo'lmasa ""            */
  projects: [
    {
      title: "PurchaseManagerUZ",
      featured: true,
      status: "done",
      context: {
        uz: "Kompaniya xaridlarini boshqarish tizimi · Dasturlash 2 fanidan yakuniy loyiha · 3 kishilik jamoa · May 2026",
        en: "Company purchase management system · Final project for Programming 2 · Team of 3 · May 2026"
      },
      desc: {
        uz: "Kompaniyaning xarid jarayonini qog'ozdan raqamga o'tkazadigan Windows ilovasi. Xodimlar, mahsulotlar, buyurtmalar va haftalik hisobotlar bitta SQL Server bazasida saqlanadi, hammasi o'zbek tilidagi qulay oynalar orqali boshqariladi.",
        en: "A Windows desktop app that moves a company's purchasing process from paper to a database. Employees, products, purchase orders and weekly reports live in one SQL Server database and are managed through an Uzbek-language interface."
      },
      highlights: [
        { uz: "Tizimga kirish: login va parol tekshiruvi, parolni ko'rsatish/yashirish tugmasi, Enter bilan o'tish.",
          en: "Sign-in screen: login and password check, show/hide password toggle, Enter-key navigation." },
        { uz: "Asosiy panel: to'rtta modulga kirish va real vaqtda yangilanadigan sana va soat.",
          en: "Main dashboard: entry to all four modules with a live date and clock." },
        { uz: "Xodimlar: qo'shish va o'chirish, JSHSHR bo'yicha jonli qidiruv, 14 xonali JSHSHR va +998 telefon tekshiruvi.",
          en: "Employees: add and remove staff, live search by personal ID, 14-digit ID and +998 phone validation." },
        { uz: "Mahsulotlar: nomi, brend, model, narx, kafolat muddati va kategoriya; narx faqat son ekani tekshiriladi.",
          en: "Products: name, brand, model, price, warranty and category, with numeric price validation." },
        { uz: "Buyurtmalar: summa avtomatik hisoblanadi; holatlar: yangi, jarayonda, yetkazilgan, yakunlangan, bekor qilingan. Jami, bugungi, kutilayotgan va yakunlangan buyurtmalar hisoblagichlari, umumiy xarajat (bekor qilinganlarsiz) va yetkazuvchi, mahsulot yoki izoh bo'yicha qidiruv.",
          en: "Purchase orders: automatic totals; statuses new, in progress, delivered, completed, cancelled. Counters for total, today's, pending and completed orders, overall spend excluding cancelled orders, and search by supplier, product or note." },
        { uz: "Hisobot: 5 ta mahsulot turi bo'yicha haftaning har kuni uchun xaridlar kiritiladi, bazaga saqlanadi va ustunli diagrammada ko'rsatiladi.",
          en: "Reports: daily purchases for five product types are entered for each weekday, saved to the database and drawn as a column chart." },
        { uz: "Ma'lumotlar bazasi: SQL Server Express, 4 ta jadval; barcha so'rovlar parametrlangan (SQL injection'dan himoya).",
          en: "Database: SQL Server Express with 4 tables; every query is parameterized to guard against SQL injection." }
      ],
      images: [
        { src: "images/purchase-manager/orders.webp",
          alt: { uz: "Buyurtmalar oynasi: yangi buyurtma formasi, hisoblagichlar va buyurtmalar jadvali", en: "Orders window: new order form, counters and order table" } },
        { src: "images/purchase-manager/report.webp",
          alt: { uz: "Hisobot oynasi: haftalik xaridlar diagrammasi", en: "Report window: weekly purchases chart" } },
        { src: "images/purchase-manager/employees.webp",
          alt: { uz: "Xodimlar oynasi: qo'shish, JSHSHR bo'yicha qidiruv va ro'yxat (sinov ma'lumotlari)", en: "Employees window: add form, ID search and staff list (test data)" } },
        { src: "images/purchase-manager/main.webp",
          alt: { uz: "Asosiy boshqaruv paneli", en: "Main dashboard" } },
        { src: "images/purchase-manager/login.webp",
          alt: { uz: "Tizimga kirish oynasi", en: "Sign-in window" } }
      ],
      tech: ["C++/CLI", "Windows Forms", ".NET Framework 4.7.2", "SQL Server Express", "ADO.NET", "Chart control", "Visual Studio"],
      github: "",
      demo: ""
    },
    {
      title: "AI Agent",
      status: "progress",
      desc: {
        uz: "Python asosidagi shaxsiy AI agent. Hozir faol ishlab chiqilmoqda.",
        en: "A personal AI agent built in Python. Currently in active development."
      },
      tech: ["Python", "LLM API"],
      github: "",
      demo: ""
    },
    {
      title: { uz: "Shaxsiy sayt", en: "Personal website" },
      status: "progress",
      desc: {
        uz: "Siz hozir ko'rib turgan sayt. Ikki tilli portfolio, ma'lumotlar bitta fayldan boshqariladi.",
        en: "The site you are looking at. A bilingual portfolio driven by a single data file."
      },
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/murodullaxamidullayevich-cyber/personal_website",
      demo: ""
    }
  ],

  /* ---------- YO'L: ta'lim, sertifikat, yutuq, loyiha ----------
     type: "education" | "certificate" | "achievement" | "project"
     example: true  — namuna yozuv (haqiqiysini qo'shganingda o'chir)
     link: sertifikat havolasi bo'lsa                               */
  journey: [
    { date: "2026", type: "project",
      title: { uz: "AI agent ustida ish boshlandi", en: "Started the AI agent project" },
      text:  { uz: "Python'da shaxsiy AI agent yaratish.", en: "Building a personal AI agent in Python." } },
    { date: "05.2026", type: "project",
      title: { uz: "PurchaseManagerUZ topshirildi", en: "Delivered PurchaseManagerUZ" },
      text:  { uz: "Dasturlash 2 fanidan yakuniy loyiha: C++/CLI va SQL Server'da kompaniya xaridlarini boshqarish tizimi, 3 kishilik jamoada.",
               en: "Final project for Programming 2: a company purchase management system in C++/CLI and SQL Server, built in a team of 3." } },
    { date: "16.10.2026", type: "certificate",
      title: { uz: "Prompt Engineering — Five Million AI Leaders", en: "Prompt Engineering — Five Million AI Leaders" },
      text:  { uz: "O'zbekiston Raqamli texnologiyalar vazirligi va Dubai Future Foundation qo'shma dasturi. ID: 5MP 1645210",
               en: "Joint program of Uzbekistan's Ministry of Digital Technologies and the Dubai Future Foundation. ID: 5MP 1645210" },
      link: "https://omp.aistudy.uz/certificate?id=750721fe-60e6-452c-886b-9be88475a0ff" },
    { date: "2026", type: "achievement", example: true,
      title: { uz: "Yutuq yoki tanlov", en: "Award or competition" },
      text:  { uz: "Masalan: olimpiada, hakaton yoki tanlovdagi o'rin.", en: "For example: an olympiad, hackathon or contest result." } },
    { date: "2025", type: "education",
      title: { uz: "TATU'ga o'qishga kirdim", en: "Enrolled at TATU" },
      text:  { uz: "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti.", en: "Tashkent University of Information Technologies named after Muhammad al-Khwarizmi." } }
  ],

  /* ---------- INTERFEYS MATNLARI ---------- */
  ui: {
    uz: {
      nav: { about: "Men haqimda", skills: "Ko'nikmalar", projects: "Loyihalar", journey: "Yo'l", contact: "Aloqa", feedback: "Fikr" },
      hero: {
        eyebrow: "Sun'iy intellekt talabasi · TATU · Toshkent",
        lead: "Dasturiy ta'minot va sun'iy intellekt bilan shug'ullanaman. Bu yerda loyihalarim, bilimlarim va erishgan natijalarim jamlangan.",
        cta1: "Loyihalarni ko'rish",
        cta2: "Bog'lanish",
        cv: "CV · tez orada"
      },
      about: {
        title: "Men haqimda",
        p1: "Men Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universitetida sun'iy intellekt yo'nalishining 2-kurs talabasiman. C++ va Python'da dastur yozaman, algoritmlar va ma'lumotlar tuzilmalarini o'rganaman.",
        p2: "Hozir sun'iy intellekt agentlari ustida ishlayapman. Maqsadim: real muammolarni hal qiladigan mahsulotlar yaratish va kelajakda o'z startapimni ochish."
      },
      skills: { title: "Ko'nikmalar" },
      projects: {
        title: "Loyihalar",
        sub: "Tugallangan, jarayondagi va rejadagi ishlar.",
        status: { done: "Tugallangan", progress: "Jarayonda", planned: "Rejada" },
        code: "Kod", demo: "Demo",
        features: "Imkoniyatlar"
      },
      journey: {
        title: "Yo'l",
        sub: "Ta'lim, sertifikatlar va yutuqlar vaqt bo'yicha.",
        all: "Hammasi",
        types: { education: "Ta'lim", certificate: "Sertifikat", achievement: "Yutuq", project: "Loyiha" },
        example: "namuna",
        view: "Ko'rish"
      },
      contact: {
        title: "Aloqa",
        sub: "Hamkorlik, taklif yoki savol bo'lsa, yozing.",
        missing: "hali qo'shilmagan",
        copy: "Nusxa olish",
        copied: "Nusxa olindi"
      },
      feedback: {
        title: "Fikr qoldiring",
        sub: "Sayt, loyihalarim yoki hamkorlik haqida fikringizni yozing. Xabar to'g'ridan-to'g'ri menga keladi va saytda ko'rinmaydi.",
        name: "Ismingiz (ixtiyoriy)",
        rating: "Baho (ixtiyoriy)",
        star: "yulduz",
        message: "Xabar",
        send: "Yuborish",
        sending: "Yuborilmoqda…",
        ok: "Rahmat! Fikringiz yuborildi.",
        empty: "Xabar maydonini to'ldiring.",
        fail: "Yuborib bo'lmadi. Internetni tekshirib, qayta urinib ko'ring yoki Telegram orqali yozing."
      },
      footer: { made: "Toshkentda yaratildi" }
    },
    en: {
      nav: { about: "About", skills: "Skills", projects: "Projects", journey: "Journey", contact: "Contact", feedback: "Feedback" },
      hero: {
        eyebrow: "AI student · TATU · Tashkent",
        lead: "I work on software and artificial intelligence. This is where I keep my projects, skills and results.",
        cta1: "See projects",
        cta2: "Get in touch",
        cv: "CV · coming soon"
      },
      about: {
        title: "About me",
        p1: "I'm a second-year artificial intelligence student at the Tashkent University of Information Technologies. I write code in C++ and Python and study algorithms and data structures.",
        p2: "Right now I'm building AI agents. My goal is to create products that solve real problems and, one day, to start my own company."
      },
      skills: { title: "Skills" },
      projects: {
        title: "Projects",
        sub: "Finished, in-progress and planned work.",
        status: { done: "Completed", progress: "In progress", planned: "Planned" },
        code: "Code", demo: "Demo",
        features: "Features"
      },
      journey: {
        title: "Journey",
        sub: "Education, certificates and achievements over time.",
        all: "All",
        types: { education: "Education", certificate: "Certificate", achievement: "Achievement", project: "Project" },
        example: "example",
        view: "View"
      },
      contact: {
        title: "Contact",
        sub: "For collaboration, offers or questions, reach out.",
        missing: "not added yet",
        copy: "Copy",
        copied: "Copied"
      },
      feedback: {
        title: "Leave feedback",
        sub: "Share your thoughts on the site, my projects or a possible collaboration. Messages come straight to me and are not shown on the site.",
        name: "Your name (optional)",
        rating: "Rating (optional)",
        star: "star",
        message: "Message",
        send: "Send",
        sending: "Sending…",
        ok: "Thank you! Your feedback was sent.",
        empty: "Please write a message.",
        fail: "Couldn't send it. Check your connection and try again, or message me on Telegram."
      },
      footer: { made: "Made in Tashkent" }
    }
  }
};
