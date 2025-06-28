const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);

    }
});


// close menu when a nav link is clicked
const navLinks = document.querySelectorAll('.primary-navigation a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only close if menu is open (mobile view)
        if (primaryNav.getAttribute("data-visible") === "true") {
            primaryNav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        }
    });
});