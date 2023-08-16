document.getElementById('btn-withdraw').addEventListener('click', function(event){
  const currentWithdrawElement = document.getElementById('withdraw-field');
  const currentWithdraw = parseFloat(currentWithdrawElement.value);
  currentWithdrawElement.value = '';
  const previousWithdrawElement = document.getElementById('withdraw-total');
  const previousWithdraw = parseFloat(previousWithdrawElement.innerText);
  const totalWithdraw = previousWithdraw + currentWithdraw;
  previousWithdrawElement.innerText = totalWithdraw;
  const totalBalanceElement = document.getElementById('balace-total');
  const totalBalance = parseFloat(totalBalanceElement.innerText);
  const availableBalance = totalBalance - currentWithdraw;
  totalBalanceElement.innerText = availableBalance;
})