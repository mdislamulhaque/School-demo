// Toggle sidebar visibility
const aside = document.getElementById("aside");
const toggleButton = document.getElementById("toggleBtn");

toggleButton.addEventListener("click", () => {
  aside.classList.toggle("hidden");
});

// Toggle menu items
function toggleSubMenu(menuId, arrowId = null) {
  const submenu = document.getElementById(menuId);
  if (submenu) {
    submenu.classList.toggle("hidden");
    console.log(`${menuId} toggled`);
  } else {
    console.warn(`${menuId} element not found!`);
  }

  if (arrowId) {
    const arrow = document.getElementById(arrowId);
    if (arrow) {
      arrow.classList.toggle("rotate-90");
    } else {
      console.warn(`${arrowId} element not found!`);
    }
  }
}


