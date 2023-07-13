import Model, { attr, belongsTo } from '@ember-data/model';

export default class TransactionModel extends Model {
  @attr('datetime') datetime;
  @belongsTo('person', { async: true, inverse: 'transaction' }) newOwner;
}
