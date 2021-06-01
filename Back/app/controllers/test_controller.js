const db = require("../sequelize");
const Utilisateurs = db.utilisateur;
const Coupons = db.coupon;
const bcrypt = require('bcrypt-nodejs');

const mysql = require('mysql');

// Vérifie et ajoute un coupon à la liste de l'utilisateur
exports.insert = (req, res) => {
    let con = mysql.createConnection({
        host: "176.128.3.159",
        user: "louis",
        password: "louis",
        database: 'gostyle',
        multipleStatements: true
    });

    con.connect(function(err) {
        if (err) throw err;
        let query = 'INSERT INTO `utilisateurs` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES' +
            '(\'999\', \'usertest\', \'$2a$10$nFFAdYGch4vNeyM1Dq9cD.lDE7YBcQCO00F1y.0Hvwgpdb9OD8WnG\', \'2021-05-29 15:35:23\', \'2021-05-29 15:35:23\');' +
            'INSERT INTO `coupons` (`id`, `libelle`, `description`, `code`, `qrCode`, `dateExpiration`, `createdAt`, `updatedAt`) VALUES' +
            '(\'100\', \'Libellé du coupon test 1\', \'Description du coupon test 1\', \'CPT1\', \'QRCODET1\', \'2021-05-29 15:47:17\', \'2021-05-29 15:47:17\', \'2021-05-29 15:47:17\'),' +
            '(\'101\', \'Libellé du coupon test 2\', \'Description du coupon test 2\', \'CPT2\', \'QRCODET2\', \'2021-05-29 15:47:17\', \'2021-05-29 15:47:17\', \'2021-05-29 15:47:17\'),' +
            '(\'102\', \'Libellé du coupon test 3\', \'Description du coupon test 3\', \'CPT3\', \'QRCODET3\', \'2021-05-29 15:47:17\', \'2021-05-29 15:47:17\', \'2021-05-29 15:47:17\');' +
            'INSERT INTO `couponsutilisateurs` (`createdAt`, `updatedAt`, `coupon_id`, `utilisateur_id`) VALUES' +
            '(\'2021-05-29 15:49:05\', \'2021-05-29 15:49:05\', \'100\', \'999\'),' +
            '(\'2021-05-29 15:49:05\', \'2021-05-29 15:49:05\', \'101\', \'999\');';

        con.query(query, function(err, results) {
            if (err) {
                res.status(500).json({message : 'Une erreur est survenue lors de l\'insertion des données'});
            } else {
                res.status(200).json({message : 'Insertion des données effectuée avec succès'});
            }
        })
    });
}

exports.delete = (req, res) => {
    let con = mysql.createConnection({
        host: "176.128.3.159",
        user: "louis",
        password: "louis",
        database: 'gostyle',
        multipleStatements: true
    });

    con.connect(function(err) {
        if (err) throw err;
        let query = 'DELETE FROM `couponsutilisateurs` WHERE `couponsutilisateurs`.`coupon_id` = 100 AND `couponsutilisateurs`.`utilisateur_id` = 999;' +
            'DELETE FROM `couponsutilisateurs` WHERE `couponsutilisateurs`.`coupon_id` = 101 AND `couponsutilisateurs`.`utilisateur_id` = 999;' +
            'DELETE FROM `couponsutilisateurs` WHERE `couponsutilisateurs`.`coupon_id` = 102 AND `couponsutilisateurs`.`utilisateur_id` = 999;' +
            'DELETE FROM `coupons` WHERE `coupons`.`id` = 100;' +
            'DELETE FROM `coupons` WHERE `coupons`.`id` = 101;' +
            'DELETE FROM `coupons` WHERE `coupons`.`id` = 102;' +
            'DELETE FROM `utilisateurs` WHERE `utilisateurs`.`id` = 999;' +
            'DELETE FROM `utilisateurs` WHERE `utilisateurs`.`username` = \'signuptest\';';
        con.query(query, function(err, results) {
            if (err) {
                res.status(500).json({message : 'Une erreur est survenue lors de la suppression des données'});
            } else {
                res.status(200).json({message : 'Suppression des données effectuée avec succès'});
            }
        })
    });
}

