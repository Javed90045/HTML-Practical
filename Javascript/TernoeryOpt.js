console.log("Ternary Operator");
let x = 0;
let res = (x>0)?"positive":"negative";
console.log(res);

res = (x>0)?"positive":(x<0)?"negative":"zero";
console.log(res);
