﻿/* Setup blank page controller */

angular.module('MetronicApp').controller('PostsCreateController', ['$rootScope', '$scope', '$http', '$location', 'settings', function ($rootScope, $scope, $http, $location, settings) {
   
    $scope.Save = function () {
        $http({ method: "post", url: "/api/posts", data: { Name: $scope.Name, Body: $scope.Body, PublishDate: $scope.PublishDate, IsPublished: $scope.IsPublished } }).then(function (response) {
            $location.path("/posts");
        }, function (response) {
            alert("Yazı kaydedilirken bir hata oluştu");
        });
    };
    
    $scope.$on('$viewContentLoaded', function () {   
        
        // initialize core components
        App.initAjax();
   
        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]);
