/**
 * 1. add event listener to the deposit button
 * 2. get input value from deposit field
 * 3. clear deposit input field
 * 4. get the previous deposit total
 * 5. calculate and set the new deposit total
 * 6. get current balance total
 * 7. calculate nes balance and set it to the balance element
 */

// step 1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    
    // step 3
    depositField.value = '';

    // step 4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    

    // step 5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;


    // step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
})
