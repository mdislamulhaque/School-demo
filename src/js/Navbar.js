// Cache DOM elements
const menuToggle = document.getElementById("menuToggle");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.getElementById("navbar");

// ✅ Reusable function
function setupToggleButton(buttonId, sectionId) {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sectionId);

  if (button && section) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      section.classList.toggle("hidden");
    });
  }
}

// ✅ Reuse for both Desktop and Mobile
setupToggleButton("academicBtn", "academicSection");
setupToggleButton("academicBtnMobile", "academicSection");

// ✅ Scroll handler
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 0;

  navbar.classList.toggle("bg-white", scrolled);
  navbar.classList.toggle("shadow-md", scrolled);

  if (scrolled) {
    mobileMenu.classList.add("hidden");
    closeIcon.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    menuToggle.classList.remove("hidden");

    // Hide academic section on scroll
    const section = document.getElementById("academicSection");
    if (section) section.classList.add("hidden");
  }
});

// ✅ Mobile menu toggle
menuToggle.addEventListener("click", () => {
  const isHidden = mobileMenu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  navbar.classList.add("bg-white");

  if (isHidden) {
    const section = document.getElementById("academicSection");
    if (section) section.classList.add("hidden");
  }
});
