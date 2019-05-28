import {browser, by, element} from 'protractor';

export class LoginPage {

  public navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  public getTitleText() {
    return element(by.id('login-title')).getText();
  }

  public getHeaderText() {
    return element(by.id('login-subtitle')).getText();
  }

  public enterUsername(username: string): void {
    element(by.id('login-username-field')).sendKeys(username);
  }

  public enterPassword(password: string): void {
    element(by.id('login-password-field')).sendKeys(password);
  }

  public getUrl() {
    return browser.getCurrentUrl();
  }

  public clickLoginButton() {
    element(by.id('login-button')).click();
  }
}
