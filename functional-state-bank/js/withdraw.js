/**
 * 1. add withdraw button event handler
 * 2. get withdraw amount by getInputValueById function
 * 3. get previous withdraw amount
 * 4. calculate and set the withdraw total
 * 5. get previous balance total
 */
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
    setTextElementValueById('balance-total', newBalanceTotal);
})