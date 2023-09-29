import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class PnFileUploadComponent extends Component {
  @action
  async uploadPhoto(file) {
    try {
      const response = await file.upload('/files');
    } catch (response) {
      console.error(`File upload failed: ${response}`);
    }
  }
}
