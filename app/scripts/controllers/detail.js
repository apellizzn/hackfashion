'use strict';

/**
 * @ngdoc function
 * @name hackfashionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackfashionApp
 */
angular.module('hackfashionApp')
  .controller('DetailCtrl', function ($scope) {

    $scope.photos = [
    	{id: 'p2', price: 77, file: 'texture1.jpg', title: 'Energy', author: 'Glen Jhones', src: "images/woman/textures/texture1.jpg"},
    	{id: 'p3', price: 89, file: 'texture2.jpg', title: 'Creativity', author: 'Dan Mountford', src: "images/woman/textures/texture2.jpg"},
			{id: 'p2', price: 90, file: 'texture3.jpg', title: 'Fantasy', author: 'Joshua Devis', src: "images/woman/textures/texture3.jpg"},
    	{id: 'p3', price: 107, file: 'texture4.jpg', title: 'Caos', author: 'Federico Landini', src: "images/woman/textures/texture4.jpg"},
    	{id: 'p3', price: 107, file: 'texture5.jpg', title: 'Liquid', author: 'Maria Gronlund', src: "images/woman/textures/texture5.jpg"}
		];

		$scope.texture = { file: 'default.jpg' };
		$scope.backgorund = {};

		$scope.path = { val: "1"};

		$scope.backgorund.url = "/images/woman/"+$scope.path.val+"/"+$scope.texture.file;

		$scope.reset = function(){
			$scope.texture = { file: 'default.jpg' }
			$scope.backgorund.url = "/images/woman/"+$scope.path.val+"/default.jpg"
		};

		$scope.change = function(path){
			$scope.path.val = path;
			$scope.backgorund.url = "/images/woman/"+$scope.path.val+"/"+$scope.texture.file;
		};
		
		$scope.set= function(texture){
			$scope.texture = texture;
			$scope.backgorund.url = "/images/woman/"+$scope.path.val+"/"+texture.file;
		}
  });
