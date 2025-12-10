//1:Student Marks
let marks=[80,90,70,85,95];
let average=marks.reduce((a,b)=>a+b)/marks.length;
console.log("Average Marks:", average);


//2:Filter Even Numbers
let numbers=[1,2,3,4,5,6,7,8,9];
let evenNumbers=numbers.filter(n=>n%2===0);
console.log("Even Numbers:", evenNumbers);


//3:Shopping Cart
let cart={
  item:"Laptop",
  price:45000,
  quantity:2
};
let totalBill=cart.price*cart.quantity;
console.log("Total Bill:",totalBill);


//4:Movie List
let movies=["Avatar","Inception","Titanic"];
movies.push("Jawan");
movies.pop();
for (let movie of movies) {
  console.log(movie);
}


//5:User Profile JSON
let user={name:"Aman",age:21,course:"JS"};
let userJSON=JSON.stringify(user);
let userObject=JSON.parse(userJSON);
console.log(userJSON);
console.log(userObject);


//6:Find Max Number in Array
let arr=[10,40,25,80,15];
let max=arr[0];
for (let i=1;i<arr.length;i++) {
  if (arr[i]>max) {
    max=arr[i];
  }
}
console.log("Max Number:",max);


//7:Transform Names Using map()
let names=["ram","shyam","mohan"];
let upperNames=names.map(name=>name.toUpperCase());
console.log(upperNames);
