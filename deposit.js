//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
  //step-2: get the deposit amount from the deposit input field
  //For input field use .value to the value inside the input field
  const depositField = document.getElementById('deposit-field');
  const newDepositAmount = parseFloat(depositField.value);
  //step-3: get the current deposit total
  //for non-input (elment other than input, textarea) use innertext to get the text.
  const depositTotalElement = document.getElementById('deposit-total');
  //step-4: add numbers to set the total deposit
  const previousDepositAmount = parseFloat(depositTotalElement.innerText);
  const currentDepositAmount = previousDepositAmount + newDepositAmount;
  //set the deposit total
  depositTotalElement.innerText = currentDepositAmount;
  // step-5: get ballance current total
  const balanceTotalElement = document.getElementById('balace-total');
  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

  //step-6: calculate the total balnce in the total balance section
  const currentBalance = previousBalanceTotal + newDepositAmount;
  //set balance total
  balanceTotalElement.innerText = currentBalance;

  //step-7: Clear the deposit field
  depositField.value = '';
})