const menuToggle = document.getElementById("menuToggle");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");
const mobileMenu = document.getElementById("mobileMenu");


menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});


 const dropdown = document.getElementById("dropdown");
 const menu = document.getElementById("dropdownMenu");

 dropdown.addEventListener("click", function (e) {
   e.preventDefault();
   menu.classList.toggle("hidden");
 });

// for mobile menu 
  const dropdownMobile = document.getElementById("dropdownMobile");
  const menuMobile = document.getElementById("dropdownMenuMobile");

  dropdownMobile.addEventListener("click", function (e) {
    e.preventDefault();
    menuMobile.classList.toggle("hidden");
  });