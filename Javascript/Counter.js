console.log("Counter Project");
let display = document.getElementById("display");
let increase = document.getElementById("inc");
let reset = document.getElementById("reset");
let decrease = document.getElementById("desc");

let v = display.value;

function dec() {
  if (v <= 0) {
    decrease.setAttribute("disabled", true);
  } else {
    decrease.removeAttribute("disabled");
  }
}

dec();
increase.onclick = () => {
  v++;
  display.value = v;
  dec();
};

decrease.onclick = () => {
  if (v <= 0) {
  } else {
    v--;
    display.value = v;
  }
  dec();
};

reset.onclick = () => {   
  v = 0;
  display.value = v;
  dec();
};
