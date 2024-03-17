'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///////////////////////////////////////

const getCountry = country => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText);
  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(request.responseText);
    console.log(data);
    const html = `
            <article class="country">
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
  });
};

getCountry('israel');
getCountry('usa');
getCountry('france');
