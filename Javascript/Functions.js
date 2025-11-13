console.log("Functions");

let arr = [];
let n = prompt("Enter Number");
for(let i =1; i<=n; i++)
{
    arr.push(i);
}
console.log(arr);


// Age should be greater than 18
let adult = arr.filter((age)=>{
     return age >= 18;
});
console.log(adult);

// Perform square operation on array element
let add = arr.map((ele)=>{
    return ele * ele;
});

console.log(add);

// Sum of n number
let sum = arr.reduce((a,b)=>{
    return a+b;
});

console.log(sum);

// Add 1 with every element of array
arr.forEach((_,ele)=>{
     arr[ele]+=1;
});

console.log(arr);


