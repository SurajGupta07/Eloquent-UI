const closeBtn = document.querySelector('.closeBtn');
const successBtn = document.querySelector('.successBtn');
const warningBtn = document.querySelector('.warningBtn');
// const infoBtn = document.querySelector('.alert-info')

function closeHandler() {
    this.parentElement.style.display = 'none';
}

// function fade_out() {
//   $(".alert-info").fadeOut().empty();
// }

// setTimeout(fade_out, 15000);
closeBtn.addEventListener('click', closeHandler)
successBtn.addEventListener('click', closeHandler)
warningBtn.addEventListener('click', closeHandler)