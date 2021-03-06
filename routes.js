const express = require('express')
const routes = express.Router()
const clients = require('./controllers/clients')


routes.get('/', function(req, res) {
    return res.redirect("/clients")
})
routes.get('/clients', clients.index)
routes.get('/clients/create', clients.create)
routes.get('/clients/:id', clients.show)
routes.get('/clients/:id/edit', clients.edit)
routes.post('/clients', clients.post)
routes.put('/clients', clients.put)
routes.delete('/clients', clients.delete)


module.exports = routes