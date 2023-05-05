"use strict";
function getdate() {
  let today = new Date();
    let currentdate = today.toLocaleDateString()
    let  currenttime = today.getHours() + ":" + today.getMinutes();
    let fullstring = "today is " + currentdate +" at " + currenttime;
    return fullstring;
}


const getRandomNumber = max => {
    let rand = null;
    if (!isNaN(max)) {
        rand = Math.random();
        rand = Math.floor(rand * max);
        rand = rand + 1;
    }
    return rand;
};

const calculateFutureValue = (investment, rate, years) => {
    let futureValue = investment;
    let i = 1
    for (i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
        if (futureValue == "Infinity"){
       // alert("future value = infinity \n i =" + i);
        i = years ;   
    }
        
    }
    //alert(futureValue.toFixed(2));
    futureValue = formatfuturevalue(futureValue);
    return futureValue;
};
const formatfuturevalue = (futureValue) => {
    return new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD'
  }).format(futureValue);
}

$(document).ready( () => {
    
    $("#calculate").click( () => {
        /*const investment = parseFloat($("#investment").val());
        const rate = parseFloat($("#rate").val());
        const years = parseFloat($("#years").val());*/
        const investment = getRandomNumber(50000);
        const rate = getRandomNumber(15);
        const years = getRandomNumber(50);
       

        let isValid = true;
        if (isNaN(investment) || investment <= 0) {
            $("#investment").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#investment").next().text("");
        }

        if (isNaN(rate) || rate <= 0) {
            $("#rate").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#rate").next().text("");
        }

        if (isNaN(years) || years <= 0) {
            $("#years").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#years").next().text("");
        }

        if (isValid) {
            let futureValue = calculateFutureValue(investment, rate, years);
            $("#future_value").val(futureValue);
            
        }
        let currentdate = getdate();
        $("#date").html(currentdate);
    });
    $("#investment").focus();
    
});