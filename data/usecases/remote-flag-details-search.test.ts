import { flagDetailsResponse } from "@/domain/model/flags-model";
import { HttpClientSpy } from "../test/mock-http-client";
import { RemoteFlagDetailsSearch } from "./remote-flag-details-search";
import { HttpStatusCode } from "@/@shared/protocols/http/httpStatusCode";
import {
  makeMockRemoteFlagDetailsSearchHttpResponse,
  makeResponseUseCaseRemoteFlagDetailsSearch,
} from "@/domain/test/mock-flag-datails-search";

describe("Remote flag details search", () => {
  const makeSut = () => {
    const httpCLientSpy = new HttpClientSpy<unknown, flagDetailsResponse>();
    const sut = new RemoteFlagDetailsSearch(httpCLientSpy);

    return { httpCLientSpy, sut };
  };

  it("Should call HttpPostClient with correct URL", async () => {
    const { httpCLientSpy, sut } = makeSut();

    httpCLientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: makeMockRemoteFlagDetailsSearchHttpResponse(),
    };

    await sut.execute("BRA");

    expect(httpCLientSpy.url).toBe(
      "/alpha/BRA?fields=name,flags,capital,region,population,languages,borders"
    );
  });

  it("should return flags details if HttpPostClient return sucess", async () => {
    const { httpCLientSpy, sut } = makeSut();

    httpCLientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: makeMockRemoteFlagDetailsSearchHttpResponse(),
    };
    const response = await sut.execute("BRA");

    expect(response).toEqual(makeResponseUseCaseRemoteFlagDetailsSearch());
  });

  it("should throw erro if HttpPostClient return error", () => {
    const { httpCLientSpy, sut } = makeSut();

    httpCLientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };

    const promise = sut.execute("BRA");

    expect(promise).rejects.toThrow();
  });
});
