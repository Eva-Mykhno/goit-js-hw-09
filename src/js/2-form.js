const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', savedInput);
form.addEventListener('submit', onSubmit);

function savedInput(event) {
  const key = event.target.name;
  formData[key] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function storageOutput() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!data) {
    return;
  }
  const { email, message } = form.elements;
  email.value = data.email;
  message.value = data.message;
}

storageOutput();

function onSubmit(event) {
  event.preventDefault();
  if (formData.email.value === '' || formData.message.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
}
