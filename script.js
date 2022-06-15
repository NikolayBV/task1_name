let inputIn = document.querySelector('.input-in');
let buttonIn = document.querySelector('.button-in');
let div = document.querySelector('.output');

buttonIn.onclick = function(){
    let valueInput = inputIn.value;
    console.log(valueInput);
    div.innerHTML = 'Привет, ' + valueInput;
};
