import './login.css'

const providers = {
    'Google': "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227",
    'Facebook': "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png",
}
// TODO: host images on firebase

function LoginButton({ provider, onClick, style, altText }){
    return (
        <button onClick={() => onClick(provider)} style={style} id="signin-button">
            {providers[provider] && <img src={providers[provider]} alt={provider} />}
            <p>Sign {!altText ? "in" : altText} with {provider}</p>
        </button>
    )
}

export default LoginButton