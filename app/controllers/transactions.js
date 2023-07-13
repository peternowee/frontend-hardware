import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class TransactionsController extends Controller {
  @tracked newOwner = '';

  @service store;

  @action
  createTransaction(event) {
    event.preventDefault();
    var route = this;
    // look up related records
    this.store.findRecord('person', this.newOwner, {reload: true})
    .then(function(myPerson) {
      // create the new transaction
      const transaction = route.store.createRecord('transaction', {
        newOwner: myPerson,
      });
      transaction.save()
      // clear the input fields
      route.newOwner = '';
    }).catch(function(error){
        console.log(error.message);
    });
  }

  @action
  removeTransaction(transaction, event) {
    event.preventDefault();
    transaction.destroyRecord();
  }
}
