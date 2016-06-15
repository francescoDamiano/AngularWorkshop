import angular from 'angular';
import ngCookies from 'angular-cookies';
import welcomeComponent from 'components/welcome/index';
import config from './config';
import errorHandling from './error-handling';
import applicationState from './application-state';
import httpProvider from './http-provider';
import contactListComponent from 'components/contact-list/index';
import contactDetailComponent from 'components/contact-detail/index';
import serviceComponent from 'components/services/get-contacts-service';
import roboDirective from 'components/robot-directive/index';
const dependencies = [
    'ngCookies',
    welcomeComponent.name,
    contactListComponent.name,
    contactDetailComponent.name,
    roboDirective.name
];

export default angular
    .module('Application', dependencies)
    .service('AddContactsService',serviceComponent)
    .config(config)
    .config(applicationState)
    .provider('http', httpProvider)
    .run(errorHandling);

