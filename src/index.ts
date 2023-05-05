import fetch from "cross-fetch";
import { TestingEndpoints } from "./TestingEndpoints";
import { PlayerEndpoints } from "./PlayerEndpoints";
import { NetworkEndpoints } from "./NetworkEndpoints";
import { PaintSquadEndpoints } from "./PaintSquadEndpoints";

export class Xenyria {
  private _token: string;

  constructor(token: string) {
    this._token = token;
  }

  public async request(
    method: string,
    endpoint: string,
    query?: any
  ): Promise<any> {
    // remove elements with undefined values
    if (query) {
      Object.keys(query).forEach((key) => {
        if (query[key] === undefined) delete query[key];
      });
    }
    const querystring = new URLSearchParams(query).toString();
    const url = new URL(
      querystring
        ? `https://api.xenyria.net${endpoint}?${querystring}`
        : `https://api.xenyria.net${endpoint}`
    );
    const response = await fetch(url.toString(), {
      method,
      headers: {
        Authorization: `Xen-Token ${this._token}`,
      },
    });
    const json = await response.json();
    if (!json.success && json.message && json.message === "Key is invalid")
      throw new Error("Invalid token");
    return json;
  }

  public readonly testing = new TestingEndpoints(this);
  public readonly player = new PlayerEndpoints(this);
  public readonly network = new NetworkEndpoints(this);
  public readonly paintsquad = new PaintSquadEndpoints(this);
}
