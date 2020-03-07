let itemName = prompt("What is the name of the item?");
document.writeln(`The item is ${itemName}.`);

let basePrice = prompt("What is the base price of the item?");
document.writeln(`The base price of the item is $${basePrice}.`);

let blackFriday = prompt("Is today Black Friday? Please enter 'yes' or 'no'.");
document.writeln(`Is today Black Friday? ${blackFriday}`);

let searchEngine = prompt("Did the purchaser find the product through a search engine? Please enter 'yes' or 'no.'");
document.writeln(`Did the purchaser find the product through a search engine? ${searchEngine}`);

let shoppingSite = prompt("Did the purchaser visit a comparison shopping site? Please enter 'yes' or 'no.'");
document.writeln(`Did the purchaser visit a comparison shopping site? ${shoppingSite}`);

if (blackFriday == "yes") {
    alert("Today is Black Friday. The purchaser will receive a discount.");
    let blackFridayDiscount = prompt("Please enter the amount of the discount that the purchaser will receive. This amount should be entered as a number between 0 and 100 representing the discount percentage.");
    blackFridayDiscount = Number(blackFridayDiscount);
    document.writeln(`The purchaser will receive a Black Friday discount of ${blackFridayDiscount}%.`);
} else if (blackFriday == "no") {
    alert("Today is not Black Friday. The purchaser will not receive a discount."),
    blackFridayDiscount = null;
} else {
    let blackFriday = prompt("I'm not sure if today is Black Friday. Please enter either 'yes' or 'no.'");
    blackFridayDiscount = prompt("I'm not sure if the purchaser will receive a discount. Please enter a number between 0 and 100 representing the discount percentage.");
}

if (searchEngine === "yes") {
    alert("The purchaser found the product through a search engine.");
} else if (searchEngine === "no") {
    alert("The purchaser did not find the product through a search engine.");
} else {
    let searchEngine = prompt("I'm not sure if the purchaser found the product through a search engine. Please enter either 'yes' or 'no.'");
}

if (shoppingSite === "yes") {
    alert("The purchaser visited a comparison shopping site.");
} else if (shoppingSite === "no") {
    alert("The purchaser did not visit a comparison shopping site.");
} else {
    let shoppingSite = prompt("I'm not sure if the purchaser visited a comparison shopping site. Please enter either 'yes' or 'no.'");
}

/*
if (searchEngine === "yes") {
    message = message + "The purchaser came through a search engine, so we will increase the price by 1%. ";
    finalPrice = finalPrice * 1.01;
    };

    "The base price for a [item] is [basePrice]. We will increase the price by 1% to pay the search engine. This purchaser is a comparison shopper, so we will reduce the price by 10%. Since it's Black Friday, we will reduce the price by 25%. The final price is [finalPrice]."
*/