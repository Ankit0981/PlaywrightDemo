import { Locator, Page, expect } from '@playwright/test';
import exp from 'constants';


export class LoginPage {
  //declare your object
  readonly page: Page;
  readonly username : Locator;
  readonly password : Locator;
  readonly SignIn : Locator;
  readonly error: Locator;
  readonly successMessage : Locator;
  readonly LogOutButton : Locator;

  constructor(page: Page) {
    //initiate your objects
    this.page = page;
    this.username = this.page.locator('#username');
    this.password = this.page.locator("#password");
    this.SignIn = this.page.locator("#submit");
    this.error = this.page.locator("div#error");
    this.successMessage = this.page.locator(".post-title");
    this.LogOutButton = this.page.locator('.has-very-dark-gray-background-color');

  }

    async navigateToUrl(url:any)
    {
      await this.page.goto(url);
    }

    async successLoginTest(userName:string, pasword:string, expSuccessMessage:string) {
        await this.username.fill(userName);
        await this.password.fill(pasword);
        await this.SignIn.click();
        await this.page.waitForTimeout(3000);
        const actualMessage = await this.successMessage.innerText();
        expect(actualMessage).toEqual(expSuccessMessage);
        expect(this.LogOutButton).toBeVisible();
      }

      async backgoundColorVerification(userName:string, pasword:string, expectedColor) {
        await this.username.fill(userName);
        await this.password.fill(pasword);
        await this.SignIn.click();
        await this.page.waitForTimeout(3000);
        console.log(this.page.url());
        const color = await this.LogOutButton.evaluate((el) => {
               return window.getComputedStyle(el).getPropertyValue('background-color');
        });
        expect(color).toEqual(expectedColor);
      }

      async verifySuccessURL(userName:string, pasword:string, expectedURL:string) {
        await this.username.fill(userName);
        await this.password.fill(pasword);
        await this.SignIn.click();
        await this.page.waitForTimeout(3000);
        expect(this.page.url()).toEqual(expectedURL);
      }

      async logoutIsSuccess(userName:string, pasword:string, expectedURL:string){
        await this.username.fill(userName);
        await this.password.fill(pasword);
        await this.SignIn.click();
        await this.page.waitForTimeout(3000);
        this.LogOutButton.click({force: true });
        await this.page.waitForTimeout(3000);
        expect(this.page.url()).toEqual(expectedURL);
      }

      async verifyTitleOfApp(userName:string, pasword:string, titletext:string)
      {
        await this.username.fill(userName);
        await this.password.fill(pasword);
        await this.SignIn.click();
        await this.page.waitForTimeout(3000);
        await expect(this.page).toHaveTitle(titletext);
      }

      async invalidUserNameTest(userName:string, pasword:string, expErrorMessage:string) {
        await this.username.fill(userName);
        await this.password.fill(pasword);
        await this.SignIn.click();
        await this.page.waitForTimeout(3000);
        const actualMessage = await this.error.innerText();
        expect(actualMessage).toEqual(expErrorMessage);
      }

      async invalidPasswordTest(userName:string, pasword:string, expErrorMessage:string) {
        await this.username.fill(userName);
        await this.password.fill(pasword);
        await this.SignIn.click();
        await this.page.waitForTimeout(3000);
        const actualMessage = await this.error.innerText();
        expect(actualMessage).toEqual(expErrorMessage);
      }

      async usernameAndPasswordBlankValidation(expErrorMessage:string) {
        await this.username.fill('');
        await this.password.fill('');
        await this.SignIn.click();
        await this.page.waitForTimeout(3000);
        const actualMessage = await this.error.innerText();
        expect(actualMessage).toEqual(expErrorMessage);
      }

      async passwordBlankValidation(userName:string, expErrorMessage:string) {
        await this.username.fill(userName);
        await this.password.fill('');
        await this.SignIn.click();
        await this.page.waitForTimeout(3000);
        const actualMessage = await this.error.innerText();
        expect(actualMessage).toEqual(expErrorMessage);
      }

      async usernameBlankValidation(pasword:string, expErrorMessage:string) {
        await this.username.fill('');
        await this.password.fill(pasword);
        await this.SignIn.click();
        await this.page.waitForTimeout(3000);
        const actualMessage = await this.error.innerText();
        expect(actualMessage).toEqual(expErrorMessage);
      }
}
