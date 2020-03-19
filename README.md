### Amazon Price Generator Project
In this exercise you will create a script that determines how Amazon should price items on its website, to make the most profit (many people don't realize that Amazon changes the price of an item based on when you purchase it, the browser you use, and many other factors).  

In this example, an Amazon employee inputs the name of the item and its "base price" (i.e. the price before Amazon has applied any discounts or markups). Then the employee answers questions that will impact the final price of the item: for example, if the purchaser arrived at Amazon from a search engine, or if today is "Black Friday" (a big day for discounts).

1. Create a web page called: "Amazon Price Generator"

2. Use `prompt()` to ask a few questions:
    * What is the name of the item?
    * What is the base price? (i.e. the price before markup/markdown)
    * Is today "Black Friday"?
    * Did the purchaser find the product through a search engine?
    * Did purchaser visit a comparison-shopping site?

3. Now your script should create a message containing several sentences, based on the Amazon employee's answers above.  Your script should also increase or decrease the item price based on those answers.  Below is a conditional statement that might appear in your code.  Note that the first line inside the code block concatenates two strings, and the second line adds 1% to the `finalPrice` variable.
    * `if (searchEngine === "yes") {`
      * `message = message + "The purchaser came through a search engine, so we will increase the price by 1%. ";`
      * `finalPrice = finalPrice * 1.01;`
    * `};`

4. When it's finished with this logic, your script should alert something like the following:
    * "The base price for a [item] is [basePrice]. We will increase the price by 1% to pay the search engine. This purchaser is a comparison shopper, so we will reduce the price by 10%. Since it's Black Friday, we will reduce the price by 25%. The final price is [finalPrice]."
    * NOTE: if a statement is not true, it should not be included in the message.

5. When you are done, create a new repo on Github called "Amazon Price Checker" and push your work into your master branch.

### Refactor the Amazon Price Generator
Congrats to reaching the half way point of the course. You have learned so much up to this point that its time to refactor another previous assignment. Refactoring is a process that involves editing and cleaning up previously written code without changing the behavior of the code at all.

Let's take a look at the **Amazon Price Generator** project from Unit 8. From Unit 8 until now, you have learned so much. Can you use any of the latest concepts that have been taught to make the Amazon Price Generator better?  Here are a couple of things to do or consider:

* You already have this project in your Github repo and/or local. If you don't, make sure to clone that project into your PROJECT folder on your computer.
* Make a new **branch** of this project and name it "refactored"
* Make sure to **checkout** into this new branch called "refactored" and start your work!
* Here are a few concepts that you may OR may not use to make your code better:
    * Make things into **functions**! Are there one or more things that is happening that you can make it into a function.
    * Add a **while or a for loop** in order to make something happen over and over again. Do you want something to repeat? Ensure that there is a way to make a condition false or add a break to make the loop exit out eventually.
    * Use the many **string methods** you have learned so far. How can you ensure that the input from the user is clean and reusable?
* Make sure you debug while you are refactoring and before you submit your work. You want to make sure that the behavior didn't change. What are the different ways that you can debug?
* **BONUS:** If there are any new features you would like to add to the Amazon Price Generator, you are more than welcome to do so. You are free to add anything else to the project just as long as you are using something that has already been taught in the class. Anything beyond that won't be accepted.
* When you are ready to submit, you can merge your work into your master and push your work to Github. Please submit by adding your repo's url