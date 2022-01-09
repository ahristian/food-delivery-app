import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class VehiclesShowRoute extends Route {
  @service store;

  model({ vehicle_id }) {
    return this.store.findRecord('vehicle', vehicle_id);
  }
}
