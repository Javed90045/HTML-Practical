console.log("Object is javascript");
let info = {
    name:"Mayur",
    Number: 654654,
    address: {city:"mumbai", state:"Maharashtra"},
    addition: function (a,b){
        return a+b;
    }
}

console.log(info);
console.log(info.name);
console.log(info.address.city);
console.log(info.addition(40,50));

function avenger(name, lname){
    return {
        f_name: name,
        l_name: lname
    }
}

let a = avenger('steve','roger');
let a2 = avenger('sau','malhotra');

console.log(a);
console.log(a2);




