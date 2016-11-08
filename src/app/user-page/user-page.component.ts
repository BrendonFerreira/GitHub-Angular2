import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GitHubApiService } from "../github-api.service";
var Octicons = require("octicons") ;

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  providers: [ GitHubApiService ]
})
export class UserPageComponent implements OnInit {

  private user = {};
  private errorMessage : any;

  constructor(private route: ActivatedRoute, private router: Router, private gitHubApiService : GitHubApiService) {}

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      let username : string = params['username'];
      this.gitHubApiService.getUser(username).subscribe(
        user => this.user = user,
        error => this.errorMessage = error
      );
    });
    this.getUserRepositories();
  }

  getUserRepositories(){
    this.route.params.forEach((params:Params) => {
      let username : string = params['username'];
      this.gitHubApiService.getUserRepositories(username).subscribe(
        user => this.user['repos'] = user,
        error => this.errorMessage = error
      );
    });
  }


}
