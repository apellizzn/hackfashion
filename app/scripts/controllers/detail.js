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
    	{id: 'p2', price: 77, file: 'texture1.jpg', title: 'Energy', author: 'Van Gogh', src: "images/woman/textures/texture1.jpg"},
    	{id: 'p3', price: 89, file: 'texture2.jpg', title: 'Creativity', author: 'Pablo Picasso', src: "images/woman/textures/texture2.jpg"},
			{id: 'p2', price: 90, file: 'texture3.jpg', title: 'Fantasy', author: 'Dali', src: "images/woman/textures/texture3.jpg"},
    	{id: 'p3', price: 107, file: 'texture4.jpg', title: 'Caos', author: 'Da Vinci', src: "images/woman/textures/texture4.jpg"}
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
