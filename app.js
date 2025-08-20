function generatePassword() {
  const length = document.getElementById('length').value;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
    password += randomChar;
  }
  document.getElementById('result').textContent = `رمز شما: ${password}`;
}
