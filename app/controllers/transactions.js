import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class TransactionsController extends Controller {
  @tracked newTransactionDatetime = '';
  @tracked newOwner = '';
  @tracked receivedProduct = '';

  @service store;

  @action
  createTransaction(event) {
    event.preventDefault();
    var route = this;
    // look up related records
    this.store.findRecord('person', this.newOwner, {reload: true})
    .then(function(myPerson) {
      route.store.findRecord('individual-product', route.receivedProduct, {reload: true})
      .then(function(myIndividualProduct) {
        // create the new transaction
        const transaction = route.store.createRecord('transaction', {
          datetime: new Date(route.newTransactionDatetime),
          newOwner: myPerson,
          receivedProduct: myIndividualProduct,
        });
        transaction.save()
        // clear the input fields
        route.newTransactionDatetime = '';
        route.newOwner = '';
        route.receivedProduct = '';
      })
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
