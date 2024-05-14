let newScript = document.createElement('script');
let browser2 = chrome || browser;
newScript.src = browser2.extension.getURL('solver.js');
document.body.appendChild(newScript);
console.log("Injector worked");
