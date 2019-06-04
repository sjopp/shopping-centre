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

  clickLabel(ele: string) {
    element(by.id('header-' + ele + '-label')).click();
  }

  public getUrl() {
    return browser.getCurrentUrl();
  }
}
