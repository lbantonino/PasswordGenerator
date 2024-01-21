const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$`ù^='()!?,;.:/=+@#\"'-_)°éè§¨*£%¨<>∞~‹≈©•{}Ç¡«¶‘“ë¿ı±|‰¥≥";
const rangeValue = document.getElementById('password-length')
const passwordOutput = document.getElementById('password-output')

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase)
  if (uppercase.checked) data.push(...dataUppercase)
  if (numbers.checked) data.push(...dataNumbers)
  if (symbols.checked) data.push(...dataSymbols)
  if (data.length === 0) {
    alert('veuillez sélectionner des critères')
    return;
  }

  for (let i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }

  passwordOutput.value = password;

  passwordOutput.select();
  document.execCommand("copy");
  let copy = document.createElement('p');
  copy.textContent = "Copié !"
  document.body.appendChild(copy);
}

generateButton.addEventListener('click', generatePassword);
