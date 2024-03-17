'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const html = `
            <article class="country ${className}">
                <img class="country__img" src="${data.flags.png}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name.common}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(1)}M people</p>
                    <p class="country__row"><span>🗣️</span>${
                      data.languages.heb ||
                      data.languages[Object.keys(data.languages)[0]]
                    }</p>
                    <p class="country__row"><span>💰</span>${
                      data.currencies[Object.keys(data.currencies)[0]].name
                    }</p>
                </div>
            </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = country => {
  // AJAX call country one
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText);
  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(request.responseText);
    console.log(data);
    renderCountry(data);

    // Get neighbour country
    const neighbour = data.borders;
    if (!neighbour) return;

    // AJAX call country 2
    neighbour.forEach(element => {
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${element}`);
      request2.send();
      request2.addEventListener('load', function () {
        //   console.log(this.responseText);
        const [data2] = JSON.parse(request2.responseText);
        console.log(data2);
        renderCountry(data2, 'neighbour');
      });
    });
  });
};

getCountryAndNeighbour('tun');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('france');
