const menuToggle = document.getElementById("menuToggle");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("bg-white", "shadow-md"); // or any bg color you prefer
  } else {
    navbar.classList.remove("bg-white", "shadow-md");
  }
});


menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  navbar.classList.toggle("bg-white")
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

   