const container = document.querySelector('#container');
const template = container.querySelector('#template');
const updateButton = document.querySelector('.update-rate');

async function getCurrencies() {
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  const result = await data;
  time.Date = result.Date;
  elementDate.textContent = time.Date.substring(10, -10);

  for (let rateCountry in ratesNew) {
    ratesNew[rateCountry] = result.Valute[rateCountry];
  }

  const ratesArray = Object.values(ratesNew);
  container.innerHTML = '';
  renderCards(ratesArray, time.Date)
}

function createCard(cardData, Date) {
  const card = template.content.cloneNode(true).querySelector('.card');
  card.querySelector('.flag-image').src = `../images/flags/${cardData.CharCode}.jpg`;
  card.querySelector('.card-title').textContent = cardData.CharCode;
  card.querySelector('.inner-title').textContent = cardData.Name;
  card.querySelector('.card-value').textContent = cardData.Value.toFixed(2);
  card.querySelector('.card-prev').textContent = cardData.Previous.toFixed(2);
  card.querySelector('.card-change').textContent = (cardData.Value - cardData.Previous).toFixed(2);
  card.querySelector('.card-percentage').textContent = (((cardData.Value * 100) / (cardData.Previous)) - 100).toFixed(3);
  card.querySelector('.card-update').textContent = Date
  compareCurrencies(cardData.Value, cardData.Previous, card.querySelector('.inner-text'));
  return card;
}

function renderCards(cards, date) {
  cards.forEach(card => {
    container.append(createCard(card, date));
  })
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

updateButton.addEventListener('click', getCurrencies)
getCurrencies();