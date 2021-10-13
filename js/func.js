getCurrencies();
setInterval(getCurrencies, 15000);
async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  const result = await data;
  console.log("Обновлено");
  time.Date = result.Date;
  elementDate.textContent = time.Date.substring(10, -10);
  elementTime.textContent = time.Date.substring(11);
  for (let x in ratesNew) {
    ratesNew[x] = result.Valute[x];
    compareCurrencies(ratesNew[x].Value, ratesNew[x].Previous, document.querySelector(`[data-value="${x}"]`));
    document.querySelector(`[data-value="${x}"]`).textContent = ratesNew[x].Value.toFixed(2);
    document.querySelector(`[data-value="prev${x}"]`).textContent = ratesNew[x].Previous.toFixed(3);
    document.querySelector(`[data-value="change${x}"]`).textContent = (ratesNew[x].Value - ratesNew[x].Previous).toFixed(3);
    document.querySelector(`[data-value="percentage${x}"]`).textContent = (((ratesNew[x].Value * 100) / (ratesNew[x].Previous)) - 100).toFixed(3);
  }
  function compareCurrencies(a, b, c) {
    if (a > b) {
      c.classList.add('red');
      c.classList.add('inner-text_logo-red');
      c.classList.remove('green');
      c.classList.remove('inner-text_logo-green');
    } else {
      c.classList.add('green');
      c.classList.add('inner-text_logo-green');
      c.classList.remove('red');
      c.classList.remove('inner-text_logo-red');
    }
  }
}
