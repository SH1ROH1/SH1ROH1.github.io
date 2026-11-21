const projects = [
  {
    name: "Camera System",
    category: "unreal",
    type: "Unreal Engine / система",
    description: "Модульна система камер для плавних переходів, стеження за ціллю та різних режимів керування.",
    tech: "C++  ·  UE5",
    url: "https://github.com/SH1ROH1/Camera-System",
    featured: true,
  },
  {
    name: "Item System",
    category: "unreal",
    type: "Unreal Engine / система",
    description: "Готова основа для підбирання предметів та інвентарю з одним слотом в іграх на Unreal Engine 5.",
    tech: "C++  ·  UE5",
    url: "https://github.com/SH1ROH1/Item-System",
  },
  {
    name: "Tool Box",
    category: "tools",
    type: "Інструмент",
    description: "Невелика утиліта для копіювання та переміщення файлів між папками.",
    tech: "Python",
    url: "https://github.com/SH1ROH1/Tool-Box",
  },
  {
    name: "LOTO",
    category: "tools",
    type: "Інструмент",
    description: "Генератор випадкових значень, створений як практичний desktop-проєкт.",
    tech: "C++  ·  Qt",
    url: "https://github.com/SH1ROH1/LOTO",
  },
  {
    name: "WhoAreYou",
    category: "games",
    type: "Game jam / гра",
    description: "Ігровий проєкт, створений у форматі Game Jam — від ідеї до робочого прототипу.",
    tech: "C++  ·  Game Dev",
    url: "https://github.com/SH1ROH1/WhoAreYou",
  },
  {
    name: "Math Quiz",
    category: "games",
    type: "Мініпроєкт",
    description: "Проста вікторина з математичними прикладами та перевіркою відповідей.",
    tech: "Python",
    url: "https://github.com/SH1ROH1/Math-Quiz",
  },
  {
    name: "System Programing",
    category: "study",
    type: "Навчання",
    description: "Колекція навчальних вправ і практики з C++ системного програмування.",
    tech: "C++",
    url: "https://github.com/SH1ROH1/System-programing",
  },
];

const projectCopy = {
  "Camera System": {
    uk: ["Unreal Engine / система", "Модульна система камер для плавних переходів, стеження за ціллю та різних режимів керування."],
    en: ["Unreal Engine / system", "A modular camera system for smooth transitions, target tracking, and multiple control modes."],
    ru: ["Unreal Engine / система", "Модульная система камер для плавных переходов, отслеживания цели и разных режимов управления."],
  },
  "Item System": {
    uk: ["Unreal Engine / система", "Готова основа для підбирання предметів та інвентарю з одним слотом в іграх на Unreal Engine 5."],
    en: ["Unreal Engine / system", "A ready foundation for item pickups and a single-slot inventory in Unreal Engine 5 games."],
    ru: ["Unreal Engine / система", "Основа для подбора предметов и инвентаря с одним слотом в играх на Unreal Engine 5."],
  },
  "Tool Box": {
    uk: ["Інструмент", "Невелика утиліта для копіювання та переміщення файлів між папками."],
    en: ["Tool", "A small utility for copying and moving files between folders."],
    ru: ["Инструмент", "Небольшая утилита для копирования и перемещения файлов между папками."],
  },
  LOTO: {
    uk: ["Інструмент", "Генератор випадкових значень, створений як практичний desktop-проєкт."],
    en: ["Tool", "A random value generator built as a practical desktop project."],
    ru: ["Инструмент", "Генератор случайных значений, созданный как практический desktop-проект."],
  },
  WhoAreYou: {
    uk: ["Game jam / гра", "Ігровий проєкт, створений у форматі Game Jam — від ідеї до робочого прототипу."],
    en: ["Game jam / game", "A game jam project taken from the first idea to a working prototype."],
    ru: ["Game jam / игра", "Игровой проект, созданный в формате Game Jam — от идеи до рабочего прототипа."],
  },
  "Math Quiz": {
    uk: ["Мініпроєкт", "Проста вікторина з математичними прикладами та перевіркою відповідей."],
    en: ["Mini project", "A simple quiz with math problems and answer checking."],
    ru: ["Мини-проект", "Простая викторина с математическими примерами и проверкой ответов."],
  },
  "System Programing": {
    uk: ["Навчання", "Колекція навчальних вправ і практики з C++ системного програмування."],
    en: ["Learning", "A collection of exercises and practice in C++ systems programming."],
    ru: ["Обучение", "Коллекция учебных упражнений и практики по системному программированию на C++."],
  },
};

const translations = {
  uk: {
    "nav.systems": "Системи", "nav.now": "Зараз", "nav.about": "Про мене",
    "hero.eyebrow": "розробляю, тестую, вдосконалюю", "hero.title": "Системи, які<br /><em>працюють.</em>",
    "hero.description": "Я Arkadii — студент і C++ розробник, який створює модульні інструменти для Unreal Engine, ігор та повсякденних задач.",
    "hero.projects": "Переглянути проєкти", "hero.github": "Мій GitHub",
    "stats.repos": "публічних<br />репозиторіїв", "stats.systems": "готові системи<br />для UE5", "stats.tools": "мови та<br />інструменти", "stats.note": "від ідеї<br />до робочого коду <span>↘</span>",
    "systems.eyebrow": "01 / вибрані роботи", "systems.title": "Мої системи", "systems.description": "Невеликі, зрозумілі та розширювані рішення, зібрані в процесі навчання і створення ігор.",
    "filters.all": "Усі", "filters.unreal": "Unreal Engine", "filters.tools": "Інструменти", "filters.games": "Ігри", "filters.study": "Навчання",
    "now.eyebrow": "02 / за лаштунками", "now.title": "Що далі?", "now.description": "Не все, над чим я працюю, вже можна показати. Але напрямок видно.",
    "private.title": "Приватні проєкти", "private.more": "скоро буде більше",
    "private.one.title": "Private Gameplay System", "private.one.description": "Закритий прототип системи для гри. Деталі та демо з’являться після готовності.",
    "private.two.title": "Private Tools Lab", "private.two.description": "Набір інструментів у розробці — тестую підхід і збираю робочий пайплайн.",
    "private.three.title": "Next Game Project", "private.three.description": "Майбутній командний проєкт. Назва та подробиці поки залишаються за лаштунками.",
    "priority.eyebrow": "Поточний пріоритет", "priority.description": "Працюю над командним Unreal Engine-проєктом у складі AvavaTeam.", "priority.status": "у роботі", "priority.link": "Дивитись репозиторій",
    "activity.title": "Де зараз летять коміти", "activity.note": "оновлено з GitHub",
    "team.eyebrow": "03 / командна робота", "team.description": "Учасник команди AvavaTeam. Працюю над приватним Unreal Engine-репозиторієм DreamJob разом з іншими розробниками.", "team.link": "Відкрити DreamJob",
    "about.eyebrow": "04 / трохи контексту", "about.title": "Код — це спосіб<br /><em>розкласти ідею.</em>", "about.description": "Мені подобається розбирати складні задачі на прості модулі: щоб їх можна було зрозуміти, підключити до нового проєкту й розвивати далі.", "about.link": "Відкрити профіль GitHub",
    "details.focus": "Фокус", "details.stack": "Основний стек", "details.now": "Зараз", "details.nowValue": "Навчаюсь та<br />створюю нове",
    "footer.made": "зроблено з цікавістю до систем <span class=\"footer-heart\">✦</span>", "footer.top": "Вгору ↑",
  },
  en: {
    "nav.systems": "Systems", "nav.now": "Now", "nav.about": "About",
    "hero.eyebrow": "building, testing, improving", "hero.title": "Systems that<br /><em>work.</em>",
    "hero.description": "I’m Arkadii — a student and C++ developer building modular tools for Unreal Engine, games, and everyday problems.",
    "hero.projects": "Explore projects", "hero.github": "My GitHub",
    "stats.repos": "public<br />repositories", "stats.systems": "ready systems<br />for UE5", "stats.tools": "languages &<br />tools", "stats.note": "from an idea<br />to working code <span>↘</span>",
    "systems.eyebrow": "01 / selected work", "systems.title": "My systems", "systems.description": "Small, clear, and extensible solutions built while learning and making games.",
    "filters.all": "All", "filters.unreal": "Unreal Engine", "filters.tools": "Tools", "filters.games": "Games", "filters.study": "Learning",
    "now.eyebrow": "02 / behind the scenes", "now.title": "What’s next?", "now.description": "Not everything I’m working on can be shown yet. But the direction is clear.",
    "private.title": "Private projects", "private.more": "more coming soon",
    "private.one.title": "Private Gameplay System", "private.one.description": "A closed game system prototype. Details and a demo will appear when it is ready.",
    "private.two.title": "Private Tools Lab", "private.two.description": "A toolkit in development — testing ideas and building a reliable workflow.",
    "private.three.title": "Next Game Project", "private.three.description": "An upcoming team project. The name and details stay behind the scenes for now.",
    "priority.eyebrow": "Current priority", "priority.description": "Working on a team Unreal Engine project as part of AvavaTeam.", "priority.status": "in progress", "priority.link": "View repository",
    "activity.title": "Where commits are landing", "activity.note": "updated from GitHub",
    "team.eyebrow": "03 / team work", "team.description": "A member of AvavaTeam. Working with other developers on the private Unreal Engine repository DreamJob.", "team.link": "Open DreamJob",
    "about.eyebrow": "04 / a little context", "about.title": "Code is a way<br /><em>to shape an idea.</em>", "about.description": "I like breaking complex tasks into simple modules that are easy to understand, plug into a new project, and keep improving.", "about.link": "Open GitHub profile",
    "details.focus": "Focus", "details.stack": "Main stack", "details.now": "Now", "details.nowValue": "Learning and<br />building new things",
    "footer.made": "made with curiosity for systems <span class=\"footer-heart\">✦</span>", "footer.top": "Back to top ↑",
  },
  ru: {
    "nav.systems": "Системы", "nav.now": "Сейчас", "nav.about": "Обо мне",
    "hero.eyebrow": "разрабатываю, тестирую, улучшаю", "hero.title": "Системы, которые<br /><em>работают.</em>",
    "hero.description": "Я Arkadii — студент и C++ разработчик, создающий модульные инструменты для Unreal Engine, игр и повседневных задач.",
    "hero.projects": "Посмотреть проекты", "hero.github": "Мой GitHub",
    "stats.repos": "публичных<br />репозиториев", "stats.systems": "готовые системы<br />для UE5", "stats.tools": "языки и<br />инструменты", "stats.note": "от идеи<br />до рабочего кода <span>↘</span>",
    "systems.eyebrow": "01 / избранные работы", "systems.title": "Мои системы", "systems.description": "Небольшие, понятные и расширяемые решения, созданные во время учёбы и разработки игр.",
    "filters.all": "Все", "filters.unreal": "Unreal Engine", "filters.tools": "Инструменты", "filters.games": "Игры", "filters.study": "Обучение",
    "now.eyebrow": "02 / за кулисами", "now.title": "Что дальше?", "now.description": "Не всё, над чем я работаю, уже можно показать. Но направление видно.",
    "private.title": "Приватные проекты", "private.more": "скоро будет больше",
    "private.one.title": "Private Gameplay System", "private.one.description": "Закрытый прототип игровой системы. Детали и демо появятся после готовности.",
    "private.two.title": "Private Tools Lab", "private.two.description": "Набор инструментов в разработке — тестирую идеи и собираю рабочий процесс.",
    "private.three.title": "Next Game Project", "private.three.description": "Будущий командный проект. Название и детали пока остаются за кулисами.",
    "priority.eyebrow": "Текущий приоритет", "priority.description": "Работаю над командным проектом на Unreal Engine в составе AvavaTeam.", "priority.status": "в работе", "priority.link": "Открыть репозиторий",
    "activity.title": "Где сейчас идут коммиты", "activity.note": "обновлено из GitHub",
    "team.eyebrow": "03 / командная работа", "team.description": "Участник команды AvavaTeam. Работаю с другими разработчиками над приватным Unreal Engine-репозиторием DreamJob.", "team.link": "Открыть DreamJob",
    "about.eyebrow": "04 / немного контекста", "about.title": "Код — это способ<br /><em>разложить идею.</em>", "about.description": "Мне нравится разбивать сложные задачи на простые модули, которые легко понять, подключить к новому проекту и развивать дальше.", "about.link": "Открыть профиль GitHub",
    "details.focus": "Фокус", "details.stack": "Основной стек", "details.now": "Сейчас", "details.nowValue": "Учусь и<br />создаю новое",
    "footer.made": "сделано с интересом к системам <span class=\"footer-heart\">✦</span>", "footer.top": "Наверх ↑",
  },
};

const grid = document.querySelector("#project-grid");
const filters = document.querySelectorAll(".filter");
const languageButtons = document.querySelectorAll(".language-button");
const storedLanguage = localStorage.getItem("portfolio-language");
let currentLanguage = ["uk", "en", "ru"].includes(storedLanguage) ? storedLanguage : "uk";

function renderProjects(filter = "all") {
  const visible = projects.filter((project) => filter === "all" || project.category === filter);
  grid.innerHTML = visible.map((project, index) => {
    const copy = projectCopy[project.name][currentLanguage];
    return `
    <article class="project-card ${project.featured ? "featured" : ""}" data-index="${String(index + 1).padStart(2, "0")}">
      <div class="card-top">
        <span class="card-type">${copy[0]}</span>
        <span class="card-number">${String(index + 1).padStart(2, "0")} / ${String(visible.length).padStart(2, "0")}</span>
      </div>
      <div>
        <h3>${project.name}</h3>
        <p>${copy[1]}</p>
        <div class="card-bottom">
          <span class="tech">${project.tech}</span>
          <a class="card-link" href="${project.url}" target="_blank" rel="noreferrer" aria-label="Відкрити ${project.name} на GitHub">↗</a>
        </div>
      </div>
    </article>
  `;
  }).join("");
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translations[language][element.dataset.i18nHtml];
  });
  languageButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.language === language));
  localStorage.setItem("portfolio-language", language);
  renderProjects(document.querySelector(".filter.is-active")?.dataset.filter || "all");
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("is-active"));
    filter.classList.add("is-active");
    renderProjects(filter.dataset.filter);
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

applyLanguage(currentLanguage);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
