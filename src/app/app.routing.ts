import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user.component';
import { LoginComponent } from './components/login.component';
export const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: LoginComponent },
    { path: 'user', component: UserComponent }
];

export const navigatableComponents = [
    LoginComponent,
    UserComponent
];
export const routing = RouterModule.forRoot(APP_ROUTES);

export class AppRoutingModule { }
