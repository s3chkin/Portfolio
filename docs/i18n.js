(function () {
  const STORAGE_KEY = "portfolio-lang";
  const DEFAULT_LANG = "en";

  const MESSAGES = {
    en: {
      meta: {
        title: "Sechkin Rahim | Web Developer",
        projectsTitle: "Portfolio | Sechkin Rahim",
      },
      nav: {
        profile: "Home",
        education: "Education",
        experience: "Work",
        skills: "Skills",
        projects: "Projects",
        certificates: "Certs",
        more: "More",
        fullList: "Portfolio",
        contact: "Contact",
        langAria: "Site language",
      },
      hero: {
        greeting: "Hi, I'm ",
        name: "Sechkin",
        rolePrefix: "Web Developer: ",
        intro:
          "I am a Software and Internet Technologies student with professional experience in web development. I work with WordPress - maintaining live systems, optimizing performance, and developing custom functionality - while expanding my skills in ASP.NET.",
        cvBtn: "CV (PDF)",
        laptopAlt: "Workstation illustration",
      },
      heroRoles: ["Full-Stack", "WordPress Specialist", ".NET"],
      edu: {
        title: "Education",
        lead: "School, university, and extra courses.",
        schoolPeriod: "2018 - 2023",
        schoolName: 'PGMETT "Hr. Botev"',
        periodNow: "Ongoing",
        schoolKind: "Secondary education",
        schoolText:
          'PGMETT "Hristo Botev", Shumen - Applied Programming (2018–2023). More web-focused from 2020.',
        uniPeriod: "2023 – now",
        uniName: "Technical university of Varna",
        uniKind: "University",
        uniText:
          "Technical University of Varna — Software and Internet Technologies, year three (2023–now).",
        udemyKind: "Courses",
        udemyText:
          "JavaScript course on Udemy; next I want to go deeper into React and Node.",
      },
      journey: {
        eyebrow: "Professional Milestones",
        title: "Key steps in my journey as a web developer.",
        lead:
          "From international experience and structural internships to architecting real-world web platforms.",
        y2022: "2022",
        y2025a: "2025",
        y2025now: "2025 — Present",
        tagErasmus: "Study abroad",
        tagIntern: "Internship",
        tagWork: "Current role",
        erasmusTitle: "Erasmus+ Practice | Portugal",
        erasmusText:
          "Completed a 2-week international program in Portugal, working as a web developer and gaining early hands-on experience.",
        internTitle: "Web Developer Intern | Touch Point",
        internText:
          "Gained practical experience in a professional environment, working closely with senior developers and team members on real-world tasks.",
        workTitle: "Web Developer | Grajdani na kvartala",
        workText:
          "Develop and architect complex web platforms, custom E-learning systems with bespoke plugins, and international real estate portals (UK/BG). Deliver high-profile projects, including UI/UX redesigns for financial institutions (Dubai), while ensuring top-tier security and performance tuning across all live applications.",
      },
      skills: {
        title: "Skills",
        lead: "Core technologies and frameworks I use to build web solutions.",
        wpTitle: "WordPress Development",
        wpLi1: "System Maintenance — Core updates, performance stability, and security patches.",
        wpLi2: "Performance Optimization — Speed tuning and database optimization.",
        wpLi3: "Infrastructure & Hosting — cPanel management and advanced backups.",
        wpLi4:
          "Custom Development — Custom Plugin Development designed for seamless Elementor styling and integration.",
        wpLi5: "Integrations & SEO — Advanced forms and technical SEO setups.",
        netTitle: ".NET & back-end",
        netLead: "C#, ASP.NET Core, Entity Framework Core, PHP, Laravel.",
        feTitle: "Front-end",
        feLead: "HTML5, CSS3, JavaScript (Fundamentals), Bootstrap, Tailwind CSS, Responsive Layouts. UI/UX Design: Figma (Wireframing, Prototyping, Component Design).",
        iconsLabel: "Tools I use",
        chipBg: "Bulgarian (B2)",
        chipEn: "English (A2 — in active improvement)",
        chipTr: "Turkish (C1)",
      },
      projects: {
        title: "Projects",
        leadHtml: "Production web applications, custom platforms, and client projects.",
        details: "Details",
        live: "Live site",
        fullListBtn: "All projects",
      },
      wp: {
        wp1: {
          title: "National Sports Cluster",
          cardDesc:
            "End-to-end development of a comprehensive web platform unifying sports, business, and innovation in Bulgaria.",
          modalDesc:
            "End-to-end development of a comprehensive web platform for an organization unifying sports, business, and innovation in Bulgaria. The project focuses on a high-profile professional presentation of the cluster's activities, streamlined digital infrastructure, and facilitating seamless connectivity between sports clubs and public institutions.",
          meta: "WordPress · Custom Plugins · SEO",
          techLine: "<strong>Technologies:</strong> WordPress · Custom Plugins · SEO",
          altPreview: "National Sports Cluster preview",
          altProject: "National Sports Cluster project",
        },
        wp2: {
          title: "Click & Rent — Short-Term Rental Platform",
          cardDesc:
            "A comprehensive web booking system for short-term rentals in Bulgaria, engineered to fully automate the property search and leasing workflow.",
          modalDesc:
            "Comprehensive web booking ecosystem for short-term apartment rentals in Bulgaria. The project focuses on full automation of the property search and leasing workflow, delivering an intuitive, high-performance dual-interface tailored for both tenants and property hosts.",
          meta: "WordPress · SEO",
          techLine: "<strong>Technologies:</strong> WordPress · SEO",
          altPreview: "Click and Rent preview",
          altProject: "Click and Rent project",
        },
        wp5: {
          title: "Private Bank UI/UX Redesign (Dubai)",
          cardDesc:
            "Visual identity and user interface modernization for a banking platform, engineered with a premium look-and-feel tailored for the high-end financial sector.",
          modalDesc:
            "Comprehensive modernization of the visual identity and user interface for a prominent banking platform. The project encompasses advanced UI/UX restructuring, interactive Figma prototyping, and layout optimization to deliver a high-end, contemporary digital experience tailored for the premium financial sector.",
          meta: "Figma · WordPress · SEO",
          techLine: "<strong>Technologies:</strong> Figma · WordPress · SEO",
          altPreview: "STK Private Banking redesign preview",
          altProject: "STK Private Banking redesign project",
        },
        wp6: {
          title: "Black Sea Yacht Academy — E-Learning Platform",
          cardDesc:
            "End-to-end development of a premium e-learning and professional qualification platform tailored for the luxury yachting industry.",
          modalDesc:
            "End-to-end development of a premium e-learning and professional qualification platform tailored for the luxury yachting industry. The project focuses on high-end presentation of specialized maritime courses and streamlining the student journey toward international career placement.",
          meta: "WordPress · Custom Plugins · SEO",
          techLine: "<strong>Technologies:</strong> WordPress · Custom Plugins · SEO",
          altPreview: "Black Sea Yacht Academy preview",
          altProject: "Black Sea Yacht Academy project",
        },
        wp7: {
          title: "Kauza Bulgaria — Social Impact Platform",
          cardDesc:
            "End-to-end development of an active web platform dedicated to social causes, community volunteering, and secure donation management in Bulgaria.",
          modalDesc:
            "End-to-end development of an active web platform dedicated to social causes and volunteering in Bulgaria. Engineered to foster community engagement, the system streamlines the contribution ecosystem, making it seamless for users to donate securely and participate in charitable initiatives.",
          meta: "Figma · WordPress · SEO",
          techLine: "<strong>Technologies:</strong> Figma · WordPress · SEO",
          altPreview: "Kauza Bulgaria project preview",
          altProject: "Kauza Bulgaria project",
        },
      },
      extras: {
        toolsTitle: "Tools & Environment",
        certsTitle: "Certificates",
        certsIntro: "Official credentials and training certificates.",
        certOpen: "View document",
        certTitle1: "Erasmus+ Professional Mobility & Intercultural Training",
        certTitle2: "Erasmus+ Specialized Training in Computer Engineering & Technology",
        certTitle3: "Erasmus+ International Web Development Internship — Portugal",
        localTitle: "IDEs & Editors",
        localText: "Visual Studio, JetBrains Rider, VS Code",
        ideTitle: "Local Servers & Databases",
        ideText: "Local WP, XAMPP, Microsoft SQL Server, MySQL",
        workflowTitle: "Workflow & Systems",
        workflowText: "Git / GitHub, cPanel",
      },
      contact: {
        title: "Contact",
        lead: "Write me here or use email / phone below.",
        asideTitle: "Direct contact",
        phoneLabel: "PHONE",
        emailLabel: "EMAIL",
        addressLabel: "LOCATION",
        addressValue: "Varna/Shumen, Bulgaria",
        namePh: "Your name",
        emailPh: "Your email",
        messagePh: "Your message",
        send: "Send",
        success: "Sent.",
        sendError: "Something went wrong. Try again or email me directly.",
        labelName: "Your name",
        labelEmail: "Your email",
        labelMessage: "Your message",
      },
      footer: {
        lineHtml:
          'Web Developer · <a target="_blank" href="https://www.instagram.com/sechkin.rahim">Sechkin Rahim</a> · <a href="projects.html">Portfolio</a>',
        copyright: "© 2026 Sechkin Rahim.",
        contact: "Contact",
      },
      projectsPage: {
        heroTitle: "Portfolio",
        heroLead:
          "Production-ready web applications, custom platforms, and commercial client projects.",
        wpHeading: "WordPress",
        legacyHeading: "ASP.NET, front-end & full-stack",
        ribbonBe: "Back-end",
        ribbonFe: "Front-end",
        ribbonFs: "Full stack",
        freelancerDesc: "Service marketplace — listings, procurement workflow, administrative messaging.",
        metalDesc: "Reference web property for metal categories, collection points, and contact routing.",
        travelDesc: "Inter-city ride-sharing coordination with search and itinerary management.",
        moreInfo: "Technical brief",
        code: "Repository",
        archive: "Zip Archive",
        modalClose: "Dismiss",
        viewCode: "Source code",
        viewZip: "Download archive",
        liveDemo: "Live demonstration",
        freelancerBody:
          "Web platform for service discovery and fulfilment: classified listings, request handling, administrative correspondence. Vendors monitor buyer milestones against published milestones; purchasers configure optional line items via comparative pricing matrices.",
        fullTravelBody:
          "Passenger–driver matching for scheduled inter-city travel. Search, reservation, and logistics modules emphasising cost efficiency and emissions reduction.",
        metalBody:
          "Information architecture for material taxonomy, geographic acquisition points, and stakeholder contact data; emphasis on legibility and rapid scanning.",
        footerBack: "← Back to Home",
      },
      common: {
        ariaNavToggle: "Toggle navigation",
        ariaClose: "Close",
      },
    },
    bg: {
      meta: {
        title: "Сечкин Рахим | Уеб разработчик",
        projectsTitle: "Портфолио | Сечкин Рахим",
      },
      nav: {
        profile: "Начало",
        education: "Образование",
        experience: "Работа",
        skills: "Умения",
        projects: "Проекти",
        certificates: "Сертификати",
        more: "Още",
        fullList: "Портфолио",
        contact: "Контакт",
        langAria: "Език на сайта",
      },
      hero: {
        greeting: "Здравей, аз съм ",
        name: "Сечкин",
        rolePrefix: "Уеб разработчик: ",
        intro:
          "Студент съм по „Софтуерни и интернет технологии“ с професионален опит в уеб разработката. Работя с WordPress – поддържам работещи системи, оптимизирам производителността им и разработвам персонализирани функционалности, като паралелно с това надграждам уменията си в ASP.NET.",
        cvBtn: "CV (PDF)",
        laptopAlt: "Илюстрация на работна станция",
      },
      heroRoles: ["Full-Stack", "WordPress Specialist", ".NET"],
      edu: {
        title: "Образование",
        lead: "Училище, университет и допълнителни курсове.",
        schoolPeriod: "2018 - 2023",
        schoolName: "ПГМЕТТ „Хр. Ботев“",
        periodNow: "В процес",
        schoolKind: "Средно образование",
        schoolText:
          "ПГМЕТТ „Христо Ботев“, гр. Шумен – Приложно програмиране (2018–2023). С фокус върху уеб разработката от 2020 г.",
        uniPeriod: "2023 – сега",
        uniName: "Технически университет - Варна",
        uniKind: "Висше образование",
        uniText:
          "Технически университет - Варна — Софтуерни и интернет технологии, трети курс (2023–сега).",
        udemyKind: "Курсове",
        udemyText:
          "JavaScript курс в Udemy; следващата ми цел е да навляза в дълбочина в React и Node.",
      },
      journey: {
        eyebrow: "Професионални етапи",
        title: "Ключови стъпки в моя път като уеб разработчик.",
        lead:
          "От международен опит и практически стажове до разработка на реални уеб платформи.",
        y2022: "2022",
        y2025a: "2025",
        y2025now: "2025 — 2026",
        tagErasmus: "Обучение в чужбина",
        tagIntern: "Стаж",
        tagWork: "Текуща роля",
        erasmusTitle: "Еразъм+ Практика | Португалия",
        erasmusText:
          "Завърших двуседмична международна програма в Португалия. Работих като уеб разработчик и натрупах ранен практически опит.",
        internTitle: "Стажант уеб разработчик | Touch Point",
        internText:
          "Натрупах практически опит в професионална среда, като работих в тясно сътрудничество с разработчици по реални задачи.",
        workTitle: "Уеб разработчик | Граждани на квартала",
        workText:
          "Разработвам комплексни уеб платформи, системи за електронно обучение (LMS) с къстъм плъгини и международни портали за недвижими имоти (UK/BG). Изпълнявам отговорни проекти, включително UI/UX редизайн за финансови институции (Дубай), като отговарям за сигурността и оптимизацията на скоростта на приложенията.",
      },
      skills: {
        title: "Умения",
        lead: "Технологии и рамки, които използвам за изграждане на уеб решения.",
        wpTitle: "WordPress разработка",
        wpLi1:
          "Поддръжка на системата — обновления на WordPress Core, стабилност на сайта и security updates.",
        wpLi2:
          "Оптимизация на производителността — ускоряване на сайта и оптимизация на базата данни.",
        wpLi3: "Хостинг и инфраструктура — управление на cPanel и създаване на Backup-и.",
        wpLi4:
          "Custom Development — разработка на custom plugins с пълна съвместимост и интеграция с Elementor.",
        wpLi5: "Интеграции и SEO — настройка на advanced forms и technical SEO.",
        netTitle: ".NET и back-end",
        netLead: "C#, ASP.NET Core, Entity Framework Core, PHP, Laravel.",
        feTitle: "Front-end",
        feLead:
          "HTML5, CSS3, JavaScript (основи), Bootstrap, Tailwind CSS, responsive layouts. UI/UX Design — Figma (wireframes, prototypes и component design).",
        iconsLabel: "Инструменти, които използвам",
        chipBg: "Български (B2)",
        chipEn: "Английски (A2 — в процес на активно подобрение)",
        chipTr: "Турски (C1)",
      },
      projects: {
        title: "Проекти",
        leadHtml: "Реални уеб приложения, платформи и клиентски проекти.",
        details: "Детайли",
        live: "Към сайта",
        fullListBtn: "Всички проекти",
      },
      wp: {
        wp1: {
          title: "Национален спортен клъстер",
          cardDesc:
            "Цялостно изграждане на уеб платформа за организация, обединяваща спорта, бизнеса и иновациите в България.",
          modalDesc:
            "Цялостно изграждане на уеб платформа за организация, обединяваща спорта, бизнеса и иновациите в България. Проектът е насочен към професионално представяне на дейността на клъстера и улесняване на връзката между спортните клубове и институциите.",
          meta: "WordPress · Custom Plugins · SEO",
          techLine: "<strong>Технологии:</strong> WordPress · Custom Plugins · SEO",
          altPreview: "Национален спортен клъстер — визуализация",
          altProject: "Национален спортен клъстер — проект",
        },
        wp2: {
          title: "Онлайн платформа за кратковременни наеми „Click & Rent“",
          cardDesc:
            "Цялостна уеб система за резервации на апартаменти и нощувки в България, насочена към автоматизиране на процеса по търсене и наемане на имоти.",
          modalDesc:
            "Цялостна уеб система за резервации на апартаменти и нощувки в България. Проектът е насочен към автоматизиране на процеса по търсене и наемане на имоти, предоставяйки интуитивен интерфейс както за наематели, така и за хостове.",
          meta: "WordPress · SEO",
          techLine: "<strong>Технологии:</strong> WordPress · SEO",
          altPreview: "Click and Rent — визуализация",
          altProject: "Click and Rent — проект",
        },
        wp5: {
          title: "Редизайн на сайт на частна банка в Дубай",
          cardDesc:
            "Актуализиране на визията и интерфейса на банкова платформа за по-съвременно излъчване, подходящо за финансовия сектор.",
          modalDesc:
            "Актуализиране на визията и интерфейса на банкова платформа. Проектът обхваща подобряване на графичните елементи и подредбата на съдържанието, с цел постигане на по-съвременно излъчване, подходящо за финансовия сектор.",
          meta: "Figma · WordPress · SEO",
          techLine: "<strong>Технологии:</strong> Figma · WordPress · SEO",
          altPreview: "STK Private Banking — визуализация",
          altProject: "STK Private Banking — проект",
        },
        wp6: {
          title: "Платформа за обучение на персонал по яхти — Black Sea Yacht Academy",
          cardDesc:
            "Цялостно изграждане на платформа за обучение и професионална квалификация в луксозния сегмент на яхтената индустрия.",
          modalDesc:
            "Цялостно изграждане на платформа за обучение и професионална квалификация в луксозния сегмент на яхтената индустрия. Проектът е фокусиран върху престижното представяне на курсовете и улесняване на пътя на курсистите към международна реализация.",
          meta: "WordPress · Custom Plugins · SEO",
          techLine: "<strong>Технологии:</strong> WordPress · Custom Plugins · SEO",
          altPreview: "Black Sea Yacht Academy — визуализация",
          altProject: "Black Sea Yacht Academy — проект",
        },
        wp7: {
          title: "Кауза България",
          cardDesc:
            "Цялостен проект за активна платформа, посветена на социални каузи и доброволчество в България.",
          modalDesc:
            "Цялостен проект за активна платформа, посветена на социални каузи и доброволчество в България. Сайтът е изграден с цел да обединява общността и да улеснява процеса по дарителство и участие в благотворителни инициативи.",
          meta: "Figma · WordPress · SEO",
          techLine: "<strong>Технологии:</strong> Figma · WordPress · SEO",
          altPreview: "Кауза България — визуализация",
          altProject: "Кауза България — проект",
        },
      },
      extras: {
        toolsTitle: "Инструменти и среди за разработка",
        certsTitle: "Сертификати",
        certsIntro: "Официални сертификати от обучения.",
        certOpen: "Преглед на документ",
        certTitle1: "Erasmus+ Professional Mobility & Intercultural Training",
        certTitle2: "Erasmus+ Specialized Training in Computer Engineering & Technology",
        certTitle3: "Erasmus+ International Web Development Internship — Portugal",
        localTitle: "Работни среди и редактори",
        localText: "Visual Studio, JetBrains Rider, VS Code",
        ideTitle: "Локални сървъри и бази данни",
        ideText: "Local WP, XAMPP, Microsoft SQL Server, MySQL",
        workflowTitle: "Работен процес и системи",
        workflowText: "Git / GitHub, cPanel",
      },
      contact: {
        title: "Контакти",
        lead: "Свържете се с мен",
        asideTitle: "Директен контакт",
        phoneLabel: "ТЕЛЕФОН",
        emailLabel: "ИМЕЙЛ",
        addressLabel: "ЛОКАЦИЯ",
        addressValue: "Варна/Шумен, България",
        namePh: "Име",
        emailPh: "Имейл",
        messagePh: "Съобщение",
        send: "Изпрати",
        success: "Изпратено.",
        sendError: "Не стана. Опитай пак или ми пиши на имейла по-горе.",
        labelName: "Име",
        labelEmail: "Имейл",
        labelMessage: "Съобщение",
      },
      footer: {
        lineHtml:
          'Уеб разработчик · <a target="_blank" href="https://www.instagram.com/sechkin.rahim">Сечкин Рахим</a> · <a href="projects.html">Портфолио</a>',
        copyright: "© 2026 Сечкин Рахим.",
        contact: "Контакти",
      },
      projectsPage: {
        heroTitle: "Портфолио",
        heroLead:
          "Реални уеб приложения, авторски платформи и завършени клиентски проекти.",
        wpHeading: "WordPress",
        legacyHeading: "ASP.NET, front-end и full-stack",
        ribbonBe: "Back-end",
        ribbonFe: "Front-end",
        ribbonFs: "Full stack",
        freelancerDesc: "Пазар за услуги — обяви, заявки, административна комуникация.",
        metalDesc: "Референтен уеб ресурс за категории метали, пунктове и контактни маршрути.",
        travelDesc: "Координация на междуградски споделени пътувания с търсене и управление на маршрути.",
        moreInfo: "Техническо резюме",
        code: "Хранилище",
        archive: "ZIP Архив",
        modalClose: "Затвори",
        viewCode: "Изходен код",
        viewZip: "Сваляне на архив",
        liveDemo: "Демонстрация на живо",
        freelancerBody:
          "Уеб платформа за откриване и изпълнение на услуги: обяви, обработка на заявки, административна кореспонденция. Доставчици следят етапите на възложителя спрямо публикувани контролни точки; възложителите конфигурират допълнителни позиции чрез сравнителни матрици по цена.",
        fullTravelBody:
          "Съвпадение пътник–шофьор за планирани междуградски пътувания. Модули за търсене, резервация и логистика с акцент върху разходи и емисии.",
        metalBody:
          "Информационна архитектура за таксономия на материали, географски пунктове и контактни данни; акцент върху четимост и бързо сканиране.",
        footerBack: "← Към начало",
      },
      common: {
        ariaNavToggle: "Превключване на навигацията",
        ariaClose: "Затвори",
      },
    },
  };

  function deepGet(obj, path) {
    return path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
  }

  function t(lang, path) {
    const v = deepGet(MESSAGES[lang], path);
    if (v !== undefined) return v;
    return deepGet(MESSAGES.en, path);
  }

  function getLang() {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s === "bg" || s === "en") return s;
    } catch (_) {}
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (lang !== "bg" && lang !== "en") return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === "bg" ? "bg" : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const val = t(lang, key);
      if (typeof val === "string") el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      const val = t(lang, key);
      if (typeof val === "string") el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      const val = t(lang, key);
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      if (!key) return;
      const val = t(lang, key);
      if (typeof val === "string") el.setAttribute("aria-label", val);
    });

    document.querySelectorAll("[data-i18n-attr-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-attr-alt");
      if (!key) return;
      const val = t(lang, key);
      if (typeof val === "string") el.setAttribute("alt", val);
    });

    const titleKey = document.body.getAttribute("data-i18n-title-key") || "meta.title";
    const title = t(lang, titleKey);
    if (typeof title === "string") document.title = title;

    document.querySelectorAll(".lang-switch-btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("lang-switch-btn--active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    window.__portfolioI18n = {
      getLang: () => lang,
      t: (path) => t(lang, path),
      getTypewriterTexts: () => {
        const arr = MESSAGES.en.heroRoles;
        return Array.isArray(arr) ? arr : ["Full-Stack", "WordPress Specialist", ".NET"];
      },
    };

    document.dispatchEvent(new CustomEvent("portfolio-lang-changed", { detail: { lang } }));
  }

  function wireLangButtons() {
    document.querySelectorAll(".lang-switch-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (!lang) return;
        setLang(lang);
        applyLang(lang);
        if (typeof window.__restartPortfolioTypewriter === "function") {
          window.__restartPortfolioTypewriter();
        }
        const navCollapse = document.getElementById("navbarSupportedContent");
        if (navCollapse && navCollapse.classList.contains("show") && window.bootstrap) {
          bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(getLang());
    wireLangButtons();
  });

  window.__portfolioI18nPublic = { getLang, setLang, applyLang, t: (path) => t(getLang(), path) };
})();
