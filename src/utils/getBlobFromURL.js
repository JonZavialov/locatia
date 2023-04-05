function getBlobFromURL(url, callback) {
    fetch(url)
    .then(res => res.blob())
    .then(blob => callback(blob))
}

export default getBlobFromURL;