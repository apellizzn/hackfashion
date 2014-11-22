'use strict';

/**
 * @ngdoc function
 * @name hackfashionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackfashionApp
 */
angular.module('hackfashionApp')
  .controller('MetricCtrl', function ($scope,$location) {
    
    

  	$scope.selected = [
    	{id: 'p2', price: 7, file: 'texture1.jpg', title: 'Energy', author: 'Van Gogh', src: "images/woman/textures/texture1.jpg"},
    	{id: 'p3', price: 7, file: 'texture2.jpg', title: 'Creativity', author: 'Pablo Picasso', src: "images/woman/textures/texture2.jpg"}
		];

    $scope.picks = [
    	{id: 'p2', file: 'texture1.jpg', title: 'Energy', author: 'Van Gogh', src: "images/woman/textures/texture1.jpg"},
    	{id: 'p3', file: 'texture2.jpg', title: 'Creativity', author: 'Pablo Picasso', src: "images/woman/textures/texture2.jpg"}
		];

		$scope.set = function(card,id){
			$scope.texture = card;
			$scope.texture.meters = 0
		};
  });