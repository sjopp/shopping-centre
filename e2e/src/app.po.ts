import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateToHome() {
    browser.get(browser.baseUrl);
  }

  isHeaderPresent() {
    return element(by.id('header')).isPresent();
  }

  isFooterPresent() {
    return element(by.id('footer')).isPresent();
  }

  clickLoginOption() {
    element(by.id('header-login-label')).click();
  }

  public getUrl() {
    return browser.getCurrentUrl();
  }
}
