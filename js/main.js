const areValidCredentials = (inputEmail, inputPass) => {
  return inputEmail.length > 3 && inputPass.length > 8;
}
const doLogin = (event) => {
  event.preventDefault();
  if (areValidCredentials(event.target[0].value, event.target[1].value)) {
    showNavbar();
    showHome();
    addListenerToClass('btnAreaSaldo', showSaldo);
    addListenerToClass('btnAreaCalcular', showCalculador);
    addListenerToClass('btnAreaPerfil', showProfile);
    addListenerToClass('btnAreaQuestions', showQuestions);
    addListenerToClass('btnAreaHome', showHome);
    addListenerToClass('btnSingOut', showLogin);
  } else {
    alert("Email o Contraseña Invalida");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showLogin();
  login.addEventListener("submit", doLogin);
})