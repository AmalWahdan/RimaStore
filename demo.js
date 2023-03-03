var crd = document.getElementById("card");
var cnt = 0;
cnt = sessionStorage.getItem("key");
crd.innerText = cnt;
function add_TO_Card() {
  cnt++;
  sessionStorage.setItem("key", cnt);
  crd.innerText = cnt;
}

var slideIndex = 1;
var time_out;
var slides = document.getElementsByClassName("photos_links");
var dots = document.getElementsByClassName("dot");
function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active2";
}
function nextPhoto() {
  showSlides();
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
}
function prevPhoto() {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlides();
}

function start() {
  nextPhoto();
  time_out = setTimeout(start, 3000);
}
function currentSlide(n) {
  slideIndex = n;
}
start();

var prds = document.getElementsByClassName("prd_click");
var cards = document.getElementsByClassName("ct_show");

cards[0].style.display = "flex";

prds[0].addEventListener("click", function () {
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  cards[0].style.display = "flex";
});

prds[1].addEventListener("click", function () {
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  cards[1].style.display = "flex";
});

prds[2].addEventListener("click", function () {
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  cards[2].style.display = "flex";
});

prds[3].addEventListener("click", function () {
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  cards[3].style.display = "flex";
});

var mybutton = document.getElementsByClassName("back-to-top")[0];

window.onscroll = function () {
  btn_back_top();
  scroll_header();
};
mybutton.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

function btn_back_top() {
  if (document.documentElement.scrollTop > 80) {
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
