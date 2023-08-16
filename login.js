
// step-1: Add click event handler with the submit button.
document.getElementById('btn-submit').addEventListener('click', function(){
  //step-2: Get the email address inside the email input field
  //always remember to use .value to get text from an input field
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  //step-3: get password
  // 3.a : set id on the html element
  //3.b : get the element
  // 3.c : get the value form the element
  const passwordField = document.getElementById('user-pass');
  const password = passwordField.value;

  // DANGER: Do not varify email and password on the client side.

  //step-4: Varify email and password and check whether valid user or not
  if(email == 'mywebchamp@gmail.com' && password == '12345'){
    window.location.href = 'bank.html'
  } else{
    alert('Sorry!! You are a invalid user');
  }
})