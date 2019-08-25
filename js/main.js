//  grap DOM Elements from HTML
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name= document.getElementById('name');
const focus = document.getElementById('focus');

// show Time
function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let second = today.getSeconds();

    // Set AM or PM
    const AmPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;
    
    // output Time
    time.innerHTML = `${hour}<span>:</span> 
                      ${addZero(minutes)}<span>:</span>
                      ${addZero(second)} ${AmPm}`

    // Once call has to run every second
    setTimeout(showTime, 70000);
}

// Add zero infront of time (minutes, seconds)
function addZero(n){
    return(parseInt(n) < 10 ? '0' : '') + n;
}

// Set background and Greeting 
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('img/road.jpg')"
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'black';
    }else if(hour < 18){
        // Afternoon
        document.body.style.backgroundImage = "url('img/evening.jpg')"
        greeting.textContent = 'Good Afternoon'
    }else{
        // Evening
        document.body.style.backgroundImage = "url('img/night.jpg')"
        greeting.textContent = 'Good Evening'
        
    }
}

// Get Name
function getName(){
    if(localStorage.getItem('name') == null){
        name.textContent = '(Enter Name)'
    }
    else{
        name.textContent = localStorage.getItem('name');
    }
}
// set Name and save in localStorage
function setName(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText);
    }
}
// set focus and save in local storage
function setFocus(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }
    else{
        localStorage.setItem('focus', e.target.innerText);
    }
}
// get focus
function getFocus(){
    if(localStorage.getItem('focus') == null){
        focus.textContent = '(Enter focus)'
    }
    else{
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
// Run
showTime();
setBgGreet();
getName();
getFocus();

