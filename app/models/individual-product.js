import Model, { attr } from '@ember-data/model';

export default class IndividualProductModel extends Model {
  @attr('string') serialNumber;
  @attr('string') name;
}
