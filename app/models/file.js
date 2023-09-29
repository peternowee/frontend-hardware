import Model, { attr, belongsTo } from '@ember-data/model';

export default class FileModel extends Model {
  @attr('string') name;
  @attr('string') format;
  @attr('number') size;
  @attr('string') extension;
  @attr('datetime') created;
  @attr('datetime') modified;

  @belongsTo('file', {
    async: true,
    inverse: null,
  })
  download;

  get downloadLink() {
    return `/files/${this.id}/download`;
  }

  get namedDownloadLink() {
    return `${this.downloadLink}?name=${encodeURIComponent(this.name)}`;
  }
}
