document.getElementById("logear").addEventListener("click", (e) => {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if(user == "" || password == "") {
        e.preventDefault();
        if(user == "") document.getElementById("advert-user").textContent = "Debes introudicir un usuario";
        if(password == "") document.getElementById("advert-password").textContent = "Debes introudicir un password";
    };
});