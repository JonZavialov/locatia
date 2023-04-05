import getImageFromRef from "../firebase-utils/query/getImageFromRef"

function getImageListFromRefList(imageRefList){
    const imageList = []
    
    return new Promise((resolve) => {
        imageRefList.forEach((imageRef) => {
            getImageFromRef(imageRef)
            .then((uri) => {
                imageList.push(uri)

                if (imageList.length === imageRefList.length){
                    imageList.sort()
                    resolve(imageList)
                }
            })
        })
    })
}

export default getImageListFromRefList;