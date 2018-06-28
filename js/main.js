const areValidCredentials = (inputEmail, inputPass) => {
  return inputEmail.length > 3 && inputPass.length > 8;
}

const login = (event) => {
  event.preventDefault();
  if (areValidCredentials(event.target[0].value, event.target[1].value)) {
    window.location = './indexMenu.html';
  }else {
    alert("correo electronico o contraseña invalida")
  }
}

window.onload = () => {
  let loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", login);
}
