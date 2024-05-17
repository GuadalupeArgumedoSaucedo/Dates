
let date1 = new Date("May 6, 2024"); 
let date2 = new Date("June 28, 2024"); 
let date3 = new Date("May 27, 2024"); 
let msec_per_day = 1000 * 60 * 60 * 24; 

function generateDaysLeftA(){
let academyTime = date2.getTime() - date1.getTime(); 
let academy = academyTime / msec_per_day; 
let academyDays = Math.round(academy); 
document.getElementById('academy').innerHTML = ` ${academyDays} days left until academy is over`
}

function generateDaysLeftC(){
let capstoneTime = date3.getTime() - date1.getTime();
let capstone = capstoneTime / msec_per_day; 
let capstoneDays = Math.round(capstone); 
document.getElementById('capstone').innerHTML = ` ${capstoneDays} days left until capstone`
}


