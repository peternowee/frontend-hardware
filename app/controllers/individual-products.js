import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class IndividualProductsController extends Controller {
  @tracked newSerialNumber = '';
  @tracked newName = '';

  @service store;

  @action
  createIndividualProduct(event) {
    event.preventDefault();
    // create the new individualProduct
    const individualProduct = this.store.createRecord('individual-product', {
      serialNumber: this.newSerialNumber,
      name: this.newName,
    });
    individualProduct.save();
    // clear the input fields
    this.newSerialNumber = '';
    this.newName = '';
  }

  @action
  removeIndividualProduct(individualProduct, event) {
    event.preventDefault();
    individualProduct.destroyRecord();
  }
}
