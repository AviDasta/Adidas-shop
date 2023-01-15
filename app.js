// total item price
let totalItems = document.getElementById('total-items');
// total price button
let totalPriceButton = document.getElementById('total-button')
    // all four input
let inputFirst = document.querySelectorAll('input')[0];
let inputTwo = document.querySelectorAll('input')[1];
let inputTree = document.querySelectorAll('input')[2];
let inputFour = document.querySelectorAll('input')[3];

// let allInput = [inputFirst, inputTwo, inputTree, inputFour];

// for (i = 0; i < allInput.length; i++) {
//     allInput[i].innerHTML = document.createElement('input');

// };
let deletDivOne = document.getElementById('x-button-one');
deletDivOne.addEventListener('click', function() {

    let firstDiv = document.getElementById('first-div');
    firstDiv.remove();
})

let deletDivTwo = document.getElementById('x-button-two');
deletDivTwo.addEventListener('click', function() {

    let twoDiv = document.getElementById('second-div');
    twoDiv.remove();
})

let deletDivThree = document.getElementById('x-button-three');
deletDivThree.addEventListener('click', function() {

    let threeDiv = document.getElementById('third-div');
    threeDiv.remove();
})

let deletDivFour = document.getElementById('x-button-four');
deletDivFour.addEventListener('click', function() {

    let fourDiv = document.getElementById('fourth-div');
    fourDiv.remove();
})

function pricesNumberFirst() {


    //  input 1 value
    let adicolor = [Number(inputFirst.value)];
    //  first item price
    let adicolorPrice = 55.00;
    //   reduce func
    let newNumber = adicolor.reduce(function(prevValue, currentValue) {
        return prevValue * currentValue;
    }, adicolorPrice);

    //  input 2 value
    let badge = [Number(inputTwo.value)];
    //  second item price
    let badgePrice = 25.00;

    //   reduce func
    let newNumberTwo = badge.reduce(function(prevValueTwo, currentValueTwo) {
        return prevValueTwo * currentValueTwo;
    }, badgePrice);


    //  input 3 value
    let black = [Number(inputTree.value)];
    //  three item price
    let blackPrice = 25.00;
    //   reduce func
    let newNumberThree = black.reduce(function(prevValueThree, currentValueThree) {
        return prevValueThree * currentValueThree;
    }, blackPrice);

    //  input 4 value
    let shoes = [Number(inputFour.value)];
    //  fourth item price
    let shoesPrice = 162.00;

    //   reduce func
    let newNumberFour = shoes.reduce(function(prevValueFour, currentValueFour) {
        return prevValueFour * currentValueFour;
    }, shoesPrice);


    totalItems.innerHTML = newNumber + newNumberTwo + newNumberThree + newNumberFour;

};


totalPriceButton.addEventListener('click', pricesNumberFirst);

let deletFirst = document.querySelectorAll('.x-button')[0];
let deletTwo = document.querySelectorAll('.x-button')[1];
let deletThree = document.querySelectorAll('.x-button')[2];
let deletFour = document.querySelectorAll('.x-button')[3];

let xButton = [deletFirst, deletTwo, deletThree, deletFour];

for (let i = 0; i < xButton.length; i++) {

}