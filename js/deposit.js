/**
 * 1. add event listener to the deposit button
 * 2. get input value from deposit field
 * 3. clear deposit input field
 */

// step 1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    
    // step 3
    depositField.value = '';

    // step 4
})
