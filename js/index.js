import Highway from '@dogstudio/highway'
import {Fade , Fade2 , Fade3} from './transitionD'


const H = new Highway.Core({
	transitions: {
		home: Fade,
    end:Fade2,
    products:Fade3,
		search:Fade2
	}
})


let slideIndex = 0;
showSlides()

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}