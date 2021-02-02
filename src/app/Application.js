import config from '../config';
import EventEmitter from 'eventemitter3';
import StarWarsUniverse from '../app/custom/StarWarsUniverse';


const EVENTS = {
  APP_READY: 'app_ready',
};

/**
 * App entry point.
 * All configurations are described in src/config.js
 */
export default class Application extends EventEmitter {
  constructor() {
    super();

    this.config = config;
    this.data = {
      universe: swuniverse
    };
    this.init();
  }

  static get events() {
    return EVENTS;
  }

  /**
   * Initializes the app.
   * Called when the DOM has loaded. You can initiate your custom classes here
   * and manipulate the DOM tree. Task data should be assigned to Application.data.
   * The APP_READY event should be emitted at the end of this method.
   */
  async init() {
    // Initiate classes and wait for async operations here.
    swuniverse.init();
    this.emit(Application.events.APP_READY);
  }
}
const swuniverse = new StarWarsUniverse();

