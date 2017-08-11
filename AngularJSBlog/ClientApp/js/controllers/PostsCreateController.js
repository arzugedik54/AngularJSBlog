/* Setup blank page controller */

angular.module('MetronicApp').controller('PostsCreateController', ['$rootScope', '$scope', '$http', 'settings', function ($rootScope, $scope, $http, settings) {
   
    
    
    $scope.$on('$viewContentLoaded', function () {   
        
        // initialize core components
        App.initAjax();

        $scope.Save = function () {
            $http.post({ url: "/api/posts", data: { Name: $scope.Name, Body: $scope.Body, PublishDate: $scope.PublishDate, IsPublished: $scope.IsPublished } }).then(function (response) {
                alert("Yazı başarıyla kaydedildi");
            }, function (response) {
                alert("Yazı kaydedilirken bir hata oluştu");
            });
        };
     
        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]);
