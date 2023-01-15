// at the beginning, reset the total to 0
let total = 0;

let elements = document.querySelectorAll(".productInput");

let values = [0, 0, 0];
// let prices = [10, 20, 30];
let prices = Array.from(elements).map(function(elem) {
    return elem.dataset.price;
});

function one(event) {

    // get all the class="productInput" elements
    let elements = document.querySelectorAll(".productInput");

    // fill the array with the values
    values = Array.from(document.querySelectorAll(".productInput")).map(x => Number(x.value));

    // take value 0
    values[0] = Number.parseInt(document.getElementById("productQuantity0").value);
    // take value 1
    values[1] = Number.parseInt(document.getElementById("productQuantity1").value);
    // take value 2
    values[2] = Number.parseInt(document.getElementById("productQuantity2").value);

    // sum the values
    // let sum = values[0] + values[1] + values[2];
    // let cycle = 0;
    let sum = values.reduce(function(partialSum, a, cycle) {
        let price = prices[cycle];
        console.log("cycle=" + cycle)
        console.log("partial sum: " + partialSum);
        console.log("going to add " + a);
        console.log("price: " + prices[cycle]);
        /// ----------------------------
        let result = partialSum + a * price;
        /// ----------------------------
        console.log("the result is " + result);
        console.log("Done!");

        // cycle=cycle+1;
        return result;
    }, 0);

    // put the sum in the span
    document.getElementById("total").innerHTML = sum;
}

// add event listeners on the inputs
Array.from(elements).map(function(elem) {
    elem.addEventListener("change", one);
});

document.getElementById("productQuantity0").addEventListener("change", one);
document.getElementById("productQuantity1").addEventListener("change", one);
document.getElementById("productQuantity2").addEventListener("change", one);


document.getElementById("productQuantity0").addEventListener("keydown", function(event) {
    console.log(event.target.value);
});

// set the span to the amount

document.getElementById("total").innerHTML = total;