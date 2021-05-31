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

export const getCoupons = async (userid) => {
    try {
        return await fetch(config.HOST + 'couponsUtilisateurs?id=' + userid, {
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

export const addDiscount = async (userid, qrCode) => {
    try {
        let params = 'id=' + userid + '&qrcode=' + qrCode;
        return fetch(config.HOST + 'checkCoupon?' + params, {
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

export const getDiscountDetails = async (couponid) => {
    try {
        let params = 'id=' + couponid;
        return await fetch(config.HOST + 'coupon?' + params, {
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

