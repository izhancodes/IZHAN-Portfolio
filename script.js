// ===========================
// Animated Role Switcher
// ===========================

const roles = [
  "🤖 Artificial Intelligence",
  "📊 Data Analytics",
  "💻 Software Development",
  "🗄️ SQL & Databases",
  "🚀 Problem Solving"
];

let currentRole = 0;

const roleElement = document.getElementById("roles");

function changeRole() {
  roleElement.style.opacity = 0;

  setTimeout(() => {
    roleElement.textContent = roles[currentRole];
    roleElement.style.opacity = 1;

    currentRole++;

    if (currentRole >= roles.length) {
      currentRole = 0;
    }

  }, 300);
}

changeRole();
setInterval(changeRole, 2500);

// ===========================
// Theme Toggle
// ===========================

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {

    localStorage.setItem("theme", "light");

    themeBtn.textContent = "☀️";

  } else {

    localStorage.setItem("theme", "dark");

    themeBtn.textContent = "🌙";

  }

});

// ===========================
// Ask About Izhan
// ===========================

const askBtn = document.getElementById("askBtn");

askBtn.addEventListener("click", () => {

  const answer = prompt(
`Ask About Izhan

1 - About
2 - Skills
3 - Internships
4 - Projects

Enter a number:`
  );

  switch(answer){

    case "1":
      alert(`
Izhan Shaikh

Computer Science Engineering Student

Exploring AI, Data Analytics
and Software Development.
      `);
      break;

    case "2":
      alert(`
Skills

• Python
• C Programming
• SQL (Learning)
• Excel
• Power BI
• Git & GitHub
      `);
      break;

    case "3":
      alert(`
Internships

• AI Intern @ intels4ai

• Data Analytics Experience
  @ Shams Energy
      `);
      break;

    case "4":
      alert(`
Projects

• Student Skill Analytics Platform

• Ride Analytics &
  Optimization Platform

• Helmet Detection &
  Safety Monitoring System
      `);
      break;

    default:
      alert("Please select 1, 2, 3 or 4.");
  }

});

// ===========================
// Scroll Reveal Animation
// ===========================

const revealElements = document.querySelectorAll(
  ".card, .stat, section h2"
);

function revealOnScroll() {

  revealElements.forEach((element) => {

    const elementTop =
      element.getBoundingClientRect().top;

    const windowHeight =
      window.innerHeight;

    if (elementTop < windowHeight - 100) {

      element.style.opacity = "1";

      element.style.transform =
        "translateY(0px)";

    }

  });

}

revealElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(40px)";

  element.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

// ===========================
// Stats Counter Animation
// ===========================

const stats = document.querySelectorAll(".stat h2");

stats.forEach((stat) => {

  const target =
    parseInt(stat.innerText);

  if (!isNaN(target)) {

    let count = 0;

    const increment =
      Math.ceil(target / 30);

    const timer =
      setInterval(() => {

        count += increment;

        if (count >= target) {

          stat.innerText = target + "+";

          clearInterval(timer);

        } else {

          stat.innerText = count;

        }

      }, 40);

  }

});

// ===========================
// Smooth Navigation
// ===========================

document
.querySelectorAll('nav a')
.forEach(link => {

  link.addEventListener('click', e => {

    e.preventDefault();

    const target =
      document.querySelector(
        link.getAttribute('href')
      );

    target.scrollIntoView({
      behavior: 'smooth'
    });

  });

});

console.log(
  "Portfolio Loaded Successfully 🚀"
);