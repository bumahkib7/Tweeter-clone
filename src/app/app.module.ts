import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import {TweetsService} from "./tweets.service";
import { TweetsListComponent } from './tweets-list/tweets-list.component';
import {RouterModule, Routes} from "@angular/router";
import { TweetsAddComponent } from './tweets-add/tweets-add.component';
import {FormsModule} from "@angular/forms";
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/tweets-list', pathMatch: 'full' },
  { path: 'tweets-list', component: TweetsListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TweetsListComponent,
    TweetsAddComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [TweetsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
