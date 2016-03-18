var ngModule;
try {
  ngModule = angular.module('wfm.camera.directives');
} catch (e) {
  ngModule = angular.module('wfm.camera.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/camera.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<div layout="column">\n' +
    '  <md-button class="md-raised" ng-hide="ctrl.cameraOn" ng-click="ctrl.startCamera()">Start Camera</md-button>\n' +
    '  <md-button class="md-raised" ng-show="ctrl.cameraOn" ng-click="ctrl.stopCamera()">Stop Camera</md-button>\n' +
    '  <md-card>\n' +
    '    <video  ng-show="ctrl.cameraOn" autoplay style="transform: rotateY(180deg);"></video>\n' +
    '    <canvas ng-hide="ctrl.cameraOn"></canvas>\n' +
    '  </md-card>\n' +
    '  <md-button class="md-raised" ng-show="ctrl.cameraOn" ng-click="ctrl.snap()">Snap Photo</md-button>\n' +
    '</div>\n' +
    '');
}]);
