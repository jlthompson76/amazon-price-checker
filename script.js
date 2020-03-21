function amazonPriceCheck() {

    let user, blackFriday, blackFridayDiscount, item, basePrice, searchEngine, searchEngineFee, shoppingSite, shoppingSiteDiscount, finalPrice, message, keepGoing;

    greetUser();
    askQuestions();
    calculatePrice();
    displayMessage();
    checkNewItem();

    // *** While loop isn't working correctly, need to continue debugging ***
    console.log(keepGoing); // here the value of keepGoing is undefined, not sure why?
    while (keepGoing = true) {
        console.log(`checking the price of another product...`);
        askQuestions();
        calculatePrice();
        displayMessage();
        checkNewItem();
        if (keepGoing = false) { // false isn't recognized, loop keeps repeating
        alert(`Goodbye, ${user}! Thank you for using the Amazon Price Generator today.`);
        console.log(`bidding goodbye to ${user}`);
        break;
        }
    }

    function greetUser() {
        user = prompt(`Hello, welcome to the Amazon Price Generator! My name is Alexa, what is your name?`);
        console.log(user);
        alert(`Thank you, ${user}! Now let's get started!`);
    }

    function askQuestions() {
        askItemBasePrice();
        askBlackFriday();
        askSearchEngine();
        askShoppingSite();

        function askItemBasePrice() {
            item = prompt(`Please enter the name of the item we'll be price checking today.`);
            item = item.toLowerCase();
            console.log(`item: ${item}`);
            
            basePrice = Number(prompt(`Thank you, ${user}! Now please enter the base price of ${item}.`));
            basePrice = basePrice.toFixed(2);
            console.log(`base price: $${basePrice}`);
            
            alert(`You've entered a base price of $${basePrice} for ${item}. Please click OK to continue.`)
        }
            
        function askBlackFriday() {
            blackFriday = prompt(`Is today Black Friday? Please enter yes or no.`);
            blackFriday = blackFriday.toLowerCase();

            for (let index = 0; ((blackFriday != "yes") && (blackFriday != "no")); index++) {
                blackFriday = prompt(`Is today Black Friday? Please enter yes or no, ${user}.`);
                blackFriday = blackFriday.toLowerCase();
            } console.log(`Black Friday? ${blackFriday}`);

            if (blackFriday === "yes") {
                blackFridayDiscount = Number(prompt(`Thank you, ${user}! You've indicated that today is Black Friday, so the purchaser will receive a discount. Please enter the amount of the Black Friday discount now. Please enter as a number between 0 and 100 (i.e., if the discount is 25%, please enter 25).`));
            } else if (blackFriday === "no") {
                alert(`Thank you, ${user}! You've indicated that today is not Black Friday, so the purchaser will not receive a Black Friday discount.`);
                blackFridayDiscount = null;
            } console.log(`Black Friday discount = ${blackFridayDiscount}% (deducted from base price)`);
        }

        function askSearchEngine() {
            searchEngine = prompt(`Did the purchaser find the product through a search engine? Please enter yes or no.`);
            searchEngine = searchEngine.toLowerCase();

            for (let index = 0; ((searchEngine != "yes") && (searchEngine != "no")); index++) {
                searchEngine = prompt(`Did the purchaser find the product through a search engine? Please enter yes or no, ${user}.`);
                searchEngine = searchEngine.toLowerCase();
            } console.log(`search engine? ${searchEngine}`);

            if (searchEngine === "yes") {
                searchEngineFee = Number(prompt(`Thank you, ${user}! You've indicated that the purchaser found the item through a search engine, so the price will be increased accordingly. Please enter the commission fee charged by the search engine now. Please enter this fee as a number between 0 and 100 (i.e., if the commission fee is 1%, please enter 1).`));
            } else if (searchEngine === "no") {
                alert(`Thank you, ${user}! You've indicated that the purchaser did not find the item through a search engine, so a search engine commission fee is not applicable.`);
                searchEngineFee = null;
            } console.log(`search engine commission fee = ${searchEngineFee}% (added to base price)`);
        }

        function askShoppingSite() {
            shoppingSite = prompt(`Did the purchaser visit a comparison shopping site? Please enter yes or no.`);
            shoppingSite = shoppingSite.toLowerCase();

            for (let index = 0; ((shoppingSite != "yes") && (shoppingSite != "no")); index++) {
                shoppingSite = prompt(`Did the purchaser visit a comparison shopping site? Please enter yes or no, ${user}.`);
                shoppingSite = shoppingSite.toLowerCase();
            } console.log(`comparison shopping site? ${shoppingSite}`);

            if (shoppingSite === "yes") {
                shoppingSiteDiscount = Number(prompt(`Thank you, ${user}! You've indicated that the purchaser is a comparison shopper, so the price will be reduced accordingly. Please enter the comparison shopping site discount now. Please enter this discount as a number between 0 and 100 (i.e., if the discount is 10%, please enter 10).`));
            } else if (shoppingSite === "no") {
                alert(`Thank you, ${user}! You've indicated that the purchaser is not a comparison shopper, so a comparison shopping site discount is not applicable.`);
                shoppingSiteDiscount = null;
            } console.log(`comparison shopping site discount = ${shoppingSiteDiscount}% (deducted from base price)`);
        }
    }

    function calculatePrice() {
        blackFridayDiscount$ = (blackFridayDiscount / 100) * basePrice;
        blackFridayDiscount$ = blackFridayDiscount$.toFixed(2);
        console.log(`Black Friday discount: ${blackFridayDiscount}% of $${basePrice} = $${blackFridayDiscount$}`);
        blackFridayDiscount$ = Number(blackFridayDiscount$);
       
        searchEngineFee$ = (searchEngineFee / 100) * basePrice;
        searchEngineFee$ = searchEngineFee$.toFixed(2);
        console.log(`search engine commission fee: ${searchEngineFee}% of $${basePrice} = $${searchEngineFee$}`);
        searchEngineFee$ = Number(searchEngineFee$);
        
        shoppingSiteDiscount$ = (shoppingSiteDiscount / 100) * basePrice;
        shoppingSiteDiscount$ = shoppingSiteDiscount$.toFixed(2);
        console.log(`comparison shopping site discount: ${shoppingSiteDiscount}% of ${basePrice} = $${shoppingSiteDiscount$}`);
        shoppingSiteDiscount$ = Number(shoppingSiteDiscount$);
        
        finalPrice = basePrice - blackFridayDiscount$ + searchEngineFee$ - shoppingSiteDiscount$;
        finalPrice = finalPrice.toFixed(2);
        console.log(`final price: $${finalPrice}`);
    }

    function displayMessage() {
        message = `${user}, the final price of ${item} is $${finalPrice}.`;
        console.log(message);
        alert(message);
    }

    function checkNewItem() {
        let keepGoing = prompt(`Would you like to check the price of another Amazon product? Please enter yes to continue using the Amazon Price Generator or no to exit the application.`); 
        keepGoing = keepGoing.toLowerCase();
        if (keepGoing == "yes") {
            console.log(`Yes, ${user} would like to check the price of another product.`);
            keepGoing = true;
        } else {
            console.log(`No, ${user} would not like to check the price of another product.`);
            keepGoing = false;
        } console.log(keepGoing);
            //return keepGoing;
    }
}
