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
  await page.waitForSelector(".s-result-item");

  await page.screenshot({ path: "assets/3.png", fullPage: true });

  const text = await page.$$eval(
    ".s-result-item  .s-card-border",
    (container) => {
      const image = container.map((x) => {
        x.querySelector("img");
      });
      const price = container.map((x) => {
        x.querySelector(".a-offscreen");
      });
      const title = container.map((x) => {
        x.querySelector("h2 > span");
      });

      // const imag = image.map((x) => x.src);
      // price = price.map((x) => x.textContent);
      // title = title.map((x) => x.textContent);
      return container;
    }
  );
  console.log(text[0]);
  await browser.close();
}

start();
