document.getElementById("registrar").addEventListener("click", (e) => {
    const user = document.getElementById("user").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const email = document.getElementById("email").value;

    if(user == "" || password1 == "" || password2 == "" || email == "") {
        e.preventDefault();
        if(user == "") document.getElementById("advert-user").textContent = "Debes introudicir un usuario";
        if(password1 == "") document.getElementById("advert-password1").textContent = "Debes introudicir una contraseña";
        if(password2 == "") document.getElementById("advert-password2").textContent = "Debes confirmar la contraseña";
        if(password1 != password2) document.getElementById("advert-password2").textContent = "La contraseña no coincide";
        if(email == "") document.getElementById("advert-email").textContent = "Debes introducir un email";
    }else{
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({user: user, password: password1, email: email})
        };
    
        fetch("/registro", options);
    };
});