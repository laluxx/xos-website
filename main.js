document.addEventListener('DOMContentLoaded', function() {
    // List of available themes
    const themes = ["theme-rebecca", "theme-doomone", "theme-wildcherry"];  // Add more themes to this list as needed.

    // Remove all themes to ensure no conflicts
    themes.forEach(theme => document.body.classList.remove(theme));

    // Randomly select a theme
    const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
    console.log("Selected theme: ", selectedTheme); // Log the selected theme

    // Apply the selected theme to the body
    document.body.classList.add(selectedTheme);
});
