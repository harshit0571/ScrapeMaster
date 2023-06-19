import Express from "express";
import puppeteer from "puppeteer";

var app=Express();
const port =8005;
app.use(Express.json());


app.post('/', async (req, res)=>{
    const data=await req.body;
    console.log(data);
    const p=await start(data.search);
    res.json(p);
}    )
app.listen(port, ()=>{
    console.log("working on port " + port);
})






async function start(search) {
  const browser = await puppeteer.launch({  args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    executablePath: puppeteer.executablePath()
});
    console.log(puppeteer.executablePath());
  const page = await browser.newPage();
  await page.goto("https://www.amazon.in");

  await page.type("#twotabsearchtextbox", `${search}`);
  await page.click(".nav-search-submit");
  await page.waitForNavigation();
  await page.waitForSelector(".s-result-item");

  const images = await page.$$eval(".s-image", (texts) => {
    return texts.map((x) => x.src);
  });

  const titles = await page.$$eval("h2.a-size-mini", (texts) => {
    return texts.map((x) => x.textContent);
  });

  const prices = await page.$$eval("span.a-price > span.a-offscreen", (texts) => {
    return texts.map((x) => x.textContent);
  });
  
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

