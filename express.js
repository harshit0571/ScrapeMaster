import Express from "express";
import puppeteer from "puppeteer";

var app=Express();
const port =8000;

app.get('/', async (req, res)=>{
    const p=await start();
    res.json(p);
}    )
app.listen(port, ()=>{
    console.log("working on port " + port);
})






async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.amazon.in");

  await page.type("#twotabsearchtextbox", "smartphone");
  await page.screenshot({ path: "assets/1.png", fullPage: true });
  await page.click(".nav-search-submit");
  await page.waitForNavigation();
  await page.screenshot({ path: "assets/2.png", fullPage: true });
  await page.waitForSelector(".s-result-item");

  await page.screenshot({ path: "assets/3.png" , fullPage:false});

  const images = await page.$$eval(".s-image", (texts) => {
    return texts.map((x) => x.src);
  });

  const titles = await page.$$eval("h2.a-size-mini", (texts) => {
    return texts.map((x) => x.textContent);
  });

  const prices = await page.$$eval("span.a-price > span.a-offscreen", (texts) => {
    return texts.map((x) => x.textContent);
  });

  // console.log(images);
  // console.log(titles);

  let product = [];
  let i = 0;
  while (i < images.length && i < prices.length && i < titles.length) {
    product = [...product,{ title: titles[i], image: images[i], price: prices[i] }];
    //
    i++;
  }
  console.log(product);

  await browser.close();
  return product;
}

