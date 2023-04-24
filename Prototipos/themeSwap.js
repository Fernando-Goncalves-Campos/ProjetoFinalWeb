// function to set a given theme/color-scheme
function setTheme(themeName) {
    document.getElementById("theme").className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (document.getElementById("theme").className === 'dark-theme') {
        setTheme('light-theme');
    } else {
        setTheme('dark-theme');
    }
}