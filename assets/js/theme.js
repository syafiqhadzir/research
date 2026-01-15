// Simple theme toggle - light/dark mode only
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  
  // Toggle between light and dark
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Initialize theme on page load
function onLoad() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else {
    // Default to light theme
    html.setAttribute('data-theme', 'light');
  }
}
