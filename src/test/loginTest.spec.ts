import { test } from "../main/fixtures/fixtures";
import ENV from "../main//utils//env";
import data from "../../testData/testData.json" assert { type: "json" };

//test suite start
test.describe("Validate Login Functionality Test Cases", async () => {
  //test case block start
  test.beforeEach(async ({ loginPage }) => {
    await console.log(ENV.BASE_URL)
    await loginPage.navigateToUrl(ENV.BASE_URL);
  });

test("Verify Login Is Success.", async({loginPage}) =>
{
    await loginPage.successLoginTest(data.validuserName,data.validPassword,data.successMessage);
}
)
test("Verify Background Color of Logout Button.", async({loginPage}) =>{

  await loginPage.backgoundColorVerification(data.validuserName,data.validPassword,data.LogOutBackColor);
}
)

test("Verify Successful Login URL.", async({loginPage}) =>{
  await loginPage.verifySuccessURL(data.validuserName,data.validPassword,data.successURL);
}
)

test("Verify LogOut Is Working Successfully.", async({loginPage}) =>{
  await loginPage.logoutIsSuccess(data.validuserName,data.validPassword,data.LoginURL);
}
)

test("Verify title of the Application", async({loginPage}) =>{
  await loginPage.verifyTitleOfApp(data.validuserName,data.validPassword, data.title);
}
)

test("Verify Username Is Invalid.", async({loginPage}) =>
{
    await loginPage.invalidUserNameTest(data.invalidUserName,data.validPassword,data.ErrorMessageForUsername);
    
}
)

test("Verify Password Is Invalid.", async({loginPage}) =>
{
    await loginPage.invalidPasswordTest(data.validuserName,data.invalidPassword,data.ErrorMessageForPassword);
        
}
)

test("Verify Username and Password are Blank Validation", async({loginPage}) =>{
  await loginPage.usernameAndPasswordBlankValidation(data.ErrorMessageForUsername);
}
)

test("Verify Username IS Valid and Password are Blank Validation", async({loginPage}) =>{
  await loginPage.passwordBlankValidation(data.validuserName,data.ErrorMessageForPassword);
}
)

test("Verify Username IS Blank and Password are valid Validation", async({loginPage}) =>{
  await loginPage.usernameBlankValidation(data.validPassword,data.ErrorMessageForUsername);
}
)


});
