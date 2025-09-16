// Toggle Hamburger Menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Optional: Close menu when clicking outside
document.addEventListener("click", (event) => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const hamburgerNav = document.querySelector("#hamburger-nav");

  if (
    !hamburgerNav.contains(event.target) &&
    menu.classList.contains("open")
  ) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});
