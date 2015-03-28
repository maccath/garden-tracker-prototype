(function() {
    var app = angular.module("gardenTracker", []);

    app.directive('plantList', function() {
       return {
           restrict : 'E',
           templateUrl : 'plant-list.html',
           controller : function() {
               this.plants = plants;

               this.statusLabel = function(status) {
                   if (status == 'Sown') {
                       return 'label-warning';
                   } else if (status == 'Sprouting') {
                           return 'label-warning';
                   } else if (status == 'Planted Out') {
                       return 'label-success';
                   } else if (status == 'Harvesting') {
                       return 'label-info';
                   } else if (status == 'Spent') {
                       return 'label-danger';
                   }
               };

               this.editStatus = function(plant) {
                   plant.editing = true;
               };

               this.updateStatus = function(plant) {
                   plant.status.date = new Date();
                   plant.editing = false;
               };
           },
           controllerAs : 'plantsCtrl'
       }
    });

    app.controller("tabController", function() {
        this.tab = false;

        this.viewTab = function(tab) {
            this.tab = tab;
        };

        this.tabActive = function(tab) {
            return this.tab === tab;
        };

        this.tabClass = function(tab) {
            if (this.tab === tab) {
                return 'active';
            }
        }
    });

    // Plant data
    var plants = [
        {
            name : 'Garlic',
            variety : 'Red Duke Wight',
            statuses: [
                {
                    name : 'Planted Out',
                    date : new Date(2014, 10, 10)
                }
            ],
            description : 'Garlic is an edible herb / vegetable that typically grows as an annual, which is defined as a plant that matures and completes its lifecycle over the course of a single year.',
            statistics : {
                type : 'hardneck',
                colour : 'white'
            }
        },
        {
            name : 'Leek',
            variety : 'Musselbrugh',
            statuses: [
                {
                    name : 'Sown',
                    date : new Date(2015, 3, 10)
                },
                {
                    name : 'Sprouting',
                    date : new Date(2015, 3, 20)
                }
            ],
            description : 'Leek is part on the onion family and has a mild flavour. Blanch the stems to produce more white stem, but green leaves are also used. It flowers with a purple allium type bloom in the second year',
            statistics : {
                height : '50cm',
                hardiness : 'Very hardy'
            }
        }
    ];
})();