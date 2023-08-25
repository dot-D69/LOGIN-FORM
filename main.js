const showHiddenPass = (loginPass,loginEye) => {
    const input = document.getElementById(loginPass),
            iconEye = document.getElementById(loginEye)
    iconEye.addEventListener('click', () => {
        if(input.type === 'password'){
            input.type = 'text'

            iconEye.classList.add('ri-eye-2-line')
            iconEye.classList.remove('ri-eye-close-line')
        }
        else
        {
            input.type = 'password'

            iconEye.classList.add('ri-eye-close-line')
            iconEye.classList.remove('ri-eye-2-line')
        }
    })
}

showHiddenPass('login-password','login-eye')

const passwordStrengthIndicator = document.getElementById("password-strength");
const strengthText = document.getElementById("strength-text");
const passwordInput = document.getElementById("login-password");

passwordInput.addEventListener("input", updatePasswordStrength);

function updatePasswordStrength() {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);
    updateStrengthIndicator(strength);
}

function calculatePasswordStrength(password) {
    const minLength = 8;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numbersRegex = /[0-9]/;
    const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    let score = 0;

    if (password.length >= minLength) {
        if ((lowercaseRegex.test(password) || uppercaseRegex.test(password)) && password.length < minLength) {
            score++; // Weak
        }
        if (lowercaseRegex.test(password) && uppercaseRegex.test(password) && password.length >= minLength) {
            score++; // Moderate
        }
        if (lowercaseRegex.test(password) && uppercaseRegex.test(password) && numbersRegex.test(password) && password.length >= minLength) {
            score++; // Strong
        }
        if (lowercaseRegex.test(password) && uppercaseRegex.test(password) && numbersRegex.test(password) && specialCharsRegex.test(password) && password.length >= minLength) {
            score++; // Very Strong
        }
    }

    return score;
}

function updateStrengthIndicator(strength) {
    const strengthLabels = ["Weak", "Moderate", "Strong", "Very Strong"];
    const strengthClasses = ["weak", "moderate", "strong", "very-strong"];
    const strengthIndex = Math.min(Math.floor(strength), strengthLabels.length - 1);

    for (let i = 0; i < strengthClasses.length; i++) {
        passwordStrengthIndicator.classList.remove(strengthClasses[i]);
    }

    passwordStrengthIndicator.innerHTML = strengthLabels[strengthIndex];
    passwordStrengthIndicator.classList.add(strengthClasses[strengthIndex]);
}

