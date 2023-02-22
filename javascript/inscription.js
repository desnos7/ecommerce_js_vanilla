let mail = document.getElementById("email");
let pw = document.getElementById("password");



// storing input from register-form
function store(e) {
  e.preventDefault();
  let header = document.querySelector(".header");
 let header2 = document.querySelector(".header2");
  localStorage.setItem("name", mail.value);
  localStorage.setItem("pw", pw.value);
  header.style.display = 'none';
  header2.style.display = "block";
}

// check if stored data from register-form is equal to entered data in the   login-form
function check(e) {
  e.preventDefault();

  // stored data from the register-form
  let storedName = localStorage.getItem("name");
  let storedPw = localStorage.getItem("pw");

  // entered data from the login-form
  let mail2 = document.getElementById("email2");
  let pw2 = document.getElementById("password2");

  // check if stored data from register-form is equal to data from login form
  if (mail2.value == storedName && pw2.value == storedPw) {
    window.location.href = "index.html";
  } else {
    alert("ERROR.");
  }
}
