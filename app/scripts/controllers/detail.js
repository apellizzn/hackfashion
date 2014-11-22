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
    	{id: 'p2', price: 70, file: 'texture1.jpg', title: 'Energy', author: 'Van Gogh', src: "images/woman/textures/texture1.jpg"},
    	{id: 'p3', price: 85, file: 'texture2.jpg', title: 'Creativity', author: 'Pablo Picasso', src: "images/woman/textures/texture2.jpg"}
		];

		$scope.backgorund = {};

		$scope.reset = function(){
			$scope.backgorund.url = "/images/woman/default.jpg"
		};

		$scope.set= function(src){
			$scope.backgorund.url = "/images/woman/"+src;
		}
  });
