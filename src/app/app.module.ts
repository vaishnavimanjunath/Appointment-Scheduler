import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_ROUTES, navigatableComponents } from './app.routing';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { LoginComponent } from './components/login.component';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    navigatableComponents,
    AppComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
