import { Component } from '@angular/core';
import { UserObject } from './interfaces/login.interface';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet ></router-outlet>`
})
export class AppComponent {
  public model = new UserObject('', '');
  constructor(public userService: UserService, public router: Router, private route: ActivatedRoute) {
    console.log('login component loading...');
  }
  onSubmit() {
    this.userService.userLogin(this.model).subscribe(data =>
      console.log('data', data));
    this.router.navigate(['user']);
  }
}
