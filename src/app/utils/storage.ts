export class StorageHelper {
  static HISTORY_STORAGE_KEY = 'tlv-history';
  static COPY_ON_EDIT = 'copy-on-edit';

  static get tlvs(): string[] {
    return JSON.parse(
      localStorage.getItem(StorageHelper.HISTORY_STORAGE_KEY) ?? '[]'
    );
  }

  static addTlv(tlv: string) {
    const stored = this.tlvs;
    stored.push(tlv);
    localStorage.setItem(
      StorageHelper.HISTORY_STORAGE_KEY,
      JSON.stringify(stored)
    );
  }

  static changeCopyOnEdit(value: boolean) {
    console.log('changeCopyOnEdit', value.toString());
    localStorage.setItem(StorageHelper.COPY_ON_EDIT, value.toString());
  }

  static get copyOnEdit() {
    console.log('copyOnEdit', localStorage.getItem(StorageHelper.COPY_ON_EDIT));
    return localStorage.getItem(StorageHelper.COPY_ON_EDIT) === 'true';
  }
}
