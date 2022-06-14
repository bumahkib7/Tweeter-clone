import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import {TweetsService} from "./tweets.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TweetsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
