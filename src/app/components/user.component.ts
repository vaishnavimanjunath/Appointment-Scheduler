import {Component} from '@angular/core';
import {UserObject} from '../interfaces/login.interface';

@Component({
    selector: 'app-user-page',
    templateUrl: './user.component.html'
})

export class UserComponent {
    public model = new UserObject('', '');
    constructor() {
        this.model.userName = '';
        this.model.password = '';
        console.log('login component loading...');
    }

}
