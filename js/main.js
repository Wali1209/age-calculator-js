// importing isDobValid 
import {isFormValid} from "./formValidation.js"
// Dob Submit button
const submitBtn= document.querySelector('button.submit');

// getting Day , month , year input tag

const day = document.getElementById('dayBox'),
 month = document.getElementById('monthBox'),
 year = document.getElementById('yearBox');

//  Getting Dob heading

const ageYear = document.querySelector('.age-year span'),
 ageMonth = document.querySelector('.age-month span'),
 ageDay = document.querySelector('.age-day span');


//  updating age year
const updateYear = (headingYear ) =>{
    var step = 0;
    let stepper = setInterval(()=>{
        ageYear.textContent = step;
        step++ ;
        if(step > headingYear){
            clearInterval(stepper);
        }
        
    } , 20)
}
//  updating age month
const updateMonth = (headingMonth ) =>{
    var step = 0;
    let stepper = setInterval(()=>{
        ageMonth.textContent = step;
        step++ ;
        if(step > headingMonth){
            clearInterval(stepper);
        }
        
    } , 20)
}
//  updating age year
const updateDay = (headingDay ) =>{
    var step = 0;
    let stepper = setInterval(()=>{
        ageDay.textContent = step;
        step++ ;
        if(step > headingDay){
            clearInterval(stepper);
        }
        
    } , 20)
}

// clear error 
const clearWarningStyle = () =>{
    let lightGrey = 'hsl(0, 0%, 86%)';
    let smokeyGrey = 'hsl(0, 1%, 44%)';
    // clearing style for day box
    day.style.borderColor = lightGrey;
    day.previousElementSibling.style.color = smokeyGrey;
    day.nextElementSibling.innerHTML = "";

    // clearing stye for month box
    month.style.borderColor = lightGrey;
    month.previousElementSibling.style.color = smokeyGrey;
    month.nextElementSibling.innerHTML = "";

    // clearing stye for year box
    year.style.borderColor = lightGrey;
    year.previousElementSibling.style.color = smokeyGrey;
    year.nextElementSibling.innerHTML = "";


}
const clearHeading = () =>{
    ageDay.innerHTML = "<span>--<span>";
    ageMonth.innerHTML = "<span>--<span";
    ageYear.innerHTML = "<span>--<span";

}

//  when Submit button is clicked
submitBtn.onclick = () => {

    // Code to execute when the button is clicked
    // clearing previous warning style when button is clicked
    clearWarningStyle();
    clearHeading();
    //  checking if DOB is valid or not
    let isDobValid = isFormValid(day , month , year);
    console.log(isDobValid)
    if( isDobValid){
        
        // getting Date of Birth
        let dob = new Date(year.value , month.value - 1 , day.value);

        // getting Current date
        let currentDate = new Date();
    
        // getting dob year ,month , day
        let dobYear = dob.getFullYear();
        let dobMonth = dob.getMonth();
        let dobDay = dob.getDate();

        // getting current year, month , day
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth();
        let currentDay = currentDate.getDate();

        // Calculating Age Year
        let headingYear = currentYear - dobYear;

        // Calculating Age Month
        if(currentMonth >= dobMonth){
            var headingMonth = currentMonth - dobMonth;
        }
        else{
            headingYear--;
            var headingMonth = 12 + currentMonth -dobMonth;
        }

        // Calculating Age Day
        if(currentDay >= dobDay){
            var headingDay = currentDay - dobDay;
        }
        else{
            headingMonth--;
            // calculating days in previous month
            var daysInPreMonth = new Date(currentYear , currentMonth - 1, 0).getDate();
        
            var headingDay = daysInPreMonth + currentDay -dobDay;
        }

        // rendering calculated age on the page
        updateYear(headingYear);
        updateMonth(headingMonth);
        updateDay(headingDay);
    }

 

  };

