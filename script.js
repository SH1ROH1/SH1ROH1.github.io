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
    "nav.systems": "Системи", "nav.now": "Зараз", "nav.about": "Про мене", "nav.profiles": "Профілі",
    "hero.eyebrow": "розробляю, тестую, вдосконалюю", "hero.title": "Системи, які<br /><em>працюють.</em>",
    "hero.description": "Я Arkadii — студент і C++ розробник, який створює модульні інструменти для Unreal Engine, ігор та повсякденних задач.",
    "hero.projects": "Переглянути проєкти", "hero.github": "Мій GitHub", "hero.profiles": "Інші профілі",
    "stats.repos": "публічних<br />репозиторіїв", "stats.systems": "готові системи<br />для UE5", "stats.tools": "мови та<br />інструменти", "stats.note": "від ідеї<br />до робочого коду <span>↘</span>",
    "systems.eyebrow": "01 / вибрані роботи", "systems.title": "Мої системи", "systems.description": "Невеликі, зрозумілі та розширювані рішення, зібрані в процесі навчання і створення ігор.",
    "filters.all": "Усі", "filters.unreal": "Unreal Engine", "filters.tools": "Інструменти", "filters.games": "Ігри", "filters.study": "Навчання",
    "now.eyebrow": "02 / за лаштунками", "now.title": "Що далі?", "now.description": "Не все, над чим я працюю, вже можна показати. Але напрямок видно.",
    "private.title": "Приватні проєкти", "private.more": "скоро буде більше",
    "private.one.title": "Private Gameplay System", "private.one.description": "Закритий прототип системи для гри. Деталі та демо з’являться після готовності.",
    "private.two.title": "Private Tools Lab", "private.two.description": "Набір інструментів у розробці — тестую підхід і збираю робочий пайплайн.",
    "private.three.title": "Next Game Project", "private.three.description": "Майбутній командний проєкт. Назва та подробиці поки залишаються за лаштунками.",
    "priority.eyebrow": "Поточний пріоритет", "priority.description": "Коротка пригода-головоломка від першої особи: майстер лагодить район молотком і йде за обірваним інтернет-кабелем.", "priority.status": "у розробці",
    "activity.title": "Поточні проєкти", "activity.note": "у роботі", "activity.onlyhammer.type": "PC / game jam", "activity.onlyhammer.status": "у розробці",
    "team.eyebrow": "03 / game jam-проєкт", "team.description": "Однокористувацька 3D-гра для PC на 20–40 хвилин. У ролі звичайного майстра ти ремонтуєш усе молотком і розв’язуєш прості головоломки, рухаючись за кабелем крізь дедалі дивніший район.",
    "about.eyebrow": "04 / трохи контексту", "about.title": "Код — це спосіб<br /><em>розкласти ідею.</em>", "about.description": "Мені подобається розбирати складні задачі на прості модулі: щоб їх можна було зрозуміти, підключити до нового проєкту й розвивати далі.", "about.link": "Відкрити профіль GitHub",
    "details.focus": "Фокус", "details.stack": "Основний стек", "details.now": "Зараз", "details.nowValue": "Навчаюсь та<br />створюю нове",
    "profiles.eyebrow": "05 / де мене знайти", "profiles.title": "Поза GitHub", "profiles.description": "Ігри, експерименти й оновлення — у різних місцях, але під одним ім’ям.", "profiles.online": "на зв’язку", "profiles.role": "GameDev · C++ · Unreal Engine 5", "profiles.bio": "Створюю ігрові системи, прототипи та інструменти. Тут — місця, де можна побачити іншу сторону моєї роботи.", "profiles.published": "опубліковані ігри", "profiles.steamGames": "ігор у Steam", "profiles.workshop": "Workshop items", "profiles.steamLine": "ігри, скріншоти та Workshop", "profiles.xLine": "GameDev, C++ та Unreal Engine", "profiles.youtubeLine": "відео та розробка ігор", "profiles.discordLine": "для спілкування та ком’юніті", "profiles.games": "ігри та прототипи", "profiles.steam": "ігровий профіль",
    "footer.made": "зроблено з цікавістю до систем <span class=\"footer-heart\">✦</span>", "footer.top": "Вгору ↑",
  },
  en: {
    "nav.systems": "Systems", "nav.now": "Now", "nav.about": "About", "nav.profiles": "Profiles",
    "hero.eyebrow": "building, testing, improving", "hero.title": "Systems that<br /><em>work.</em>",
    "hero.description": "I’m Arkadii — a student and C++ developer building modular tools for Unreal Engine, games, and everyday problems.",
    "hero.projects": "Explore projects", "hero.github": "My GitHub", "hero.profiles": "Other profiles",
    "stats.repos": "public<br />repositories", "stats.systems": "ready systems<br />for UE5", "stats.tools": "languages &<br />tools", "stats.note": "from an idea<br />to working code <span>↘</span>",
    "systems.eyebrow": "01 / selected work", "systems.title": "My systems", "systems.description": "Small, clear, and extensible solutions built while learning and making games.",
    "filters.all": "All", "filters.unreal": "Unreal Engine", "filters.tools": "Tools", "filters.games": "Games", "filters.study": "Learning",
    "now.eyebrow": "02 / behind the scenes", "now.title": "What’s next?", "now.description": "Not everything I’m working on can be shown yet. But the direction is clear.",
    "private.title": "Private projects", "private.more": "more coming soon",
    "private.one.title": "Private Gameplay System", "private.one.description": "A closed game system prototype. Details and a demo will appear when it is ready.",
    "private.two.title": "Private Tools Lab", "private.two.description": "A toolkit in development — testing ideas and building a reliable workflow.",
    "private.three.title": "Next Game Project", "private.three.description": "An upcoming team project. The name and details stay behind the scenes for now.",
    "priority.eyebrow": "Current priority", "priority.description": "A short first-person adventure puzzle: a handyman repairs the neighborhood with a hammer and follows a broken internet cable.", "priority.status": "in development",
    "activity.title": "Current projects", "activity.note": "in progress", "activity.onlyhammer.type": "PC / game jam", "activity.onlyhammer.status": "in development",
    "team.eyebrow": "03 / game jam project", "team.description": "A 20–40 minute single-player 3D game for PC. As an ordinary handyman, you fix everything with a hammer and solve simple puzzles while following a cable through an increasingly surreal neighborhood.",
    "about.eyebrow": "04 / a little context", "about.title": "Code is a way<br /><em>to shape an idea.</em>", "about.description": "I like breaking complex tasks into simple modules that are easy to understand, plug into a new project, and keep improving.", "about.link": "Open GitHub profile",
    "details.focus": "Focus", "details.stack": "Main stack", "details.now": "Now", "details.nowValue": "Learning and<br />building new things",
    "profiles.eyebrow": "05 / find me online", "profiles.title": "Beyond GitHub", "profiles.description": "Games, experiments, and updates — spread across different places under one name.", "profiles.online": "online", "profiles.role": "GameDev · C++ · Unreal Engine 5", "profiles.bio": "I build game systems, prototypes, and tools. These profiles show another side of what I make.", "profiles.published": "published games", "profiles.steamGames": "games on Steam", "profiles.workshop": "Workshop items", "profiles.steamLine": "games, screenshots & Workshop", "profiles.xLine": "GameDev, C++ & Unreal Engine", "profiles.youtubeLine": "videos & game development", "profiles.discordLine": "chat and community", "profiles.games": "games & prototypes", "profiles.steam": "gaming profile",
    "footer.made": "made with curiosity for systems <span class=\"footer-heart\">✦</span>", "footer.top": "Back to top ↑",
  },
  ru: {
    "nav.systems": "Системы", "nav.now": "Сейчас", "nav.about": "Обо мне", "nav.profiles": "Профили",
    "hero.eyebrow": "разрабатываю, тестирую, улучшаю", "hero.title": "Системы, которые<br /><em>работают.</em>",
    "hero.description": "Я Arkadii — студент и C++ разработчик, создающий модульные инструменты для Unreal Engine, игр и повседневных задач.",
    "hero.projects": "Посмотреть проекты", "hero.github": "Мой GitHub", "hero.profiles": "Другие профили",
    "stats.repos": "публичных<br />репозиториев", "stats.systems": "готовые системы<br />для UE5", "stats.tools": "языки и<br />инструменты", "stats.note": "от идеи<br />до рабочего кода <span>↘</span>",
    "systems.eyebrow": "01 / избранные работы", "systems.title": "Мои системы", "systems.description": "Небольшие, понятные и расширяемые решения, созданные во время учёбы и разработки игр.",
    "filters.all": "Все", "filters.unreal": "Unreal Engine", "filters.tools": "Инструменты", "filters.games": "Игры", "filters.study": "Обучение",
    "now.eyebrow": "02 / за кулисами", "now.title": "Что дальше?", "now.description": "Не всё, над чем я работаю, уже можно показать. Но направление видно.",
    "private.title": "Приватные проекты", "private.more": "скоро будет больше",
    "private.one.title": "Private Gameplay System", "private.one.description": "Закрытый прототип игровой системы. Детали и демо появятся после готовности.",
    "private.two.title": "Private Tools Lab", "private.two.description": "Набор инструментов в разработке — тестирую идеи и собираю рабочий процесс.",
    "private.three.title": "Next Game Project", "private.three.description": "Будущий командный проект. Название и детали пока остаются за кулисами.",
    "priority.eyebrow": "Текущий приоритет", "priority.description": "Короткая приключенческая головоломка от первого лица: мастер чинит район молотком и идёт по оборванному интернет-кабелю.", "priority.status": "в разработке",
    "activity.title": "Текущие проекты", "activity.note": "в работе", "activity.onlyhammer.type": "PC / game jam", "activity.onlyhammer.status": "в разработке",
    "team.eyebrow": "03 / game jam-проект", "team.description": "Одиночная 3D-игра для PC на 20–40 минут. В роли обычного мастера ты чинишь всё молотком и решаешь простые головоломки, следуя за кабелем через всё более сюрреалистичный район.",
    "about.eyebrow": "04 / немного контекста", "about.title": "Код — это способ<br /><em>разложить идею.</em>", "about.description": "Мне нравится разбивать сложные задачи на простые модули, которые легко понять, подключить к новому проекту и развивать дальше.", "about.link": "Открыть профиль GitHub",
    "details.focus": "Фокус", "details.stack": "Основной стек", "details.now": "Сейчас", "details.nowValue": "Учусь и<br />создаю новое",
    "profiles.eyebrow": "05 / где меня найти", "profiles.title": "Вне GitHub", "profiles.description": "Игры, эксперименты и обновления — в разных местах, но под одним именем.", "profiles.online": "на связи", "profiles.role": "GameDev · C++ · Unreal Engine 5", "profiles.bio": "Создаю игровые системы, прототипы и инструменты. Здесь можно увидеть другую сторону моей работы.", "profiles.published": "опубликованные игры", "profiles.steamGames": "игр в Steam", "profiles.workshop": "Workshop items", "profiles.steamLine": "игры, скриншоты и Workshop", "profiles.xLine": "GameDev, C++ и Unreal Engine", "profiles.youtubeLine": "видео и разработка игр", "profiles.discordLine": "для общения и сообщества", "profiles.games": "игры и прототипы", "profiles.steam": "игровой профиль",
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
