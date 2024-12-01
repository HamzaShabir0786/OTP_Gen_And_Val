let genBtn = document.querySelector(".gen-btn");
let valBtn = document.querySelector(".val-btn");
let input = document.querySelector("input");
let strong = document.querySelector("strong");
function OTP() {
  let myOTP = Math.floor(1000 + Math.random() * 9000);
  window.localStorage.setItem("otp", myOTP);
  strong.innerText = myOTP;
}
function valOTP() {
  let getOTP = window.localStorage.getItem("otp");
  if (getOTP === input.value) {
    alert("OTP is correct");
  } else {
    alert("OTP is incorrect");
  }
}
genBtn.addEventListener("click", OTP);
valBtn.addEventListener("click", valOTP);
