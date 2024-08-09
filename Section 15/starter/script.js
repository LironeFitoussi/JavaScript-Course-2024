'use strict';
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-5) + String(Math.random()).slice(-5);
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
    console.log(this.clicks);
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence; // steps per min
    this.calcPace(); // Return pace in min/km
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain; // in meters
    this.calcSpeed(); // Return speed in km/h
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);

// console.log(run1, cycling1);

///////////////////////////////////////

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

/// APPLICATION ARCHITECTURE
class App {
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoomLevel = 13;

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this))
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Colud not get your position');
        }
      );
    }
  }

  _loadMap(pos) {
    const { latitude, longitude } = pos.coords;
    // console.log(`Longtitude: ${longitude} | Latitude: ${latitude}`);
    //   console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];
    // const myHome = [32.338255, 34.8567];
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // L.marker(coords)
    //   .addTo(this.#map)
    //   .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    //   .openPopup();

    // Load local storage data
    this._getLocalStorage();

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    // console.log(mapEvent);
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => {
      form.style.display = 'grid';
    }, 1000)
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) => {
      const isValid = inputs.every(inp => Number.isFinite(inp) && inp > 0);
      !isValid && alert('Input have to be positive number');
      return isValid;
    };

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (validInputs(distance, duration, cadence)) {
        // Add new object to workout array
        workout = new Running([lat, lng], distance, duration, cadence);
      } else {
        return;
      }
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      // Check if data is valid
      if (validInputs(distance, duration, elevation)) {
        // Add new object to workout array
        workout = new Cycling([lat, lng], distance, duration, elevation);
      } else {
        return;
      }
    }

    this.#workouts.push(workout);
    // console.log(this.#workouts);
    // console.log(workout);

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form + Clear input fields
    this._hideForm();

    // store in local storage
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    // console.log(workout.distance);
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.type === 'running' ? '🏃' : '🚴🏻'} ${workout.description}`)
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
    `;

    if (workout.type === 'running') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      `;
    }

    if (workout.type === 'cycling') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      `;
    }

    // Delete Button
    html += `
          <button class="edit-btn action-btn">
            <i class="fa fa-solid fa-pencil" style="color: #ffffff"></i>
          </button>
          <button class="delete-btn action-btn">
            <i class="fa fa-solid fa-trash" style="color: #ffffff"></i>
          </button>
      </li>
    `
    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest(".workout");

    if (!workoutEl) return;

    // Check if actuall element (children) is ".btn-delete"
    if (e.target.classList.contains("delete-btn")) {      
      // confirm deletion
      if (confirm("Are you sure you want to delete this workout?")) {
        // Delete workout from the list
        this._deleteWorkout(workoutEl.dataset.id);     
      }

      return;
    };

    // Check if actuall element (children) is ".edit-delete"
    if (e.target.classList.contains("edit-btn")) {
      // Checkout the workout to edit
      const workoutToEdit = this.#workouts.find(work => work.id === workoutEl.dataset.id);
      // TODO: Complete the functionallity for opening edit mode
      // Reopen the form
      // form.classList.remove('hidden');
      return;
    };


    // console.dir(workoutEl.dataset.id)  // Access to the data-id attribute
    const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);

    this._centerMap(workout.coords);

    // Using the public interface
    // workout.click();
  }

  _centerMap(coords) {
    this.#map.setView(coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
    this.#workouts = data;

    // Render all workouts
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
      this._renderWorkoutMarker(work)
    })
  }

  _reset () {
    localStorage.removeItem('workouts')
    location.reload()
  }

  _deleteWorkout (workoutId) {
    // Delete workout from the list
    this.#workouts = this.#workouts.filter((wourkout) => wourkout.id !== workoutId)

    // Reset local storage
    this._setLocalStorage()

    // Reload the page
    location.reload()
  }

}
const app = new App();
