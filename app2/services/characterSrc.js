angular.module('pokemon').service('characterSvc', function($http) {
  this.getCharacter = function(id) {
    return $http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => {
      return {
        name: response.data.name,
        weight: response.data.weight,
        pictureUrl: response.data.sprites.front_default
      }
    })
  }

  // const id = $stateParams.id;
  // $http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => {
  //   $scope.character = {
  //     name: response.data.name,
  //     weight: response.data.weigth,
  //     pictureUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png'
  //   }
  // })
});