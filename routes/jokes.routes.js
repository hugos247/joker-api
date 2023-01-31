const ControladorJokes = require('../controllers/jokes.controllers');

module.exports = ( app ) => {
    app.get('/api/jokes', ControladorJokes.obtenerBromas);
    app.get('/api/jokes/:_id', ControladorJokes.obtenerBromasId);
    app.post('api/jokes/new', ControladorJokes.crearBroma);
    app.put('api/jokes/edit', ControladorJokes.editarBroma);
    app.delete('api/jokes/delete', ControladorJokes.eliminarBroma);

}