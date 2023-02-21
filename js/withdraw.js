/**
 * 1. add event handler with withdraw button
 * 2. get the withdraw amount
 * 3. clear the withdraw input field
 * 4. get previous withdraw total
 * 5. calulate and set total withdraw
 * 6. get previous balance
 */


// step 1 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    
    // step 3
    withdrawField.value = '';

    // step 4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);


    // step 5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
})