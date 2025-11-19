console.log("Promises");

var aven = new Promise((resolve, reject)=>{
    let success = true;
    if(success)
    {
        resolve('Mission Successfull');
    }
    else{
        reject("Unsuccessfull");
    }
})
.then(
    value=>{console.log(value)
        return value + 'hello worl'
    })
.then(
    data=>{
        console.log('data is ', data);
    }
)
.catch(
    error=>{
        console.log(error);
    }
)
.finally(
    ()=>{
        console.log('finally');
    }
)