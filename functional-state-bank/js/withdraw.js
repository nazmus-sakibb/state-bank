/**
 * 1. add withdraw button event handler
 * 2. get withdraw amount by getInputValueById function
 * 3. get previous withdraw amount
 * 4. calculate and set the withdraw total
 */
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-total');
})