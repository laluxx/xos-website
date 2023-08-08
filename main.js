document.addEventListener('DOMContentLoaded', function() {
    // Fetch colors from the Flask server
    fetch("http://127.0.0.1:5000/getcolors")
    .then(response => response.json())
    .then(colors => {
        // If fetch is successful, use the colors from the server
        applyCustomTheme(colors);
    })
    .catch(error => {
        // If there's an error (e.g., server isn't running), default to a random theme
        const themes = ["theme-rebecca", "theme-doomone", "theme-wildcherry", "theme-spacemacs"];
        const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
        console.log("Selected theme: ", selectedTheme);
        document.body.classList.add(selectedTheme);
    });

    function applyCustomTheme(colors) {
        // Assuming your themes use CSS variables, set them here.
        // You can adjust this according to your requirements.
        document.documentElement.style.setProperty('--background', colors[0].trim());
        document.documentElement.style.setProperty('--color1', colors[1].trim());
        document.documentElement.style.setProperty('--color2', colors[2].trim());
        // ... and so on for all the colors

        console.log("Applied custom colors from Flask server.");
    }
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
