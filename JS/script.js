//////////////////////Theme jour-nuit//////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const htmlRoot = document.documentElement;

    // Gestion du thème initial
    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme === 'dark-theme') {
        htmlRoot.classList.add('dark-theme');
        updateThemeIcon(true);
    }

    themeButton.addEventListener('click', () => {
        // Basculement du thème
        const isDarkTheme = htmlRoot.classList.toggle('dark-theme');
        
        // Mise à jour du localStorage
        if (isDarkTheme) {
            localStorage.setItem('site-theme', 'dark-theme');
        } else {
            localStorage.removeItem('site-theme');
        }

        // Mise à jour de l'icône
        updateThemeIcon(isDarkTheme);
    });

    function updateThemeIcon(isDark) {
        const themeIcon = document.getElementById('theme-button');
        if (isDark) {
            themeIcon.classList.replace('bx-moon', 'bx-sun');
        } else {
            themeIcon.classList.replace('bx-sun', 'bx-moon');
        }
    }
});
//////////////////////Fin theme jour-nuit//////////////////////////
//////////////////////Active-link//////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer tous les liens de navigation
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Fonction qui met à jour le lien actif
    const setActiveLink = () => {
        let scrollPosition = window.scrollY; // Position actuelle du défilement
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href')); // Trouver la section liée au lien
            const sectionTop = section.offsetTop; // Position du début de la section
            const sectionHeight = section.offsetHeight; // Hauteur de la section

            // Vérifier si la section est visible dans la fenêtre de défilement
            if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                // Si la section est visible, on ajoute la classe active-link
                link.classList.add('active-link');
            } else {
                // Sinon, on retire la classe active-link
                link.classList.remove('active-link');
            }
        });
    };

    // Écouter l'événement de défilement
    window.addEventListener('scroll', setActiveLink);

    // Appeler la fonction lors du chargement de la page pour initialiser l'état du lien actif
    setActiveLink();
});
//////////////////////Fin Active-link//////////////////////////