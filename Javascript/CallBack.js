console.log("Callback");

function avenger(name, Callback)
{
    setTimeout(()=>{
        console.log("Avenger function running");
        Callback(name);
    }, 2000);
}

function heroic(name, Callback)
{
    setTimeout(()=>{
        console.log("heroic function running");
        Callback(name);
    }, 2000);
}

let data = avenger("steve", (nm)=>{
    console.log(nm);
    heroic(nm, (name)=>{
        console.log(name);
        console.log("War End");
    })

})