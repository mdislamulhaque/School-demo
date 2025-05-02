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



const home =document.getElementById("home");
const form =document.getElementById("form");
const formBtn = document.getElementById("form-btn");
const homeBtn = document.getElementById("home-btn");


formBtn.addEventListener("click", () => {
  form.classList.remove("hidden");
  home.classList.add("hidden");
});

homeBtn.addEventListener("click", () => {   
  form.classList.add("hidden");
  home.classList.remove("hidden");
});
