function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if ((password === "1/2" && username === "Astro")) {
    window.location.href = "login.html";
  } else {
    alert("كلمة المرور غير صحيحة");
  }
}
