import Model, { attr, hasMany } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr('string') name;
  @hasMany('transaction', { async: true, inverse: 'person' }) transaction;
}
