import template from './detail.html';
function detailRoute($stateProvider) {
    return $stateProvider
        .state('app.detail', {
            url: 'detail/:name',
            views: {
                main: {
                    template: template,
                    controller: 'DetailController as dctrl'
                }
            }
            
        });
}

export default [
        '$stateProvider',
        detailRoute
];
