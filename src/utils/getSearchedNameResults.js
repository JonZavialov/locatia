import Fuse from 'fuse.js'

function getSearchedNameResults(query, data){
    // data param is in the form:
    // {
    //    "uuid": { ...data},
    //    "uuid": { ...data},
    // }
    // Fuze needs an array of objects in the form:
    // [{...data}, {...data}]
    // So we convert it to this list with the UUID being a parameter of the object
    const formattedData = Object.keys(data).map((x) => {
        const obj = data[x]
        obj.uuid = x
        return obj
    })
    
    const fuse = new Fuse(formattedData, {
        keys: ['name'],
        threshold: 0.3
    })
    const results = fuse.search(query)

    // now we need to format it back to the original form and remove the uuid param
    const formattedResults = {}
    results.forEach((x) => {
        formattedResults[x.item.uuid] = x.item
        delete formattedResults[x.item.uuid].uuid
    })

    return formattedResults
}

export default getSearchedNameResults