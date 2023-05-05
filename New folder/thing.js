"use strict" // missing use strict
$(document).ready( () => { //weird arrow thing

    const tasks = [];

 

    $("#add_task").click( () => {  

        const textbox = $("#task");

        const task = textbox.val();

        if (task === "") {

            alert("Please enter a task.");

            textbox.focus();

        } else { // if not needed here

            // add task or tasks to array

            const newTasks = task.split(",");

            for (const task of newTasks) {

                tasks.push(task);

            }

 

            // clear task text box and re-display tasks

            textbox.val("");

            $("#task_list").val(tasks.join("\n"));

           // textbox.blur(); not needed

        }

    });

   

    $("#clear_tasks").click( () => {

        tasks.length = 0;

        $("#task_list").val("");

        $("#task").focus();

    });

   

    ("#task").focus; //not a function

});