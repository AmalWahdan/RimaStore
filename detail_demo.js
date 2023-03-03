document.getElementById("card").innerHTML = sessionStorage.getItem("key");

var mybutton = document.getElementsByClassName("back-to-top")[0];

window.onscroll = function () {
  btn_back_top();
  scroll_header();
};

mybutton.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

function btn_back_top() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scroll_header() {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var slideIndex = 1;
var time_out;
var slides = document.getElementsByClassName("detail_photos_links");

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function start() {
  showSlides();
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  time_out = setTimeout(start, 3000);
}
start();
