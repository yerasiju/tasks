let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
  showSlide((slideIndex += 1));
}

function prevSlide() {
  showSlide((slideIndex -= 1));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
/* <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	
	<link rel="stylesheet" href="style1.css">
</head>
<body>
	<div class="slider">
    <div class="slide"><img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg" alt="Image 1"></div>
    <div class="slide"><img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png" alt="Image 2"></div>
    <div class="slide"><img src="https://fvi.edu/wp-content/uploads/2016/09/javascript-1024x341.png" alt="Image 3"></div>
    
  </div>
  <button class="prev" onclick="prevSlide()">&#10094;</button>
  <button class="next" onclick="nextSlide()">&#10095;</button>
  <script src="script.js"></script>
</div>
</body>
</html>*/
