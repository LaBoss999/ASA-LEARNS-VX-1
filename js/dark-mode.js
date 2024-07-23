document.addEventListener("DOMContentLoaded", function () {
        const darkModeToggle = document.getElementById("dark-mode-toggle");
        const darkModeStyle = document.getElementById("dark-mode-style");

        darkModeToggle.addEventListener("click", function () {
            if (darkModeStyle.disabled) {
                darkModeStyle.disabled = false;
                localStorage.setItem("darkMode", "enabled");
            } else {
                darkModeStyle.disabled = true;
                localStorage.setItem("darkMode", "disabled");
            }
        });

        // Load dark mode state from localStorage
        if (localStorage.getItem("darkMode") === "enabled") {
            darkModeStyle.disabled = false;
        } else {
            darkModeStyle.disabled = true;
        }
    });