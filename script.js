let itemName = prompt("What is the name of the item?");
let message = (`The item is ${itemName}.`);
console.log(message);

let basePrice = prompt("What is the base price of the item?");
message = (`The base price of ${itemName} is $${basePrice}.`);
console.log(message);

let blackFriday = prompt("Is today Black Friday? Please enter 'yes' or 'no'.");

if (blackFriday === "yes") {
    console.log("Today is Black Friday. The purchaser will receive a discount.");
    let blackFridayPercent = prompt("Please enter the amount of the Black Friday discount that the purchaser will receive. This amount should be entered as a number between 0 and 100, representing the discount percentage.");
    blackFridayPercent = Number(blackFridayPercent);
    console.log(`The discount is ${blackFridayPercent}%, to be deducted from the base price of $${basePrice}.`);
    let blackFridayDiscount = (blackFridayPercent / 100) * basePrice;
    finalPrice = basePrice - blackFridayDiscount;
    message = message + (` Since today is Black Friday, the purchaser will receive a discount of ${blackFridayPercent}%, saving $${blackFridayDiscount}.`);
    console.log(`With this ${blackFridayPercent}% Black Friday discount, the price of ${itemName} is now $${finalPrice}. The purchaser has saved $${blackFridayDiscount}.`);
} else if (blackFriday === "no") {
    console.log("Today is not Black Friday, so the purchaser will not receive a Black Friday discount.");
    blackFridayPercent = 0;
    console.log(`The price of ${itemName} remains $${finalPrice}.`);
} else {
    blackFriday = prompt("I'm not sure if today is Black Friday. Please enter either 'yes' or 'no.'");
    blackFridayPercent = prompt("I'm not sure if the purchaser will receive a discount. Please enter a number between 0 and 100, representing the discount percentage. If today is not Black Friday, the amount entered should be 0.");
    console.log(`Black Friday: ${blackFriday}, discount: ${blackFridayPercent}%, savings: $${blackFridayDiscount}, final price: $${finalPrice}`);
}

let searchEngine = prompt("Did the purchaser find the product through a search engine? Please enter 'yes' or 'no.'");

if (searchEngine === "yes") {
    console.log("The purchaser found the product through a search engine.");
    let searchEngineName = prompt("Please enter the name of the search engine that the purchaser used.");
    console.log(`The search engine used was ${searchEngineName}.`);
    let searchEnginePercent = prompt(`Please enter the commission fee charged by ${searchEngineName}. This should be entered as a number between 0 and 100, representing the percentage charged.`);
    console.log(`${searchEngineName} charges a commission fee of ${searchEnginePercent}%.`);
    searchEnginePercent = Number(searchEnginePercent);
    let searchEngineCommission = basePrice * (searchEnginePercent / 100);
    finalPrice = finalPrice + searchEngineCommission;
    message = message + (` Because the purchaser used the search engine ${searchEngineName}, a commission fee of ${searchEnginePercent}% has been added, increasing the price by $${searchEngineCommission}.`);
    console.log(`The commission fee is $${searchEngineCommission} (${searchEnginePercent}% of $${basePrice}), increasing the price of ${itemName} to $${finalPrice}.`);
} else if (searchEngine === "no") {
    console.log("The purchaser did not find the product through a search engine.");
    searchEnginePercent = 0;
    console.log(`No commission fee has been added. The final price is currently $${finalPrice}.`);
} else {
    let searchEngine = prompt("I'm not sure if the purchaser found the product through a search engine. Please enter either 'yes' or 'no.'");
}

let shoppingSite = prompt("Did the purchaser visit a comparison shopping site? Please enter 'yes' or 'no.'");

if (shoppingSite === "yes") {
    console.log("The purchaser visited a comparison shopping site.");
} else if (shoppingSite === "no") {
    console.log("The purchaser did not visit a comparison shopping site.");
} else {
    let shoppingSite = prompt("I'm not sure if the purchaser visited a comparison shopping site. Please enter either 'yes' or 'no.'");
}

console.log(`The final price of ${itemName} is $${finalPrice}.`);
console.log(`Thank you for using the Amazon Price Generator.`);
console.log("Have a great day!");
message = (`${message} The final price is $${finalPrice}. Thank you for using the Amazon Price Generator, and have a great day!`);
alert(message);
document.getElementById("alert").innerHTML = (`${message}`);

// Things to figure out:
// Formatting user input and numbers (so result appears as $xx.xx instead of xx.x, for example)
// Error messages & looping (person makes typo or enters Yes instead of yes, how to correct and/or go back to beginning to start over?)
