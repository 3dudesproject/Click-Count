let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function(){
  integer += 1;
  int.innerHTML = integer;
})

remove.addEventListener('click', function(){
  integer -= 1;
  int.innerHTML = integer;
})


function darkmode(){
  document.getElementById("header").style.color = "black";
  document.getElementById("container").style.backgroundColor = "black";
  document.getElementById("increment").style.backgroundColor = "gold";
  document.getElementById("decrement").style.backgroundColor = "gold";
  document.getElementById("body").style.backgroundColor = "gold";
  document.getElementById("number").style.backgroundColor = "black";
  document.getElementById("number").style.color = "gold";
}

function lightmode(){
  document.getElementById("header").style.color = "blue";
  document.getElementById("container").style.backgroundColor = "blue";
  document.getElementById("increment").style.backgroundColor = "lightblue";
  document.getElementById("decrement").style.backgroundColor = "lightblue";
  document.getElementById("body").style.backgroundColor = "lightblue";
  document.getElementById("number").style.backgroundColor = "blue";
  document.getElementById("number").style.color = "lightblue";
}