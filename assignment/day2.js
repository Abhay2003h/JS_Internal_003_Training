//Sum of two numbers
let a=10
let b=20;
console.log(a+b);



//Print "Hello <name>"
let name = "Abhi";
console.log("Hello " + name);



//Even/Odd
let n = 7;
console.log(n % 2 === 0 ? "Even" : "Odd");



// 4. Celsius → Fahrenheit
let c = 25;
let f = (c * 9/5) + 32;
console.log(f);



// 5. Max among 3 numbers
let x = 10, y = 40, z = 25;
console.log(Math.max(x, y, z));



// 6. Find string length
let str = "JavaScript";
console.log(str.length);



// 7. Toggle boolean
let flag = true;
flag = !flag;
console.log(flag);



// 8. Concatenate strings
let s1 = "Hello";
let s2 = "World";
console.log(s1 + " " + s2);



// 9. Positive / Negative / Zero
let num = -5;
console.log(num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero");



// 10. var / let / const example
var a1 = 10;
let b1 = 20;
const c1 = 30;
console.log(a1, b1, c1);



// 11. Multiplication table
let t = 5;
for (let i = 1; i <= 10; i++) console.log(t * i);



// 12. Sum of first 10 natural numbers
let sum = 0;
for (let i = 1; i <= 10; i++) sum += i;
console.log(sum);



// 13. Switch case → Day name
let d = 3;
switch(d){
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Invalid");
}



// 14. Function → Factorial
function fact(n){
  let f = 1;
  for(let i=1;i<=n;i++) f*=i;
  return f;
}
console.log(fact(5));



// 15. Function → Voting eligibility
function vote(age){
  return age >= 18 ? "Eligible" : "Not Eligible";
}
console.log(vote(20));



// 16. Prime number check
function isPrime(n){
  if(n<2) return false;
  for(let i=2;i<n;i++) if(n%i===0) return false;
  return true;
}
console.log(isPrime(7));



// 17. Sum of digits
let n1 = 123, s = 0;
while(n1>0){ s += n1%10; n1 = Math.floor(n1/10); }
console.log(s);



// 18. Reverse string without reverse()
function reverseStr(str){
  let r = "";
  for(let i=str.length-1;i>=0;i--) r+=str[i];
  return r;
}
console.log(reverseStr("hello"));



// 19. Grade system
let marks = 82;
if(marks>=90) console.log("A");
else if(marks>=75) console.log("B");
else if(marks>=50) console.log("C");
else console.log("Fail");



// 20. Calculator using operator
function calc(a,b,op){
  if(op==="+") return a+b;
  if(op==="-") return a-b;
  if(op==="*") return a*b;
  if(op==="/") return a/b;
}
console.log(calc(10,5,"*"));



// 21. Count vowels in string
function countVowels(str){
  let c = 0;
  for(let ch of str) if("aeiouAEIOU".includes(ch)) c++;
  return c;
}
console.log(countVowels("education"));



// 22. Fibonacci series up to n
let a2=0,b2=1,n2=10;
for(let i=1;i<=n2;i++){
  console.log(a2);
  let c2=a2+b2;
  a2=b2;
  b2=c2;
}



// 23. Min and Max from array
function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)];
}
console.log(minMax([4,2,8,1,9]));



// 24.Simple Menu Program using switch case
let ch=2,a3=10,b3=5;
switch(ch){
  case 1:console.log(a3+b3); break;
  case 2:console.log(a3-b3); break;
  case 3:console.log(a3*b3); break;
  case 4:console.log(a3/b3); break;
}



// 25. Armstrong number
function isArmstrong(n){
  let temp=n,sum=0;
  while(temp>0){
    let r=temp%10;
    sum+=r*r*r;
    temp=Math.floor(temp/10);
  }
  return sum===n;
}
console.log(isArmstrong(153));
