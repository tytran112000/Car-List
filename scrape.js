// const puppeteer = require('puppeteer');

//   (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
    
//     await page.goto('https://www.toyota.com/rav4/2023/?addisclaimer=off_roading_generic&srchid=SEM:700000001483645:GOOGLE:71700000086160827:58700007346929066:p65870284012:638386854145&gclsrc=aw.ds&&gclid=Cj0KCQiArsefBhCbARIsAP98hXT1qj9xbP4CMQ18j3joPP6aNKaMmEJlTjiRE5fukzqjhTsBuRenNaUaAkQDEALw_wcB&gclsrc=aw.ds');
    
//     // Wait for 5 seconds
//     await page.waitForTimeout(5000);
    
//     // Find all elements with tag "div" and class "title-panel"
//     const titlePanels = await page.$$('div .copy-wrapper');
    
//     // Loop through each title panel and get the text attribute
//     for (const panel of titlePanels) {
//       const text = await panel.$eval('span', el => el.textContent);
//       console.log(text);
//     }
    
//     await browser.close();
//   })();
