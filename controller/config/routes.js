const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    router.get('/', (req, res) => res.send('Funcionando!'))
    server.use('/', router)

    // Posts
    const posts = require('../api/posts')
    router.get('/posts', posts.getPosts)
    router.post('/posts', posts.createPost)
    router.delete('/posts/:id', posts.deletePost)
    router.put('/posts/:id', posts.editPost)
}