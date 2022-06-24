let inputIn = document.querySelector('.input-in');
let buttonIn = document.querySelector('.button-in');
let div = document.querySelector('.output');

buttonIn.onclick = function(){
    if(KeyboardEvent ===13){
        let valueInput = inputIn.value;
        div.innerHTML = 'Привет, ' + valueInput;
    }
    else{
        let valueInput = inputIn.value;
        div.innerHTML = 'Привет, ' + valueInput;
    }
};
document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        let valueInput = inputIn.value;
        div.innerHTML = 'Привет, ' + valueInput;
    }
});