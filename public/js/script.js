'use strict';

console.log('✅ script.js cargado correctamente');

///////////////////////////////////////////////////////////
// DOM Ready
document.addEventListener("DOMContentLoaded", function() {
  ///////////////////////////////////////////////////////////
  // Type Animation
  const typingEl = document.querySelector(".typing");
  if (typingEl) {
    new Typed(".typing", {
      strings: ["Web designer", "Programmer", "Student", "Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }

  const typingEsEl = document.querySelector(".typing-es");
  if (typingEsEl) {
    new Typed(".typing-es", {
      strings: ["Diseñador Web", "Programador", "Estudiante", "Desarrollador"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }

  ///////////////////////////////////////////////////////////
  // Smooth scroll
  const allLinks = document.querySelectorAll("a:link");
  const headerEl = document.querySelector(".header");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");

      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }
      }

      if (link.classList.contains("main-nav-link")) {
        if (headerEl) headerEl.classList.toggle("nav-open");
      }
    });
  });

  ///////////////////////////////////////////////////////////
  // Language Switcher
  const check = document.querySelector(".check");
  if (check) {
    check.addEventListener("click", changeLanguage);

    let language = localStorage.getItem("language");
    applyColors(language);

    function changeLanguage() {
      let id = check.checked;
      let enElement = document.querySelector(".en");
      let esElement = document.querySelector(".es");

      if (!id) {
        localStorage.setItem("language", "es");
        setTimeout(function () {
          location.href = "./es/index.html";
        }, 100);
      } else {
        localStorage.setItem("language", "en");
        setTimeout(function () {
          location.href = "../index.html";
        }, 100);
      }
    }

    function applyColors(language) {
      let enElement = document.querySelector(".en");
      let esElement = document.querySelector(".es");
      if (language === "es") {
        enElement?.classList.remove("es-selected");
        esElement?.classList.add("en-selected");
      } else {
        enElement?.classList.add("en-selected");
        esElement?.classList.remove("es-selected");
      }
    }
  }

  ///////////////////////////////////////////////////////////
  // Scroll Skills Animation
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      item.classList.add("visible");
    });
  });

  ///////////////////////////////////////////////////////////
  // Home Image Hidden 991px
  function checkWindowSize() {
    const width = window.innerWidth;
    const homeImg = document.getElementById("home-img");
    if (homeImg) {
      if (width <= 991) {
        homeImg.classList.add("hidden");
      } else {
        homeImg.classList.remove("hidden");
      }
    }
  }

  checkWindowSize();
  window.addEventListener("resize", checkWindowSize);
});
