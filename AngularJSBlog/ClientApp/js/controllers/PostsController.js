/* Setup blank page controller */

angular.module('MetronicApp').controller('PostsController', ['$rootScope', '$scope', 'NgTableParams', '$http', '$state', 'settings', function ($rootScope, $scope, NgTableParams, $http, $state, settings) {
    $scope.Delete = function (id) {
        if (confirm("Bu kaydý silmek istediðinize emin misiniz?")) {
            $http({ method: "delete", url: "/api/posts?id=" + id}).then(
                function (response) { $state.reload();},
                function (response) { alert("Oluþan bir hata nedeniyle bu kayýt silinemedi"); });
        }
    };
    
    
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
