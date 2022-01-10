import EmberRouter from '@ember/routing/router';
import config from 'food-delivery-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('meals', function () {
    this.route('meal', { path: '/:meal_id' });
  });

});
