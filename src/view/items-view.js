import {createElement} from '../render';

export default class ItemsView {
  event = {};

  constructor(event) {
    this.event = event;
  }

  get iconCollection() {
    return {
      taxi: 'img/icons/taxi.png',
      flight: 'img/icons/flight.png',
      drive: 'img/icons/drive.png',
      'check-in': 'img/icons/check-in.png',
      sightseeing: 'img/icons/sightseeing.png',
    };
  }

  offersSortList() {
    return this.event.offers?.map((item) => `
      <li class="event__offer">
        <span class="event__offer-title">${item.offerTitle}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${item.offerPrice}</span>
      </li>
  `).join('');
  }

  getTemplate() {
    if(!this.event) {
      return '';
    }
    return `
      <li class="trip-events__item">
        <div class="event">
          <time class="event__date" datetime="2019-03-18">${this.event.date}</time>
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="${this.iconCollection[this.event.event.split(' ')[0].toLowerCase()]}" alt="Event type icon">
          </div>
          <h3 class="event__title">${this.event.event}</h3>
          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="2019-03-18T10:30">${this.event.startTime}</time>
              &mdash;
              <time class="event__end-time" datetime="2019-03-18T11:00">${this.event.endTime}</time>
            </p>
            <p class="event__duration">${this.event.duration}</p>
          </div>
          <p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${this.event.price}</span>
          </p>
          <h4 class="visually-hidden">Offers:</h4>
          <ul class="event__selected-offers">
            ${this.offersSortList()}
          </ul>
          <button class="event__favorite-btn event__favorite-btn--active" type="button">
            <span class="visually-hidden">Add to favorite</span>
            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
              <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
            </svg>
          </button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </div>
      </li>
    `;
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
}
