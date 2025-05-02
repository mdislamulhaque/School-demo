


  // === Custom Form Validation ===
  document.getElementById("customForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fields = [
      { id: "firstName", message: "Please enter your first name." },
      { id: "lastName", message: "Please enter your last name." },
      { id: "username2", message: "Please choose a username." },
      { id: "city", message: "Please enter a city." },
      { id: "state", message: "Please select a state." },
      { id: "zip", message: "Please enter a zip code." }
    ];

    let isValid = true;

    fields.forEach((field) => {
      const input = document.getElementById(field.id);
      let errorElement;

      if (field.id === "username2") {
        errorElement = input.closest("div").parentElement.querySelector("p");
      } else {
        errorElement = input.parentElement.querySelector("p");
      }

      if (input.value.trim() === "") {
        input.classList.add("border-red-500");
        if (errorElement) {
          errorElement.textContent = field.message;
          errorElement.classList.remove("hidden");
        }
        isValid = false;
      } else {
        input.classList.remove("border-red-500");
        if (errorElement) {
          errorElement.classList.add("hidden");
        }
      }
    });

    const terms = document.getElementById("terms");
    const termsError = terms.closest("div").querySelector("p");
    if (!terms.checked) {
      termsError.textContent = "You must agree before submitting.";
      termsError.classList.remove("hidden");
      isValid = false;
    } else {
      termsError.classList.add("hidden");
    }

    if (isValid) {
      alert("Form submitted successfully!");
      this.reset();
      const errorMessages = this.querySelectorAll("p.text-red-500");
      errorMessages.forEach((p) => p.classList.add("hidden"));
    }
  });




