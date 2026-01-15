function onLoad() {
  const themeSelector = document.getElementById('themeSelector');
  for (const themeName in themeMap) {
    const opt = document.createElement('option');
    opt.value = themeName;
    opt.innerHTML = capitalizeFirstLetter(themeName);
    themeSelector.appendChild(opt);
  }
  if (localStorage.getItem('theme') != null) {
    themeSelector.value = localStorage.getItem('theme');
    toggleTheme();
  }
}

function toggleTheme() {
  const themeSelector = document.getElementById('themeSelector');
  const themeName = themeSelector.value;
  localStorage.setItem('theme', themeName);
  const element = document.getElementsByTagName('html')[0];
  changeTheme(element, themeMap[themeName]);
}

function changeTheme(element, theme) {
  // Variables used by new components (Search)
  element.style.setProperty('--primary-background-color', theme['background-color']);
  element.style.setProperty('--primary-text-color', theme['text-color']);
  element.style.setProperty('--primary-highlight-color', theme['highlight-color']);

  // Variables used by main.scss
  element.style.setProperty('--bg', theme['background-color']);
  element.style.setProperty('--text', theme['text-color']);
  element.style.setProperty('--border', theme['highlight-color']);
  element.style.setProperty('--text-muted', theme['text-color']); // Fallback for muted
  element.style.setProperty('--link', theme['text-color']);     // Fallback for links
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
