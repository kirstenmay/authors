const controller = require('../controllers/controller');

module.exports = app => {
    app.get('/api/authors', controller.allAuthors);
    app.get(`/api/authors/:id`, controller.oneAuthor);
    app.post('/api/authors/new', controller.newAuthor);
    app.put('/api/authors/:id/edit', controller.editAuthor);
    app.delete('/api/authors/:id/delete', controller.removeAuthor);
}