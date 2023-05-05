"use strict";

// the event handler for the click event of each h2 element
let i = 0;
const toggle = evt => {
    const h2Element = evt.currentTarget;                 // get the clicked h2 element
    const divElement = h2Element.parentElement.nextElementSibling;     // get h2's sibling div

   //h2Element.parentElement.classList.toggle("minus");
   // divElement.classList.toggle("open");
    
    if (h2Element.parentElement.hasAttribute("class") == true){
        
        h2Element.parentElement.removeAttribute("class");
        divElement.removeAttribute("class");
    }
    else {
        h2Element.parentElement.classList.add("minus");
        divElement.classList.add("open")
        i++;
    }

    evt.preventDefault();   // cancel default action of h2 tag's <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
    // get the h2 tags
    const h2Elements = faqs.querySelectorAll("#faqs a");
    
    // attach event handler for each h2 tag	    
    for (let h2Element of h2Elements) {
        h2Element.addEventListener("click", toggle);
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].focus();       
});