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