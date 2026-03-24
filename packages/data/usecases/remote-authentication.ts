
import {  UnexpectedError,InvalidCredentialsError } from '../../domain/errors'
import { HttpClient, HttpStatusCode } from '../protocols/http/http-client'
import { Authentication } from '../../domain/usecases/authentication'
import { AccountModel } from '../../domain/models'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<AccountModel>
  ) {}

  async auth (params: Authentication.Params): Promise<AccountModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}



