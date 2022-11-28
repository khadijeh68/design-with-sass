//1
// let input = document.getElementById('inputOne');
// console.log(input);
// input.onchange = function() {
//     if(input.value) {
//         console.log("name is valid");
//     } else {
//         console.log("required name");
//     }
// }

//2
let input = document.getElementById('inputTwo'); 
let email = document.getElementById('email');     
  input.onchange = function() {
    email.innerHTML = input.value;
};


//3
let btn = document.querySelector('button');
btn.addEventListener('submit' , function(e){
    e.preventDefault();
})