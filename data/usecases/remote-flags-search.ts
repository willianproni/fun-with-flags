import { flagProps, searchFlagsResponse } from "@/domain/model/flags-model";
import { IFlagsSearch } from "@/domain/usecases/flags-search";
import { HttpClient } from "../protocols/http/http-client";
import { methodHttp } from "@/@shared/protocols/http/httpMethod";
import { UnexpectedError } from "@/domain/errors/unexpected-error";

export class RemoteFlagsSearch implements IFlagsSearch {
  private readonly httpClient: HttpClient<unknown, searchFlagsResponse[]>;

  constructor(httpClient: HttpClient<unknown, searchFlagsResponse[]>) {
    this.httpClient = httpClient;
  }

  async execute(): Promise<flagProps[]> {
    try {
      const response = await this.httpClient.request({
        url: "/all?fields=name,flags,capital,region,population",
        method: methodHttp.GET,
      });

      if (!response?.body) {
        throw new Error("No Content flags");
      }

      const flagList: flagProps[] = response.body.map((item, index) => {
        return {
          id: index,
          image: item.flags.png,
          country: item.name.common,
          capital: item.capital[0],
          region: item.region,
          population: item.population.toString(),
        };
      });

      return flagList;
    } catch (error) {
      console.log({ error });
      throw new UnexpectedError();
    }
  }
}
