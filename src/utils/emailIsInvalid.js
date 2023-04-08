function emailIsInvalid(ref){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (ref.email.value.length < 1) return false
    if (!emailRegex.test(ref.email.value)) return "Invalid email!"
    return false
}

export default emailIsInvalid