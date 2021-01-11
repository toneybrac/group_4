
var vid = document.getElementById("myAudio");

function getVolume() { 
    alert(vid.volume);
} 
  
function setHalfVolume() { 
    vid.volume = 0.2;
} 
  
function setFullVolume() { 
    vid.volume = 1.0;
} 
