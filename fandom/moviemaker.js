var play=false;
function PlayOrPause(id)
{ 
if (play===false)
  {
  document.getElementById(id).play();
  play=true;
  }
else
  { document.getElementById(id).pause();
   play=false; 
  }
}