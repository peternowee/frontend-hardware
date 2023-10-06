import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class FilesController extends Controller {
  @service store;

  @action
  removeFile(file, event) {
    event.preventDefault();
    // The database holds records for virtual files and physical files.
    // Both have an .id, but the virtual file record has an additional
    // .download.id containing the id of the related physical file.
    // mu-semtech/file-service API only works for virtual file .id, but
    // DELETE on that also deletes the physical file and data for both
    // virtual and physical file.
    const relatedId = file.download.id;
    if (relatedId !== null) {
      file.destroyRecord();
      // TODO: Delete related record from local store.
    } else {
      console.log('Cannot delete by physical file reference ' + file.id);
    }
  }
}
