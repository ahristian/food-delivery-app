import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MealsIndexRoute extends Route {
  @service store;

  model({ meal_id }) {
    return this.store.findRecord('meals', meal_id);
  }
}
