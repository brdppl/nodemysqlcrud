(function() {
    'use strict'

    const app = angular.module('myApp')

    const base = 'http://localhost:3306/'

    app.constant('config', {
        posts: base+'posts'
    })
})()