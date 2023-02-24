document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');

    // get previous deposit total
    const previousDepositTotal = getElementValueById('deposit-total');
    

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    
    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance by usuing the function
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;


    // set balance total
    setTextElementValueById('balance-total', newBalanceTotal);
})