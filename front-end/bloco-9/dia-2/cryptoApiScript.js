const fetchCrypto = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  
  const coins = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((Error) => Error.toString());

  return coins;
}

const setCrypto = async () => {
  const coins = await fetchCrypto();

  const findList = document.querySelector('#list');

  coins
    .filter((element) => Number(element.rank) <= 10)
    .forEach(element => {
      const creatLi = document.createElement('li');
      const usdPrice = Number(element.priceUsd);

      creatLi.innerHTML = `${element.name} (${element.symbol}): ${usdPrice.toFixed(2)}`;

      findList.appendChild(creatLi);
  });
}



window.onload = () => setCrypto();