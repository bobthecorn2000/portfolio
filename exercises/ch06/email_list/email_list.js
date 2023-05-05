const $ = selector => document.querySelector(selector);
let emailem1 = false;
let emailem2 = false;
let emaileq = false;
let name = false;

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
        emailem1 = false;
emailem2 = false;
emaileq = false;
name = false;
    
        // create an error message and set it to an empty string
        let errorMessage = "";

        // check user entries - add text to error message if invalid
        if (email1.value == "") { 
            errorMessage += "First email is required.\n";
            emailem1 = true;
            $("#email1").innerHTML = "First email is required.\n";
        }
    
        if (email2.value == "") { 
            errorMessage += "Second email is required.\n";
            emailem2 = true;
            $("#email2").innerHTML = "Second email is required.\n";
        }
    
        if (email1.value != email2.value) { 
            errorMessage += "Both emails must match.\n";
            emaileq = true;
            $("#email1").innerHTML = "Both emails must match.\n";
            $("#email2").innerHTML = "Both emails must match.\n";
        }
    
        if (firstName.value == "") {
            errorMessage += "First name is required.\n";
            name = true;
             $("#name").innerHTML = "First name is required.\n";
        }
    
        // submit the form if error message is an empty string
        if (errorMessage == "") {
            $("#email_form").submit();
        } else {
                       
        }
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
        $("#email1").innerHTML = "*";
$("#email2").innerHTML = "*";
$("#email1").innerHTML = "*";
            $("#email2").innerHTML = "*";
$("#name").innerHTML = "*";
    });
    
    $("#email_1").focus();
});