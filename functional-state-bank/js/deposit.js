function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-feild');
})