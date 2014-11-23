'use strict';

/**
 * @ngdoc function
 * @name hackfashionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackfashionApp
 */
angular.module('hackfashionApp')
  .controller('MetricCtrl', function ($scope) {

  	$scope.selected = [
    	{id: 'p2', price: 30, file: 'texture1.jpg', title: 'Energy', author: 'Glen Jhones', src: "images/woman/textures/texture1.jpg"},
      {id: 'p3', price: 50, file: 'texture2.jpg', title: 'Creativity', author: 'Dan Mountford', src: "images/woman/textures/texture2.jpg"},
      {id: 'p2', price: 70, file: 'texture3.jpg', title: 'Fantasy', author: 'Joshua Devis', src: "images/woman/textures/texture3.jpg"},
      {id: 'p3', price: 80, file: 'texture4.jpg', title: 'Caos', author: 'Federico Landini', src: "images/woman/textures/texture4.jpg"},
      {id: 'p3', price: 100, file: 'texture5.jpg', title: 'Liquid', author: 'Maria Gronlund', src: "images/woman/textures/texture5.jpg"}
    ];

		$scope.set = function(card,id){
			$scope.texture = card;
			$scope.texture.meters = 0
		};
  });
