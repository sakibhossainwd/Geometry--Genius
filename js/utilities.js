function inputField(inputId){
    const inputFieldValue = document.getElementById(inputId);
    const inputFieldNumber = inputFieldValue.value;
    return inputFieldNumber;
}
function getElementValueById(elementId){
    const getElementById = document.getElementById(elementId);
    const elementValueString = getElementById.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
function addElement(elementId, value){
    const addElementValue = document.getElementById(elementId);
    addElementValue.innerText = value;
    return addElementValue;
}
function setCalculationResul(elementId, result){
    const calculationResult = document.getElementById(elementId);
    calculationResult.innerText = result;
    return calculationResult;
}
