import { APIRoutes } from "../utils/http";
import RequestsService from "./request.service";

export default class AuthService {
  static async Login(username, password) {
    const credentials = {
      username: username,
      password: password,
    };

    return RequestsService.postMethod(APIRoutes.AUTH_LOGIN, credentials);
  }
}
