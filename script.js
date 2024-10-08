
// Toggle menu visibility on click
document.getElementById("explore-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    var dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
    var dropdown = document.getElementById("dropdown-menu");
    var exploreLink = document.getElementById("explore-link");

    if (!dropdown.contains(event.target) && event.target !== exploreLink) {
        dropdown.style.display = "none";
    }
});
