import {Component, OnInit} from '@angular/core';
import {TweetsService} from '../tweets.service';
// @ts-ignore
import {AuthService} from '/../auth.service';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {

  tweets: Array<any> | undefined;

  constructor(private tweetsService: TweetsService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.checkCredentials();
    this.tweetsService.getAll().subscribe(data => {
      this.tweets = data;
    });
  }



}
