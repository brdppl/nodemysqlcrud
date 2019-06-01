const express = require('express')
const router = express.Router()
const postsModel = require('../models/postsModel')

const getPosts = router.get('/posts', function(req, res, next) {
    postsModel.findAll({})
    .then(data => res.json({
        status: true,
        data: data
    }))
    .catch(error => res.json({
        status: false,
        data: [],
        msg: error
    }))
})

const createPost = router.post('/posts', function(req, res, next) {
    postsModel.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
        autor: req.body.autor,
        img: req.body.img,
        ativo: 0
    })
    .then(data => res.json({
        status: true,
        data: data,
        msg: 'Registro adicionado com sucesso.'
    }))
    .catch(error => res.json({
        status: false,
        data: [],
        msg: error
    }))
})

const deletePost = router.delete('/posts/:id', function(req, res, next) {
    postsModel.destroy({
        where: {
            'id': req.params.id
        }
    })
    .then(data => res.json({
        status: true,
        data: data,
        msg: 'Registro excluído com sucesso.'
    }))
    .catch(error => res.json({
        status: false,
        data: [],
        msg: error
    }))
})

const editPost = router.put('/posts/:id', function(req, res, next) {
    postsModel.update({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
        autor: req.body.autor,
        img: req.body.img,
        ativo: req.body.ativo
    },
    {
        where: {
            'id': req.params.id
        }
    })
    .then(data => res.json({
        status: true,
        data: data,
        msg: 'Registro atualizado com sucesso.'
    }))
    .catch(error => res.json({
        status: false,
        data: [],
        msg: error
    }))
})

module.exports = {
    getPosts: getPosts,
    createPost: createPost,
    deletePost: deletePost,
    editPost: editPost
}