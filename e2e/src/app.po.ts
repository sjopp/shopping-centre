import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToLogin() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  isHeaderPresent() {
    return element(by.id('header')).isPresent();
  }

  isFooterPresent() {
    return element(by.id('footer')).isPresent();
  }
}
