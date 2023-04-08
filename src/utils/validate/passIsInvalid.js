function passIsInvalid(ref){
    const password = ref.password.value;
    const confirmPassword = ref['confirm-password'].value;

    if (password.length < 6 && password.length > 0){
        return "Password must be at least 6 characters long!"
    }else if (password !== confirmPassword && confirmPassword.length > 0){
        return "Passwords don't match!"
    }
    return false
}

export default passIsInvalid