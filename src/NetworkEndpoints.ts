import {
  RESTGetAPINetworkMaintenanceResponse,
  RESTGetAPINetworkPlayerListResponse,
} from "xenyria-api-types";
import { Xenyria } from ".";

export class NetworkEndpoints {
  private _client: Xenyria;

  constructor(client: Xenyria) {
    this._client = client;
  }

  public async playerList(): Promise<RESTGetAPINetworkPlayerListResponse> {
    return await this._client.request("GET", "/network/player_list");
  }

  public async maintenance(): Promise<RESTGetAPINetworkMaintenanceResponse> {
    return await this._client.request("GET", "/network/maintenance");
  }
}
