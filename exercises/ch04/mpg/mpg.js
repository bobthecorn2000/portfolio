"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number.`;
const getErrorMsg2 = lbl2 => `${lbl2} must be greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles)) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (isNaN(gallons) ) {
        alert(getErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    }
        else if (miles <= 0) {
        alert(getErrorMsg2("Miles driven"));
        focusAndSelect("#miles");
        }
            else if (gallons <= 0) {
        alert(getErrorMsg2("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};
const clearentries = () => {$("#mpg").value = "";
                           $("#gallons").value = "";
                           $("#miles").value = "";}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearentries);
    $("#miles").addEventListener("dblclick", clearentries);
});