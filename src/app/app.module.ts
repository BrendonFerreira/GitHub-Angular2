import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { MenuBurgerIconComponent } from './menu-burger-icon/menu-burger-icon.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {GitHubApiService} from "./github-api.service";
import { UsersListComponent } from './users-list/users-list.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBurgerIconComponent,
    SidebarComponent,
    HomeComponent,
    UsersListComponent,
    SearchFieldComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterializeModule,
    RouterModule.forRoot([
      {path: 'user/:username', component: UserPageComponent },
      {path: 'home', component: HomeComponent},
      {path: '', component: HomeComponent}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
