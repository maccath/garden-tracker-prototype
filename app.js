(function () {
    var app = angular.module("gardenTracker", []);

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
})();