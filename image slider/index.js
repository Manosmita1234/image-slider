let slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlide);

function initializeSlide() {
    slides[slideIndex].classList.add("displayslide");
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides.forEach(slide => slide.classList.remove("displayslide")); 
    slides[slideIndex].classList.add("displayslide");
}

function previousSlide() {
    showSlide(slideIndex - 1);
}

function nextSlide() {
    showSlide(slideIndex + 1);
}


document.querySelector(".prev").addEventListener("click", previousSlide);
document.querySelector(".next").addEventListener("click", nextSlide);
