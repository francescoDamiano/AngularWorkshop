import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formState from './form-state';

const dependencies = [
    uiRouter
];

export default angular
    .module('form-state-component', dependencies)
    .config(formState);


