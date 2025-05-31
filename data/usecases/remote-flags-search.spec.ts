import { searchFlagsResponse } from "@/domain/model/flags-model";
import { HttpClientSpy } from "../test/mock-http-client";
import { RemoteFlagsSearch } from "./remote-flags-search";
import { HttpStatusCode } from "@/@shared/protocols/http/httpStatusCode";
import { mockFlagsSearch } from "@/domain/test/mock-flags-search";
import { UnexpectedError } from "@/domain/errors/unexpected-error";

describe("Remote flags search", () => {
  const makeMockHttpResponse = (): searchFlagsResponse[] => [
    {
      flags: {
        png: "https://flagcdn.com/w320/mn.png",
        svg: "https://flagcdn.com/mn.svg",
        alt: "The flag of Mongolia is composed of three equal vertical bands of red, blue and red, with the national emblem — the Soyombo — in gold centered in the hoist-side red band.",
      },
      name: {
        common: "Mongolia",
        official: "Mongolia",
        nativeName: {
          mon: {
            official: "Монгол улс",
            common: "Монгол улс",
          },
        },
      },
      capital: ["Ulan Bator"],
      region: "Asia",
      population: 3278292,
    },
    {
      flags: {
        png: "https://flagcdn.com/w320/se.png",
        svg: "https://flagcdn.com/se.svg",
        alt: "The flag of Sweden has a blue field with a large golden-yellow cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side.",
      },
      name: {
        common: "Sweden",
        official: "Kingdom of Sweden",
        nativeName: {
          swe: {
            official: "Konungariket Sverige",
            common: "Sverige",
          },
        },
      },
      capital: ["Stockholm"],
      region: "Europe",
      population: 10353442,
    },
  ];

  const makeSut = () => {
    const httpClientSpy = new HttpClientSpy<unknown, searchFlagsResponse[]>();
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
      "/all?fields=name,flags,capital,region,population"
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

    expect(promise).rejects.toThrow(new UnexpectedError());
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
