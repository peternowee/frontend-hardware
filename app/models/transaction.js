import Model, { attr } from '@ember-data/model';

export default class TransactionModel extends Model {
  @attr('datetime') datetime;
  @attr('string') person;
  @attr('string') individualProduct;
}
