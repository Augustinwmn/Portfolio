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