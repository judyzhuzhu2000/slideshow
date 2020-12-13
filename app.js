
// const dots = document.getElementsByClassName("dot");
// const slides = document.getElementsByClassName("container-item");
let slideIndex = 0;
slideShow();

function slideShow() {
  let i;
  const slides = document.getElementsByClassName("container-item");
  //console.log(slides);
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(slideShow, 4000);
}





