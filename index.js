console.log('bobbyhadz.com');

const btn = document.getElementById('btn');

const zipCodeInput = document.getElementById('zip-code');

const validationMessage = document.getElementById(
  'validation-message',
);

btn.addEventListener('click', event => {
  event.preventDefault();

  if (isValidZipCode(zipCodeInput.value)) {
    console.log('The zip code is valid');

    validationMessage.innerText = 'The zip code is valid';
  } else {
    console.log('The zip code is NOT valid');

    validationMessage.innerText = 'The zip code is NOT valid';
  }
});

function isValidZipCode(zipCode) {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
}

// --------------------------------------------------------

// // Tests with the reusable function

// function isValidZipCode(zipCode) {
//   return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
// }

// console.log(isValidZipCode('11101')); // 👉️ true
// console.log(isValidZipCode('30305')); // 👉️ true

// console.log(isValidZipCode('21043-4012')); // 👉️ true
// console.log(isValidZipCode('33134-4094')); // 👉️ true

// console.log(isValidZipCode('1234abc')); // 👉️ false
// console.log(isValidZipCode('1.2.3.4')); // 👉️ false
// console.log(isValidZipCode('')); // 👉️ false
