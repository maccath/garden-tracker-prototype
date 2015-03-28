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
                   } else if (status == 'Planted Out') {
                       return 'label-success';
                   }
               };
           },
           controllerAs : 'plantsCtrl'
       }
    });

    // Plant data
    var plants = [
        {
            name : 'Garlic',
            variety : 'Red Duke Wight',
            status: 'Planted Out',
            description : 'Garlic is an edible herb / vegetable that typically grows as an annual, which is defined as a plant that matures and completes its lifecycle over the course of a single year.',
            statistics : {
                type : 'hardneck',
                colour : 'white'
            }
        },
        {
            name : 'Leek',
            variety : 'Musselbrugh',
            status: 'Sown',
            description : 'Leek is part on the onion family and has a mild flavour. Blanch the stems to produce more white stem, but green leaves are also used. It flowers with a purple allium type bloom in the second year',
            statistics : {
                height : '50cm',
                hardiness : 'Very hardy'
            }
        }
    ];
})();