console.log("Ternary Operator");

console.log("WAP to check number is positive or negative");

let x = 0;
let res = (x>0)?"positive":"negative";
console.log(res);

res = (x>0)?"positive":(x<0)?"negative":"zero";
console.log(res);

console.log("WAP to check your grade card");

let marks = 39;

res = (marks>=81 && marks<=100)?"A grade":(marks>=61 && marks<=80)?"B grade":(marks>=40 && marks<=60)?"C grade":"Fail";
console.log(res);

let n = 39;
res = (n%2 == 0)?"even":"odd";
console.log(res);