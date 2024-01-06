document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const submitButton = document.getElementById("submit-button");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;
        const message = document.getElementById("message").value;

        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);

        alert("Thank you for your message!\n\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);

    
        contactForm.reset();
    });

    // Enable the submit button when both name and email are entered
    nameInput.addEventListener("input", enableSubmitButton);
    emailInput.addEventListener("input", enableSubmitButton);

    function enableSubmitButton() {
        if (nameInput.value && emailInput.value) {
            submitButton.removeAttribute("disabled");
        } else {
            submitButton.setAttribute("disabled", "disabled");
        }
    }
});


