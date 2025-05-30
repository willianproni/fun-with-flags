/* eslint-disable @typescript-eslint/no-explicit-any */
import { methodHttp } from "@/@shared/protocols/http/httpMethod";
import { HttpClient } from "@/data/protocols/http/http-client";
import { HttpResponse } from "@/data/protocols/http/http-response";

export class FetchHttpClient implements HttpClient<any> {
  async request(params: {
    url: string;
    method: methodHttp;
    body?: any;
  }): Promise<HttpResponse<any>> {
    try {
      const { method, url } = params;

      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
        method,
        body: params?.body,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Erro HTTP: ${response.status}`);
      }

      const data = await response.json();

      return {
        statusCode: response.status,
        body: data,
      };
    } catch (error) {
      throw error;
    }
  }
}
