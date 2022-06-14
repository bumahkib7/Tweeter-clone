import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {TweetsService} from "../tweets.service";
import {NgForm} from "@angular/forms";
// @ts-ignore
import {AuthService} from "../auth.service";




@Component({
  selector: 'app-tweets-add',
  templateUrl: './tweets-add.component.html',
  styleUrls: ['./tweets-add.component.css']
})
export class TweetsAddComponent implements OnInit {

  tweet: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tweetsService: TweetsService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  goToList () {
    this.authService.checkCredentials();
    this.router.navigate(['/tweets-list']);
  }


  save(form: NgForm) {
    this.authService.checkCredentials();
    this.tweetsService.save(form.value).subscribe(result => {
      this.goToList();
    }, error => console.error(error));
  }
}



