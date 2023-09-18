// LIKE BUTTON
let icon = document.querySelector('ion-icon');
icon.onclick = function(){
    icon.classList.toggle('active');
}

// PLAYER
let currentTime = document.querySelector('#label-time');
let rangeValue = document.querySelector('#music-time');

currentTime.addEventListener("#label-time", function(){
    rangeValue.textContent = this.value;
})


  
