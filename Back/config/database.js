// config/database.js
module.exports = {
    HOST: '176.128.3.159',
    USER: 'louis',
    PASSWORD: 'louis',
    //HOST: 'localhost',
    //USER: 'root',
    //PASSWORD: 'root',
	DB: 'gostyle',
    DIALECT: 'mysql',
    POOL: {
        MAX: 5,
        MIN: 0,
        ACQUIRE: 30000,
        IDLE: 10000
    }
};
