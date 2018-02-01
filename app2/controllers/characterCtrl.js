angular.module('pokemon').controller('characterCtrl', function($scope, $stateParams, characterSvc) {
  const id = $stateParams.id;
  
  // $scope.character = {
  //   id: 1,
  //   name: 'Bulbasar',
  //   weight: 5,
  //   pictureUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png'
  // }

  // $http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => {
  //   $scope.character = {
  //     name: response.data.name,
  //     weight: response.data.weigth,
  //     pictureUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png'
  //   }
  // })

  // after we added characterSvc
  characterSvc.getCharacter(id).then(data => {
    $scope.character = data
  })

});