import { utilsFirebase } from "../../../config/plugins/firebase.plugin.js";

export class uploadFileService {
  static async uploadToFirebase(path, data) {
    const imgRef = utilsFirebase.ref(utilsFirebase.storage, path);
    await this.utilsFirebase.uploadBytes(imgRef, data);

    return await utilsFirebase.getDownloadUrl(imgRef);
  }
}
