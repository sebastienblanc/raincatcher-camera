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
    '<div class="wfm-camera" flex>\n' +
    '  <md-button class="md-icon-button wfm-camera-close" aria-label="Back" ng-click="ctrl.cancel()" flex>\n' +
    '    <md-icon md-font-set="material-icons">close</md-icon>\n' +
    '  </md-button>\n' +
    '  <video  ng-show="ctrl.cameraOn" autoplay style="transform: rotateY(180deg)"></video>\n' +
    '  <canvas ng-hide="ctrl.cameraOn"></canvas>\n' +
    '  <md-button class="md-raised" ng-hide="ctrl.cameraOn" ng-click="ctrl.startCamera()">Start Camera</md-button>\n' +
    '  <div class="wfm-camera-actions">\n' +
    '    <md-button  class="wfm-camera-btn" ng-click="ctrl.snap()"></md-button>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<div layout="column">\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
