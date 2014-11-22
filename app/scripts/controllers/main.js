'use strict';

/**
 * @ngdoc function
 * @name hackfashionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackfashionApp
 */
angular.module('hackfashionApp')
  .controller('MainCtrl', function ($scope) {
  	
  	$scope.mode = { val: 'main' };

  	$scope.open = function (){
  		$scope.mode.val = 'item' ;
  	}
  });
