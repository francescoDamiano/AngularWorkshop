import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactList from './contact-list-state';
import myfilter from './filter';
import Controller from'./contact-list-controller';


const dependencies = [
    uiRouter
];

export default angular
    .module('contact-list-state-component',dependencies)
    .controller('ContactListController',Controller)
    .filter('myfilter',myfilter)
    .config(contactList);
