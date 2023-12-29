import { $api } from "../utils/http";

export default class RequestsService {
        static async getMethod(url, query) {
                return $api.get(url, {
                        params: query,
                });
        }

        static async postMethod(url, payload, config) {
                return $api.post(url, payload, config);
        }
}
