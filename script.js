// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== HEADER BACKGROUND CHANGE ON SCROLL =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = '#020617';
  } else {
    header.style.background = '#0f172a';
  }
});
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index++;

  if (index >= slides.length) {
    index = 0;
  }
}

setInterval(showSlide, 4000); // image change every 4 seconds

// ===== SIMPLE FADE-IN ANIMATION =====
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'all 0.6s ease';
  observer.observe(section);
});

// ===== CONTACT FORM (BASIC DEMO) =====
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent (demo).');
  this.reset();
});
