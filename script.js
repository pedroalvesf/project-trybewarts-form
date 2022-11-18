const btnForm = document.querySelector('.btn-form');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');
const btnSubmit = document.querySelector('#submit-btn');
const termAgree = document.querySelector('#agreement');

function validadeForm() {
  if (inputEmail.value !== 'tryber@teste.com' && inputPassword !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btnForm.addEventListener('click', validadeForm);

termAgree.addEventListener('click', () => {
  btnSubmit.toggleAttribute('disabled');
});
