export default function themeSwitcher() {
  (function () {
    const initThemeSwitcher = function () {
      const switcher = document.querySelector('[data-element="theme-switch"]');
      const switcherSelect = switcher.querySelector('#theme-switch');

      // Stop running if switcher doesn’t exist.
      if (!switcher) return;

      // Remove hidden class from the form element to make it visible
      switcher.removeAttribute('hidden');

      const doc = document.documentElement;

      // Function to apply theme
      const applyTheme = (theme) => {
        if (theme === 'system') {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          doc.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        } else {
          doc.setAttribute('data-theme', theme);
        }
      };

      // Load saved theme or default to system
      const savedTheme = localStorage.getItem('theme') || 'system';
      switcherSelect.value = savedTheme;
      applyTheme(savedTheme);

      // Listen for user UI preference changes
      switcherSelect.addEventListener('change', (e) => {
        const newTheme = e.target.value;
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
      });

      // Listen for system preference changes if in "system" mode
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (switcherSelect.value === 'system') {
          applyTheme('system');
        }
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initThemeSwitcher);
    } else {
      initThemeSwitcher();
    }
  })();
};