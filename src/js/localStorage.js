
  function showSection(id) {
    // all section hide 
    document.getElementById("home").classList.add("hidden");
    document.getElementById("form").classList.add("hidden");

    // show selected section
    document.getElementById(id).classList.remove("hidden");

    // localStorage active section save 
    localStorage.setItem("activeSection", id);
  }

  // Navigation button event listeners
  document.getElementById("home-btn").addEventListener("click", function () {
    showSection("home");
  });

  document.getElementById("form-btn").addEventListener("click", function () {
    showSection("form");
  });

  // Reload section on page load
  window.addEventListener("DOMContentLoaded", function () {
    const active = localStorage.getItem("activeSection") || "home";
    showSection(active);
  });

