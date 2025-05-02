// === Tooltip Form Validation ===
 document
   .getElementById("tooltipForm")
   .addEventListener("submit", function (e) {
     e.preventDefault();

     const fields = [
       { id: "firstName3", message: "Please enter your first name." },
       { id: "lastName3", message: "Please enter your last name." },
       { id: "username3", message: "Please choose a username." },
       { id: "city3", message: "Please enter a city." },
       { id: "state3", message: "Please select a state." },
       { id: "zip3", message: "Please enter a zip code." },
     ];

     let isValid = true;

     fields.forEach((field) => {
       const input = document.getElementById(field.id);
       let errorElement;

       if (field.id === "username3") {
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

    

     if (isValid) {
       alert("Form submitted successfully!");
       this.reset();
       const errorMessages = this.querySelectorAll("p.text-red-500");
       errorMessages.forEach((p) => p.classList.add("hidden"));
     }
   });


