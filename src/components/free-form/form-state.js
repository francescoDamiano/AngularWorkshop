import template from './form.html';

function formRoute($stateProvider) {
    return $stateProvider
        .state('app.form', {
            url: 'form',
            views: {
                main: {
                    template: template
                }
            }
        });
}

export default [
    '$stateProvider',
    formRoute
];

