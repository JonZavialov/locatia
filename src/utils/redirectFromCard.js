function redirectFromCard({ target }, username){
    if (target.className === 'socials-box' || target.parentElement.className === 'socials-box')
        return
    
    window.location.href = '/profile/' + username
}

export default redirectFromCard