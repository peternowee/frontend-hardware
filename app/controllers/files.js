import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class FilesController extends Controller {
  @tracked newName = '';

  @service store;

  @action
  createFile(event) {
    event.preventDefault();
    // create the new file
    const file = this.store.createRecord('file', {
      name: this.newName,
    });
    file.save();
    // clear the input fields
    this.newName = '';
  }

  @action
  removeFile(file, event) {
    event.preventDefault();
    // TODO: DELETE request to file-service.
    file.destroyRecord();
  }
}
