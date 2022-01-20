import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './ProfileComponets/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { GhServiceService } from './gitApi/gh-service.service';
import { UsersComponent } from './usercomp/users/users.component';
import { NaviComponent } from './Navbar/navi/navi.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UsersComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GhServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
