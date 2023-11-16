const backendURL = 'https://api.locatia.co'

function sendReqToBackend(endpoint){
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', `${backendURL}/${endpoint}`);
        req.onload = () => {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = () => {
            reject(Error('Network Error'));
        };
        req.send();
    });
}

export default sendReqToBackend;
