import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class PeopleController extends Controller {
  @tracked newName = '';

  @service store;

  @action
  createPerson(event) {
    event.preventDefault();
    // create the new person
    const person = this.store.createRecord('person', {
      name: this.newName,
    });
    person.save();
    // clear the input fields
    this.newName = '';
  }

  @action
  removePerson(person, event) {
    event.preventDefault();
    person.destroyRecord();
  }
}
