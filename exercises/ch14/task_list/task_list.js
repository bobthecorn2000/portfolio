"use strict";

$(document).ready( () => {
    
    
    

    $("#add_task").click( () => { 
        let curdate = new Date();
        console.log(curdate);
        let newdate = curdate.getDate() + 21;
        curdate.setDate(newdate);
        console.log(curdate)
        let finaldate = curdate.toDateString();
        
        const textbox = $("#task");
        const task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            // add task to web storage 
            let tasks = localStorage.E14tasks || "";  // "" is default
            let expire = localStorage.Expiration || "";  // "" is default
            localStorage.E14tasks = tasks.concat(task, "\n");
            localStorage.Expiration = expire.concat(finaldate, "\n");

            // clear task text box and re-display tasks
            textbox.val("");
            
            let expdate = Date.parse(localStorage.getItem("Expiration"));
            let Today = Date.parse(curdate);
            console.log('getItem', localStorage.getItem("Expiration"));
            console.log('expdate', expdate);
            console.log('Today', Today);
            if (Today > expdate) {
                $("#task_list").val(localStorage.E14tasks);
                
            }
            else {
             localStorage.removeItem("E14tasks");
        localStorage.removeItem("Expiration");
        $("#task_list").val("");
        $("#task").focus();   
            }
           
            
            
            /**/
                 
            textbox.focus();
        }
    });
    
    $("#clear_tasks").click( () => {
        localStorage.removeItem("E14tasks");
        localStorage.removeItem("Expiration");
        $("#task_list").val("");
        $("#task").focus();
    }); 
    
    // display tasks on initial load
    $("#task_list").val(localStorage.E14tasks);
    $("#task").focus();
});