const addListenerToClass = (className, callback) => {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    elements.item(i).addEventListener('click', callback);    
  }
};

const hideAll = () => {
  login.style.display = "none";
  areaHome.style.display = "none";
  areaSaldo.style.display = "none";
  areaCalculador.style.display = "none";
  areaProfile.style.display = "none";
  areaQuestions.style.display = "none";
}

const showLogin = () => {
 hideAll();
 navbar.style.display = "none";
 login.style.display = "block";
}

const showNavbar = () => {
  navbar.style.display = "block";
}

const showHome = () => {
  hideAll();
  areaHome.style.display = "block";
}

const showSaldo = () => {
  hideAll();
  areaSaldo.style.display = "block";
}

const showCalculador = () => {
  hideAll();
  areaCalculador.style.display = "block";
}

const showProfile = () => {
  hideAll();
  areaProfile.style.display = "block";
}

const showQuestions = () => {
  hideAll();
  areaQuestions.style.display = "block";
}