import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticateComponent } from './Components/authenticate/authenticate.component';
import { CreateAccountComponent } from './Components/create-account/create-account.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { AdministrationComponent } from './Components/administration/administration.component';
import { HomeComponent } from './Components/home/home.component';
import { ClientSpaceComponent } from './Components/client-space/client-space.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './Services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    CreateAccountComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent,
    AdministrationComponent,
    HomeComponent,
    ClientSpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
