import {
  PaintSquadLeaderboardRankingType,
  PaintSquadLeaderboardTimeSpan,
  RESTGetAPIPaintSquadArenaImageRequest,
  RESTGetAPIPaintSquadArenaImageResponse,
  RESTGetAPIPaintSquadAssetRenderRequest,
  RESTGetAPIPaintSquadAssetRenderResponse,
  RESTGetAPIPaintSquadInventoryRequest,
  RESTGetAPIPaintSquadInventoryResponse,
  RESTGetAPIPaintSquadLastMatchesRequest,
  RESTGetAPIPaintSquadLastMatchesResponse,
  RESTGetAPIPaintSquadLeaderboardRequest,
  RESTGetAPIPaintSquadLeaderboardResponse,
  RESTGetAPIPaintSquadMatchDetailsRequest,
  RESTGetAPIPaintSquadMatchDetailsResponse,
  RESTGetAPIPaintSquadPlayerDataRequest,
  RESTGetAPIPaintSquadPlayerDataResponse,
  RESTGetAPIPaintSquadPlayerStatsRequest,
  RESTGetAPIPaintSquadPlayerStatsResponse,
  RESTGetAPIPaintSquadVersionDataRequest,
  RESTGetAPIPaintSquadVersionDataResponse,
  RESTGetAPIPaintSquadWeaponStatsRequest,
  RESTGetAPIPaintSquadWeaponStatsResponse,
} from "xenyria-api-types";
import { Xenyria } from ".";

export class PaintSquadEndpoints {
  private _client: Xenyria;

  constructor(client: Xenyria) {
    this._client = client;
  }

  public async versionData(
    version?: string
  ): Promise<RESTGetAPIPaintSquadVersionDataResponse> {
    const request: RESTGetAPIPaintSquadVersionDataRequest = { version };
    return await this._client.request(
      "GET",
      "/paintsquad/version_data",
      request
    );
  }

  public async leaderboard(
    timespan: PaintSquadLeaderboardTimeSpan,
    rankingType: PaintSquadLeaderboardRankingType,
    skinData?: boolean
  ): Promise<RESTGetAPIPaintSquadLeaderboardResponse> {
    const request: RESTGetAPIPaintSquadLeaderboardRequest = {
      timespan,
      ranking_type: rankingType,
      skin_data: skinData,
    };
    return await this._client.request(
      "GET",
      "/paintsquad/leaderboard",
      request
    );
  }

  public async playerStats(
    xenId: number,
    timespan: PaintSquadLeaderboardTimeSpan,
    rankingType: PaintSquadLeaderboardRankingType,
    skinData?: boolean
  ): Promise<RESTGetAPIPaintSquadPlayerStatsResponse> {
    const request: RESTGetAPIPaintSquadPlayerStatsRequest = {
      xen_id: xenId,
      timespan,
      ranking_type: rankingType,
      skin_data: skinData,
    };
    return await this._client.request(
      "GET",
      "/paintsquad/player_stats",
      request
    );
  }

  public async assetRender(
    assetName: string
  ): Promise<RESTGetAPIPaintSquadAssetRenderResponse> {
    const request: RESTGetAPIPaintSquadAssetRenderRequest = {
      asset_name: assetName,
    };
    return await this._client.request(
      "GET",
      "/paintsquad/asset_render",
      request
    );
  }

  public async arenaImage(
    arenaId: string
  ): Promise<RESTGetAPIPaintSquadArenaImageResponse> {
    const request: RESTGetAPIPaintSquadArenaImageRequest = {
      arena_id: arenaId,
    };
    return await this._client.request(
      "GET",
      "/paintsquad/arena_image",
      request
    );
  }

  public async lastMatches(
    xenId: number
  ): Promise<RESTGetAPIPaintSquadLastMatchesResponse> {
    const request: RESTGetAPIPaintSquadLastMatchesRequest = {
      xen_id: xenId,
    };
    return await this._client.request(
      "GET",
      "/paintsquad/last_matches",
      request
    );
  }

  public async matchDetails(
    matchId: string
  ): Promise<RESTGetAPIPaintSquadMatchDetailsResponse> {
    const request: RESTGetAPIPaintSquadMatchDetailsRequest = {
      match_id: matchId,
    };
    return await this._client.request(
      "GET",
      "/paintsquad/match_details",
      request
    );
  }

  public async inventory(
    xenId: number
  ): Promise<RESTGetAPIPaintSquadInventoryResponse> {
    const request: RESTGetAPIPaintSquadInventoryRequest = {
      xen_id: xenId,
    };
    return await this._client.request("GET", "/paintsquad/inventory", request);
  }

  public async weaponStats(
    xenId: number,
    sets: "all" | string = "all"
  ): Promise<RESTGetAPIPaintSquadWeaponStatsResponse> {
    const request: RESTGetAPIPaintSquadWeaponStatsRequest = {
      xen_id: xenId,
      sets,
    };
    return await this._client.request(
      "GET",
      "/paintsquad/weapon_stats",
      request
    );
  }

  public async playerData(
    xenId: number
  ): Promise<RESTGetAPIPaintSquadPlayerDataResponse> {
    const request: RESTGetAPIPaintSquadPlayerDataRequest = {
      xen_id: xenId,
    };
    return await this._client.request(
      "GET",
      "/paintsquad/player_data",
      request
    );
  }
}
