const loginForm = document.getElementById('Login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailInput = document.querySelector('input[type="email"]').value;
    const passwordInput = document.querySelector('input[type="password"]').value;

    const savedDataString = localStorage.getItem('quizUserData');
    
    if (savedDataString) {
        const savedData = JSON.parse(savedDataString);

        if (savedData.email === emailInput && savedData.password === passwordInput) {
            alert("Login Successful! 🎉 Welcome back, " + savedData.name);
            localStorage.setItem('isLoggedIn', 'true'); // User ko logged in mark kar diya
            window.location.href = "dashboard.html"; // Seedha App ke andar bheja!
        } else {
            alert("Invalid Email or Password! ❌ Please try again.");
        }
    } else {
        alert("No account found! Please Sign Up first.");
        window.location.href = "index.html"; 
    }
});