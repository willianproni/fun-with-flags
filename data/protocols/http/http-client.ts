import { methodHttp } from "@/@shared/protocols/http/httpMethod";
import { HttpResponse } from "./http-response";

type HttpClientParams = {
  url: string;
  method: methodHttp;
  body?: unknown;
};

export interface HttpClient<R> {
  request(params: HttpClientParams): Promise<HttpResponse<R>>;
}
