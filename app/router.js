import EmberRouter from '@ember/routing/router';
import config from 'frontend-hardware/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('people');
  this.route('individual-products');
  this.route('transactions');
  this.route('count');
  this.route('files');
});
