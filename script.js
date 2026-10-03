const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuToggle?.addEventListener('click', () => { const open = mobileNav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); });
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobileNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }));
const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
const form = document.querySelector('#contact-form');
const status = document.querySelector('.form-status');
form?.addEventListener('submit', event => { event.preventDefault(); const data = new FormData(form); const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`); const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`); window.location.href = `mailto:tahasaadat680@gmail.com?subject=${subject}&body=${body}`; status.textContent = 'Opening your email client — thank you.'; });
