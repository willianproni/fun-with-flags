import { methodHttp } from "@/@shared/protocols/http/httpMethod";
import { HttpResponse } from "./http-response";

type HttpClientParams<T> = {
  url: string;
  method: methodHttp;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
  body?: T;
};

export interface IHttpClient<T, R> {
  request(params: HttpClientParams<T>): Promise<HttpResponse<R>>;
}
