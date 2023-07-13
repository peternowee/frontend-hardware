import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TransactionsRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('transaction', {
      include: 'new-owner,received-product'
    });
  }
}
