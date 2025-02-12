/* eslint-disable @typescript-eslint/no-unused-vars */
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

//add pages here
type MyFixtures = {

  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export default test;
export const expect = test.expect;