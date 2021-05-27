const config = require('./config');
const fetch = require('node-fetch');

export const login = async (username, password) => {
    try {
        return await fetch(config.HOST + 'login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response => response.json())
            .then(response => {
                return response;
            });
    }
    catch (error) {
    }
}

export const signup = async (username, password) => {
    try {
        return await fetch(config.HOST + 'signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response => response.json())
            .then(response => {
                return response;
            });
    }
    catch (error) {
        console.log(error);
    }
}



export function getAllDiscounts () {
    const url = "http://192.168.1.78:8080/couponsUtilisateurs"
    return fetch(url)
        .then((response)=>response.json())
        .catch((error)=>console.error(error))
}


