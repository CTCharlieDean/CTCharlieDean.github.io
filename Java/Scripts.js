function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


<script>
var slideIndex = 1;
showSlides(slideIndex);
showSlidesL(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  showSlidesL(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  showSlidesL(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("CTImages");
  var texts = document.getElementsByClassName("CTText");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}if (n > texts.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}if (n < 1) {slideIndex = texts.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    for (i = 0; i < texts.length; i++) {
      texts[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  texts[slideIndex-1].style.display = "block";   
  dots[slideIndex-1].className += " active";
}
</script>
