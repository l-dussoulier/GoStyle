const db = require("../sequelize");
const Utilisateurs = db.utilisateur;
const Coupons = db.coupon;
const Op = db.Sequelize.Op;

// Récupère la liste des coupons de l'utilisateur
exports.findAllCouponsById = (req, res) => {
    let userid = req.query.id;

    if (userid === undefined) {
        res.status(500).send({message: 'Aucun utilisateur connecté !'});
    }
    else {
        Utilisateurs.findByPk(userid, {
            include : [
                {
                    model: Coupons,
                    as: 'coupon',
                }
            ],
        })
            .then(data => {
                if (data == null) {
                    res.send([]);
                } else {
                    res.send(data.coupon);
                }
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || 'Une erreur est survenue lors de la récupération des coupons'
                });
            });
    }
}
