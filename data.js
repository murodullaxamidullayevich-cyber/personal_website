/* ============================================================
   SAYT MA'LUMOTLARI — saytdagi hamma narsa shu fayldan olinadi.
   Yangi loyiha, sertifikat yoki ta'lim qo'shish uchun faqat shu
   faylni tahrirlaysan. HTML/CSS'ga tegish shart emas.

   Har bir matn uch tilda yoziladi:  { uz: "...", en: "...", ru: "..." }
   Biror til yozilmasa, o'zbekchasi ko'rsatiladi.
   ============================================================ */

const SITE = {
  name: "Murodulla Shonazarov",

  /* ---------- ALOQA HAVOLALARI ----------
     Bo'sh qoldirilsa, saytda "hali qo'shilmagan" deb ko'rinadi.        */
  links: {
    telegram: "https://t.me/murodulla_xamidullayevich",
    linkedin: "https://www.linkedin.com/in/murodulla-xamidullayevich-3547743a8/",
    github:   "https://github.com/murodullaxamidullayevich-cyber",
    email:    "murodullaxamidullayevich@gmail.com"
  },

  /* ---------- FEEDBACK ----------
     telegramUser: "Telegram orqali yozish" tugmasi shu akkauntga xabar tayyorlaydi.
     "Yuborish" tugmasi xabarni FormSubmit orqali emailga yuboradi.
     feedbackApi: keyinchalik Telegram bot ulansa, uning manzili shu yerga yoziladi. */
  telegramUser: "murodulla_xamidullayevich",
  feedbackApi: "",
  feedbackEmail: "murodullaxamidullayevich@gmail.com",

  /* Ro'yxatlarda dastlab nechta element ko'rinadi ("Ko'proq ko'rsatish" gacha) */
  limits: { highlights: 3, certificates: 4, education: 3 },

  /* ---------- HERO TERMINALI ---------- */
  terminal: {
    uz: [
      ["$ whoami", "Sun'iy intellekt talabasi · TATU, 2-kurs"],
      ["$ now", "Xorijda o'qish haqida video yasaydigan AI agent"],
      ["$ stack", "Python · C++ · HTML/CSS/JS"]
    ],
    en: [
      ["$ whoami", "AI student · TATU, 2nd year"],
      ["$ now", "An AI agent that makes study-abroad videos"],
      ["$ stack", "Python · C++ · HTML/CSS/JS"]
    ],
    ru: [
      ["$ whoami", "Студент направления ИИ · ТУИТ, 2 курс"],
      ["$ now", "ИИ-агент, создающий видео об учёбе за рубежом"],
      ["$ stack", "Python · C++ · HTML/CSS/JS"]
    ]
  },

  /* ---------- MEN HAQIMDA: qisqa faktlar ---------- */
  facts: [
    { k: { uz: "Universitet", en: "University", ru: "Университет" },
      v: { uz: "Muhammad al-Xorazmiy nomidagi TATU", en: "TATU (Tashkent University of Information Technologies)", ru: "ТУИТ имени Мухаммада аль-Хорезми" } },
    { k: { uz: "Kurs", en: "Year", ru: "Курс" },
      v: { uz: "2-kurs", en: "2nd year", ru: "2 курс" } },
    { k: { uz: "Shahar", en: "City", ru: "Город" },
      v: { uz: "Toshkent, O'zbekiston", en: "Tashkent, Uzbekistan", ru: "Ташкент, Узбекистан" } },
    { k: { uz: "Yo'nalish", en: "Focus", ru: "Направление" },
      v: { uz: "Sun'iy intellekt, machine learning", en: "Artificial intelligence, machine learning", ru: "Искусственный интеллект, машинное обучение" } },
    { k: { uz: "Tillar", en: "Languages", ru: "Языки" },
      v: { uz: "O'zbek, ingliz, rus", en: "Uzbek, English, Russian", ru: "Узбекский, английский, русский" } }
  ],

  /* ---------- KO'NIKMALAR ---------- */
  skills: [
    { group: { uz: "Dasturlash tillari", en: "Languages", ru: "Языки программирования" },
      items: ["Python", "C++", "C++/CLI", "JavaScript", "HTML", "CSS", "SQL"] },
    { group: { uz: "Sun'iy intellekt", en: "AI", ru: "Искусственный интеллект" },
      items: ["Prompt engineering", "LLM API (Gemini)", "AI agents", "Text-to-speech", "Machine learning"] },
    { group: { uz: "Informatika asoslari", en: "CS fundamentals", ru: "Основы информатики" },
      items: ["Data Structures & Algorithms", "OOP", "Discrete math", "Databases"] },
    { group: { uz: "Vositalar", en: "Tools", ru: "Инструменты" },
      items: ["Git", "GitHub Actions", "Cloudflare Workers", "ffmpeg", "SQL Server", "VS Code", "Visual Studio"] }
  ],

  /* ---------- LOYIHALAR ----------
     status:  "done" (tugallangan) | "progress" (jarayonda) | "planned" (rejada)
     featured: true — katta kartochka (rasmlar bilan)
     portrait: true — rasmlar tik (telefon videosi kabi)                 */
  projects: [
    {
      title: { uz: "AI agent: «Xorijda o'qish»", en: "AI agent: “Study Abroad”", ru: "ИИ-агент «Учёба за рубежом»" },
      featured: false,   /* rasmlar GitHub'ga yuklangach true qilinadi */
      portrait: true,
      status: "progress",
      context: {
        uz: "Shaxsiy loyiha · Noyabr 2026 — hozirgacha · Telegram: @xorijdaoqish_uz",
        en: "Personal project · Nov 2026 — present · Telegram: @xorijdaoqish_uz",
        ru: "Личный проект · ноябрь 2026 — сейчас · Telegram: @xorijdaoqish_uz"
      },
      desc: {
        uz: "Chet elda o'qish (grantlar, stipendiyalar, qabul talablari) haqida o'zbek tilida qisqa videolar yasaydigan avtomatik agent. Har kuni o'zi mavzu tanlaydi, faktlarni rasmiy manbalardan tekshiradi, ssenariy yozadi, ovoz beradi, montaj qiladi va tasdiqlash uchun menga Telegram'da yuboradi. ✅ bossam, kanalga o'zi joylaydi.",
        en: "An automated agent that makes short Uzbek-language videos about studying abroad: grants, scholarships and admission rules. Every day it picks a topic, checks facts against official sources, writes a script, voices it, edits the video and sends it to me on Telegram for approval. When I tap ✅, it publishes to the channel itself.",
        ru: "Автоматический агент, который делает короткие видео на узбекском языке об учёбе за рубежом: гранты, стипендии, требования к поступлению. Каждый день он сам выбирает тему, проверяет факты по официальным источникам, пишет сценарий, озвучивает, монтирует видео и присылает мне в Telegram на согласование. Нажимаю ✅ — и он сам публикует его в канале."
      },
      highlights: [
        { uz: "Faktlar tekshiruvi: 13 ta rasmiy manba (DAAD, MEXT, Stipendium Hungaricum, Fulbright, IELTS va boshqalar). Har bir fakt sahifadagi so'zma-so'z iqtibos bilan tasdiqlanadi, tasdiqlanmagan fakt videoga kirmaydi.",
          en: "Fact checking: 13 official sources (DAAD, MEXT, Stipendium Hungaricum, Fulbright, IELTS and more). Every fact must match a verbatim quote on the page; unverified facts never reach the video.",
          ru: "Проверка фактов: 13 официальных источников (DAAD, MEXT, Stipendium Hungaricum, Fulbright, IELTS и др.). Каждый факт подтверждается дословной цитатой со страницы; неподтверждённые факты в видео не попадают." },
        { uz: "Ssenariy: Gemini yozadi, ikkinchi «muharrir» chaqiruvi tuzatadi, keyin kod imlo, murojaat shakli va har bir raqam faktlardan olinganini tekshiradi.",
          en: "Script: Gemini writes it, a second “editor” pass fixes it, then code checks spelling, tone and that every number comes from a verified fact.",
          ru: "Сценарий: пишет Gemini, второй проход-«редактор» исправляет, затем код проверяет орфографию, обращение и то, что каждое число взято из проверенных фактов." },
        { uz: "Ovoz: Gemini TTS (o'zbekcha), so'z vaqtlari forced alignment (torchaudio MMS) bilan aniqlanadi; muammo bo'lsa edge-tts zaxira ovoziga o'tadi.",
          en: "Voice: Gemini TTS in Uzbek, word timings from forced alignment (torchaudio MMS), with an automatic edge-tts fallback.",
          ru: "Озвучка: Gemini TTS на узбекском, тайминги слов через forced alignment (torchaudio MMS), при сбое — резервный голос edge-tts." },
        { uz: "Montaj (ffmpeg): 1080×1920 vertikal video, so'zma-so'z subtitr, faktlar katta yozuvda, Pixabay rasm va kliplari (mosini Gemini tanlaydi), silliq o'tishlar, fon musiqasi; fayl 8 MB dan oshmaydi.",
          en: "Editing (ffmpeg): 1080×1920 vertical video, word-by-word subtitles, big fact overlays, Pixabay images and clips chosen by Gemini, smooth transitions, background music; files stay under 8 MB.",
          ru: "Монтаж (ffmpeg): вертикальное видео 1080×1920, пословные субтитры, крупные надписи с фактами, изображения и клипы Pixabay (подбирает Gemini), плавные переходы, фоновая музыка; размер файла до 8 МБ." },
        { uz: "Tasdiqlash: Telegram bot ✅ / ✏️ / ❌ tugmalari bilan. ✏️ bosilsa, izohimga qarab video qayta yasaladi.",
          en: "Approval: a Telegram bot with ✅ / ✏️ / ❌ buttons. ✏️ regenerates the video using my note.",
          ru: "Согласование: Telegram-бот с кнопками ✅ / ✏️ / ❌. По ✏️ видео пересобирается с учётом моего комментария." },
        { uz: "Kompyutersiz ishlaydi: video GitHub Actions'da har kuni soat 09:00 da yasaladi, bot Cloudflare Worker'da (webhook + KV) 24/7 ishlaydi va tasdiqlangan videoni 19:00 da kanalga chiqaradi.",
          en: "Runs without my computer: GitHub Actions builds a video every day at 09:00, the bot lives on a Cloudflare Worker (webhook + KV) 24/7 and publishes approved videos at 19:00.",
          ru: "Работает без моего компьютера: GitHub Actions собирает видео каждый день в 09:00, бот работает 24/7 на Cloudflare Worker (webhook + KV) и публикует одобренные видео в 19:00." },
        { uz: "Keyingi bosqich: Instagram Reels'ga avtomatik joylash (Graph API ulangan) va kunlik statistika hisoboti.",
          en: "Next: automatic Instagram Reels publishing (Graph API already connected) and a daily stats report.",
          ru: "Дальше: автопубликация в Instagram Reels (Graph API уже подключён) и ежедневный отчёт со статистикой." }
      ],
      images: [
        { src: "images/ai-agent/fact.webp",
          alt: { uz: "Agent yasagan video kadri: tekshirilgan fakt katta yozuvda", en: "Frame from an agent-made video: a verified fact as a big overlay", ru: "Кадр видео агента: проверенный факт крупной надписью" } },
        { src: "images/ai-agent/subtitles.webp",
          alt: { uz: "So'zma-so'z subtitr va kanal logotipi", en: "Word-by-word subtitles and the channel logo", ru: "Пословные субтитры и логотип канала" } },
        { src: "images/ai-agent/tip.webp",
          alt: { uz: "Video yakunidagi foydali maslahat", en: "A practical tip at the end of the video", ru: "Полезный совет в конце видео" } }
      ],
      tech: ["Python", "Gemini API", "Gemini TTS", "torchaudio", "ffmpeg", "GitHub Actions", "Cloudflare Workers", "Telegram Bot API", "Instagram Graph API"],
      github: "",
      demo: "https://t.me/xorijdaoqish_uz"
    },
    {
      title: "PurchaseManagerUZ",
      featured: true,
      status: "done",
      context: {
        uz: "Kompaniya xaridlarini boshqarish tizimi · Dasturlash 2 fanidan yakuniy loyiha · 3 kishilik jamoa · May 2026",
        en: "Company purchase management system · Final project for Programming 2 · Team of 3 · May 2026",
        ru: "Система управления закупками компании · итоговый проект по «Программированию 2» · команда из 3 человек · май 2026"
      },
      desc: {
        uz: "Kompaniyaning xarid jarayonini qog'ozdan raqamga o'tkazadigan Windows ilovasi. Xodimlar, mahsulotlar, buyurtmalar va haftalik hisobotlar bitta SQL Server bazasida saqlanadi, hammasi o'zbek tilidagi qulay oynalar orqali boshqariladi.",
        en: "A Windows desktop app that moves a company's purchasing process from paper to a database. Employees, products, purchase orders and weekly reports live in one SQL Server database and are managed through an Uzbek-language interface.",
        ru: "Настольное приложение для Windows, которое переводит закупки компании с бумаги в базу данных. Сотрудники, товары, заказы и еженедельные отчёты хранятся в одной базе SQL Server и управляются через интерфейс на узбекском языке."
      },
      highlights: [
        { uz: "Buyurtmalar: summa avtomatik hisoblanadi; holatlar: yangi, jarayonda, yetkazilgan, yakunlangan, bekor qilingan. Jami, bugungi, kutilayotgan va yakunlangan buyurtmalar hisoblagichlari, umumiy xarajat (bekor qilinganlarsiz) va yetkazuvchi, mahsulot yoki izoh bo'yicha qidiruv.",
          en: "Purchase orders: automatic totals; statuses new, in progress, delivered, completed, cancelled. Counters for total, today's, pending and completed orders, overall spend excluding cancelled orders, and search by supplier, product or note.",
          ru: "Заказы: автоматический расчёт суммы; статусы «новый», «в работе», «доставлен», «завершён», «отменён». Счётчики всех, сегодняшних, ожидающих и завершённых заказов, общие расходы (без отменённых) и поиск по поставщику, товару или примечанию." },
        { uz: "Hisobot: 5 ta mahsulot turi bo'yicha haftaning har kuni uchun xaridlar kiritiladi, bazaga saqlanadi va ustunli diagrammada ko'rsatiladi.",
          en: "Reports: daily purchases for five product types are entered for each weekday, saved to the database and drawn as a column chart.",
          ru: "Отчёты: закупки по пяти видам товаров вводятся на каждый день недели, сохраняются в базу и показываются столбчатой диаграммой." },
        { uz: "Ma'lumotlar bazasi: SQL Server Express, 4 ta jadval; barcha so'rovlar parametrlangan (SQL injection'dan himoya).",
          en: "Database: SQL Server Express with 4 tables; every query is parameterized to guard against SQL injection.",
          ru: "База данных: SQL Server Express, 4 таблицы; все запросы параметризованы (защита от SQL-инъекций)." },
        { uz: "Xodimlar: qo'shish va o'chirish, JSHSHR bo'yicha jonli qidiruv, 14 xonali JSHSHR va +998 telefon tekshiruvi.",
          en: "Employees: add and remove staff, live search by personal ID, 14-digit ID and +998 phone validation.",
          ru: "Сотрудники: добавление и удаление, живой поиск по ПИНФЛ, проверка 14-значного ПИНФЛ и телефона +998." },
        { uz: "Mahsulotlar: nomi, brend, model, narx, kafolat muddati va kategoriya; narx faqat son ekani tekshiriladi.",
          en: "Products: name, brand, model, price, warranty and category, with numeric price validation.",
          ru: "Товары: название, бренд, модель, цена, гарантия и категория; цена проверяется на число." },
        { uz: "Tizimga kirish: login va parol tekshiruvi, parolni ko'rsatish/yashirish tugmasi, Enter bilan o'tish. Asosiy panelda to'rtta modul va real vaqtdagi soat.",
          en: "Sign-in: login and password check, show/hide password toggle, Enter-key navigation. The main dashboard opens the four modules and shows a live clock.",
          ru: "Вход: проверка логина и пароля, кнопка показа пароля, переход по Enter. Главная панель открывает четыре модуля и показывает текущее время." }
      ],
      images: [
        { src: "images/purchase-manager/orders.webp",
          alt: { uz: "Buyurtmalar oynasi: yangi buyurtma formasi, hisoblagichlar va buyurtmalar jadvali", en: "Orders window: new order form, counters and order table", ru: "Окно заказов: форма нового заказа, счётчики и таблица заказов" } },
        { src: "images/purchase-manager/report.webp",
          alt: { uz: "Hisobot oynasi: haftalik xaridlar diagrammasi", en: "Report window: weekly purchases chart", ru: "Окно отчётов: диаграмма закупок за неделю" } },
        { src: "images/purchase-manager/employees.webp",
          alt: { uz: "Xodimlar oynasi: qo'shish, JSHSHR bo'yicha qidiruv va ro'yxat (sinov ma'lumotlari)", en: "Employees window: add form, ID search and staff list (test data)", ru: "Окно сотрудников: добавление, поиск по ПИНФЛ и список (тестовые данные)" } },
        { src: "images/purchase-manager/main.webp",
          alt: { uz: "Asosiy boshqaruv paneli", en: "Main dashboard", ru: "Главная панель" } },
        { src: "images/purchase-manager/login.webp",
          alt: { uz: "Tizimga kirish oynasi", en: "Sign-in window", ru: "Окно входа" } }
      ],
      tech: ["C++/CLI", "Windows Forms", ".NET Framework 4.7.2", "SQL Server Express", "ADO.NET", "Chart control", "Visual Studio"],
      github: "",
      demo: ""
    },
    {
      title: { uz: "Shaxsiy sayt", en: "Personal website", ru: "Личный сайт" },
      status: "progress",
      desc: {
        uz: "Siz hozir ko'rib turgan sayt. Uch tilli (UZ/EN/RU) portfolio: kunduzgi va tungi rejim, fikr formasi, ma'lumotlar bitta fayldan boshqariladi.",
        en: "The site you are looking at. A portfolio in three languages (UZ/EN/RU) with light and dark modes and a feedback form, all driven by a single data file.",
        ru: "Сайт, который вы сейчас смотрите. Портфолио на трёх языках (UZ/EN/RU) со светлой и тёмной темой и формой отзывов; все данные — в одном файле."
      },
      tech: ["HTML", "CSS", "JavaScript", "Vercel"],
      github: "https://github.com/murodullaxamidullayevich-cyber/personal_website",
      demo: ""
    }
  ],

  /* ---------- TA'LIM ----------
     Yangilari tepaga yoziladi.                                          */
  education: [
    { years: "2025 — ", current: true,
      place: { uz: "Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universiteti (TATU)",
               en: "Tashkent University of Information Technologies named after Muhammad al-Khwarizmi (TATU)",
               ru: "Ташкентский университет информационных технологий имени Мухаммада аль-Хорезми (ТУИТ)" },
      level: { uz: "Bakalavriat · Sun'iy intellekt", en: "Bachelor's · Artificial Intelligence", ru: "Бакалавриат · Искусственный интеллект" },
      text: { uz: "Hozir 2-kursda o'qiyman. Dasturlash (C++, Python), algoritmlar va ma'lumotlar tuzilmalari, diskret matematika, ma'lumotlar bazalari, fizika va matematik analizni o'rganyapman.",
              en: "Currently in my second year, studying programming (C++, Python), algorithms and data structures, discrete math, databases, physics and calculus.",
              ru: "Сейчас на втором курсе: программирование (C++, Python), алгоритмы и структуры данных, дискретная математика, базы данных, физика и математический анализ." } },
    { years: "2022 — 2025",
      place: { uz: "Paxtachi tumani ixtisoslashtirilgan maktabi", en: "Paxtachi District Specialized School", ru: "Специализированная школа Пахтачийского района" },
      level: { uz: "9–11-sinflar · Samarqand viloyati", en: "Grades 9–11 · Samarkand Region", ru: "9–11 классы · Самаркандская область" },
      text: { uz: "Umumta'lim maktabidan kirish imtihoni asosida qabul qilinganman.",
              en: "Admitted from a general school through a competitive entrance exam.",
              ru: "Поступил из общеобразовательной школы по результатам вступительного экзамена." } },
    { years: "2014 — 2022",
      place: { uz: "Paxtachi tumani 17-umumta'lim maktabi", en: "General School No. 17, Paxtachi District", ru: "Общеобразовательная школа № 17 Пахтачийского района" },
      level: { uz: "1–8-sinflar · Samarqand viloyati", en: "Grades 1–8 · Samarkand Region", ru: "1–8 классы · Самаркандская область" } }
  ],

  /* ---------- SERTIFIKATLAR ----------
     Yangilari tepaga yoziladi. link: rasmiy tekshirish sahifasi yoki fayl.  */
  certificates: [
    { date: "16.10.2026",
      title: { uz: "Prompt Engineering", en: "Prompt Engineering", ru: "Prompt Engineering" },
      issuer: "Five Million AI Leaders",
      text: { uz: "O'zbekiston Raqamli texnologiyalar vazirligi va Dubai Future Foundation qo'shma dasturi. ID: 5MP 1645210",
              en: "Joint program of Uzbekistan's Ministry of Digital Technologies and the Dubai Future Foundation. ID: 5MP 1645210",
              ru: "Совместная программа Министерства цифровых технологий Узбекистана и Dubai Future Foundation. ID: 5MP 1645210" },
      link: "https://omp.aistudy.uz/certificate?id=750721fe-60e6-452c-886b-9be88475a0ff" },
    { date: "30.05.2025",
      title: { uz: "Fizika — milliy sertifikat, B daraja", en: "Physics — National Certificate, level B", ru: "Физика — национальный сертификат, уровень B" },
      issuer: { uz: "Bilim va malakalarni baholash agentligi", en: "Knowledge and Skills Assessment Agency", ru: "Агентство по оценке знаний и навыков" },
      text: { uz: "55.5 ball (85.38%). Eng yuqori natija: elektr va magnetizm. Sertifikat № UZ25 349250, 29.05.2028 gacha amal qiladi.",
              en: "55.5 points (85.38%). Strongest section: electricity and magnetism. Certificate No. UZ25 349250, valid until 29.05.2028.",
              ru: "55,5 балла (85,38%). Лучший раздел: электричество и магнетизм. Сертификат № UZ25 349250, действует до 29.05.2028." } },
    { date: "20.03.2025",
      title: { uz: "Matematika — milliy sertifikat, B+ daraja", en: "Mathematics — National Certificate, level B+", ru: "Математика — национальный сертификат, уровень B+" },
      issuer: { uz: "Bilim va malakalarni baholash agentligi", en: "Knowledge and Skills Assessment Agency", ru: "Агентство по оценке знаний и навыков" },
      text: { uz: "61.34 ball (94.37%): algebra va matematik analiz asoslari 45.51, geometriya 15.83. Sertifikat № UZ25 254368, 19.03.2028 gacha amal qiladi.",
              en: "61.34 points (94.37%): algebra and calculus basics 45.51, geometry 15.83. Certificate No. UZ25 254368, valid until 19.03.2028.",
              ru: "61,34 балла (94,37%): алгебра и основы анализа 45,51, геометрия 15,83. Сертификат № UZ25 254368, действует до 19.03.2028." } }
  ],

  /* ---------- YUTUQLAR (olimpiada, tanlov, hakaton) ----------
     Bo'sh bo'lsa, bo'lim saytda ko'rinmaydi.                              */
  achievements: [],

  /* ---------- INTERFEYS MATNLARI ---------- */
  ui: {
    uz: {
      nav: { about: "Men haqimda", skills: "Ko'nikmalar", projects: "Loyihalar", education: "Ta'lim", certificates: "Sertifikatlar", contact: "Aloqa", feedback: "Fikr" },
      theme: { light: "Kunduzgi rejim", dark: "Tungi rejim" },
      more: "Ko'proq ko'rsatish", less: "Kamroq ko'rsatish",
      hero: {
        eyebrow: "Sun'iy intellekt talabasi · TATU · Toshkent",
        lead: "Dasturiy ta'minot va sun'iy intellekt bilan shug'ullanaman. Bu yerda loyihalarim, bilimlarim va erishgan natijalarim jamlangan.",
        cta1: "Loyihalarni ko'rish", cta2: "Bog'lanish", cv: "CV · tez orada"
      },
      about: {
        title: "Men haqimda",
        p1: "Men Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universitetida sun'iy intellekt yo'nalishining 2-kurs talabasiman. C++ va Python'da dastur yozaman, algoritmlar va ma'lumotlar tuzilmalarini o'rganaman.",
        p2: "Hozir sun'iy intellekt agentlari ustida ishlayapman: mening agentim har kuni xorijda o'qish haqida faktlari tekshirilgan video tayyorlaydi. Maqsadim: real muammolarni hal qiladigan mahsulotlar yaratish va kelajakda o'z startapimni ochish."
      },
      skills: { title: "Ko'nikmalar" },
      projects: {
        title: "Loyihalar", sub: "Tugallangan, jarayondagi va rejadagi ishlar.",
        status: { done: "Tugallangan", progress: "Jarayonda", planned: "Rejada" },
        code: "Kod", demo: "Ko'rish", features: "Imkoniyatlar"
      },
      education: { title: "Ta'lim", sub: "O'qigan joylarim.", current: "hozir" },
      certificates: { title: "Sertifikatlar", sub: "Olgan sertifikatlarim. «Tekshirish» rasmiy sahifani ochadi.", view: "Tekshirish" },
      achievements: { title: "Yutuqlar" },
      contact: { title: "Aloqa", sub: "Hamkorlik, taklif yoki savol bo'lsa, yozing.", missing: "hali qo'shilmagan", copy: "Nusxa olish", copied: "Nusxa olindi" },
      feedback: {
        title: "Fikr qoldiring",
        sub: "Sayt, loyihalarim yoki hamkorlik haqida fikringizni yozing. Xabar to'g'ridan-to'g'ri menga keladi va saytda ko'rinmaydi.",
        name: "Ismingiz (ixtiyoriy)", contact: "Javob uchun Telegram yoki email (ixtiyoriy)",
        rating: "Baho (ixtiyoriy)", star: "yulduz", message: "Xabar",
        send: "Yuborish", sendTg: "Telegram orqali yozish",
        tgHint: "«Telegram orqali yozish» Telegram'ni ochadi: xabaringiz tayyor turadi, uni o'z akkauntingizdan yuborasiz.",
        sending: "Yuborilmoqda…", ok: "Rahmat! Fikringiz yuborildi.",
        empty: "Xabar maydonini to'ldiring.",
        fail: "Yuborib bo'lmadi. Qayta urinib ko'ring yoki «Telegram orqali yozish» tugmasidan foydalaning.",
        tgIntro: "Salom! Saytingizdan yozyapman."
      },
      footer: { made: "Toshkentda yaratildi" }
    },
    en: {
      nav: { about: "About", skills: "Skills", projects: "Projects", education: "Education", certificates: "Certificates", contact: "Contact", feedback: "Feedback" },
      theme: { light: "Light mode", dark: "Dark mode" },
      more: "Show more", less: "Show less",
      hero: {
        eyebrow: "AI student · TATU · Tashkent",
        lead: "I work on software and artificial intelligence. This is where I keep my projects, skills and results.",
        cta1: "See projects", cta2: "Get in touch", cv: "CV · coming soon"
      },
      about: {
        title: "About me",
        p1: "I'm a second-year artificial intelligence student at the Tashkent University of Information Technologies. I write code in C++ and Python and study algorithms and data structures.",
        p2: "Right now I'm building AI agents: mine produces a fact-checked video about studying abroad every day. My goal is to create products that solve real problems and, one day, to start my own company."
      },
      skills: { title: "Skills" },
      projects: {
        title: "Projects", sub: "Finished, in-progress and planned work.",
        status: { done: "Completed", progress: "In progress", planned: "Planned" },
        code: "Code", demo: "View", features: "Features"
      },
      education: { title: "Education", sub: "Where I have studied.", current: "now" },
      certificates: { title: "Certificates", sub: "Certificates I have earned. “Verify” opens the official page.", view: "Verify" },
      achievements: { title: "Achievements" },
      contact: { title: "Contact", sub: "For collaboration, offers or questions, reach out.", missing: "not added yet", copy: "Copy", copied: "Copied" },
      feedback: {
        title: "Leave feedback",
        sub: "Share your thoughts on the site, my projects or a possible collaboration. Messages come straight to me and are not shown on the site.",
        name: "Your name (optional)", contact: "Telegram or email for a reply (optional)",
        rating: "Rating (optional)", star: "star", message: "Message",
        send: "Send", sendTg: "Write on Telegram",
        tgHint: "“Write on Telegram” opens Telegram with your message ready; you send it from your own account.",
        sending: "Sending…", ok: "Thank you! Your feedback was sent.",
        empty: "Please write a message.",
        fail: "Couldn't send it. Try again or use “Write on Telegram”.",
        tgIntro: "Hi! I'm writing from your website."
      },
      footer: { made: "Made in Tashkent" }
    },
    ru: {
      nav: { about: "Обо мне", skills: "Навыки", projects: "Проекты", education: "Образование", certificates: "Сертификаты", contact: "Контакты", feedback: "Отзыв" },
      theme: { light: "Светлая тема", dark: "Тёмная тема" },
      more: "Показать больше", less: "Свернуть",
      hero: {
        eyebrow: "Студент направления ИИ · ТУИТ · Ташкент",
        lead: "Занимаюсь разработкой программ и искусственным интеллектом. Здесь собраны мои проекты, навыки и результаты.",
        cta1: "Смотреть проекты", cta2: "Связаться", cv: "Резюме · скоро"
      },
      about: {
        title: "Обо мне",
        p1: "Я студент второго курса направления «Искусственный интеллект» в Ташкентском университете информационных технологий имени Мухаммада аль-Хорезми. Пишу на C++ и Python, изучаю алгоритмы и структуры данных.",
        p2: "Сейчас создаю ИИ-агентов: мой агент каждый день готовит видео об учёбе за рубежом с проверенными фактами. Моя цель — делать продукты, которые решают реальные задачи, и в будущем открыть свой стартап."
      },
      skills: { title: "Навыки" },
      projects: {
        title: "Проекты", sub: "Завершённые, текущие и запланированные работы.",
        status: { done: "Завершён", progress: "В работе", planned: "В планах" },
        code: "Код", demo: "Смотреть", features: "Возможности"
      },
      education: { title: "Образование", sub: "Где я учился.", current: "сейчас" },
      certificates: { title: "Сертификаты", sub: "Полученные сертификаты. «Проверить» открывает официальную страницу.", view: "Проверить" },
      achievements: { title: "Достижения" },
      contact: { title: "Контакты", sub: "По вопросам сотрудничества, предложениям и вопросам — пишите.", missing: "пока не добавлено", copy: "Копировать", copied: "Скопировано" },
      feedback: {
        title: "Оставьте отзыв",
        sub: "Напишите, что думаете о сайте, моих проектах или возможном сотрудничестве. Сообщение придёт прямо мне и не будет видно на сайте.",
        name: "Ваше имя (необязательно)", contact: "Telegram или email для ответа (необязательно)",
        rating: "Оценка (необязательно)", star: "звезда", message: "Сообщение",
        send: "Отправить", sendTg: "Написать в Telegram",
        tgHint: "«Написать в Telegram» откроет Telegram с готовым сообщением — вы отправите его со своего аккаунта.",
        sending: "Отправка…", ok: "Спасибо! Отзыв отправлен.",
        empty: "Напишите сообщение.",
        fail: "Не удалось отправить. Попробуйте ещё раз или нажмите «Написать в Telegram».",
        tgIntro: "Здравствуйте! Пишу с вашего сайта."
      },
      footer: { made: "Сделано в Ташкенте" }
    }
  }
};
