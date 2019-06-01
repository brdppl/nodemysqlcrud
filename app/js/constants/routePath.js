(function() {
    'use strict'

    const app = angular.module('myApp')

    const base = 'http://localhost:4000/'

    app.constant('config', {
        posts: base+'posts',
        upload: base+'upload'
    })
})()