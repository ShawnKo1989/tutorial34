var disp = document.getElementById('display');
var bgInp = document.getElementById('bgText');

var ir = document.getElementById("red");
var ib = document.getElementById("blue");
var ig = document.getElementById("green");

var rr = document.getElementById("rred");
var rb = document.getElementById("rblue");
var rg = document.getElementById("rgreen");

var colorInp = document.getElementById("colorInp");

var menu = document.getElementById("menu");
var curElement = disp;

document.getElementById("change").addEventListener("click", function(){
  console.log(bgInp.value);

  curElement.style.backgroundColor = bgInp.value;
  bgInp.value = "";
});


ir.addEventListener("change", function(){
  curElement.style.backgroundColor = "rgb(" + ir.value+", "+ig.value+", "+ib.value+")";
  rr.value = ir.value;
});
ib.addEventListener("change", function(){
  curElement.style.backgroundColor = "rgb(" + ir.value+", "+ig.value+", "+ib.value+")";
  rb.value = ib.value;
});
ig.addEventListener("change", function(){
  curElement.style.backgroundColor = "rgb(" + ir.value+", "+ig.value+", "+ib.value+")";
  rg.value = ig.value;
});

rr.addEventListener("change", function(){
  curElement.style.backgroundColor = "rgb(" + rr.value+", "+rg.value+", "+rb.value+")";
  ir.value = rr.value;
});
rb.addEventListener("change", function(){
  curElement.style.backgroundColor = "rgb(" + rr.value+", "+rg.value+", "+rb.value+")";
  ib.value = rb.value;
});
rg.addEventListener("change", function(){
  curElement.style.backgroundColor = "rgb(" + rr.value+", "+rg.value+", "+rb.value+")";
  ig.value = rg.value;
});

colorInp.addEventListener("change", function(){
  curElement.style.backgroundColor = colorInp.value;
});

menu.addEventListener("click", function(){
  curElement = menu;
});
disp.addEventListener("click", function(){
  curElement = disp;
});
bgInp.addEventListener("click", function(){
  curElement = bgInp;
});
