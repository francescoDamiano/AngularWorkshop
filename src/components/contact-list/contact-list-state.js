import template from './contact-list.html';
function contactRoute($stateProvider) {
    return $stateProvider
        .state('app.contactList', {
            url: 'contact-list',
            views: {
                main: {
                    template: template,
                    controller: 'ContactListController as ctrl'
                }
            }
            
        });
}



export default [
    '$stateProvider',
    contactRoute
];
