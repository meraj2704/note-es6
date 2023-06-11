const friends = ['zayed','runa','pushpita','imran','meraj'];
const firstLetter = friends.map(x => x[0]);
// console.log(firstLetter);
const size = friends.map(si =>si.length);
// console.log(size);
const products = [
    {id:1, name:'laptop', price: 40000},
    {id:1, name:'phone', price: 24000},
    {id:1, name:'monitor', price: 14000},
];
const laptopName = products.map(x => x.name);
console.log(laptopName);
const productPrice = products.map(price => price.price);
console.log(productPrice);