import { HttpStatusCode } from "@/@shared/protocols/http/httpStatusCode";

export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  body: T;
};
