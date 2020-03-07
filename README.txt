Amazon Price Checker Project

In this exercise you will create a script that determines how Amazon should price items on its website, to make the most profit (many people don't realize that Amazon changes the price of an item based on when you purchase it, the browser you use, and many other factors).  

In this example, an Amazon employee inputs the name of the item and its "base price" (i.e. the price before Amazon has applied any discounts or markups).  Then the employee answers questions that will impact the final price of the item: for example, if the purchaser arrived at Amazon from a search engine, or if today is "Black Friday" (a big day for discounts).

1. Create a web page called: "Amazon Price Generator"

2. Use prompt() to ask a few questions:
    * What is the name of the item?
    * What is the base price? (i.e. the price before markup/markdown)
    * Is today "Black Friday"?
    * Did the purchaser find the product through a search engine?
    * Did purchaser visit a comparison-shopping site?

3. Now your script should create a message containing several sentences, based on the Amazon employee's answers above.  Your script should also increase or decrease the item price based on those answers.  Below is a conditional statement that might appear in your code.  Note that the first line inside the code block concatenates two strings, and the second line adds 1% to the finalPrice variable.
    if (searchEngine === "yes") {
    message = message + "The purchaser came through a search engine, so we will increase the price by 1%. ";
    finalPrice = finalPrice * 1.01;
    };

4. When it's finished with this logic, your script should alert something like the following:
    * "The base price for a [item] is [basePrice]. We will increase the price by 1% to pay the search engine. This purchaser is a comparison shopper, so we will reduce the price by 10%. Since it's Black Friday, we will reduce the price by 25%. The final price is [finalPrice]."
    * NOTE: if a statement is not true, it should not be included in the message.

5. When you are done, create a new repo on Github called "Amazon Price Checker" and push your work into your master branch.