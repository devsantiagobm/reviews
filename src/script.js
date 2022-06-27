const list = document.querySelector('.rating__list')
const button = document.querySelector('.rating__button')
const selected = document.querySelector('.selected')
const rating = document.querySelector('.rating');
const numeroEnviado = document.querySelector('.selected__message-number')
const mensajeError = document.querySelector('.rating__error')
const numeros = [1,2,3,4,5];
let numero = "";

eventos()
function eventos() {
    list.addEventListener('click', elegirNumero);
    button.addEventListener('click', enviarNumero);
    document.addEventListener('keydown', atajos);
    document.addEventListener('keydown', e => {
        e.key == "Enter" ? enviarNumero() : 0;
    })
}

// funciones

function elegirNumero(e) {
    if (e.target.classList.contains('rating__options')) {
        e.target.classList.add('rating__options--active');
        numero = e.target.textContent;
        Array.from(list.children).forEach(children => {
            if (children != e.target) {
                children.classList.remove('rating__options--active')
            }
        })
    }
}

function enviarNumero(){
    const options = document.querySelector('.rating__options--active')
    options != null ? verificarNumero(true) : verificarNumero(false)
}

function verificarNumero(boolean){
    if(boolean){
        rating.classList.add('rating--active')
        selected.classList.add('selected--active')
        numeroEnviado.textContent = numero;
    }
    else{
        mensajeError.style.maxHeight = mensajeError.scrollHeight+ "px";
        setTimeout(() => mensajeError.style.maxHeight = 0, 1000);
    }
}

function atajos(e){
    if(numeros.some(number => number == e.key)){
        Array.from(list.children).forEach(number => {

            if(number.textContent == e.key) {
                number.classList.add('rating__options--active');
                numero = number.textContent;
            }
            else{
                number.classList.remove('rating__options--active')
            }
        })
    }
}

