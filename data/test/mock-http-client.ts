/* eslint-disable @typescript-eslint/no-explicit-any */
import { methodHttp } from "@/@shared/protocols/http/httpMethod";
import { HttpClient } from "../protocols/http/http-client";
import { HttpResponse } from "../protocols/http/http-response";
import { HttpStatusCode } from "@/@shared/protocols/http/httpStatusCode";

export class HttpClientSpy<T, R> implements HttpClient<T, R> {
  url?: string;
  method!: methodHttp;
  body?: T;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  };

  async request(params: {
    url: string;
    method: methodHttp;
    body?: T;
  }): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.method = params.method;
    this.body = params?.body;

    if (
      this.response.statusCode !== HttpStatusCode.ok &&
      this.response.statusCode !== HttpStatusCode.noContent
    ) {
      throw new Error(
        `Requisição falhou com status ${this.response.statusCode}`
      );
    }

    return Promise.resolve(this.response);
  }
}
