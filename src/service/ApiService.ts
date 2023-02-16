import { HttpClient } from "./HttpClient";
export class ApiService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  /**
   * 获取二维码数据
   * @returns
   * @memberof qrcodeApiService
   */
  getQRCode() {
    return this.httpClient.request("/openapi/qrcode", "get", "");
  }
}
