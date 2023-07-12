const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.input.value;

  if (inputValue === '') {
    alert('Please enter a value');
  } else {
    palindromeCheck(inputValue);
  }
}

function palindromeCheck(inputValue) {
  const clearedValue = inputValue.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
  const reversedValue = clearedValue.split('').reverse().join('');

  if (clearedValue === reversedValue) {
    alert('true');
  } else {
    alert('false');
  }
}
