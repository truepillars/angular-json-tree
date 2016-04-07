'use strict';

module.exports = function(config) {
  config.set({
    autoWatch : false,

    frameworks: ['jasmine'],
    browsers: ['Chrome'],

    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../src/**/*.js',
      '../test/unit/**/*.js'
    ]
  });
};
