import { HttpStatusCode } from "@/@shared/protocols/http/httpStatusCode";

export type HttpResponse<R> = {
  statusCode: HttpStatusCode;
  body?: R;
};
