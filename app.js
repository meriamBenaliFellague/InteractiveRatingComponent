const btn1 = document.getElementById('btn1');
var c1 = document.getElementById('cnt1');
var c2 = document.getElementById('cnt2');
var nb1 = document.getElementById('n1');
var nb2 = document.getElementById('n2');
var nb3 = document.getElementById('n3');
var nb4 = document.getElementById('n4');
var nb5 = document.getElementById('n5');
const select =  document.getElementById('select');

function back(){
    c1.style.display = "none";
    c2.style.display = "grid";
}
btn1.addEventListener('click', back); 

function first(){
    select.textContent = '1 ';
}
nb1.addEventListener('click', first);

function second(){
    select.textContent = '2 '
}
nb2.addEventListener('click', second);

function third(){
    select.textContent = '3 '
}
nb3.addEventListener('click', third);

function for4(){
    select.textContent = '4 '
}
nb4.addEventListener('click', for4);

function five(){
    select.textContent = '5 '
}
nb5.addEventListener('click', five);