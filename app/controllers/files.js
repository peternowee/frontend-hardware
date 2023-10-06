import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class FilesController extends Controller {
  @service store;

  @action
  removeFile(file, event) {
    event.preventDefault();
    // TODO: DELETE request to file-service.
    file.destroyRecord();
  }
}
