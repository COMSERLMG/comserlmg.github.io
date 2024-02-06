const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalId = null;
const delay = ms => new Promise(res => setTimeout(res, ms));

document.addEventListener("DOMContentLoaded", startSlider)

function startSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(gotonextSlide, 5000);

    }

}
function showSlide(index) {

    if(index >= slides.length){
        slideIndex = 0;

    }else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
    clearInterval(intervalId);
    slideIndex --;
    showSlide(slideIndex);
    startSlider();

}
function nextSlide() {
    clearInterval(intervalId);
    slideIndex ++;
    showSlide(slideIndex);
    startSlider();
}

function gotonextSlide() {
    slideIndex ++;
    showSlide(slideIndex);
}