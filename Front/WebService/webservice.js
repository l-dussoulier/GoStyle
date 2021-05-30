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
                console.log(response);
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

export const getDiscounts = async () => {
    try {
        return await fetch(config.HOST+'couponsUtilisateurs', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                return response;
            });
    }
    catch (error){
        console.log(error);
    }
}



