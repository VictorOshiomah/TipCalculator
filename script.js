let output = document.getElementById("tip-amt");

function calTip() {
    let input1 = document.getElementById("bill-total").value;
    let input2 = document.getElementById("tip-percent").value;
    
    let totalBill = parseFloat(input1);
    let tipPercent = parseFloat(input2);

    let tipAmount = (tipPercent / 100) * totalBill;

    output.textContent = "Tip Amount: $" + Math.round(tipAmount)
}