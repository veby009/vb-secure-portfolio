// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple form feedback
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', () => {
    alert('Thank you for contacting Vishal Bhatt! Your message has been sent successfully.');
  });
}
