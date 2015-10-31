import authenticationDialog from './authentication-dialog.html';
import vexDialog from 'vex-dialog';
import vex from 'vex';
import $ from 'jquery';

class AuthenticationService {
    constructor($q, http, $cookies) {
        vex.defaultOptions.className = 'vex-theme-plain';
        this._cookies = $cookies;
        this._http = http;
        this._authDeferred = $q.defer();
    }

    authenticate() {
        let token = this._cookies.get('authToken', token);
        if (token) {
            this.resolveAuthentication(token);
            return;
        }

        vexDialog.open({
            message: 'Login',
            input: authenticationDialog,
            onSubmit: (event) => {
                event.preventDefault();
                event.stopPropagation();

                const email = event.target.querySelector('input[name="email"]').value;
                const password = event.target.querySelector('input[name="password"]').value;

                this._fetchAuthToken(email, password)
                    .then((token) => {
                        this._cookies.put('authToken', token);
                        this.resolveAuthentication(token);
                        vex.close($(event.target).parent().data().vex.id);
                    })
                    .catch(() => {
                        vex.close($(event.target).parent().data().vex.id);
                        this._showErrorMessage();
                    });
            }
        });

        return this._authDeferred.promise;
    }
    
    resolveAuthentication(token) {
        this._http.addStaticHeader('Authorization', token);
        this._authDeferred.resolve(token);
    }

    _fetchAuthToken(email, password) {
        return this._http.post('/Users/login', {email, password}).then((response) => response.data.id);
    }

    _showErrorMessage() {
        vexDialog.alert({
            message: 'Zugangsdaten ungültig',
            callback: () => this.authenticate()
        })
    }
}

export default [
    '$q',
    'http',
    '$cookies',
    AuthenticationService
]