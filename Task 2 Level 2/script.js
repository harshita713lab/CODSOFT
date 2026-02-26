const signupForm = document.getElementById('Sgn-up-from');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nameInput = document.querySelector('input[placeholder="Enter your Name"]').value;
    const emailInput = document.querySelector('input[type="email"]').value;
    const passwordInput = document.querySelector('input[type="password"]').value;

    if(nameInput === '' || emailInput === '' || passwordInput === '') {
        alert("Please fill all the details!");
        return; 
    }

    const userData = {
        name: nameInput,
        email: emailInput,
        password: passwordInput
    };

    localStorage.setItem('quizUserData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true'); // User ko logged in mark kar diya

    alert("YAY! 🎉 Account created successfully!");
    signupForm.reset(); 
    
    window.location.href = "dashboard.html"; // Seedha App ke andar bheja!
});