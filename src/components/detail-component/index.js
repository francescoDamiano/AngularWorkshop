import angular from 'angular';
import uiRouter from 'angular-ui-router';
import detailState from './detail-state';
import detailController from'./detail-controller';


const dependencies = [
    uiRouter
];

export default angular
    .module('detail-component',dependencies)
    .controller('DetailController',detailController)
    .config(detailState);
