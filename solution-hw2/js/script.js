

// 6 objects - 1 for each type of roll 

let originalCinnamonRoll = {
    rolltype: "Original cinnamon roll",
    price: 2.49,
    glazing: 0,
    packSize: 0,
};

let appleCinnamonRoll = {
    rolltype: "Apple cinnamon roll",
    price: 3.49,
    glazing: 0,
    packSize: 0,
};

let raisinCinnamonRoll = {
    rolltype: "Raisin cinnamon roll",
    price: 2.99,
    glazing: 0,
    packSize: 0,
};

let walnutCinnamonRoll = {
    rolltype: "Walnut cinnamon roll",
    price: 3.49,
    glazing: 0,
    packSize: 0,
};

let doubleChocolateCinnamonRoll = {
    rolltype: "Double-chocolate cinnamon roll",
    price: 3.99,
    glazing: 0,
    packSize: 0,
};

let strawberryCinnamonRoll = {
    rolltype: "Strawberry cinnamon roll",
    price: 3.99,
    glazing: 0,
    packSize: 0,
};

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
let pa = 0;

function glazingChange(element) {
    // get price value of selected glazing option
    const priceChange = element.value; //remove const since using global
    pr = element.value;
  }

function packSizeChange(element) {
    // get chosen pack size
    const packChange = element.innerText || element.textContent; //remove const since using global
    pa = element.innerText || element.textContent;
}

 // add your code to do update the price ...
  //(basePrice + glazingPrice) * packPrice
   
function popUpSummary(){
    var popup = document.getElementById("popupSummary");
    popup.classList.toggle("show")
}

function addToCart(idOfRollPrice){
    let cost = document.getElementById(idOfRollPrice);
    let costValue = cost.innerText.slice(2) || cost.textContent.slice(2);
    // console.log(typeof pr, pr,typeof pa, pa, typeof costValue, costValue);    
    //all strings so convert to Int
    //https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript
    cost.innerHTML = '$ ' + ( parseFloat(costValue) + parseFloat(pr) ) * parseFloat(pa);

    //add the roll with its configured glazing and packSize to a list that represents the cart items

    //call Pop up for 3 seconds
}







