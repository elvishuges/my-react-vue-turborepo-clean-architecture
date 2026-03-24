import { UnexpectedError, InvalidCredentialsError } from "../../domain/errors";
import { type HttpClient, HttpStatusCode } from "../protocols/http/http-client";
import type { Authentication } from "../../domain/usecases/authentication";
import type { AccountModel } from "../../domain/models";

export class RemoteAuthentication implements Authentication {
  private readonly url: string;
  private readonly httpClient: HttpClient<AccountModel>;
  constructor(url: string, httpClient: HttpClient<AccountModel>) {
    this.url = url;
    this.httpClient = httpClient;
  }

  async auth(params: Authentication.Params): Promise<AccountModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "post",
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
