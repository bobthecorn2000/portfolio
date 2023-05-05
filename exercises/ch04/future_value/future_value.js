"use strict";

const $ = selector => document.querySelector(selector);
const getErrorMsg = lbl => `${lbl} must be a valid number.`;
const getErrorMsg2 = (lbl2, getmax) => `${lbl2} must be greater than 0 and less then ${getmax}`;
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};
const calcFV = () => {
    const inv = parseFloat($("#investment").value);
    const rate = parseFloat($("#rate").value);
    const years = parseFloat($("#years").value);
    
    if (isNaN(inv)) {
        alert(getErrorMsg("investment"));
        focusAndSelect("#investment");
    } else if (isNaN(rate) ) {
        alert(getErrorMsg("rate"));
        focusAndSelect("#rate");
    } else if (isNaN(years) ) {
        alert(getErrorMsg("years"));
        focusAndSelect("#years");
    }
        else if (inv < 0 || inv >= 100000) {
        alert(getErrorMsg2("investment",100000));
        focusAndSelect("#investment");
        }
            else if (rate < 0 || rate >= 15) {
        alert(getErrorMsg2("Rate",15));
        focusAndSelect("#rate");
    } 
    
    else if (years< 0 || years >= 50) {
        alert(getErrorMsg2("Years",50));
        focusAndSelect("#years");
    }
    else {
    
    let futureValue = inv;
    for (let i = 1; i <= years; i++) {
        let intr = futureValue * rate / 100;
        futureValue = futureValue + intr;
        
    }
    $("#future_value").value = futureValue.toFixed(2);}
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", calcFV);
});
