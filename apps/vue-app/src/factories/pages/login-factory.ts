import Login from '../../pages/Login.vue'
import { makeRemoteAuthentication } from "../../../../../packages/main/factories/usecases";

export const makeLogin = () => {
  return {
    component: Login,
    props: {
      authentication: makeRemoteAuthentication(import.meta.env.VITE_API_URL)
    }
  }
}