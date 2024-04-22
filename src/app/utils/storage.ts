export class StorageHelper {
  static HISTORY_STORAGE_KEY = 'tlv-history';

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
}
