const webservice = require('../WebService/webservice');

///////////////////
/////  Login  /////
///////////////////

test('Login  : username OK && password NOK => connexion acceptée', async () => {
    const response = await webservice.login('admin', 'mdpadmin');
    expect(response.message).toBe('Connexion effectuée avec succès');
});

test('Login  : username NOK && password OK => connexion refusée', async () => {
    const response = await webservice.login('pasadmin', 'mdpadmin');
    expect(response.message).toBe('Nom utilisateur incorrect');
});

test('Login  : username OK && password NOK => connexion refusée', async () => {
    const response = await webservice.login('admin', 'mauvaismdp');
    expect(response.message).toBe('Mot de passe incorrect');
});


///////////////////
////  Signup  /////
///////////////////

test('Signup : username OK et password OK => inscription accéptée', async () => {
    const response = await webservice.signup('louis', 'mdpantoine');
    expect(response.message).toBe('Inscription effectuée avec succès');
});

test('Signup : username déjà utilisé => inscription refusée', async () => {
    const response = await webservice.signup('admin', 'mdpadmin');
    expect(response.message).toBe('Le nom d\'utilisateur existe déjà');
});


