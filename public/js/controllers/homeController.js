(function() {
    'use strict'

    const app = angular.module('myApp')

    app.controller('homeCtrl', function($scope, $http, config, toaster) {
        const vm = this

        vm.dados = {}
        vm.isLoading = false

        // GET
        function listar() {
            vm.isLoading = true
            $http.get(config.posts)
            .then(function(response) {
                vm.posts = response.data.data
                vm.isLoading = false
            })
        }
        listar()

        // Abre modal add
        vm.openAdd = function() {
            vm.dados = {}
            $('#modalAdd').modal('show')
        }
        // POST
        vm.adicionar = function(d) {
            let objData = {
                titulo: d.titulo,
                conteudo: d.conteudo,
                autor: d.autor,
                ativo: d.ativo
            }
            $http.post(config.posts, objData)
            .then(function(response) {
                if(response.data.status) {
                    toaster.success('Sucesso!', response.data.msg)
                    listar()
                    $('#modalAdd').modal('hide')
                } else {
                    toaster.error('Erro', 'Houve um erro.')
                }
            })
        }

        
        // Abre modal edit
        vm.openEdit = function(d) {
            vm.dados = d
            $('#modalEdit').modal('show')
        }
        // PUT
        vm.editar = function(d) {
            let objData = {
                titulo: d.titulo,
                conteudo: d.conteudo,
                autor: d.autor,
                ativo: d.ativo
            }
            $http.put(`${config.posts}/${d.id}`, objData)
            .then(function(response) {
                if(response.data.status) {
                    toaster.success('Sucesso!', response.data.msg)
                    listar()
                    $('#modalEdit').modal('hide')
                } else {
                    toaster.error('Erro', 'Houve um erro.')
                }
            })
        }

        // Ativo
        vm.ativo = function(post) {
            if(post.ativo) {
                post.ativo = 0
            } else {
                post.ativo = 1
            }
            vm.editar(post)
        }


        // DELETE
        vm.delete = function(d) {
            if(confirm('Você realmente deseja excluir este registro?')) {
                $http.delete(`${config.posts}/${d.id}`)
                .then(function(response) {
                    if(response.data.status) {
                        toaster.success('Sucesso!', response.data.msg)
                        listar()
                    } else {
                        toaster.error('Erro', 'Houve um erro.')
                    }
                })
            }
        }
    })
})()