let st=document.getElementsByClassName(`drum`);

for(i=0;i<st.length;i++){
    st[i].addEventListener(`click`,function(){
      checkKeys(this.innerHTML);
      buttonPressed(this.innerHTML);
    });
}

//keyboard response
document.addEventListener("keydown",function(e){
  console.log(e);
  checkKeys(e.key);
  buttonPressed(e.key);
});

// function to perform task
function checkKeys(key){

  switch(key){
    case "w" :{
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;
    }
    case "a":{
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    }
    case "s":{
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;
    }
    case "d":{
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    }
    case "j":{
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    }
    case "k":{
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    }
    case "l":{
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    }

  }
}

//button animation
function buttonPressed(key){
  var button=document.querySelector("."+key);
  button.classList.add("pressed");
  setTimeout(()=>{button.classList.remove("pressed");},200);

}
