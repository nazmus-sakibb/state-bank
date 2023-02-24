function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');

    // get previous deposit total
    const previousDepositTotal = getElementValueById('deposit-total');
    

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    
})