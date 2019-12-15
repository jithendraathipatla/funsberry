function openModal() {
  document.getElementById("myModal").style.display = "block";
  // document.getElementById("fixingthenav").style.display = "none";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  // document.getElementById("fixingthenav").style.display = "block";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



function floarplanH(){
  document.getElementById("myModalFloor").style.display = "block";
}

function closeModalabc(){
  document.getElementById("myModalFloor").style.display = "none";
}

let slideIndexFloorabc = 1;
showSlidesFloor(slideIndexFloorabc);

// Next/previous controls
function plusSlidesFloor(n) {
  showSlidesFloor(slideIndexFloorabc += n);
}

// Thumbnail image controls
function currentFloor(n) {
  showSlidesFloor(slideIndexFloorabc = n);
}

function showSlidesFloor(n) {
  let j;
  let slidesFloor = document.getElementsByClassName("mySlidesFloor");
  var dotsabc = document.getElementsByClassName("demoFloor");
  if (n > slidesFloor.length) {slideIndexFloorabc = 1}
  if (n < 1) {slideIndexFloorabc = slidesFloor.length}
  for (j = 0; j < slidesFloor.length; j++) {
    slidesFloor[j].style.display = "none";
  }
  for(j = 0; j < dotsabc.length; j++) {
    dotsabc[j].className = dotsabc[j].className.replace(" active", "");
  }
  slidesFloor[slideIndexFloorabc - 1].style.display = "block";
  dotsabc[slideIndexFloorabc - 1].className += " active";
}

let win = $(window).width();
if(win < 420){
  $("#bc").click(function(){
    $("html, body" ).animate({scrollTop:1920}, 'slow');
    return false;
  });

  $("#cd").click(function(){
    $("html, body" ).animate({scrollTop:2730}, 'slow');
    return false;
  })
 
  $("#ij").click(function(){
    $("html, body" ).animate({scrollTop:3080}, 'slow');
    return false;
  });

  $("#ef").click(function(){
    $("html, body" ).animate({scrollTop:5030}, 'slow');
    return false;
  });

  $("#fg").click(function(){
    $("html, body" ).animate({scrollTop:5600}, 'slow');
    return false;
  });

  $("#gh").click(function(){
    $("html, body" ).animate({scrollTop:6420}, 'slow');
    return false;
  });
 
}
else {

  $("#bc").click(function(){
    $("html, body" ).animate({scrollTop:800}, 'slow');
    return false;
  });

  $("#cd").click(function(){
    $("html, body" ).animate({scrollTop:1170}, 'slow');
    return false;
  })
 
  $("#ij").click(function(){
    $("html, body" ).animate({scrollTop:1530}, 'slow');
    return false;
  });

  $("#ef").click(function(){
    $("html, body" ).animate({scrollTop:2130}, 'slow');
    return false;
  });

  $("#fg").click(function(){
    $("html, body" ).animate({scrollTop:2530}, 'slow');
    return false;
  });

  $("#gh").click(function(){
    $("html, body" ).animate({scrollTop:3150}, 'slow');
    return false;
  });

}

