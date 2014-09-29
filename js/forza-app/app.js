'use strict';

var app = angular.module('ForzaApp', []).run(function($rootScope) {
  $rootScope.UTIL = {
    cloneArrayItems: function(arr) {
        if (arr.length > 5) {
            return arr;
        }
        var out = [];
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < arr.length; j++) {
            out.push(arr[j]);
            }  
        }
        return out;
    }
  }
});

