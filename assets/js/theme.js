// Theme Toggle System for Dark Mode
// Uses Tailwind's 'class' dark mode strategy

// Initialize theme on page load (also handled inline in <head> for FOUC prevention)
(function initTheme() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply saved theme or system preference
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
})();

// Toggle theme function
function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle('dark');

  // Save preference
  const isDark = html.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Make toggle function globally available
window.toggleTheme = toggleTheme;

// Attach event listener to theme toggle button
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-switch if user hasn't explicitly set a preference
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });
});
