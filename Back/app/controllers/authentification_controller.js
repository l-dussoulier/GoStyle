const db = require("../sequelize");
const Utilisateurs = db.utilisateur;
const bcrypt = require('bcrypt-nodejs');

// Login
exports.login = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    Utilisateurs.findOne({
        where: {
            username: username
        }
    }).then(user => {
        if (user == null) {
            res.json({ status: false, message: 'Nom utilisateur incorrect' });
        }
        else {
            if (!bcrypt.compareSync(password, user.password)) {
                res.json({ status: false, message: 'Mot de passe incorrect' });
            }

            // If all is well => assign user to session
            req.session.user = user;
            res.json({ status: true, message: 'Connexion effectuée avec succès' });
        }
    }).catch(err => {
        res.json({ status: false, message: 'Une erreur est survenue' });
    });
}

// Signup
exports.signup = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    Utilisateurs.findOne({
        where: {
            username: username
        }
    }).then(users => {
        // User already exist
        if (users != null) {
            res.json({ status: false, message: 'Le nom d\'utilisateur existe déjà' });
        }
        else {
            // Create user
            Utilisateurs.create({
                username: username,
                password: bcrypt.hashSync(password, null, null)
            }).then(user => {
                // assign user to session
                req.session.user = user;
                res.json({ status: true, message: 'Inscription effectuée avec succès' });
            })
        }
    }).catch(err => {
        if (err) {
            res.json({ status: false, message: 'Une erreur est survenue' });
        }
    });
}

// Logout
exports.logout = (req, res) => {
    delete req.session.user;
    res.json({ status: true, message: 'Déconnexion effectuée avec succès !' });
}

// Profile
exports.profil = (req, res) => {
    res.json(req.session.user);
}