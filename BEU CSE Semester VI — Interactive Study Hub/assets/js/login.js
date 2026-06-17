const authWrapper = document.querySelector('.auth-wrapper');
const loginTrigger = document.querySelector('.login-trigger');
const registerTrigger = document.querySelector('.register-trigger');

registerTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    authWrapper.classList.add('toggled');
});

loginTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    authWrapper.classList.remove('toggled');
});

/**
 * Theme Toggling capabilities for login page
 */
function toggleTheme() {
    const d = document.documentElement;
    const isDark = d.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    d.setAttribute('data-theme', newTheme);
    localStorage.setItem('beu_theme', newTheme);
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.className = newTheme === 'dark' ? 'ti ti-sun' : 'ti ti-moon';
    }
}

// Immediately synchronize icon on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('beu_theme') || 'dark';
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.className = savedTheme === 'dark' ? 'ti ti-sun' : 'ti ti-moon';
    }
});
