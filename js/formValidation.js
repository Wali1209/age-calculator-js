
export const isFormValid = ( day , month , year) =>{
    let isDobValid = true;
    let currentYear = new Date().getFullYear();
    // extracting dob day,month and year
    const dobDay = day.value,
    dobMonth = month.value,
    dobyear = year.value;

   console.log(dobMonth)
    // checking for day value
    if(isEmpty(dobDay)){
        isDobValid = false;
        DisplayErrorMessage(day , "This Field is Required")
    }
    // checking whethere given day is in range or not
   else if(!(dobDay >= 1 &&  dobDay <= 31)){
        isDobValid = false;
        DisplayErrorMessage(day , "Must be a valid day")
    }


     // checking for month
     if(isEmpty(dobMonth)){
        isDobValid = false;
        DisplayErrorMessage(month , "This Field is Required")
    }
    // // checking whethere given monthis in range or not
    else if (!(dobMonth >= 1 && dobMonth <= 12)){
        isDobValid = false;
        DisplayErrorMessage(month , "Must be a valid month")
    }

    // check for year
    if((isEmpty(dobyear))){
        isDobValid = false;
        DisplayErrorMessage(year , "This Field is Required")
    }
    else if((dobyear >= currentYear)){
        isDobValid = false;
        DisplayErrorMessage(year , "Must be in the past")
    }
    return isDobValid;
}



// supportive function  
function isEmpty (val){
    return val == "";
}
function DisplayErrorMessage (elem , message){
    elem.style.borderColor = `hsl(0, 100%, 67%)`;
    elem.previousElementSibling.style.color = `hsl(0, 100%, 67%)`;
    elem.nextElementSibling.innerHTML = message;
    
}