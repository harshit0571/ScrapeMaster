import puppeteer from "puppeteer";

console.log("hello");

async function start() {
  const browser = await puppeteer.launch(); //launches a browser
  const page = await browser.newPage(); //creates a new page in brower
  await page.goto("https://en.wikipedia.org/wiki/JavaScript"); // page visits site
  await page.screenshot({ path: "ss.jpeg" }); //takes screenshot
  await browser.close(); //closes browser
}

start();
