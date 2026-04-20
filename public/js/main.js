(() => {
  // ns-hugo-imp:/Users/harrycresswell/code/hugo/cu-css/assets/js/theme-switch.js
  function themeSwitcher() {
    (function() {
      const initThemeSwitcher = function() {
        const switcher = document.querySelector('[data-element="theme-switch"]');
        const switcherSelect = switcher.querySelector("#theme-switch");
        if (!switcher) return;
        switcher.removeAttribute("hidden");
        const doc = document.documentElement;
        const applyTheme = (theme) => {
          if (theme === "system") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            doc.setAttribute("data-theme", prefersDark ? "dark" : "light");
          } else {
            doc.setAttribute("data-theme", theme);
          }
        };
        const savedTheme = localStorage.getItem("theme") || "system";
        switcherSelect.value = savedTheme;
        applyTheme(savedTheme);
        switcherSelect.addEventListener("change", (e) => {
          const newTheme = e.target.value;
          localStorage.setItem("theme", newTheme);
          applyTheme(newTheme);
        });
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
          if (switcherSelect.value === "system") {
            applyTheme("system");
          }
        });
      };
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initThemeSwitcher);
      } else {
        initThemeSwitcher();
      }
    })();
  }

  // <stdin>
  themeSwitcher();
})();
