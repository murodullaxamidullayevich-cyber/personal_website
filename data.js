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
    linkedin: "",
    github:   "https://github.com/murodullaxamidullayevich-cyber",
    email:    "murodullaxamidullayevich@gmail.com"
  },

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
      status: "done",
      desc: {
        uz: "Do'kon va ombor uchun boshqaruv tizimi: tovarlar, xaridlar va hisobotlar. O'zbek tilidagi Windows ilovasi.",
        en: "A shop and inventory management system: products, purchases and reports. A Windows desktop app in Uzbek."
      },
      tech: ["C++/CLI", "Windows Forms", ".NET"],
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
    { date: "2026", type: "project",
      title: { uz: "PurchaseManagerUZ tugallandi", en: "Finished PurchaseManagerUZ" },
      text:  { uz: "C++/CLI'da do'kon boshqaruv tizimi.", en: "A shop management system in C++/CLI." } },
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
      nav: { about: "Men haqimda", skills: "Ko'nikmalar", projects: "Loyihalar", journey: "Yo'l", contact: "Aloqa" },
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
        code: "Kod", demo: "Demo"
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
      footer: { made: "Toshkentda yaratildi" }
    },
    en: {
      nav: { about: "About", skills: "Skills", projects: "Projects", journey: "Journey", contact: "Contact" },
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
        code: "Code", demo: "Demo"
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
      footer: { made: "Made in Tashkent" }
    }
  }
};
