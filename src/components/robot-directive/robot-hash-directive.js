import template from './robot-email.html'

function RoboHashDirective()
{
    return
    {
        restrict:'E',
        scope:
                {
                    email:'='
                },
        template:template,
        controller:'RoboHashController as roboHashController'
        bindToController:'true'
    }
}

export default
    [
        RoboHashDirective
    ];
