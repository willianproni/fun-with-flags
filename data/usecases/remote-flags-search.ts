import { flagProps, flagsSearchResponse } from "@/domain/model/flags-model";
import { IFlagsSearch } from "@/domain/usecases/flags-search";
import { IHttpClient } from "../protocols/http/http-client";
import { methodHttp } from "@/@shared/protocols/http/httpMethod";
import { formatCompactNumber } from "@/util";

export class RemoteFlagsSearch implements IFlagsSearch {
  private readonly httpClient: IHttpClient<unknown, flagsSearchResponse[]>;

  constructor(httpClient: IHttpClient<unknown, flagsSearchResponse[]>) {
    this.httpClient = httpClient;
  }

  async execute(): Promise<flagProps[]> {
    try {
      const response = await this.httpClient.request({
        url: "/all?fields=name,cca3,flags,capital,region,population",
        method: methodHttp.GET,
        cache: "force-cache",
        next: { revalidate: 3600 },
      });

      if (!response?.body) {
        throw new Error("No Content flags");
      }

      const flagList: flagProps[] = response.body.map((item) => {
        return {
          acronym: item.cca3,
          image: item.flags.png,
          country: item.name.common,
          capital: item.capital[0],
          region: item.region,
          population: formatCompactNumber(item.population),
        };
      });

      flagList.sort((a, b) => a.country.localeCompare(b.country, "en-US"));

      return flagList;
    } catch (error) {
      throw error;
    }
  }
}
