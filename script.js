'use strict';
///////////////////////////////////////////////////////////
// Type Animation

document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".typing",{
      strings: ["Web designer", "Programmer", "Student", "Seller"],
      typeSpeed:100,
      backSpeed:60,
      loop:true
  });
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Scroll Skills Animation
window.onscroll = function() {
  efectSkills()
}

// Animation on skills
function efectSkills() {
  var skills = document.getElementById("skills");
  var distancia_skills = window.scrollY + skills.getBoundingClientRect().top;
  if(distancia_skills >= 300) {
      document.getElementById("css").classList.add("css");
      document.getElementById("js").classList.add("js");
      document.getElementById("html").classList.add("html");
      document.getElementById("net").classList.add("net");
      document.getElementById("sql").classList.add("sql");
      document.getElementById("php").classList.add("php");
      document.getElementById("react").classList.add("react");
      document.getElementById("android").classList.add("android");
      document.getElementById("java").classList.add("java");
  }
}

///////////////////////////////////////////////////////////
// Scroll Skills Animation
window.onload = function() {
  var timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.classList.add('visible');
        });
    });
};

///////////////////////////////////////////////////////////
// Change of Language
document.addEventListener('DOMContentLoaded', (event) => {
  var check = document.querySelector(".check");
  check.addEventListener('click', changeLanguage);

  // Aplica los colores correctos al cargar la página
  let language = localStorage.getItem('language');
  applyColors(language);

  function changeLanguage() {
      let id = check.checked;
      let enElement = document.querySelector('.en');
      let esElement = document.querySelector('.es');
      
      if(id == false) {
          localStorage.setItem('language', 'es');
          setTimeout(function() {
              location.href = "/es/index.html";
          }, 100);
      } else {
          localStorage.setItem('language', 'en');
          setTimeout(function() {
              location.href = "/index.html";
          }, 100);
      }
  }

  function applyColors(language) {
      let enElement = document.querySelector('.en');
      let esElement = document.querySelector('.es');
      if (language === 'es') {
          enElement.classList.remove('es-selected');
          esElement.classList.add('en-selected');
      } else {
          enElement.classList.add('en-selected');
          esElement.classList.remove('es-selected');
      }
  }
});