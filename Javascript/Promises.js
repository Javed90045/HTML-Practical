console.log("Promises");

var aven = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Mission Successfull");
  } else {
    reject("Unsuccessfull");
  }
})
  .then((value) => {
    console.log(value);
    return value + "hello worl";
  })
  .then((data) => {
    console.log("data is ", data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

console.log("Async await ");

function avenger(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside Heroic Function");
      resolve(name);
    }, 2000);
  });
}

function heroic(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside Heroic Function");
      resolve(name);
    });
  });
}

function enemy(en) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside Enemy Function");
      resolve(en);
    });
  });
}

async function mission() {
  let nm = await avenger("steve");
  console.log(nm);
  let hm = await heroic(nm);
  if (hm == "steve") {
    hm = "red skull";
    console.log("He is a hero");
  } else {
    console.log("He is not a hero");
  }
  let en = await enemy(hm);
  if (en == "red skull") {
    console.log("Meet me on Vlomir");
  } else {
    console.log("No enemy is there");
  }
}

mission();