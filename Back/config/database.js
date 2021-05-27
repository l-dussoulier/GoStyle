// config/database.js
module.exports = {
    HOST: '127.0.0.1',
    USER: 'root',
    PASSWORD: '',
	DB: 'gostyle',
    DIALECT: 'mysql',
    POOL: {
        MAX: 5,
        MIN: 0,
        ACQUIRE: 30000,
        IDLE: 10000
    }
};
