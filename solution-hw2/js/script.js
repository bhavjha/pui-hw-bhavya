

// 6 objects - 1 for each type of roll 
let rolls = {
    'originalCinnamonRoll': {
        rolltype: "Original cinnamon roll",
        price: 2.49,
        glazing: "",
        packSize: 0,
    },
    'appleCinnamonRoll' : {
        rolltype: "Apple cinnamon roll",
        price: 3.49,
        glazing: "",
        packSize: 0,
    },
    'raisinCinnamonRoll' : {
        rolltype: "Raisin cinnamon roll",
        price: 2.99,
        glazing: "",
        packSize: 0,
    },
    'walnutCinnamonRoll' : {
        rolltype: "Walnut cinnamon roll",
        price: 3.49,
        glazing: "",
        packSize: 0,
    },
    'doubleChocolateCinnamonRoll' : {
        rolltype: "Double-chocolate cinnamon roll",
        price: 3.99,
        glazing: "",
        packSize: 0,
    },
    'strawberryCinnamonRoll' : {
        rolltype: "Strawberry cinnamon roll",
        price: 3.99,
        glazing: "",
        packSize: 0,
    }

}


//connecting glazing options and its price adaptation
const glazingOptions = {
    "Keep Original" : 0.00,
    "Sugar Milk" : 0.00,
    "Vanilla Milk" : 0.50,
    "Double chocolate" : 1.50
} 

// for packsize
const packSize = {
    1:1,
    3:3,
    6:5,
    12:10
}


function addGlazingOptions(glazeDropDown) {

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

    for (const [key, value] of Object.entries(glazingOptions)) {
        //console.log(`${key}: ${value}`);
        let glazeOp = document.createElement('option');
        glazeOp.text = key;
        glazeOp.value = value;
        //console.log('g drop =', glazeOp.text);
        glazeDropDown.add(glazeOp);
      }
}

function glazingOptionsDisplay() {

    let glazeDropDown = document.getElementById("glaze-original");
    addGlazingOptions(glazeDropDown);

    glazeDropDown = document.getElementById("glaze-apple");
    addGlazingOptions(glazeDropDown);  
    
    glazeDropDown = document.getElementById("glaze-raisin");
    addGlazingOptions(glazeDropDown);

    //add for 2nd row items and remove their original html dropdown items
    glazeDropDown = document.getElementById("glaze-walnut");
    addGlazingOptions(glazeDropDown);

    glazeDropDown = document.getElementById("glaze-double-chocolate");
    addGlazingOptions(glazeDropDown);

    glazeDropDown = document.getElementById("glaze-strawberry");
    addGlazingOptions(glazeDropDown);
}

glazingOptionsDisplay();

let pr = 0;
let pr_text = "";
let pa = 0;
let no_items = 0;
let items_total = 0.0;


function glazingChange(element) {
    // get price value of selected glazing option
    pr = element.value;
    //https://stackoverflow.com/questions/14976495/get-selected-option-text-with-javascript
    pr_text = element.options[element.selectedIndex].text;
    console.log('selected glaze was -', pr_text, pr);
  }

function packSizeChange(element) {
    // get chosen pack size
    pa = element.innerText || element.textContent;
}

 // add your code to do update the price ... (basePrice + glazingPrice) * packPrice
   
function popUpSummary(roll,glaze,pack,total){
    let popup = document.getElementById("popupSummary");
    popup.innerHTML = "<b>" +roll + "</b>" + "</br>" + glaze + "<br/>" + "Pack of " + pack + "<br/>Price: $" + total;
    popup.classList.toggle("show")
}

function popUpHide() {
    let popup = document.getElementById("popupSummary");
    popup.style.display='none';
}

function addToCart(idOfRollPrice){
    let cost = document.getElementById(idOfRollPrice); //gets name of roll
    let costValue = cost.innerText.slice(2) || cost.textContent.slice(2);
    // console.log(typeof pr, pr,typeof pa, pa, typeof costValue, costValue);    
    //all strings so convert to Int
    //https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
    finalCost = ( parseFloat(costValue) + parseFloat(pr) ) * parseFloat(pa);
    cost.innerHTML = '$ ' + finalCost;

    //add the roll with its configured glazing and packSize to a list that represents the cart items
    let cart = document.getElementById("cart-summary-items");
    no_items += 1;
    cart.innerHTML = no_items + " items";
    let cartTotal = document.getElementById("cart-summary-items-total"); 
    items_total += finalCost;
    cartTotal.innerHTML = "Total: $" + items_total.toFixed(2);

    //call Pop up for 3 seconds
    popUpSummary(rolls[idOfRollPrice].rolltype, pr_text, pa, finalCost);
    setTimeout(popUpHide,3000);




    pr = 0;
    pr_text = "";
    pa = 0;
}







