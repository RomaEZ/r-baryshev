(function () {
  const SITE = {
    ru: 'https://roman-baryshev.ru/',
    en: 'https://roman-baryshev.com/',
  };

  const translations = {
    ru: {
      meta: {
        title: 'Барышев Роман | Middle+ IT Project Manager',
        description:
          'IT Project Manager с опытом более 7 лет в направлениях Fintech, e-commerce и EdTech, с отличным знанием методологий, подходов, фреймворков и инструментов проектного управления.',
        ogTitle: 'Барышев Роман | Middle+ IT Project Manager',
        ogDescription:
          'Управляю IT-проектами от идеи до релиза более 6 лет, использую Agile (Scrum + Kanban). Знаю SQL и имею опыт Frontend-разработки.',
      },
      nav: {
        achievements: 'Достижения',
        responsibilities: 'Обязанности',
        experience: 'Опыт',
        education: 'Образование',
        skills: 'Навыки',
        about: 'О себе',
        menuAria: 'Меню',
        langAria: 'Выбор языка',
      },
      hero: {
        subtitle: 'IT Project Manager',
        nameHtml: 'БАРЫШЕВ<br><span class="text-gradient">РОМАН</span>',
        status: 'Статус: не ищу работу',
        expLabel: 'ОПЫТ РАБОТЫ ИТ ПМ:',
        expValue: 'более 7 лет',
        fieldsLabel: 'НАПРАВЛЕНИЯ:',
        fieldsValue: 'fintech, e-commerce',
        approachesLabel: 'ПОДХОДЫ К УПРАВЛЕНИЮ:',
        approachesValue: 'Agile и Waterfall',
        frameworksLabel: 'ФРЕЙМВОРКИ И МЕТОДЫ:',
        frameworksValue: 'Scrum, Kanban, Lean, XP, SAFe',
        toolsLabel: 'ИНСТРУМЕНТЫ:',
        toolsValue: 'MS-Project, Jira, Confluence, Kaiten, Asana, Notion, Trello, Miro и др.',
        extraLabel: 'ДОПОЛНИТЕЛЬНО:',
        extraValue: 'опыт работы Frontend-разработчиком, знание Git и SQL',
        photoAlt: 'Барышев Роман',
        logoAlt: 'Логотип Романа Барышева',
      },
      achievements: {
        title: 'ДОСТИЖЕНИЯ',
        stat1: 'реализованных проектов',
        stat2: 'запущенных продуктов',
        stat3: 'сформированных команд',
        highlight1: 'Успешно внедрил SCRUM в работу 7 команд',
        highlight2: 'В должности Head of PMO управлял командой из 6 человек',
        projectsTitle: 'Примеры проектов',
        projectLink: 'Ссылка на сайт',
        portfolioBtn: 'СКАЧАТЬ ПОРТФОЛИО ПРОЕКТОВ В PDF',
        p1: {
          subtitle: 'Fintech продукт в MKK Альфа-Деньги',
          badge1: '8+ месяцев разработки',
          badge2: '15+ человек в команде',
          desc: 'Успешно запустил MVP-версию аналога кредитной карты для клиентов Альфа-Денег. Клиент видит оффер в контуре банка и оформляет заявку, после подписания договора активируется счет с лимитом до 30 тыс. руб.',
          result:
            'Интеграция увеличила ежемесячные выдачи продукта в 3 раза. 40 тыс. выдач/мес, оборот 400 млн руб./мес.',
        },
        p2: {
          subtitle: 'Запуск работающей web-инфраструктуры',
          badge1: '12+ месяцев разработки',
          badge2: '20+ человек в команде',
          desc: 'В результате масштабных работ с серверами, доменами и софтом заказчика был запущен стабильно работающий сайт девелоперской компании, а затем — личные кабинеты клиента и менеджера, интеграции с CRM и функционал А/Б тестирования.',
          result: 'Запущена web-инфраструктура, объединяющая многие бизнес-процессы компании.',
        },
        p3: {
          subtitle: 'Запуск интернет-магазина электроники',
          badge1: '7 месяцев разработки',
          badge2: '7 человек в команде',
          desc: 'Были с нуля разработаны UI/UX-дизайн каталога, карточки, корзины, страницы оформления заказа и личного кабинета. Реализован функционал оформления, оплаты и отслеживания заказа. Написана интеграция с программой ПВЗ. Создана кастомная корзина, личный кабинет. Настроена интеграция с сервисом службы поддержки.',
          result: 'Запущена MVP-версия интернет-магазина с полностью рабочим флоу покупки товаров.',
        },
      },
      responsibilities: {
        title: 'ОБЯЗАННОСТИ',
        d1: 'Управлял полным циклом проектов от инициации до завершения и оценки результатов',
        d2: 'Формировал эффективные взаимоотношения со стейкхолдерами и командами',
        d3: 'Организовывал и руководил кросс-функциональными командами разработки, включая найм и развитие сотрудников',
        d4: 'Успешно внедрял Agile, Scrum и другие инструменты и фреймворки проектного управления',
        d5: 'Тестировал и презентовал продукты на уровне топ-менеджмента компаний',
        d6: 'Вёл проектную документацию, включая паспорта проектов и отчёты',
        d7: 'Управлял рисками: составлял реестры, проводил анализ рисков и занимался их митигацией',
        d8: 'Управлял PMO: от найма сотрудников и их развития до стандартизации и оптимизации процессов взаимодействия',
      },
      experience: {
        title: 'ОПЫТ РАБОТЫ',
        total: '7 лет 4 месяца',
        r1: { duration: '5 лет 3 месяца', role: 'PM в FinTech и e-commerce' },
        r2: { duration: '1 год 6 месяцев', role: 'PM в EdTech' },
        r3: { duration: '7 месяцев', role: 'Frontend-разработчик' },
      },
      education: {
        title: 'ОБРАЗОВАНИЕ',
        label: 'Высшее образование',
        name: 'Ковровская государственная технологическая академия им. В.А. Дегтярева',
        detail: 'Информатика и вычислительная техника',
        certsTitle: 'Сертификаты',
        certWeb: 'Основы веб-вёрстки',
        certSql: 'Базовый SQL',
      },
      skills: {
        title: 'НАВЫКИ',
        pm: 'Управление проектами',
        team: 'Управление командой',
        analysis: 'Системный анализ',
        gantt: 'Диаграмма Ганта',
      },
      about: {
        title: 'О СЕБЕ',
        p1: 'Как Project Manager я успешно реализовал множество проектов в сфере банковских интеграций, комплаенса и e-commerce. Управляю проектами любой сложности, длительности и объема. Формирую эффективные коммуникации, выстраиваю прозрачные процессы и доверительные отношения со стейкхолдерами и другими заинтересованными сторонами.',
        p2: 'Создаю с нуля кросс-функциональные команды разработки, успешно и прозрачно внедряю Scrum, Kanban и другие компоненты Agile-методологии в работу команд и рабочих групп. Отлично владею инструментами проектного управления, такие как Jira, Confluence, Trello, MS Project, Notion.',
        p3: 'Обладаю опытом построения BPMN и UML-диаграмм, анализа данных и проектирования баз данных.',
        p4: 'В свободное время изучаю новые инструменты в области AI и проектного управления, совершенствую английский, а также занимаюсь веб-разработкой. Увлекаюсь активными видами спорта и много путешествую.',
        contact: 'Связаться со мной',
        copyright: '© 2026 Барышев Роман',
      },
      modal: { closeAria: 'Закрыть' },
    },
    en: {
      meta: {
        title: 'Roman Baryshev | Middle+ IT Project Manager',
        description:
          'IT Project Manager with 7+ years of experience in Fintech, e-commerce, and EdTech, with strong expertise in methodologies, frameworks, and project management tools.',
        ogTitle: 'Roman Baryshev | Middle+ IT Project Manager',
        ogDescription:
          'I have been leading IT projects from idea to release for 6+ years using Agile (Scrum + Kanban). I know SQL and have Frontend development experience.',
      },
      nav: {
        achievements: 'Achievements',
        responsibilities: 'Responsibilities',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        about: 'About',
        menuAria: 'Menu',
        langAria: 'Language',
      },
      hero: {
        subtitle: 'IT Project Manager',
        nameHtml: 'BARYSHEV<br><span class="text-gradient">ROMAN</span>',
        status: 'Status: not open to offers',
        expLabel: 'IT PM EXPERIENCE:',
        expValue: '7+ years',
        fieldsLabel: 'INDUSTRIES:',
        fieldsValue: 'fintech, e-commerce',
        approachesLabel: 'MANAGEMENT APPROACHES:',
        approachesValue: 'Agile and Waterfall',
        frameworksLabel: 'FRAMEWORKS & METHODS:',
        frameworksValue: 'Scrum, Kanban, Lean, XP, SAFe',
        toolsLabel: 'TOOLS:',
        toolsValue: 'MS Project, Jira, Confluence, Kaiten, Asana, Notion, Trello, Miro, and more',
        extraLabel: 'ADDITIONALLY:',
        extraValue: 'Frontend development experience, Git and SQL',
        photoAlt: 'Roman Baryshev',
        logoAlt: 'Roman Baryshev logo',
      },
      achievements: {
        title: 'ACHIEVEMENTS',
        stat1: 'projects delivered',
        stat2: 'products launched',
        stat3: 'teams built',
        highlight1: 'Successfully implemented SCRUM across 7 teams',
        highlight2: 'As Head of PMO, led a team of 6 people',
        projectsTitle: 'Project highlights',
        projectLink: 'Visit website',
        portfolioBtn: 'DOWNLOAD PROJECT PORTFOLIO (PDF)',
        p1: {
          subtitle: 'Fintech product at MKK Alfa-Dengi',
          badge1: '8+ months of development',
          badge2: '15+ team members',
          desc: 'Successfully launched an MVP of a credit-card alternative for Alfa-Dengi clients. The client sees an offer within the bank ecosystem and submits an application; after signing the agreement, an account with a limit of up to 30,000 RUB is activated.',
          result:
            'The integration tripled monthly product disbursements: 40K disbursements/month, 400M RUB/month turnover.',
        },
        p2: {
          subtitle: 'Launch of production web infrastructure',
          badge1: '12+ months of development',
          badge2: '20+ team members',
          desc: 'After large-scale work on servers, domains, and client software, we launched a stable corporate website, followed by client and manager portals, CRM integrations, and A/B testing.',
          result: 'Launched web infrastructure that unifies many of the company’s business processes.',
        },
        p3: {
          subtitle: 'Launch of an electronics e-commerce store',
          badge1: '7 months of development',
          badge2: '7 team members',
          desc: 'Designed catalog, product card, cart, checkout, and account UI/UX from scratch. Implemented checkout, payment, and order tracking. Built pickup-point integration, a custom cart and account, and support service integration.',
          result: 'Launched an MVP e-commerce store with a fully working purchase flow.',
        },
      },
      responsibilities: {
        title: 'RESPONSIBILITIES',
        d1: 'Managed the full project lifecycle from initiation through closure and results evaluation',
        d2: 'Built effective relationships with stakeholders and teams',
        d3: 'Organized and led cross-functional development teams, including hiring and team development',
        d4: 'Successfully implemented Agile, Scrum, and other project management tools and frameworks',
        d5: 'Tested and presented products to executive leadership',
        d6: 'Maintained project documentation, including charters and reports',
        d7: 'Managed risks: maintained registers, performed analysis, and drove mitigation',
        d8: 'Led PMO: from hiring and development to standardization and process optimization',
      },
      experience: {
        title: 'WORK EXPERIENCE',
        total: '7 years 4 months',
        r1: { duration: '5 years 3 months', role: 'PM in FinTech and e-commerce' },
        r2: { duration: '1 year 6 months', role: 'PM in EdTech' },
        r3: { duration: '7 months', role: 'Frontend Developer' },
      },
      education: {
        title: 'EDUCATION',
        label: 'Higher education',
        name: 'Degtyarev Kovrov State Technological University',
        detail: 'Computer Science and Engineering',
        certsTitle: 'Certificates',
        certWeb: 'Web Layout Fundamentals',
        certSql: 'Basic SQL',
      },
      skills: {
        title: 'SKILLS',
        pm: 'Project management',
        team: 'Team leadership',
        analysis: 'Systems analysis',
        gantt: 'Gantt chart',
      },
      about: {
        title: 'ABOUT ME',
        p1: 'As a Project Manager, I have successfully delivered numerous projects in banking integrations, compliance, and e-commerce. I manage projects of any complexity, duration, and scope. I build effective communication, transparent processes, and trusted relationships with stakeholders and other parties.',
        p2: 'I build cross-functional development teams from scratch and implement Scrum, Kanban, and other Agile practices transparently across teams and working groups. I am highly proficient with Jira, Confluence, Trello, MS Project, Notion, and similar tools.',
        p3: 'I have experience building BPMN and UML diagrams, data analysis, and database design.',
        p4: 'In my free time, I explore new AI and project management tools, improve my English, and do web development. I enjoy active sports and travel frequently.',
        contact: 'Get in touch',
        copyright: '© 2026 Roman Baryshev',
      },
      modal: { closeAria: 'Close' },
    },
  };

  function getLang() {
    const host = location.hostname.replace(/^www\./i, '').toLowerCase();
    if (host === 'roman-baryshev.com') return 'en';
    if (host === 'roman-baryshev.ru') return 'ru';
    const params = new URLSearchParams(location.search);
    if (params.get('lang') === 'en') return 'en';
    return 'ru';
  }

  function getNested(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  function t(lang, key) {
    return getNested(translations[lang], key);
  }

  function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    document.title = dict.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = dict.meta.description;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = dict.meta.ogTitle;
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = dict.meta.ogDescription;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = t(lang, el.dataset.i18n);
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const value = t(lang, el.dataset.i18nHtml);
      if (value != null) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const value = t(lang, el.dataset.i18nAria);
      if (value != null) el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const value = t(lang, el.dataset.i18nAlt);
      if (value != null) el.alt = value;
    });

    document.querySelectorAll('.lang-switcher__btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
      btn.setAttribute('aria-current', btn.dataset.lang === lang ? 'true' : 'false');
    });

    document.querySelectorAll('.lang-switcher').forEach((group) => {
      group.setAttribute('aria-label', dict.nav.langAria);
    });
  }

  function initLangSwitcher() {
    document.querySelectorAll('.lang-switcher__btn').forEach((btn) => {
      const lang = btn.dataset.lang;
      if (SITE[lang]) btn.href = SITE[lang];
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLangSwitcher();
    const lang = getLang();
    applyTranslations(lang);
    window.__siteLang = lang;
    window.__t = function (key) {
      return t(lang, key);
    };
  });

  window.getSiteLang = getLang;
  window.getCertTitle = function (certId) {
    const lang = getLang();
    if (certId === 'gpm') return 'Google Project Manager';
    if (certId === 'web') return t(lang, 'education.certWeb');
    if (certId === 'sql') return t(lang, 'education.certSql');
    return '';
  };
})();
