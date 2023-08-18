const flagToggle = document.getElementById('btn-toggle');
const flagNl = document.querySelector('.flag-nl');
const flagEn = document.querySelector('.flag-en');

flagToggle.addEventListener('click', function() {
    flagNl.classList.toggle('hidden');
    flagEn.classList.toggle('hidden');

    const currentLang = flagToggle.getAttribute('data-lang');
    if (currentLang === 'nl') {
        flagToggle.setAttribute('data-lang', 'en');
        // Toggle 'hidden' class on elements with 'lang-' classes
        document.querySelectorAll('.lang-nl').forEach(el => el.classList.toggle('hidden'));
        document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('hidden'));
    } else {
        flagToggle.setAttribute('data-lang', 'nl');
        // Toggle 'hidden' class on elements with 'lang-' classes
        document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('hidden'));
        document.querySelectorAll('.lang-nl').forEach(el => el.classList.toggle('hidden'));
    }
});

// Set initial language based on browser settings
if (navigator.language.startsWith('en')) {
    flagToggle.click();
}
