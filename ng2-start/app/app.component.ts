import { Component } from '@angular/core';

import { User } from './shared/models/User';


// Refereces are absolute due to these files not being built into the
// dist folder. So they should always refence those exact files.
@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    styleUrls: [
        './app/app.component.css'
    ]
})


export class AppComponent {
    message: string = 'Hello!';

    users: User[] = [
        { id: 1, name: 'Roxie', username: 'roxiechinchilla' },
        { id: 2, name: 'Enni', username: 'ennithelappy' },
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
    }

    onUserCreated(event) {
        this.users.push(event.user);
    }
}
