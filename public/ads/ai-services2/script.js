document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill all required fields.");
            return;
        }

        document.getElementById("successMessage").innerText =
            "Thank you! Your inquiry has been received. We will contact you shortly.";

        this.reset();
    });