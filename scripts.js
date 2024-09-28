let currentSlide = 0; // Track the current slide index
const slides = document.querySelectorAll(".slide"); // Select all slides

// Show the first slide
slides[currentSlide].classList.add("active");

// Function to change slide
function changeSlide(index) {
  slides[currentSlide].classList.remove("active"); // Hide the current slide
  currentSlide = (index + slides.length) % slides.length; // Calculate the new slide index
  slides[currentSlide].classList.add("active"); // Show the new slide
}

// Next Button Event
document.getElementById("next-btn").addEventListener("click", function () {
  changeSlide(currentSlide + 1); // Go to the next slide
});

// Previous Button Event
document.getElementById("prev-btn").addEventListener("click", function () {
  changeSlide(currentSlide - 1); // Go to the previous slide
});
