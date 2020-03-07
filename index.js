const SHOWING_CLASS = "showing";
const firstSlider = document.querySelector(".slider-item:first-child");

function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlider.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlider.classList.add(SHOWING_CLASS);
  }
}
slide();
setInterval(slide, 2000);
