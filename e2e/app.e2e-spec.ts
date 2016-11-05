import { GitHubClientTsPage } from './app.po';

describe('git-hub-client-ts App', function() {
  let page: GitHubClientTsPage;

  beforeEach(() => {
    page = new GitHubClientTsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
