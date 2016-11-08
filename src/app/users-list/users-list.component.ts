import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GitHubApiService } from "../github-api.service";
import { GitHubUser } from "../git-hub-user";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [GitHubApiService]
})
export class UsersListComponent implements OnInit {

  @Input() search : string = "a";

  private users : Array<GitHubUser>;
  private errorMessage;
  private selectedListItemIndex : number = -1;
  private searchFieldTimeout;

  constructor( private gitHubApiService: GitHubApiService , private router : Router ) {
  }

  ngOnInit() {
  }

  onSearchFieldChange(search: string): void{
    // Clears the timeout
    if( this.searchFieldTimeout != null ) clearTimeout(this.searchFieldTimeout);

    // Set search timeout, as prevention with requests overflow
    this.searchFieldTimeout = setTimeout( () => this.searchUser(search) , 1000);
  }

  onPressEnter(search: string): void {
    if( this.users != null && this.users[this.selectedListItemIndex] != null ){
      this.goToUserPage( this.users[this.selectedListItemIndex].username );
    } else {
      this.searchUser(search);
    }
  }

  searchUser(search: string): void {
    this.gitHubApiService.searchUser(search).subscribe(
      response => this.users = response.users,
      error => this.errorMessage = error
    )
  }

  goToUserPage(username : string) {
    this.selectedListItemIndex = -1;
    this.router.navigate(['/user', username]);
  }

  navigateListKeyBoard(increment){
    if( this.users != null && this.users[this.selectedListItemIndex + increment] != null ) {
      this.selectedListItemIndex += increment;
    }
  }



}
