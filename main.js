// const items = [
//   { name: "Bike", price: 100 },
//   { name: "TV", price: 200 },
//   { name: "Album", price: 10 },
//   { name: "Book", price: 5 },
//   { name: "Phone", price: 500 },
//   { name: "Computer", price: 1000 },
//   { name: "Keyboard", price: 25 },
// ];

// FILTER
// const filteredItems = items.filter((item) => {
//   return item.price >= 100
// })

// const filteredItems = items.filter(item => item.price <= 100)

// console.log(items)
// console.log(filteredItems)

// MAP
// const itemPrices = items.map((item) => {
//   return item.price
// })

// const itemPrices = items.map(item => item.price)
// const itemNames = items.map(item => item.name)

// console.log('Item Prices',itemPrices)
// console.log('Item Prices',itemNames)

// FIND
// const findItem = items.find(item => item.name === 'Book')
// console.log(findItem)

// FOREACH
// items.forEach((item) => {
//   console.log("Name:", item.name, " Price: ", item.price);
// });

// SOME
// const hasInexpensiceItems = items.some((item) => item.price >= 100);
// console.log(hasInexpensiceItems);

// const hasInexpensiceItems2 = items.some((item) => item.price <= 0);
// console.log(hasInexpensiceItems2);

// EVENT
// const Every = items.every((item) => item.price <= 100); // false
// const Every = items.every((item) => item.price <= 1=00); // true
// console.log(Every);

// REDUCE
// const total = items.reduce((currentTotal, item) => {
//   return item.price + currentTotal;
// }, 0);
// console.log(total);

// INCLUDES
// const items2 = [1, 2, 5, 76, 13, 14];

// const includes = items2.includes(2); // true
// const includes = items2.includes(3); // false
// console.log(includes);
