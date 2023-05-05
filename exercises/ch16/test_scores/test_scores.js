"use strict";

$(document).ready( () => {

   // const scores = [];

    $("#add_score").click( () => {
        
        const score = parseFloat($("#score").val());
                
        if (isNaN(score) || score < 0 || score > 100) {
            $("#add_score").next().text("Score must be from 0 to 100."); 
        }
        else {
            $("#add_score").next().text("");  
            // add score to scores array 
            testScores.add(score);

            // display all scores
            $("#all").text(testScores.toString());

            // display average score
            $("#avg").text(testScores.avg.toFixed(1));
          /*  const total = scores.reduce( (tot, val) => tot + val, 0 );
            const avg = total/scores.length;
            $("#avg").text(avg.toFixed(2));*/

            // display last 3 scores
//            const len = scores.length;
//            const copy = (len <= 3) ? scores.slice() : scores.slice(len - 3, len); // copy last three
//            copy.reverse();
            $("#last").text(testScores.lastThree);
        }
        
        // get text box ready for next entry
        $("#score").val("");
        $("#score").focus(); 
        for (const score of testScores) {
            console.log(score);
        }
    });

    // set focus on initial load
    $("#score").focus();
});