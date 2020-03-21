function amazonPriceCheck() {

    let user, item, basePrice, blackFriday, blackFridayDiscount, searchEngine, searchEngineFee, shoppingSite, shoppingSiteDiscount, blackFridayDiscount$, blackFridayDiscountTF, searchEngineFee$, searchEngineFeeTF, shoppingSiteDiscount$, shoppingSiteDiscountTF, finalPrice, finalPriceTF, messageBP, messageBF, messageSE, messageCS, messageFP, finalMessage, keepGoing;

    greetUser();
    askQuestions();
    calculatePrice();
    displayMessage();
    checkNewItem();

    // *** While loop isn't working correctly, need to continue debugging ***
    console.log(keepGoing); // returning the keepGoing variable from the checkNewItem function gives it a value of undefined (which should be false?), but the while loop keeps repeating regardless of whether the user enters yes or no
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
            
            alert(`You've entered a base price of $${basePrice} for ${item}. Please click OK to continue.`);
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
                blackFridayDiscount = 0;
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
                searchEngineFee = 0;
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
                shoppingSiteDiscount = 0;
            } console.log(`comparison shopping site discount = ${shoppingSiteDiscount}% (deducted from base price)`);
        }
    }

    function calculatePrice() {
        blackFridayDiscount$ = Number((blackFridayDiscount / 100) * basePrice);
        blackFridayDiscountTF = blackFridayDiscount$.toFixed(2);
        console.log(`Black Friday discount: ${blackFridayDiscount}% of $${basePrice} = $${blackFridayDiscountTF}`);
             
        searchEngineFee$ = Number((searchEngineFee / 100) * basePrice);
        searchEngineFeeTF = searchEngineFee$.toFixed(2);
        console.log(`search engine commission fee: ${searchEngineFee}% of $${basePrice} = $${searchEngineFeeTF}`);
                
        shoppingSiteDiscount$ = Number((shoppingSiteDiscount / 100) * basePrice);
        shoppingSiteDiscountTF = shoppingSiteDiscount$.toFixed(2);
        console.log(`comparison shopping site discount: ${shoppingSiteDiscount}% of ${basePrice} = $${shoppingSiteDiscountTF}`);
        
        finalPrice = basePrice - blackFridayDiscount$ + searchEngineFee$ - shoppingSiteDiscount$;
        finalPriceTF = finalPrice.toFixed(2);
        console.log(`final price: $${finalPriceTF}`);
    }

    function displayMessage() {
        messageBP = `${user}, the base price of ${item} is $${basePrice}. `;
        
        if (blackFridayDiscount != 0) {
            messageBF = `Since today is Black Friday, the purchaser will receive a discount of ${blackFridayDiscount}%, reducing the base price of ${item} by $${blackFridayDiscountTF}. `;
        } else {
            messageBF = "";
        }

        if (searchEngineFee != 0) {
            messageSE = `Because the purchaser visited Amazon through a search engine and the search engine charges us a commission fee of ${searchEngineFee}%, the base price of ${item} will be increased by $${searchEngineFeeTF}. `;
        } else {
            messageSE = "";
        }

        if (shoppingSiteDiscount != 0) {
            messageCS = `The purchaser is a comparison shopper, so a discount of ${shoppingSiteDiscount}% applies to this transaction, reducing the base price by $${shoppingSiteDiscountTF}. `;
        } else {
            messageCS = "";
        }

        messageFP = `The final price of ${item} is $${finalPriceTF}.`;
        
        finalMessage = messageBP.concat(messageBF, messageSE, messageCS, messageFP);    
        console.log(finalMessage);
        alert(finalMessage);
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
            return keepGoing;
    }
}
