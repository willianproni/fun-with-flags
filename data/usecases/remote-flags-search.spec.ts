import { flagsSearchResponse } from "@/domain/model/flags-model";
import { HttpClientSpy } from "../test/mock-http-client";
import { RemoteFlagsSearch } from "./remote-flags-search";
import { HttpStatusCode } from "@/@shared/protocols/http/httpStatusCode";
import {
  makeMockHttpResponse,
  mockFlagsSearch,
} from "@/domain/test/mock-flags-search";

describe("Remote flags search", () => {
  const makeSut = () => {
    const httpClientSpy = new HttpClientSpy<unknown, flagsSearchResponse[]>();
    const sut = new RemoteFlagsSearch(httpClientSpy);

    return { sut, httpClientSpy };
  };

  it("Should call HttpPostClient with correct URL", async () => {
    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: makeMockHttpResponse(),
    };

    await sut.execute();

    expect(httpClientSpy.url).toBe(
      "/all?fields=name,cca3,flags,capital,region,population"
    );
  });

  it("should return an flagProps if HttpPostClient return 200", async () => {
    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: makeMockHttpResponse(),
    };

    const response = await sut.execute();

    expect(response).toEqual(mockFlagsSearch());
  });

  it("should throw erro if return something different from 200", () => {
    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.execute();

    expect(promise).rejects.toThrow();
  });

  it("should throw erro if body return is undefined", () => {
    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
    };

    const promise = sut.execute();

    expect(promise).rejects.toThrow();
  });
});
