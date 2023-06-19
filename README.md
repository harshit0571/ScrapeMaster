# ScrapeMaster
It is robust web scraping tool that focuses specifically on extracting data from the renowned e-commerce giant, Amazon. By leveraging Puppeteer's capabilities, I was able to navigate through Amazon's web pages, interact with elements, and effortlessly retrieve valuable product information. 

![image](https://github.com/harshit0571/ScrapeMaster/assets/62325935/b75b3594-3438-42c0-be85-1ddf97630217)

## How To Use

Create a post request to `https://scrapemaster-d1vr.onrender.com` with body that contains search query in json format.
<br>
eg: 
```shell
{
    "search":"smartphones"
}
```


## Setup

Here are the steps to run ScrapeMaster in your system.

### Step 1
Clone and cd to the repo
```shell
$ git clone https://github.com/harshit/ScarpeMaster
$ cd ScrapeMaster
```

### Step 2
Download node modules
```shell
$ npm i
```

### step 3
To run the Amazon scrapper run:
```shell
$ npm run amazon
```

### step 4
To practice Puppeteer run:
```shell
$ npm run practice
```

## Features

ScrapeMaster can retreive data from amazon product page and store it int json format

![image](https://github.com/harshit0571/ScrapeMaster/assets/62325935/b36e0a49-a583-4150-82d0-4496185000a3)
<p align="center">
  <img src="https://github.com/harshit0571/ScrapeMaster/assets/62325935/7ad037ee-3618-4462-b3f2-581c328ed7da" />
</p>

![image](https://github.com/harshit0571/ScrapeMaster/assets/62325935/e42c3c2c-2d0b-4a80-971a-115a0d8ed38f)


## Contributing
Feel free to contribute by opening an issue.

## License

This project is licensed under the [MIT License](LICENSE).
