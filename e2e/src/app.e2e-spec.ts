import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('1 - header and footer should be on every page', () => {

    page.navigateToHome();

    expect(page.isHeaderPresent()).toBeTruthy();
    expect(page.isFooterPresent()).toBeTruthy();

  });

  it('2 - click Login on header routes to login page', () => {

    page.navigateToHome();

    browser.sleep(500);
    page.clickLoginOption();

    browser.sleep(500);
    expect(page.getUrl()).toContain('/login');

  });
});
