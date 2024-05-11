const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');
form.addEventListener('input', savedInput);
form.addEventListener('submit', onSubmit);

function savedInput() {
  formData.email = inputEmail.value.trim();
  formData.message = inputMessage.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function storageOutput() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data !== null) {
    formData.email = data.email;
    formData.message = data.message;
    inputEmail.value = formData.email;
    inputMessage.value = formData.message;
  }
}

function onSubmit(event) {
  event.preventDefault();
  if (inputEmail.value === '' || inputMessage.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
}

window.addEventListener('load', storageOutput);
