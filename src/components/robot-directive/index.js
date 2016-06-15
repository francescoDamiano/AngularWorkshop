import angular from 'angular';
import roboController from './robot-directive-controller';
import roboDirective from './robot-directive-controller';

export default angular
            .module('DirectiveModule',[])
            .controller('RoboHashController',roboController)
            .directive('robotEmail',roboDirective);