document.addEventListener('DOMContentLoaded', function() {
    // List of available themes
    const themes = ["theme-rebecca", "theme-doomone", "theme-wildcherry", "theme-spacemacs"];

    // Remove all themes to ensure no conflicts
    themes.forEach(theme => document.body.classList.remove(theme));

    fetch('http://localhost:5000/getcolors')
    .then(response => response.json())
    .then(colors => {
        if (colors && colors.length > 0) {
            // Clean the color strings
            let cleanedColors = colors.map(color => color.trim());

            // Apply the colors as you see fit.
            // For simplicity, let's change the document's background to the first color.
            document.body.style.backgroundColor = cleanedColors[0];

            // If you had CSS variables defined for themes, you could set them here too, e.g.
            // document.documentElement.style.setProperty('--background-color', cleanedColors[0]);
            // ... and so on for other colors.
        } else {
            // If no colors were returned, default to a random theme
            const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
            console.log("Selected theme: ", selectedTheme);
            document.body.classList.add(selectedTheme);
        }
    })
    .catch(error => {
        // In case of any errors (e.g., server not running), default to a random theme
        console.error("Error fetching colors:", error);
        const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
        console.log("Selected theme (due to error): ", selectedTheme);
        document.body.classList.add(selectedTheme);
    });
});




// document.addEventListener('DOMContentLoaded', function() {
//     // List of available themes
//     const themes = ["theme-rebecca", "theme-doomone", "theme-wildcherry", "theme-spacemacs"];  // Add more themes to this list as needed.

//     // Remove all themes to ensure no conflicts
//     themes.forEach(theme => document.body.classList.remove(theme));

//     // Randomly select a theme
//     const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
//     console.log("Selected theme: ", selectedTheme); // Log the selected theme

//     // Apply the selected theme to the body
//     document.body.classList.add(selectedTheme);
// });
