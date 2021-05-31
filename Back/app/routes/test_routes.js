module.exports = function(app) {
    const test = require('../controllers/test_controller');

    app.get('/insertTest', test.insert);
    app.get('/deleteTest', test.delete);

}