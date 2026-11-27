
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    menuToggle.textContent = navbar.classList.contains("active")
        ? "✕"
        : "☰";
});

// Close navigation after clicking a link
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// Set minimum reservation date to today
const bookingDate = document.getElementById("bookingDate");
const today = new Date();
const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

bookingDate.min = localToday;

// Reservation form (frontend demo)
const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");

reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("guestName").value.trim();
    const email = document.getElementById("guestEmail").value.trim();
    const date = bookingDate.value;
    const guests = document.getElementById("guestCount").value;

    if (!name || !email || !date || !guests) {
        formMessage.textContent = "Please complete all fields.";
        return;
    }

    formMessage.textContent =
        `Thank you, ${name}! Your demo reservation request has been received.`;

    reservationForm.reset();
    bookingDate.min = localToday;
});
