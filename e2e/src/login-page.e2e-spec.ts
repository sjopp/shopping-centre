import {AppPage} from './app.po';
import {LoginPage} from './login-page.po';
import {browser} from "protractor";

describe('Login Page e2e tests', () => {

  let page: AppPage;
  let loginPage: LoginPage;

  beforeEach(() => {
    page = new AppPage();
    loginPage = new LoginPage();
  });

  it('should render page correctly', () => {

    loginPage.navigateTo();

    expect(loginPage.getTitleText()).toEqual('Welcome!');
  });

  xit('when username and password exist and correct proceed to next page', () => {

    loginPage.navigateTo();

    browser.sleep(1000);
    loginPage.enterUsername('sjopp');
    loginPage.enterPassword('password');
    loginPage.clickLoginButton();

    expect(loginPage.getUrl()).toEqual('/home');
  });

});
