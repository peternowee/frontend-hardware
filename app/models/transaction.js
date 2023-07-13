import Model, { attr, belongsTo } from '@ember-data/model';

export default class TransactionModel extends Model {
  @belongsTo('person', { async: true, inverse: 'transaction' }) newOwner;
}
