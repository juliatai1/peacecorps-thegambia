// JavaScript to toggle the hamburger icon and dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const hamburgerMenu = document.getElementById('hamburger-menu');

    // Toggle the 'show' class to reveal or hide the banner items
    function toggleMenu() {
        banner.classList.toggle('show');

        // Toggle between hamburger and "X" icon
        if (hamburgerMenu.textContent === "☰") {
            hamburgerMenu.textContent = "⨯"; // Change to "X" when clicked
        } else {
            hamburgerMenu.textContent = "☰"; // Change back to hamburger
        }
    }

    // Hide the dropdown menu when the screen is resized to large size
    function handleResize() {
        const screenWidth = window.innerWidth;

        // If the screen is larger than 730px, reset the menu to default (show banner, hide hamburger)
        if (screenWidth > 730) {
            banner.classList.remove('show'); // Ensure dropdown banner is hidden
            hamburgerMenu.textContent = "☰"; // Ensure hamburger is back
        }
    }

    // Add event listeners
    hamburgerMenu.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);
});