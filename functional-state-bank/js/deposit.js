function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    element.innerText = '';
    return elementValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-feild');

    // get previous deposit total
    const previousDepositTotal = getElementValueById('deposit-total');
    console.log(newDepositAmount, previousDepositTota);
})