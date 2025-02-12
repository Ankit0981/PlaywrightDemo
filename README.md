# PlaywrightDemo

# Introduction 
This is a template for a test automation framework using the Playwright Test test runner.
Playwright can be used with TypeScript or JavaScript. This framework is based on TypeScript.

## System prerequisites
```
nodeJS v17.8.0+
npm 8.5.5+
```

## Getting Started
* Clone the repository
* Open the solution in Visual Studio Code or your preferred JS IDE.
* Also create a `.env` file based on your environment as `.env.dev` 
* Run the following command in your terminal:
```
npm install
npx playwright install --with-deps
```

## Running the tests
* To run the tests in a headed browser:
```
npm run test
```
* Or, if you want to output a report: 
```
npx playwright test --reporter=html 
```
## Project Structure
```
Root
├── src
│   ├── main
│   │   ├── fixtures //place your reusable test objects here
│   │   ├── pages //place your locators and page related methods here
│   │   └── utils 
│   │       └── //All utility files are here
│   └── tests  
│           ├── loginTest.spec.ts //your tests here
│           └── Homepage.test.ts
│     └──data
│       │         └──example.json //your test data here
├── README.md
├──.env
├── package-lock.json
├── package.json
├── playwright-report //generated reports
│   └── index.html
├── results.xml
├── playwright.config.ts
└── test-results //video recordings and screenshots
