// console.log("For loop");
// console.log("Print table of user given number");
// let num = prompt("Enter a number to print table");

// for(let i=1; i<=10; i++){
//     console.log(`${num}*${i}=${Number(num)*i}`);
// }


console.log("Nested For loop");

let num = prompt("Enter a number");

for(let i=1; i<=num; i++)
{
    for(let j=1; j<=10; j++)
    {
        console.log(i*j);
    }
    console.log("\n");
}