let genBtn = document.querySelector(".gen-btn");
let valBtn = document.querySelector(".val-btn");
let input = document.querySelector("input");
let strong = document.querySelector("strong");
let container = document.querySelector(".container");
let otpDiv = document.querySelector(".otp-div");
let otpPara = document.querySelector(".otp-para");
const p = document.createElement("p");
p.innerText = "OTP will expire after 10 seconds.";
p.style.color = "rgb(107, 120, 176)";
p.style.marginTop = "10px";
p.style.fontSize = "15px";
p.style.textAlign = "center";
strong.style.color = "rgb(107, 120, 176)";
strong.style.marginLeft = "7px";

function GenOTP() {
  let myOTP = Math.floor(1000 + Math.random() * 9000);
  window.localStorage.setItem("otp", myOTP);
  strong.innerText = myOTP;
  otpDiv.appendChild(p);
  otpPara.innerText = "This is your OTP : ";
  strong.style.marginLeft = "0rem";
  strong.style.marginLeft = "7px";

  setTimeout(() => {
    otpPara.innerText = "";
    strong.innerText = "OTP has expred. ";
    strong.style.marginLeft = "2.4rem";
    myOTP = Math.floor(1000 + Math.random() * 8000);
    window.localStorage.setItem("otp", myOTP);
  }, 10000);
}

function valOTP() {
  let getOTP = window.localStorage.getItem("otp");
  if (getOTP === input.value) {
    window.location.href = "./login/index.html";
    alert("OPT is Correct");
  } else {
    alert("OTP is Incorrect. Please try again");
  }
}

genBtn.addEventListener("click", GenOTP);
valBtn.addEventListener("click", valOTP);
