function switchTheme() {
    var themeName = document.documentElement.className;
    var nextThemeName;

    if (themeName == "theme-dark") {
        nextThemeName = "theme-light";
    } else {
        nextThemeName = "theme-dark";
    }

    document.documentElement.className = nextThemeName;
}