import { makeApiUrl, makeAxiosHttpClient } from './../../../main/factories/http'
import { Authentication } from './../../../domain/usecases'
import { RemoteAuthentication } from './../../../data/usecases/remote-authentication'

export const makeRemoteAuthentication = (apiUrl:string): Authentication =>
  new RemoteAuthentication(makeApiUrl(apiUrl,'/signup'), makeAxiosHttpClient())
