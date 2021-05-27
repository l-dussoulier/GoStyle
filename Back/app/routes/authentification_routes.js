module.exports = function(app) {
    const authentification = require('../controllers/authentification_controller');

    // Login
    app.post('/login', authentification.login);

    // Signup
    app.post('/signup', authentification.signup);

    // Logout
    app.get('/logout', authentification.logout);

    // Profile
    app.get('/profile', authentification.profil);
}