const { pseudoRandomBytes } = require("crypto");

console.log("Hello World, welcome to JavaScript Basics!")
/*
    run: node JavaScriptBasics.js
    topis: 
        Variables
        Loops If/ While / Do while / For
        Conditions %% || 
        Array - .length , push, pop , unshift , indexOf ,includes , slice , .reduce , filter , map , 
        Array - //// Sorting on array: string / numbers
        Functions
        // var - let - const
        Strings

        Objects
        Classes


*/



// Variables: var,  let , const 

// examples:
var age = 18; //number
var name = "Cristina"; // string
var fullname = {first:"Cristina", last:"Stroea" };




let a=4  // if you mouseover, you will see the datatype: number
console.log(a) //printed variable value
console.log(typeof(a)) // printed variable type: number

let b = 234.6
console.log(typeof(b)) // printed variable type: number

let c = "Hello again"
console.log(typeof(c)) // printed variable type: string

let required = true
console.log(typeof(required)) // printed variable type: boolean
console.log(required) // true
console.log(!required) // false
// null and undefined 

var ab = a+b // declare variable. we cannot redeclare variable with let, but possible with var
console.log(ab)

ab = a-b // declare variable. we cannot redeclare variable with let, but possible with var
console.log(ab)


// const = constant, you can't reassign value
const ct = "constantValue"
console.log(ct)
/* ct = "newvalue" // error
console.log(ct) */





///////////////////////

const flag = true //boolean constant value true
if (flag)
{
    console.log("condition met")
}
else
{
    console.log("condition not met")
}


if (!flag) /// false
{
    console.log("condition met")
}
else
{
    console.log(flag)
    console.log("condition not met")
}

let i=0 
while(i<10){
    i++
    console.log(i)
}

i=0 
do{ i++ } while (i>10);
console.log(i)

////  Conditions %% || 

for (let k=0 ; k<=10 ; k++ ){
    // console.log(k);
    if(k%2 == 0 && k%5 == 0) {
        console.log("%2&&%5: ", k );
    }

    if(k%2 == 0 || k%5 == 0) {
        console.log("%2||%5: ", k );
    }
}
    
// Array - .length , push, pop , unshift , indexOf ,includes , slice , .reduce , filter , map , 
var marks = Array(6) // array that can hold 6 values -length = 6
var marks = new Array(20,40,35,12,37,100)  
// or: better:
var marks = [20,40,35,12,37,100] 
var submark = marks.slice(2 , 5 ) // get subarray from 2 to 4 : [ 35, 12, 37 ]


console.log(submark)
console.log(marks[2]); // 35
marks[3] = 14; // replace value 
console.log(marks); // [ 20, 40, 35, 14, 37, 100 ]
console.log(marks.length) //6
// add element:
marks.push(65) // append to array

console.log(marks) // [ 20, 40, 35, 14, 37, 100 , 65]
marks.pop() // delete last element
console.log(marks)  // [ 20, 40, 35, 14, 37, 100 ]
marks.unshift(12) // append at the beginning of the list
console.log(marks)  // [ 12 , 20, 40, 35, 14, 37, 100 ]
console.log(marks.indexOf(100)) // 6
console.log(marks.includes(120))// false - 120 not included in the array
console.log(marks.includes(100))// true - 100 not included in the array

var submark = marks.slice(2 , 5 ) // get subarray from 2 to 4 : [ 35, 12, 37 ]

var sum = 0
for(let i=0 ; i<marks.length ; i++){
    console.log(marks[i])
    sum+= marks[i]
}
console.log(sum)

let total = marks.reduce((sum, mark)=>sum+mark,0) //perform operation on all elements from the array:
//  iterate through array , it takes 2 arguments: sum = 0 ,totalMarks - values from array 12+ 0 
console.log(total);



//new array
var scores = [12,13,14,16]
console.log(scores)
var evenscores = []
// print even nrs from array
for (let i=0 ; i<scores.length ; i++ ){
    if(scores[i]%2 == 0){
        evenscores.push(scores[i])
        //console.log(scores[i])
    }
}
console.log("evenscores:" , evenscores)

let newScores =scores.filter(score=>score%2==0)
console.log(newScores)
// map: 
// //multiply each value with 3 and sum them
let mappedarray = newScores.map(score=>score*3)
console.log(mappedarray)
console.log(newScores)
var totalmap = mappedarray.reduce((sum,val)=>sum+val,0)
console.log(totalmap)


//// Sorting on array: string / numbers
let fruits=["banana" , "mango","apple","pomegrante"]
fruits.sort() //can be used for strings
console.log(fruits)// [ 'apple', 'banana', 'mango', 'pomegrante' ]
console.log(fruits.reverse())

var scores1 = [12, 3 ,13,19,16,14]
console.log(scores1.sort()) // [ 12, 13, 14, 16, 19, 3 ]
console.log(scores1.sort((a,b)=> a-b )) // [ 3, 12, 13, 14, 16, 19 ]
console.log(scores1.sort((a,b)=> b-a )) // [  19, 16, 14, 13, 12, 3 ]



//////////////////////////////// functions

function add(a, b){
    return a+b
}
let sumab =add(2,3)
console.log(sumab)

//anonymus functions: do not have name, only can be assigned to variables
let sumofintegers = function(c,d){
    return c+d
}

let sumofnrs= (c,d)=> c+d
console.log(sumofnrs(3,3))

//// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/////
// var - global level / function level - visible outside block
// let - global level / block level {} - not vizible outside block
// let can not be redeclared
// both can be reinitializes

// const - can not be reinitialized





/// strings
let day = 'tuesday '
console.log("tuesday string length: " , day.length)
console.log("tuesday slice 0 4:" , day.slice(0,4))
console.log("tuesday second char: " , day[1])
// tue day
console.log("tuesday split: 0 " , day.split("s")[0])
console.log("tuesday split: 1 " , (day.split("s")[1]).length)
// trim = remove white space

console.log("tuesday split: 1 " , (day.split("s")[1].trim()).length)

let date = '23'
let nextdate = '27'
// difference: can not substract strings
let diff = parseInt(nextdate) - parseInt(date)
console.log("diff int: ", diff)
diff.toString()

// concatenate:
let newQuote = day  + "is Funday"
console.log(newQuote) // tuesday is Funday

// indexOf



let count = 0
let val = newQuote.indexOf("day")
console.log("first appear of day string",val)

// how many time 'day' occurs in string?
while(val!== -1)
{
    count++ // count is 1 // 2
    val=newQuote.indexOf("day",val+1)

}
console.log(count)

/// 2.08 Objects
// Object is a collection of properties

// declareobject person:
let person = {
    firstname:'Tim', // key value
    lastname:'John'
}

console.log(person.lastname)
console.log(person['lastname'])
person.firstname = 'Tim Marcel'
console.log(person.firstname)
// create a property for object person and assign value:
person.gender = 'male'
console.log(person) // { firstname: 'Tim Marcel', lastname: 'John', gender: 'male' }
// delete property
delete person.gender
console.log(person) // { firstname: 'Tim Marcel', lastname: 'John' }

// check if property exist in the object and iterate:
//if gender exists:
console.log('gender' in person) // false
// print values of all properties:
for (let key in person ){
    console.log(key)
} // firstname lastname

// print all the values of the javascript object
for (let key in person ){
    console.log(person[key])
} // Tim Marcel John




// declareobject person:
let person2 = {
    firstname:'firstnamevalue', // key value
    lastname:'lastnamevalue' ,
    age: 24 ,
    fullName: function(){ 
        console.log(this.firstname+this.lastname) // this = current object
    }
}

console.log(person2.fullName) // [Function: fullName]
console.log(person2.fullName()) //specify () = function    => firstnamevaluelastnamevalue

//// 2:23 Classes in JavaScript
















































const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');




test('Products page -  Products title',async ({page})=>{

    
    await page.goto(URL);
    console.log(await page.title());
    await expect (page).toHaveTitle('Swag Labs')

    await page.locator(username).fill('standard_user');
    await page.locator(password).fill('secret_sauce');
    await page.locator(loginButton).click();
    console.log(await page.title);
    await expect (page).toHaveTitle('Swag Labs')
    await expect(page.locator(".inventory_list")).toBeVisible();
   
    // products list: 
    // console.log(await page.locator(".inventory_item_name ").textContent()); // all items have same class
    // products list - first element:
    const prodTitles = page.locator(".inventory_item_name ") 
    console.log(await prodTitles.nth(0).textContent()); // first element:this step will make sure page is loaded
    const allProdTitles = await prodTitles.allTextContents(); // array of product titles. 
    console.log (allProdTitles) ;
})
;


test('Products page -  All Products title',async ({page})=>{
    await page.goto(URL);
    console.log(await page.title());
    await expect (page).toHaveTitle('Swag Labs')

    await page.locator(username).fill('performance_glitch_user');
    await page.locator(password).fill('secret_sauce');
    await page.locator(loginButton).click();
    console.log(await page.title);
    await expect (page).toHaveTitle('Swag Labs')
   
    await page.waitForLoadState('networkidle'); // wait until all network calls are made
    await page.locator(".inventory_item_name ").first().waitFor(); // will wait for the first element
    await page.locator(".inventory_item_name ").last().waitFor(); // will wait for the last element
  
    const prodTitles = page.locator(".inventory_item_name ") 
    const allProdTitles = await prodTitles.allTextContents(); // array of product titles. 
    console.log (allProdTitles) ;
})
;




test('Products page -  Sort dropdown',async ({page})=>{
    const priceList = [];
    await page.goto(URL);
    console.log(await page.title());
    await expect (page).toHaveTitle('Swag Labs')

    await page.locator(username).fill('standard_user');
    await page.locator(password).fill('secret_sauce');
    await page.locator(loginButton).click();
    console.log(await page.title);
    await expect (page).toHaveTitle('Swag Labs')
   
    const dropdown =  page.locator(".product_sort_container");
    await dropdown.selectOption("Price (low to high)")

    // await page.pause();

    const prodTitles = page.locator(".inventory_item_name ") 
    console.log(await prodTitles.nth(0).textContent()); // first element:this step will make sure page is loaded
    // add assertion 
    const productscount = await page.locator(".inventory_item_description").count();
    for (let i=0; i<productscount ; i++){
        // identify product price:
        const price = await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_price").textContent();
        const priceNumber = parseFloat(price.replace("$", "").trim());
            
        // Save price
        priceList.push(priceNumber);      
    
    }
    console.log("Price list:" ,priceList );
    // Copy and sort the array ascending
    const sorted = [...priceList].sort((a, b) => a - b);

    // Assert that the original array matches the sorted one
    await expect(priceList).toEqual(sorted);





})
;



// Open Product details page
test('Products page -  Open Product details page',async ({page})=>{
    const productName = "Sauce Labs Onesie"
    await page.goto(URL);
    console.log(await page.title);
    await expect (page).toHaveTitle('Swag Labs')

    await page.locator(username).fill('standard_user');
    await page.locator(password).fill('secret_sauce');
    await page.locator(loginButton).click();
    console.log( await page.title());
    console.log("User is now logged in");
    await (page.locator(".inventory_item_description").last().waitFor()); // identify products - all products details and buttons
    const productscount = await page.locator(".inventory_item_description").count();
    console.log("Products count:", productscount);
    // products list:
    for (let i=0; i<productscount ; i++){
        // products name:
        // console.log(await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name ").textContent());
        if ( (await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name ").textContent()) === productName ){
            await page.locator(".inventory_item_description").nth(i).locator("[name*='add-to-cart']").click();
            console.log("Open product page: ", productName);
            await  page.locator(".inventory_item_description").nth(i).locator("[data-test*='link']").click();
            console.log("Verify product name on product details page - should be ", productName);
            await expect (page.locator("[data-test='inventory-item-name']")).toHaveText(productName) ; 
            // next element will not be visible, because now user is on product details page, not on inventory page:
            break ;

        }
    }
    


})
;

// Add product to cart - Remove button is displayed
test('Products page -  Add specific product - Remove button is displayed',async ({page})=>{
    const productName = "Sauce Labs Onesie"
    await page.goto(URL);
    console.log(await page.title);
    await expect (page).toHaveTitle('Swag Labs')

    await page.locator(username).fill('standard_user');
    await page.locator(password).fill('secret_sauce');
    await page.locator(loginButton).click();
    console.log( await page.title());
    console.log("User is now logged in");
    await (page.locator(".inventory_item_description").last().waitFor()); // identify products - all products details and buttons
    const productscount = await page.locator(".inventory_item_description").count();
    console.log("Products count:", productscount);
    // products list:
    for (let i=0; i<productscount ; i++){
        // products name:
        // console.log(await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name ").textContent());
        if ( (await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name ").textContent()) === productName ){
            await page.locator(".inventory_item_description").nth(i).locator("[name*='add-to-cart']").click();
            // await page.pause();
            console.log("Product added to cart:", productName);

            // now Remove button is displayed
            await expect (page.locator(".inventory_item_description").nth(i).locator("[name*='add-to-cart']")).not.toBeVisible();
            await expect (page.locator(".inventory_item_description").nth(i).locator("[name*='remove']")).toBeVisible();
            console.log((await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name ").textContent()) , " - Remove button is displayed");

        }
        else { // Add to cart button is disalyed
            await expect (page.locator(".inventory_item_description").nth(i).locator("[name*='add-to-cart']")).toBeVisible();
            await expect (page.locator(".inventory_item_description").nth(i).locator("[name*='remove']")).not.toBeVisible();
            console.log((await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name ").textContent()) , " - Add to cart button is displayed");
        }
        
    }
    


})
;

// Remove product from cart
// Shopping cart button opens cart page
// 