// The code below is commented because it contains errors and is not necessary for the task at hand.
// let y = 1;
// const x = 2;
// x = 3;

// try {
//     let y = 1;
//     const x = 2;
//     x = 3;
// } catch (e) {
//     console.log(e.message);
// }

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
};


function renderCountry(data, className = '') {
    const countriesContainer = document.querySelector('.countries');
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

function getPosition() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

function renderError(msg) {
    const countriesContainer = document.querySelector('.countries');
    const html = `
    <article class="country error">
        <h2 class="error__message">${msg}</h2>
    </article>
    `;
    countriesContainer.innerHTML = html;
    countriesContainer.style.opacity = 1;
}
const whereAmI = async function () {
    try {
        // Geolocation
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        // Geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if (!resGeo.ok) throw new Error('Problem getting location data');
        const dataGeo = await resGeo.json();
        // console.log(dataGeo);

        // Getting country name from geocoding data
        const country = dataGeo.country;

        // Fetch country details from REST Countries API
        const resCountry = await fetch(`https://restcountries.com/v2/name/${country}`);
        if (!resCountry.ok) throw new Error('Problem getting country data');
        const [dataCountry] = await resCountry.json();
        // console.log(dataCountry);

        // Render country
        renderCountry(dataCountry);

        return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (err) {
        console.error(`${err.message}`);
        renderError(`Something went wrong: ${err.message}`);

        // Reject promise returned from async function
        throw err;
    }
};

console.log('1: Will get location');
// whereAmI()
//     .then(city => console.log(`2: ${city}`))
//     .catch(err => console.error(`2: ${err.message}`))
//     .finally(() => console.log('3: Finished getting location'));

(async function () {
    try {
        const city = await whereAmI();
        console.log(`2: ${city}`);
    } catch (err) {
        console.error(`2: ${err.message}`);
    }
    console.log('3: Finished getting location');
})();

const get3Countries = async function (c1, c2, c3) {
    try {
    //    const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`, 'Country not found');
    //    const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`, 'Country not found');
    //    const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`, 'Country not found');
        
    //    console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
        getJSON(`https://restcountries.com/v2/name/${c1}`, 'Country not found'),
        getJSON(`https://restcountries.com/v2/name/${c2}`, 'Country not found'),
        getJSON(`https://restcountries.com/v2/name/${c3}`, 'Country not found')
    ]);

    data.forEach((d, idx) => {
        console.log(`Country Number ${idx+1} :${d[0].capital}`);
    });
    
    } catch (err) {
        console.error(err.message);
    }
}

get3Countries('portugal', 'canada', 'tanzania');

