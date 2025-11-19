// Toggle theme (dark / light) and save preference
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = localStorage.getItem('theme');

if (!currentTheme && prefersDark) {
  document.body.classList.add('dark');
} else if (currentTheme === 'dark') {
  document.body.classList.add('dark');
}

function updateThemeIcon() {
  const icon = themeToggle.querySelector('i');
  if (document.body.classList.contains('dark')) {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}
updateThemeIcon();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  updateThemeIcon();
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form UX: clear button and success feedback
const contactForm = document.getElementById('contact-form');
const clearBtn = document.getElementById('clear-form');

clearBtn.addEventListener('click', ()=>{
  contactForm.reset();
});

// Optional: show success message when using Formspree (Formspree redirects or AJAX can be used).
// For simple usage with HTML form action to Formspree, the browser will navigate after submit.
// You can also set up a fetch() POST to submit via AJAX if you prefer.
