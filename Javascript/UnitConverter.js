console.log("Unit Converter");
function convert()
{
    let inputValue = document.getElementById('inputValue');
    let convert = document.getElementById('convert')
    let cmtom = document.getElementById('cm-to-m')
    let mtokm = document.getElementById('m-to-km')
    let kmtoMiles = document.getElementById('km-to-Miles')
    let displayresult = document.getElementById('result');


    let result;
    if(inputValue.value > 0)
    {
        console.log('Its working')
        if(cmtom.checked)
        {
            result = inputValue.value / 100;
            displayresult.textContent = `${inputValue.value} cm = ${result} mtr`;
        }
        else if(mtokm.checked)
        {
            result = inputValue.value / 1000;
            displayresult.textContent = `${inputValue.value} mtr = ${result} km`;
        }
        else if(kmtoMiles.checked)
        {
            result = inputValue.value / 1600;
            displayresult.textContent = `${inputValue.value} km = ${result} miles`;
        }
        

    }
    else{
            displayresult.textContent = 'Please enter positive number';
        }
}