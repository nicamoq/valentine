function trackFunction() {
    var username = document.getElementById('fname').value;
    var password = document.getElementById('lname').value;

    console.log("Username:", username);
    console.log("Password:", password);

    // Simple username and password check
    if (username === "user" && password === "pass") {
        localStorage.setItem('isLoggedIn', 'true');
        console.log("isLoggedIn set to true");
        return true; // Allow form submission
    } else {
        alert("Invalid credentials. Please contact site admin.");
        return false; // Prevent form submission
    }
}
