console.log("welcome to javascript");

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const sendData = (username_Val, sucessRate, count) => {
  if (sucessRate === count) {
    alert("Registration SuccessFull");
    swal("Welcome " + username_Val, " Registration Successfull", "success");
    setInterval(() => {
      location.reload();
    }, 1000);
  }
};

// final data validation
const sucessMsg = (username_Val) => {
  let formCon = document.getElementsByClassName("form_control");

  const count = formCon.length - 1;
  for (var i = 0; i < formCon.length; i++) {
    if (formCon[i].className === "form_control sucess") {
      var sucessRate = 0 + i;
      sendData(username_Val, sucessRate, count);
    } else {
      return false;
    }
  }
};

const isEmail = (email_Val) => {
  var atSymbol = email_Val.indexOf("@");
  if (atSymbol < 1) return false;
  var dot = email_Val.lastIndexOf(".");
  if (dot <= atSymbol + 3) return false;
  if (dot === email_Val.length - 1) return false;
  return true;
};

const setErrormsg = (input, errormsg) => {
  const formControl = input.parentElement;
  const errorMsg = formControl.querySelector(".error_msg");
  formControl.className = "form_control  error";
  errorMsg.innerHTML = errormsg;
};

const setSucessmsg = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form_control sucess";
};

const validate = () => {
  const username_Val = username.value.trim();

  const email_Val = email.value.trim();

  const number_Val = number.value.trim();

  const password_Val = password.value.trim();

  const confirm_password_Val = confirm_password.value.trim();

  if (username_Val === "") {
    setErrormsg(username, "username cannot be blank");
  } else if (username_Val.length <= 2) {
    setErrormsg(username, "username min 3 char");
  } else {
    setSucessmsg(username);
  }

  if (email_Val === "") {
    setErrormsg(email, "email cannot be blank");
  } else if (!isEmail(email_Val)) {
    setErrormsg(email, "not a valid email");
  } else {
    setSucessmsg(email);
  }

  if (number_Val === "") {
    setErrormsg(number, "phone number cannot be blank");
  } else if (number_Val.length !== 10) {
    setErrormsg(number, "not a valid phone number");
  } else {
    setSucessmsg(number);
  }

  if (password_Val === "") {
    setErrormsg(password, "phone number cannot be blank");
  } else if (number_Val.length <= 4) {
    setErrormsg(password, "min 4 letter password required");
  } else {
    setSucessmsg(password);
  }

  if (confirm_password_Val === "") {
    setErrormsg(confirm_password, "phone number cannot be blank");
  } else if (password_Val !== confirm_password_Val) {
    setErrormsg(confirm_password, "password are not match");
  } else {
    setSucessmsg(confirm_password);
  }

  sucessMsg(username_Val);
};
