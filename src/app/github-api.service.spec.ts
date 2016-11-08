/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GitHubApiService } from './github-api.service';

describe('Service: GithubApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubApiService]
    });
  });

  it('should ...', inject([GitHubApiService], (service: GitHubApiService) => {
    expect(service).toBeTruthy();
  }));
});
