require.config({
    urlArgs: 'bust=' + (new Date()).getTime(), // for development
    paths:{
        backbone: 'bower_components/backbone/backbone',
        jquery: 'bower_components/jquery/dist/jquery',
        marionette: 'bower_components/backbone.marionette/lib/backbone.marionette',
        text: 'bower_components/requirejs-text/text',
        underscore: 'bower_components/lodash/dist/lodash',
        hammer: 'bower_components/hammerjs/hammer',
        'jquery.hammer': 'bower_components/jquery-hammerjs/jquery.hammer',
    },
    shim: {
        backbone: {
            deps:['jquery', 'underscore'],
            exports:'Backbone'
        },
        marionette: {
            deps:['backbone'],
            exports:'Marionette'
        },
        'jquery.hammer': ['jquery','hammer'],
    }
});

require(['app'], function(App){
    App.start();
});