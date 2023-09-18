// LIKE BUTTON
let icon = document.querySelector('ion-icon');
icon.onclick = function(){
    icon.classList.toggle('active');
}

// PLAYER
let currentTime = document.getElementById('label-time');
let rangeInput = document.getElementById('music-time');

currentTime.innerText = rangeInput.value;

rangeInput.oninput = function(){
    currentTime.innerHTML = parseInt(this.value).to
}
  
