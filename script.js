let user, item, basePrice, blackFriday, blackFridayDiscount, searchEngine, shoppingSite, finalPrice, message;

greetUser();
askBlackFriday();
askItemBasePrice();
askSearchEngine();
askShoppingSite();
// calculatePrice();
// displayMessage();

function greetUser() {
    user = prompt(`Hello, welcome to the Amazon Price Checker app! My name is Alexa, what is your name?`);
    console.log(user);
    alert(`Thank you, ${user}! Now let's get started!`);
}

function askBlackFriday() {
    blackFriday = prompt(`${user}, is today Black Friday? Please enter yes or no.`);
    blackFriday.toLowerCase();
    for (let index = 0; ((blackFriday != "yes") && (blackFriday != "no")); index++) {
        blackFriday = prompt(`Is today Black Friday? Please enter yes or no, ${user}.`)
    } console.log(`Black Friday? ${blackFriday}`);
    if (blackFriday === "yes") {
        blackFridayDiscount = Number(prompt(`Thank you, ${user}! You've indicated that today is Black Friday, so the purchaser will receive a discount. Please enter the amount of the Black Friday discount now. Please enter as a number between 0 and 100 (i.e., if the discount is 25%, please enter 25).`));
    } else if (blackFriday === "no") {
        alert(`Thank you, ${user}! You've indicated that today is not Black Friday, so the purchaser will not receive a Black Friday discount.`);
        blackFridayDiscount = null;
    } console.log(`Black Friday discount = ${blackFridayDiscount}%`);
}

// make this a loop - ask user if he/she wants to continue shopping, if yes, continue asking for items & prices, stop when answer is no
function askItemBasePrice() {
    item = prompt(`${user}, please enter the name of the item we'll be price checking today.`);
    item = item.toLowerCase();
    console.log(`item: ${item}`);
    
    basePrice = Number(prompt(`Thank you, ${user}! Now please enter the base price of ${item}.`));
    basePrice = basePrice.toFixed(2);
    console.log(`base price: $${basePrice}`);
    alert(`Thank you, ${user}! The base price of ${item} is $${basePrice}.`)
}
    
function askSearchEngine() {
    searchEngine = prompt(`Did the purchaser find the product through a search engine? Please enter yes or no.`);
    searchEngine.toLowerCase();
    for (let index = 0; ((searchEngine != "yes") && (searchEngine != "no")); index++) {
        searchEngine = prompt(`Did the purchaser find the product through a search engine? Please enter yes or no, ${user}.`)
    } console.log(`search engine? ${searchEngine}`);
    if (searchEngine === "yes") {
        searchEngineFee = Number(prompt(`Thank you, ${user}! You've indicated that the purchaser found the item through a search engine, so the price will be increased accordingly. Please enter the commission fee charged by the search engine now. Please enter this fee as a number between 0 and 100 (i.e., if the commission fee is 1%, please enter 1).`));
    } else if (searchEngine === "no") {
        alert(`Thank you, ${user}! You've indicated that the purchaser did not find the item through a search engine, so a search engine commission fee is not applicable.`);
        searchEngineFee = null;
    } console.log(`search engine commission fee = ${searchEngineFee}%`);
}
    
function askShoppingSite() {
    shoppingSite = prompt(`Did the purchaser visit a comparison shopping site?`);
    shoppingSite.toLowerCase();
    console.log(`comparison shopping site? ${shoppingSite}`);
    alert(`Thank you, ${user}!`);
}
/*
function calculatePrice() {

}

function displayMessage() {

}
*/