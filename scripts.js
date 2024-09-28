let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide); // Show the first slide
});

// Function to show the slide by index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active"); // Remove active class from all slides
    if (i === index) {
      slide.classList.add("active"); // Add active class to the current slide
    }
  });
}

// Function to go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Function to go to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
