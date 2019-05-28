import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('1 - header and footer should be on every page', () => {

    page.navigateToLogin();

    expect(page.isHeaderPresent()).toBeTruthy();
    expect(page.isFooterPresent()).toBeTruthy();

  });
});
