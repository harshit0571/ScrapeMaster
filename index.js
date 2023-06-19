import puppeteer from "puppeteer";

console.log("hello");

async function start() {
  const browser = await puppeteer.launch(); //launches a browser
  const page = await browser.newPage(); //creates a new page in brower

  //screenshot
  // await page.goto("https://en.wikipedia.org/wiki/JavaScript"); // page visits site
  // await page.screenshot({ path: "fullpage.jpeg", fullPage: true }); //takes screenshot

  //web scrapping
  await page.goto("https://learnwebcode.github.io/practice-requests/");
  const names = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".info strong")).map(
      (x) => x.textContent
    );
  });
  console.log(names);

  await browser.close(); //closes browser
}

start();
