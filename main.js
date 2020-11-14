  
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let bAmount = document.getElementById('bAmnt').value;
    let tPercentage = document.getElementById('tPer').value;

    
    let tAmount = document.getElementById('tAmnt').value = (tPercentage/100) * bAmount;
    document.getElementById('tBill').value = parseFloat(bAmount) + parseFloat(tAmount);

})

document.getElementById("tAmnt").disabled = true;
document.getElementById("tBill").disabled = true;