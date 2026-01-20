// Header scroll effect
window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('scrolled', window.scrollY > 50);
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const item = q.parentElement;
        document.querySelectorAll('.faq-item').forEach(i => i !== item && i.classList.remove('active'));
        item.classList.toggle('active');
    });
});
