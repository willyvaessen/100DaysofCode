 // Get elements
        const flag = document.getElementById('flag');
        const langNl = document.querySelectorAll('.lang-nl');
        const langEn = document.querySelectorAll('.lang-en');

        // Set default language to Dutch
        let currentLang = 'nl';

        // Event listener for flag toggle
        flag.addEventListener('click', () => {
            if (currentLang === 'nl') {
                langEn.forEach(el => el.style.display = 'block');
                langNl.forEach(el => el.style.display = 'none');
                flag.textContent = '🇬🇧';
                currentLang = 'en';
            } else {
                langNl.forEach(el => el.style.display = 'block');
                langEn.forEach(el => el.style.display = 'none');
                flag.textContent = '🇳🇱';
                currentLang = 'nl';
            }
        });

        // Set initial language based on browser settings
        if (navigator.language.startsWith('en')) {
            flag.click();
        }