"use strict";

$(document).ready(() => {

    $("#countdown").click(function () {
        const event = new Event($("#event").val(), $("#date").val());




        if (validation.isEmpty(event.name) ||
            validation.isEmpty(event.dateString)) {
            $("#message").text("Please enter both a name and a date.");
            return;
        }
        /*        make sure event name and date are entered
                if (name.length === 0 || dateString.length === 0) {
                    $("#message").text("Please enter both a name and a date.");
                    return;
                }  

                //make sure due date string has slashes and a 4-digit year
                if (dateString.indexOf("/") === -1) { 
                    $("#message").text("Please enter the date in MM/DD/YYYY format.");
                    return;
                } 
                const year = dateString.substring(dateString.length - 4); 
                if (isNaN(year)) {
                    $("#message").text("Please enter the date in MM/DD/YYYY format.");
                    return;
                }  */






        //convert due date string to Date object and make sure date is valid
//        let date = new Date(dateString);

        /*(date.toString() === "Invalid Date")*/

        if (validation.hasNoSlashes(event.dateString) ||
            validation.isInvalidYear(event.dateString) ||
            validation.isInvalidDate(event.date)) {
            $("#message").text("Please enter the date in MM/DD/YYYY format.");
            return;
        }

        //calculate days
/*        const today = new Date();
        const oneDayMS = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds    
        let days = (date.getTime() - today.getTime()) / oneDayMS;
        days = Math.ceil(days);

        //create and display message 
        if (days === 0) {
            $("#message").text("Hooray! Today is ".concat(name,
                "!\n(", date.toDateString(), ")"));
        }
        if (days < 0) {
            //make sure event name is capitalized
            name = name.substring(0, 1).toUpperCase() + name.substring(1);
            $("#message").text(name.concat(" happened ", Math.abs(days),
                " day(s) ago. \n (", date.toDateString(), ")"));
        }
        if (days > 0) {
            $("#message").text(days.toString().concat(" day(s) until ",
                name, "!\n(", date.toDateString(), ")"));
        }*/
        $("#message").text(event.getCountdownMessage());
    });

    $("#event").focus();
});
