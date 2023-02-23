/**
 * 1. add event handler with withdraw button
 * 2. get the withdraw amount
 * 3. clear the withdraw input field
 * 4. get previous withdraw total
 * 5. calulate and set total withdraw
 * 6. get previous balance
 * 7. calculate and set the new balance
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

    // step 6
    const balanceElement = document.getElementById('balance-total')
    const previousBalanceTotal = parseFloat(balanceElement.innerText);

    // step 7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})