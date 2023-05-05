"use strict";

const isPrimeNumber = (number) => {
    let isPrime = (number < 2) ? false: true;  // set default return value
    for (let i = 2; i < number; i++) {
        if ( number % i === 0 ) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
};

$(document).ready( () => {
    
    $("#calculate").click( () => {
        let storenums = []
        const number = parseInt( $("#number").val() );
        if ( isNaN(number) ) {
            $("#message").text( "Please enter a number." );
        } else {
         const  firstcheck = isPrimeNumber(number)
            if ( firstcheck === true ) {
            
            for (let x = 2; x < number + 1; x++ ) {
                const isPrime = isPrimeNumber( x );

            if ( isPrime === true ) {
                storenums.push(x);
                $("#message").text( number + " is a prime number." );
            } else {
                
            }
                
            }
            $("#message").text(storenums)}
            else {$("#message").text( number + " is NOT a prime number." );}
            
            
            /*const isPrime = isPrimeNumber( number );

            if ( isPrime === true ) {
                $("#message").text( number + " is a prime number." );
            } else {
                $("#message").text( number + " is NOT a prime number." );
            }*/
        }
        $("#number").focus();
        $("#number").select();
    });
    
    $("#number").focus();
});