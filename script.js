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

const grid = document.querySelector("#project-grid");
const filters = document.querySelectorAll(".filter");

function renderProjects(filter = "all") {
  const visible = projects.filter((project) => filter === "all" || project.category === filter);
  grid.innerHTML = visible.map((project, index) => `
    <article class="project-card ${project.featured ? "featured" : ""}" data-index="${String(index + 1).padStart(2, "0")}">
      <div class="card-top">
        <span class="card-type">${project.type}</span>
        <span class="card-number">${String(index + 1).padStart(2, "0")} / ${String(visible.length).padStart(2, "0")}</span>
      </div>
      <div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="card-bottom">
          <span class="tech">${project.tech}</span>
          <a class="card-link" href="${project.url}" target="_blank" rel="noreferrer" aria-label="Відкрити ${project.name} на GitHub">↗</a>
        </div>
      </div>
    </article>
  `).join("");
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("is-active"));
    filter.classList.add("is-active");
    renderProjects(filter.dataset.filter);
  });
});

renderProjects();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
