let body = document.body;

let inputDiv = document.createElement('div');
let totalItems = document.getElementById('total-items');
let totalPriceButton = document.getElementById('total-button')
let inputFirst = document.createElement('input');
let inputTwo = document.createElement('input');
let inputTree = document.createElement('input');
let inputFour = document.createElement('input');


let allInput = [inputFirst, inputTwo, inputTree, inputFour];
body.append(inputDiv);

for (i = 0; i < allInput.length; i++) {
    inputDiv.append(allInput[i]);
    // allInput[i].innerHTML = document.createElement('input');

}