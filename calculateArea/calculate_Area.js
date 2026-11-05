let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 let area = length * width;

  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

}

let firstGroceryAmount;
let secondGroceryAmount;
let thirdGroceryAmount;

function groceryTracker() {
    firstGroceryAmount = parseFloat(document.getElementById('grocery1').value)
    secondGroceryAmount = parseFloat(document.getElementById('grocery2').value)
    thirdGroceryAmount = parseFloat(document.getElementById('grocery3').value)

    const totalAmount = firstGroceryAmount + secondGroceryAmount + thirdGroceryAmount

    document.getElementById('grocery-amount').innerText = `The total amount is :$ ${totalAmount}`

}
