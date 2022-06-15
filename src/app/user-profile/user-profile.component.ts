import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {UsersService} from "../users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  user: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private authService: AuthService) {
  }


  ngOnInit(): void {
    this.authService.checkCredentials();
    this.subscription = this.route.params.subscribe(params => {
      const screenName = params['screenName'];
      this.usersService.getByScreenName(screenName).subscribe(data => {
        console.log(data);
        this.user = data;
      });
    });
  }

  follow(userId) {
    this.usersService.follow(userId).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
