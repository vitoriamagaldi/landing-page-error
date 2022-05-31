const html = document.querySelector('html');
const checar = document.querySelector('#check');
const label = document.querySelector('#label-dark');


checar.addEventListener('change', function(){
    html.classList.toggle('dark-mode');
    label.classList.toggle('Ativar clean mode');
})


const menu = document.querySelector('#menu-btn');
const nav = document.querySelector('.header .navbar');


menu.onclick = () =>{
    nav.classList.toggle('active')
    menu.classList.toggle('bx-x-circle');
}

const btnsend = document.querySelector('.submit');
const form = document.querySelector('form');

btnsend.addEventListener("click", event =>{
    event.preventDefault();

    const fields = [ ... document.querySelectorAll('.input')];
    fields.forEach(field => {
        if ( field.value === "") form.classList.add('validate-error')
    });

    const formerror = document.querySelector('.validate-error');
    if (formerror){
        formerror.addEventListener('animationend', event =>{
            if(event.animationName === "nono") {
                formerror.classList.remove('validate-error')
            }
        })
    }
})

/* squares area */
const squares = document.querySelector('ul.squares');
 for(let i = 0; i < 13; i++){
     const li = document.createElement("li");

     const size = Math.floor(Math.random() * (110 - 8) + 8);

     const position = Math.floor(Math.random() * (99 - 1) + 1);

     const random = (min, max) => Math.random() * (max - min) + min;

     const delay = random(5, 0.1);
     const duration = random(24, 12);

     li.style.width = `${size}px`;
     li.style.height = `${size}px`;
     li.style.bottom = -`${size}px`;
     li.style.left = `${position}%`;
     li.style.animationDelay = `${delay}s`;
     li.style.animationDuration = `${duration}s`;
     li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`


     squares.appendChild(li);
 }
