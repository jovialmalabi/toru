// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modal-img");
var images = document.getElementsByClassName("art-img");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Close modal on ESC key
document.onkeydown = function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Here you can add your form submission logic, e.g., send a request to the server
    console.log('Username:', username);
    console.log('Password:', password);

    alert('Вход выполнен');
    // Redirect to a different page upon successful login
    // window.location.href = 'Home.html';
});
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    // Here you can add your form submission logic, e.g., send a request to the server
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    alert('Регистрация выполнена');
    // Redirect to a different page upon successful registration
    // window.location.href = 'Home.html';
});
