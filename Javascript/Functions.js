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
 // WAP to print factorial of an array element using MAP method
 console.log("WAP to print factorial of an array element using MAP method")
 let arr1 = [1,2,3,4,5];
let newArr = arr1.map((ele)=>{
    let fact =1;
    for(let i=1; i<=ele; i++)
    {
        fact*= i;
    }
    return fact;
});

console.log(newArr);


