function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var mobile = document.getElementById("mobile").value;

    if (name == "") {
        alert("Please enter your name");
        return false;
    }

    if (email == "" || !email.includes("@")) {
        alert("Please enter a valid email with @");
        return false;
    }

    if (password == "") {
        alert("Please enter password");
        return false;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }

    if (password != confirm) {
        alert("Passwords do not match");
        return false;
    }

    if (mobile == "") {
        alert("Please enter mobile number");
        return false;
    }

    if (mobile.length != 10) {
        alert("Mobile number must be 10 digits");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
