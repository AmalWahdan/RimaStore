document.getElementById("card").innerHTML = sessionStorage.getItem("key");

var input = document.getElementsByClassName("field");
var pass_errors = document.getElementsByClassName("text");
var sub = document.getElementById("submit");

function Valid_Name() {
  if (input[0].value.length == 0) {
    Prouducemsg(0, "Name is required", "3px solid #e6b400");
    return false;
  }
  if (!input[0].value.match(/^[A-Za-z]{3,20}(\s{1}[A-Za-z]{3,20}){0,4}\s?$/)) {
    Prouducemsg(0, "Name not valid", "3px solid #e6b400");
    return false;
  }
  Prouducemsg(0, "", "3px solid #eee");
  return true;
}

function Valid_Email() {
  if (input[1].value.length == 0) {
    Prouducemsg(1, "Email is required", "3px solid #e6b400");
    return false;
  }
  if (
    !input[1].value.match(
      /^[\_]*[A-Za-z0-9]+([\._-][A-Za-z0-9]+)*[@][A-Za-z0-9]{3,50}([\.][a-z]{2,5})+$/
    )
  ) {
    Prouducemsg(1, "Email not valid", "3px solid #e6b400");
    return false;
  }
  Prouducemsg(1, "", "3px solid #eee");
  return true;
}

function Valid_password() {
  if (input[2].value.length < 8) {
    Prouducemsg(2, "password must be at least 8 ", "3px solid #e6b400");
    return false;
  }
  if (!/[A-Z]/.test(input[2].value)) {
    Prouducemsg(
      2,
      "password must contain upper case letter",
      "3px solid #e6b400"
    );
    return false;
  }
  if (!/[0-9]/.test(input[2].value)) {
    Prouducemsg(2, "password must contain number ", "3px solid #e6b400");
    return false;
  }
  if (!/[^A-Za-z0-9]/.test(input[2].value)) {
    Prouducemsg(
      2,
      "password must contain special character ",
      "3px solid #e6b400"
    );
    return false;
  }
  Prouducemsg(2, "", "3px solid #eee");
  return true;
}

function Valid_confirm() {
  console.log(input[3].value);
  console.log(input[2].value);
  if (input[2].value != input[3].value) {
    Prouducemsg(3, "Password not match ", "3px solid #e6b400");
    return false;
  }
  Prouducemsg(3, "", "3px solid #eee");
  return true;
}

function Valid_msg() {
  if (input[4].value.length < 2) {
    Prouducemsg(4, "message is required", "3px solid #e6b400");
    return false;
  }
  Prouducemsg(4, "", "3px solid #eee");
  return true;
}

function Valid_form(e) {
  event.preventDefault();
  if (
    !Valid_Name() ||
    !Valid_Email() ||
    !Valid_password() ||
    !Valid_confirm() ||
    !Valid_msg()
  ) {
    pass_errors[5].innerHTML = "Form not valid";
    setTimeout(function () {
      pass_errors[5].innerHTML = "";
    }, 2000);
  } else {
    pass_errors[5].innerHTML = "Form is valid";
    setTimeout(function () {
      pass_errors[5].innerHTML = "";
    }, 2000);
  }
}

function Prouducemsg(x, message, stl) {
  pass_errors[x].innerHTML = message;
  input[x].style.border = stl;
}

sub.addEventListener("click", function (e) {
  Valid_form(e);
});

input[0].addEventListener("keyup", Valid_Name);
input[1].addEventListener("keyup", Valid_Email);
input[2].addEventListener("keyup", Valid_password);
input[3].addEventListener("keyup", Valid_confirm);
input[4].addEventListener("keyup", Valid_msg);

//back-to-top

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
