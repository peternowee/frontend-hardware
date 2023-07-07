import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class TransactionsController extends Controller {
  @tracked newDatetime = '';
  @tracked newPerson = '';
  @tracked newIndividualProduct = '';

  @service store;

  @action
  createTransaction(event) {
    event.preventDefault();
    // create the new transaction
    const transaction = this.store.createRecord('transaction', {
      datetime: new Date(this.newDatetime),
      person: this.newPerson,
      individualProduct: this.newIndividualProduct,
    });
    transaction.save();
    // clear the input fields
    this.newDatetime = '';
    this.newPerson = '';
    this.newIndividualProduct = '';
  }

  @action
  removeTransaction(transaction, event) {
    event.preventDefault();
    transaction.destroyRecord();
  }
}
