import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class UserService {
    constructor(private http: Http) {
    }
    public userLogin(user) {
        console.log('user object..', user);
        const body = JSON.stringify({ userCredential: user });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(`http://localhost:8085/userAuthentication`, body, { headers: headers })
            .map((response: Response) => response.json());
    }
}
