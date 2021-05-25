export function getAllDiscounts () {
    const url = "http://192.168.1.78:8080/couponsUtilisateurs"
    return fetch(url)
        .then((response)=>response.json())
        .catch((error)=>console.error(error))
}

/*export default data = [
    {
        id:1,
        libelle:"-20%",
        description:"Moins 20% sur votre première commande",
        code:"NEW20",
        expiration:"22/05/2021"
    },
    {
        id:2,
        libelle:"-5%",
        description:"Moins 5% pour chaque amis parrainé",
        code:"FRIEND5",
        expiration:"01/07/2021"
    }
]
*/
