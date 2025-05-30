import { flagProps, searchFlagsResponse } from "@/domain/model/flags-model";
import { ISearchFlags } from "@/domain/usecases/search-flags";
import { HttpClient } from "../protocols/http/http-client";
import { methodHttp } from "@/@shared/protocols/http/httpMethod";

export class HttpSearchFlags implements ISearchFlags {
  private readonly httpClient: HttpClient<searchFlagsResponse[]>;

  constructor(httpClient: HttpClient<searchFlagsResponse[]>) {
    this.httpClient = httpClient;
  }

  async execute(): Promise<flagProps[]> {
    try {
      const response = await this.httpClient.request({
        url: "/all?fields=name,flags,capital,region,population",
        method: methodHttp.GET,
      });

      const flagList: flagProps[] = response.body.map((item) => {
        return {
          image: item.flags.png,
          country: item.name.common,
          capital: item.capital[0],
          region: item.region,
          population: item.population.toString(),
        };
      });

      return flagList;
    } catch (error) {
      throw error;
    }
  }
}
