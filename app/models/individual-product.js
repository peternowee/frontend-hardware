import Model, { attr, hasMany } from '@ember-data/model';

export default class IndividualProductModel extends Model {
  @attr('string') serialNumber;
  @attr('string') name;
  @hasMany('transaction', { async: true, inverse: 'receivedProduct' }) transactions;
}
