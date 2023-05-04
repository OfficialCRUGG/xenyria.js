import {
  RESTGetAPIPlayerFetchRequest,
  RESTGetAPIPlayerFetchResponse,
  RESTGetAPIPlayerGroupRequest,
  RESTGetAPIPlayerGroupResponse,
  RESTGetAPIPlayerVotesRequest,
  RESTGetAPIPlayerVotesResponse,
} from "xenyria-api-types";
import { Xenyria } from ".";
import { uuidRegex } from "./util/uuidRegex";

export class PlayerEndpoints {
  private _client: Xenyria;

  constructor(client: Xenyria) {
    this._client = client;
  }

  public async fetch(
    player: number | string
  ): Promise<RESTGetAPIPlayerFetchResponse> {
    let request: RESTGetAPIPlayerFetchRequest = {};
    if (typeof player === "number") request = { xen_id: player };
    if (typeof player === "string") {
      if (uuidRegex.test(player)) request = { uuid: player };
      else request = { username: player };
    }
    return await this._client.request("GET", "/player/fetch", request);
  }

  public async votes(xenId: number): Promise<RESTGetAPIPlayerVotesResponse> {
    const request: RESTGetAPIPlayerVotesRequest = { xen_id: xenId };
    return await this._client.request("GET", "/player/votes", request);
  }

  public async group(xenId: number): Promise<RESTGetAPIPlayerGroupResponse> {
    const request: RESTGetAPIPlayerGroupRequest = { xen_id: xenId };
    return await this._client.request("GET", "/player/group", request);
  }
}
