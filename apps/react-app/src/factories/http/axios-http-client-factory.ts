import  { AxiosHttpClient } from './../../../../../packages/infra/http'

export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()
