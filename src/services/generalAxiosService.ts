import { AxiosInstance } from "axios";
import commonHttpConfig from "./Common-http-Config";

export default class generalAxiosService {
    private readonly client: AxiosInstance;
    constructor() {
        this.client = commonHttpConfig;
        this.client.defaults.timeout = 30000;
    }

    async getDropdowns() {
        return this.fetch("/dropdowns");
    }

    // Helpers
    private async fetch(endpoint: string) {
        return new Promise((resolve, reject) => {
            this.client
                .get(endpoint)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }

    // Helpers
    private async submit(
        endpoint: string,
        payload: any
    ) {
        return new Promise((resolve, reject) => {
            this.client
                .post(
                    endpoint,
                    payload )
                .then(resp => resolve(resp.data))
                .catch(error => reject(error));
        });
    }
}
