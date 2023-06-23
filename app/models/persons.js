import Model, { attr } from '@ember-data/model';

export default class PersonsModel extends Model {
  @attr('string') name;
}
