import Model, { attr, belongsTo } from '@ember-data/model';

export default class TransactionModel extends Model {
  @attr('datetime') datetime;
  @belongsTo('person', { async: true, inverse: 'transactions' }) newOwner;
  @belongsTo('individual-product', { async: true, inverse: 'transactions' })
  receivedProduct;
}
