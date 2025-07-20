let isOpen = false;

function openNav() {
  const menu = document.getElementById("mobileMenu");
  const icon = document.getElementById("menuIcon");

  if (isOpen == false) {
    // Show menu
    menu.classList.remove("hidden");
    icon.classList.remove("ri-menu-3-line");
    icon.classList.add("ri-close-line");
    isOpen = true;
  } else {
    // Hide menu
    menu.classList.add("hidden");
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-3-line");
    isOpen = false;
  }
}
