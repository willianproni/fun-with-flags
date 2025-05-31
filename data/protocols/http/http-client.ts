import { methodHttp } from "@/@shared/protocols/http/httpMethod";
import { HttpResponse } from "./http-response";

type HttpClientParams<T> = {
  url: string;
  method: methodHttp;
  body?: T;
};

export interface HttpClient<T, R> {
  request(params: HttpClientParams<T>): Promise<HttpResponse<R>>;
}
