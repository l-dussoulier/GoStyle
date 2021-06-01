// Tests d'intégration

const webservice = require('../webservice/webservice');
const config = require('../webservice/config');
const fetch = require('node-fetch');

///////////////////
/////  Setup  /////
///////////////////

// Avant les tests, on appelle l'API afin d'inserer des données de test
beforeEach( async () => {
   const response = await fetch(config.HOST + 'insertTest');
});

// Après les tests, on appelle l'API afin de supprimer les données de test
afterEach( async () => {
    const response = await fetch(config.HOST + 'deleteTest');
});

///////////////////
/////  Login  /////
///////////////////
describe('Login', () => {
    test('Username OK && password OK => connexion acceptée', async () => {
        const response = await webservice.login('usertest', 'mdptest');
        expect(response.message).toBe('Connexion effectuée avec succès');
    });

    test('Username NOK => connexion refusée', async () => {
        const response = await webservice.login('mauvaiseusername', 'mdp');
        expect(response.message).toBe('Nom utilisateur incorrect');
    });

    test('Username OK && password NOK => connexion refusée', async () => {
        const response = await webservice.login('usertest', 'mauvaismdp');
        expect(response.message).toBe('Mot de passe incorrect');
    });
});

///////////////////
////  Signup  /////
///////////////////
describe('Signup', () => {
    test('Username OK et password OK => inscription accéptée', async () => {
        const response = await webservice.signup('signuptest', 'mdpsignuptest');
        expect(response.message).toBe('Inscription effectuée avec succès');
    });

    test('Username déjà utilisé => inscription refusée', async () => {
        const response = await webservice.signup('usertest', 'mdptest');
        expect(response.message).toBe('Le nom d\'utilisateur existe déjà');
    });
});

////////////////////
////  Coupons  /////
////////////////////
describe('Coupons', () => {
    test('Mon utilisateur doit avoir 2 coupons dans sa liste', async() => {
       const responseListe = await webservice.getCoupons(999);
       expect(responseListe.length).toBe(2);
    });

    test('J\'envoie une qrCode et je doit donc avoir 3 coupons dans ma liste', async() => {
        await webservice.addDiscount(999, 'QRCODET3');
        await new Promise(resolve => setTimeout(resolve, 100));
        const responseListe = await webservice.getCoupons(999);
        expect(responseListe.length).toBe(3);
    });

    test('Je veux récupérer le détails d\'un coupon', async() => {
       const response = await webservice.getDiscountDetails(100);
       expect(response.code).toBe('CPT1');
    });
});