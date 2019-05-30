import {AppPage} from '../app.po';
import {LoginPage} from './login-page.po';
import {browser} from 'protractor';

describe('Login Page e2e tests', () => {

  let page: AppPage;
  let loginPage: LoginPage;

  beforeEach(() => {
    page = new AppPage();
    loginPage = new LoginPage();
  });

  it('1 - should render page correctly', () => {

    loginPage.navigateTo();

    expect(loginPage.getTitleText()).toEqual('Welcome!');
    expect(loginPage.isLoginButtonDisabled()).toBeTruthy();
  });

  it('2 - when username and password exist and correct proceed to next page', () => {

    loginPage.navigateTo();

    browser.sleep(1000);
    loginPage.enterUsername('sjopp');
    loginPage.enterPassword('password');
    loginPage.clickLoginButton();

    expect(loginPage.getUrl()).toEqual('http://localhost:4201/home');
  });

  it('3 - when username and password entered button is enabled', () => {

    loginPage.navigateTo();

    browser.sleep(1000);
    loginPage.enterUsername('sjopp');
    loginPage.enterPassword('password');

    expect(loginPage.isLoginButtonDisabled()).toBeFalsy();
  });

});
