import { action } from '@ember/object';
import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class PnFileUploadComponent extends Component {
  @service router;

  @action
  async uploadPhoto(file) {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await file.upload('/files');
      this.router.refresh('files');
    } catch (response) {
      console.error(`File upload failed: ${response}`);
    }
  }
}
