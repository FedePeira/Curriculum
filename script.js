'use strict';
/* ====================================== Typing Animation ============================================ */
 var typed = new Typed(".typing",{
    strings: ["", "", "Diseñador Web", "Programador", "Estudiante", "Vendedor"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
 }) 

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
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia_skills >= 300) {
      document.getElementById("html").classList.add("bar_progress1");
      document.getElementById("js").classList.add("bar_progress2");
      document.getElementById("bd").classList.add("bar_progress3");
      document.getElementById("ps").classList.add("bar_progress4");
  }
}