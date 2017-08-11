/* Setup blank page controller */

angular.module('MetronicApp').controller('PostsController', ['$rootScope', '$scope', 'NgTableParams', '$http', 'settings', function ($rootScope, $scope, NgTableParams, $http, settings) {
   
    
    
    $scope.$on('$viewContentLoaded', function () {   
        
        // initialize core components
        App.initAjax();
        $http.get('/api/posts').then(function (response) {
            $scope.tableParams = new NgTableParams({},{
               
                dataset: response.data
                });
        });
     
        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]);
