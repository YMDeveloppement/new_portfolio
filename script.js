const navbar = document.getElementById("navbar");
const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll('.nav-links a');
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);

  let current = "";
  document.querySelectorAll("section[id]").forEach(section => {
    if (window.scrollY >= section.offsetTop - 130) current = section.id;
  });

  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

menu.addEventListener("click", () => {
  const opened = navLinks.classList.toggle("open");
  menu.setAttribute("aria-expanded", opened);
  menu.textContent = opened ? "✕" : "☰";
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.textContent = "☰";
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

function downloadCV(e) {
  e.preventDefault();
  let element = e.target;
    const link = element.getAttribute('href');
    // const link = document.createElement("a");

    link.href = "assets/cv.pdf";
    link.download = "Yassine-Mesbahi-CV.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();
  alert("Ajoutez votre fichier CV dans /assets/cv.pdf puis utilisez href=\"assets/cv.pdf\" pour activer le téléchargement.");
}

let btn_show_more = document.getElementById("show_more_prct");
btn_show_more.addEventListener("click", () => {
  if(btn_show_more.dataset.action === "show-less") {

    btn_show_more.dataset.action = "show-more";
    btn_show_more.textContent = "Voir tous les projets →";
    const hiddenProjects = document.querySelectorAll(".project-sup");
    hiddenProjects.forEach(project => {
      project.style.display = "none";
    } )
  } 
  else{
    btn_show_more.dataset.action = "show-less";
    btn_show_more.textContent = "Voir moins de projets →";
    const hiddenProjects = document.querySelectorAll(".project-sup");
    hiddenProjects.forEach(project => {
      project.style.display = "block";
    } )
  }

})