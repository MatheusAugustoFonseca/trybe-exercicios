const titleChan = document.getElementById('header-container');
titleChan.style.backgroundColor = "rgb(44, 221, 162)";
const urgent = document.getElementsByClassName('emergency-tasks');
urgent[0].style.backgroundColor = 'pink';

//const tagH3 = document.getElementsByTagName('h3');
//tagH3[0].style.backgroundColor = 'purple';
//tagH3[1].style.backgroundColor = 'purple';
// outro jeito de fazer:
const emergencyTaskHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index in emergencyTaskHeaders){
  emergencyTaskHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

// const nonUrgent = document.querySelector('.no-emergency-tasks');
// nonUrgent.style.backgroundColor = 'blue';
const noEmergencyTasks = document.getElementsByClassName('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const nonUrgentHeader = document.querySelectorAll('.no-emergency-tasks h3');
for(let index in nonUrgentHeader){
  nonUrgentHeader[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

//const footerChange = document.getElementById('footer-container');
//footerChange.style.backgroundColor = 'green';
const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';