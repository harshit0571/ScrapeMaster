import puppeteer from "puppeteer";

async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.amazon.in");

  await page.type("#twotabsearchtextbox", "iphone x 64gb");
  await page.screenshot({ path: "assets/1.png", fullPage: true });
  await page.click(".nav-search-submit");
  await page.waitForNavigation();
  await page.screenshot({ path: "assets/2.png", fullPage: true });
  await page.waitForSelector(".s-image");

  await page.screenshot({ path: "assets/3.png", fullPage: true });

  const text = await page.$$eval(".s-image", (texts) => {
    return texts.map((x) => x.src);
  });
  console.log(text);
  await browser.close();
}

start();
