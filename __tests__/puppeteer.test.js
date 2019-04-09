const puppeteer = require('puppeteer');

let FRONT_URL = process.env.FRONT_URL ? `http://${process.env.FRONT_URL}` : `http://localhost`;
FRONT_URL += process.env.PORT ? `:${process.env.PORT}` : ":3000"
let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch({headless: true, slowMo: 0, executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-setuid-sandbox', '--single-process']});
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

describe(`Testing with puppeteer`, () => {
  test(`Test page loads`, async () => {
    await page.goto(FRONT_URL);
    let html = await page.evaluate(() => document.body.innerHTML);
    console.log(html);
    expect(html).toBe("<p>Your Very Lucky number is No number given</p>");
  })

  test(`Test page loads with number`, async () => {
    await page.goto(FRONT_URL + "?bingo=10");
    let html = await page.evaluate(() => document.body.innerHTML);
    console.log(html);
    expect(html).toBe("<p>Your Very Lucky number is 850</p>");
  })

  test.each([[10, 850], [11, 935], [12, 1020]])(
    'parameterazed tests',
    async (a, expected) => {
      await page.goto(FRONT_URL + `?bingo=${a}`);
      let html = await page.evaluate(() => document.body.innerHTML);
      console.log(html);
      expect(html).toBe(`<p>Your Very Lucky number is ${expected}</p>`);
    },
  );
});