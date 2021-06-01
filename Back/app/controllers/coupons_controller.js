const db = require("../sequelize");
const Coupons = db.coupon;
const Utilisateurs = db.utilisateur;

const Op = db.Sequelize.Op;

// Vérifie et ajoute un coupon à la liste de l'utilisateur
exports.checkCoupon = (req, res) => {
    let userid = req.query.id;
    if (userid === undefined) {
        res.status(500).send({message: 'Aucun utilisateur connecté !'});
    }
    else {
        let qrCode = req.query.qrcode;

        // On récupère le coupon
        Coupons.findOne({
            where: {
                qrCode: qrCode
            }
        }).then(coupon => {
            // Si il existe
            if (coupon != null) {
                // On l'ajoute à l'utilisateur
                Utilisateurs.findByPk(userid)
                    .then(user => {
                        user.addCoupon(coupon);
                        user.save();
                    });
            }
            res.send(coupon);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Une erreur est survenue lors de la vérification d\'un coupon'
            });
        });
    }
}

// Récupère les détails d'un coupon
exports.findById = (req, res) => {
    let id = req.query.id;
    Coupons.findByPk(id)
        .then(coupon => {
            res.send(coupon);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Une erreur est survenue lors de la récupération d\'un coupon'
            });
    });
}

// Récupère les détails d'un coupon
exports.insert = (req, res) => {
    console.log(req.body.libelle)
    Coupons.create({
        libelle: req.body.libelle,
        description: req.body.description,
        code: req.body.code,
        qrCode: req.body.qrcode,
        dateExpiration: req.body.dateexpiration
    })
        .then(coupon => {
            res.send(coupon);
        })
        .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Une erreur est survenue lors de la récupération d\'un coupon'
        });
    });
}
