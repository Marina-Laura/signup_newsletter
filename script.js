function validateEmail(email) {
  return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
}
const button = document.getElementsByName("submit")[0];
const reversebutton = document.getElementsByName("reverse")[0];
const leftdiv = document.getElementsByClassName("leftsection")[0];
const imagediv = document.getElementsByClassName("imagediv")[0];
const errorlabel = document.getElementsByClassName("errorlabel")[0];
const successdiv = document.getElementsByClassName("successdiv")[0];
const main = document.getElementsByTagName("main")[0];
const confirmation_paragraph = document.getElementById("confirmation");
const input = document.getElementsByName("email")[0];
const content = document.getElementById("content");
button.onclick = (e) => {
  const value = input.value;
  if (validateEmail(value)) {
    leftdiv.classList.add("vanish");
    imagediv.classList.add("vanish");
    successdiv.classList.remove("vanish");
    main.classList.add("reduced-max-width");
    content.innerText = value;
    return;
  }
  errorlabel.classList.remove("vanish");
  input.classList.add("badinput");
};
reversebutton.onclick = (e) => {
  leftdiv.classList.remove("vanish");
  imagediv.classList.remove("vanish");
  successdiv.classList.add("vanish");
  main.classList.remove("reduced-max-width");
  errorlabel.classList.add("vanish");
  input.classList.remove("badinput");
  input.value = "";
};
