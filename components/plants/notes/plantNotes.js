angular.module('gardenTracker').directive('plantNotes', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/plants/notes/plant-notes.html',
        controller: function ($scope) {
            $scope.addNote = function(plant) {
                plant.notes.push(
                    {
                        content: plant.note.content,
                        author: plant.note.author,
                        date: new Date()
                    }
                );

                plant.note.content = '';
            }
        },
        controllerAs: 'plantNotesCtrl'
    }
});