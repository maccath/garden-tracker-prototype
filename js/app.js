(function () {
    var app = angular.module("gardenTracker", []);

    app.directive('plantList', function () {
        return {
            restrict: 'E',
            templateUrl: 'plant-list.html',
            controller: function () {
                this.plants = plants;

                this.statuses = [
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

                this.statusLabel = function (status) {
                    for (var i in this.statuses) {
                        if (this.statuses[i].name == status) {
                            return this.statuses[i].class;
                        }
                    }
                };

                this.editStatus = function (plant) {
                    plant.editing = true;
                };

                this.updateStatus = function (plant) {
                    plant.statuses.push(
                        {
                            name: plant.status.name,
                            date: new Date()
                        }
                    );

                    plant.editing = false;
                    plant.status = false;
                };
            },
            controllerAs: 'plantsCtrl'
        }
    });

    app.controller("tabController", function () {
        this.tab = false;

        this.viewTab = function (tab) {
            this.tab = tab;
        };

        this.tabActive = function (tab) {
            return this.tab === tab;
        };

        this.tabClass = function (tab) {
            if (this.tab === tab) {
                return 'active';
            }
        }
    });

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
            }
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
            }
        }
    ];
})();