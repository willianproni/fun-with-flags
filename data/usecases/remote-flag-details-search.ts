import {
  flagDetailsProps,
  flagDetailsResponse,
} from "@/domain/model/flags-model";
import { IFlagDatailsSearch } from "@/domain/usecases/flag-details-search";
import { IHttpClient } from "../protocols/http/http-client";
import { methodHttp } from "@/@shared/protocols/http/httpMethod";
import { formatCompactNumber } from "@/util";

export class RemoteFlagDetailsSearch implements IFlagDatailsSearch {
  httpClient: IHttpClient<unknown, flagDetailsResponse>;

  constructor(httpClient: IHttpClient<unknown, flagDetailsResponse>) {
    this.httpClient = httpClient;
  }

  async execute(acronym: string): Promise<flagDetailsProps> {
    try {
      const response = await this.httpClient.request({
        url: `/alpha/${acronym}?fields=name,flags,capital,region,population,languages,borders`,
        method: methodHttp.GET,
      });

      if (!response?.body) {
        throw new Error("No Content info flag");
      }

      const country = response.body;

      const language = Object.keys(country.languages)[0];

      return {
        country: country.name.common,
        capital: country.capital[0],
        image: country.flags.svg,
        language: country.languages[language],
        population: formatCompactNumber(country.population),
        region: country.region,
        border: country.borders,
      };
    } catch (error) {
      throw error;
    }
  }
}
