// ===== SCRIPT FILE =====
// This script adds small interactivity: greeting + theme toggle

// Select elements
const greeting = document.getElementById("greeting");
const themeToggle = document.getElementById("themeToggle");

// ===== GREETING MESSAGE BASED ON TIME =====
const now = new Date();
const hour = now.getHours();
let message;

if (hour < 12) {
  message = "Good Morning ☀️";
} else if (hour < 18) {
  message = "Good Afternoon 🌤️";
} else {
  message = "Good Evening 🌙";
}

// Show greeting on the page
greeting.textContent = message;

// ===== THEME TOGGLE BUTTON =====
themeToggle.addEventListener("click", () => {
  // Toggle "dark-mode" class on body
  document.body.classList.toggle("dark-mode");

  // Change button text based on mode
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});
