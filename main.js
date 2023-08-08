document.addEventListener('DOMContentLoaded', () => {

    // Fetch colors from the Flask server
    fetch("http://127.0.0.1:5000/getcolors")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(colors => {
            if (colors && colors.length === 16) {

                // Mapping the colors to named colors
                let namedColors = {
                    "--background": colors[0],
                    "--foreground": colors[7],
                    "--cursor": colors[7],
                    "--color0": colors[0],
                    "--color1": colors[1],
                    "--color2": colors[2],
                    "--color3": colors[3],
                    "--color4": colors[4],
                    "--color5": colors[5],
                    "--color6": colors[6],
                    "--color7": colors[7],
                    "--color8": colors[8],
                    "--color9": colors[9],
                    "--color10": colors[10],
                    "--color11": colors[11],
                    "--color12": colors[12],
                    "--color13": colors[13],
                    "--color14": colors[14],
                    "--color15": colors[15]
                };

                // Apply the named colors to the document root
                for (let colorName in namedColors) {
                    document.documentElement.style.setProperty(colorName, namedColors[colorName]);
                }
            }
        })
        .catch(error => {
            console.log("Error fetching colors:", error);
        });
});






















// document.addEventListener('DOMContentLoaded', function() {
//     // List of available themes
//     const themes = ["theme-rebecca", "theme-doomone", "theme-wildcherry", "theme-spacemacs"];

//     // Remove all themes to ensure no conflicts
//     themes.forEach(theme => document.body.classList.remove(theme));

//     fetch('http://localhost:5000/getcolors')
//     .then(response => response.json())
//     .then(colors => {
//         if (colors && colors.length > 0) {
//             // Clean the color strings
//             let cleanedColors = colors.map(color => color.trim());

//             // Apply the colors as you see fit.
//             // For simplicity, let's change the document's background to the first color.
//             document.body.style.backgroundColor = cleanedColors[0];

//             // If you had CSS variables defined for themes, you could set them here too, e.g.
//             // document.documentElement.style.setProperty('--background-color', cleanedColors[0]);
//             // ... and so on for other colors.
//         } else {
//             // If no colors were returned, default to a random theme
//             const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
//             console.log("Selected theme: ", selectedTheme);
//             document.body.classList.add(selectedTheme);
//         }
//     })
//     .catch(error => {
//         // In case of any errors (e.g., server not running), default to a random theme
//         console.error("Error fetching colors:", error);
//         const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
//         console.log("Selected theme (due to error): ", selectedTheme);
//         document.body.classList.add(selectedTheme);
//     });
// });
