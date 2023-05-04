import { RESTGetAPITestingHelloResponse } from "xenyria-api-types";
import { Xenyria } from ".";

export class TestingEndpoints {
  private _client: Xenyria;

  constructor(client: Xenyria) {
    this._client = client;
  }

  public async hello(): Promise<RESTGetAPITestingHelloResponse> {
    return await this._client.request("GET", "/testing/hello");
  }
}
