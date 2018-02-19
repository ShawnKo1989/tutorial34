var bgtxt = document.getElementById("bgtxt");
var preDiv = document.getElementById("preview");
var menu = document.getElementById("menu");

var c1 = document.getElementById("ch1");
var c2 = document.getElementById("ch2");
var c3 = document.getElementById("ch3");

var pic = document.getElementById("picchooser");
var numuse = 0;

bgtxt.addEventListener("keyup", function(ev){
  //console.log(ev.keyCode);
  if (ev.keyCode == 13){
    console.log(c1.checked, c2.checked, c3.checked);
    if(c1.checked){
      //document.body.style.backgroundColor = bgtxt.value;
      if (bgtxt.value == "bird"){
        document.body.style.backgroundImage = "url(1.jpg)";
      }else if (bgtxt.value == "grass"){
        document.body.style.backgroundImage = "url(2.jpg)";
      }else if (bgtxt.value == "dog"){
        document.body.style.backgroundImage = "url(3.jpg)";
      }else {
        document.body.style.backgroundColor = bgtxt.value;
      }
    } else if(c2.checked){
      if (bgtxt.value == "bird"){
        preDiv.style.backgroundImage = "url(1.jpg)";
      }else if (bgtxt.value == "grass"){
        preDiv.style.backgroundImage = "url(2.jpg)";
      }else if (bgtxt.value == "dog"){
        preDiv.style.backgroundImage = "url(3.jpg)";
      }else {
        preDiv.style.backgroundColor = bgtxt.value;
      }
      //preDiv.style.backgroundColor = bgtxt.value;
    } else if(c3.checked){
      if (bgtxt.value == "bird"){
        menu.style.backgroundImage = "url(1.jpg)";
      }else if (bgtxt.value == "grass"){
        menu.style.backgroundImage = "url(2.jpg)";
      }else if (bgtxt.value == "dog"){
        menu.style.backgroundImage = "url(3.jpg)";
      }else {
        menu.style.backgroundColor = bgtxt.value;
      }
      //menu.style.backgroundImage = "url("+bgtxt.value+")";
      //menu.style.backgroundColor = bgtxt.value;
    } else {
      alert("Choose an option")
    }
    //preDiv.style.backgroundColor = bgtxt.value;
    bgtxt.value = "";

    numuse++;
    console.log(numuse);
    if (numuse > 5) {
      alert("You have reached the limit! Please pay to use more!")
      document.getElementById("display").innerHTML = "You have reached the limit! Please pay to use more!"
      //document.body.innerHTML = "You have reached the limit! Please pay to use more!"
    }
  }
});
picchooser.addEventListener("change", function(){
  console.log(c1.checked, c2.checked, c3.checked);
  var picnum = parseInt(picchooser.value);

  if(picnum > 3){
    picchooser.value = 1;
  }else if(picnum < 1){
    picchooser.value = 3;
  }
  if(c1.checked){
    document.body.style.backgroundImage = "url("+picchooser.value+".jpg)";
  } else if(c2.checked){
    preDiv.style.backgroundImage = "url("+picchooser.value+".jpg)";
  } else if(c3.checked){
    menu.style.backgroundImage = "url("+picchooser.value+".jpg)";
  }

  numuse++;
  console.log(numuse);
  if (numuse > 10) {
    alert("You have reached the limit! Please pay to use more!")
    document.getElementById("display").innerHTML = "You have reached the limit! Please pay to use more!"
  }
})
