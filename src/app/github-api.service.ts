import {Injectable, Inject, Injector} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {GitHubUser} from "./git-hub-user";
import {Subscribable} from "rxjs/Observable";


class GitHubApiRequestBuilder {

  private baseRequestPath : string = "https://api.github.com/";

  constructor(@Inject(Http) private http: Http){}

  public setBaseRequestPath(path: string){
    this.baseRequestPath = path;
  }

  public parseUrl(url : string ) : string {
    if( this.baseRequestPath.charAt(this.baseRequestPath.length - 1) == '/' ){
      return this.baseRequestPath + url;
    }
    return this.baseRequestPath + '/' + url;
  }

  get(search : string) {
    console.log(this.parseUrl(search));
    return this.http.get( this.parseUrl(search) ).map(this.extractData).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private extractData(res: Response): JSON {
    return res.json() || {};
  }
}

class UsersResponse {
  users : Array<GitHubUser> = new Array();
}

@Injectable()
export class GitHubApiService {

  private gitHubApiRequestBuilder : GitHubApiRequestBuilder;

  constructor(@Inject(Http) private http : Http){
     this.gitHubApiRequestBuilder = new GitHubApiRequestBuilder(http);
  }

  public searchUser(search: string): Observable<UsersResponse> {
    return this.gitHubApiRequestBuilder.get("legacy/user/search/"+search+"%20sort:followers");
  }

  public getUser(username: string): Observable<any> {
    return this.gitHubApiRequestBuilder.get("users/"+username);
  }

  public getUserRepositories(username: string): Observable<any> {
    return this.gitHubApiRequestBuilder.get("users/"+username+'/repos');
  }

}
