app.module('UnusualDevGames.controllers.Main', [])
    .controller('MainController', MainController);

function MainController($scope) {

    init();

    function init() {
        $scope.test = 'deu certo';
    }

}