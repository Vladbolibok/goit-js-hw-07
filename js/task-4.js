const formLogin = document.querySelector(".login-form");

const sendUserInfo = (event) => {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!login || !password) {
    alert("All form fields must be filled in");
    return;
  }

  const userInfo = {};
  userInfo[form.elements.email.name] = login;
  userInfo[form.elements.password.name] = password;

  console.log(userInfo);

  formLogin.reset();
};

formLogin.addEventListener("submit", sendUserInfo);
