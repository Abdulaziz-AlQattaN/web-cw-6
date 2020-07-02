// var firstOne = ["Menawer", "Moudhi", "Mohammed", "Hussain", "Rahaf", "Hussain"];

// function logger() {
//   console.log(firstOne);
// }

// logger();

//----------------------------------------------------------------------------

// var Temperature = [30, 35, 40, 45, 50, 52];

// var Temperature2 = [];

// var i;

// function hottestDays() {
//   for (i = 0; i < Temperature.length; i++) {
//     if (Temperature[i] > 40) {
//       Temperature2.push(Temperature[i]);
//     }
//   }
//   console.log(Temperature2);
// }
// hottestDays();

//----------------------------------------------------------------------------
// let bybooks = [
//   {
//     bookid: 0,
//     bookname: "poor dad rich dad",
//   },
//   {
//     bookid: 1,
//     bookname: "Launch",
//   },
//   {
//     bookid: 2,
//     bookname: "14000 Things To be Happy about",
//   },
// ];

// function getBookById() {
//   let i;
//   let pro = parseInt(prompt("Choose Your book id"));
//   let Foundbook = false;

//   for (i = 0; i < bybooks.length; i++) {
//     if (pro == bybooks[i].bookid) {
//       alert("Your book is avaliable");
//       Foundbook = true;
//       break;
//     }
//   }
//   if (Foundbook == false) {
//     alert("Your book isn't avaliable");
//   }
// }

let product = prompt("السلعة: ");
let price = parseInt(prompt("السعر"));
let quantity = parseInt(prompt("الكمية"));

let products = [];
let prices = [];
let quantities = [];

while (product != "done") {
  products.push(product);
  prices.push(price);
  quantities.push(quantity);

  if (product != "انتهيت") {
    product = prompt("السلعة: ");
    price = parseInt(prompt("السعر"));
    quantity = parseInt(prompt("الكمية"));
  }
}
