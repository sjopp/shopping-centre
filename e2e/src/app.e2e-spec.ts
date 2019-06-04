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

  it('2 - clicking header labels should navigate to correct page', () => {

    page.navigateToHome();

    browser.sleep(500);
    page.clickLabel('login');

    browser.sleep(500);
    expect(page.getUrl()).toContain('/login');

    browser.sleep(500);
    page.clickLabel('home');

    browser.sleep(500);
    expect(page.getUrl()).toContain('/home');

  });
});
