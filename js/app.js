(function () {
    var app = angular.module("gardenTracker", []);

    app.directive('plantList', function () {
        return {
            restrict: 'E',
            templateUrl: 'plant-list.html',
            controller: function ($scope) {
                $scope.plants = plants;
                $scope.statuses = statuses;

                $scope.statusLabel = function (status) {
                    for (var i in $scope.statuses) {
                        if ($scope.statuses[i].name == status) {
                            return $scope.statuses[i].class;
                        }
                    }
                };

                $scope.editStatus = function (plant) {
                    plant.editing = true;
                };

                $scope.updateStatus = function (plant) {
                    plant.statuses.push(
                        {
                            name: plant.status.name,
                            date: new Date()
                        }
                    );

                    plant.editing = false;
                    plant.status = false;
                };

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
            controllerAs: 'plantsCtrl'
        }
    });

    app.controller("tabController", function ($scope) {
        $scope.tab = false;

        $scope.viewTab = function (tab) {
            this.tab = tab;
        };

        $scope.tabActive = function (tab) {
            return this.tab === tab;
        };

        $scope.tabClass = function (tab) {
            if (this.tab === tab) {
                return 'active';
            }
        }
    });

    // Status data
    var statuses = [
        {
            name: 'Sown',
            class: 'label-default'
        },
        {
            name: 'Sprouting',
            class: 'label-warning'
        },
        {
            name: 'Planted Out',
            class: 'label-success'
        },
        {
            name: 'Harvesting',
            class: 'label-info'
        },
        {
            name: 'Spent',
            class: 'label-danger'
        }
    ];

    // Plant data
    var plants = [
        {
            name: 'Garlic',
            variety: 'Red Duke Wight',
            statuses: [
                {
                    name: 'Planted Out',
                    date: new Date(2014, 9, 10)
                }
            ],
            description: 'Garlic is an edible herb / vegetable that typically grows as an annual, which is defined as a plant that matures and completes its lifecycle over the course of a single year.',
            statistics: {
                type: 'hardneck',
                colour: 'white'
            },
            notes : []
        },
        {
            name: 'Leek',
            variety: 'Musselbrugh',
            statuses: [
                {
                    name: 'Sown',
                    date: new Date(2015, 2, 10)
                },
                {
                    name: 'Sprouting',
                    date: new Date(2015, 2, 20)
                }
            ],
            description: 'Leek is part on the onion family and has a mild flavour. Blanch the stems to produce more white stem, but green leaves are also used. It flowers with a purple allium type bloom in the second year',
            statistics: {
                height: '50cm',
                hardiness: 'Very hardy'
            },
            notes: [
                {
                    content: "They're sprouting!",
                    author: 'Katy',
                    date: new Date(2015, 2, 20)
                }
            ]
        }
    ];
})();