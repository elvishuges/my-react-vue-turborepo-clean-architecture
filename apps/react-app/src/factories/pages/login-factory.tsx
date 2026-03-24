import { Login } from "../../pages/Login";

import { makeRemoteAuthentication } from "../../../../../packages/core/main/factories/usecases";

import React from "react";
export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication(import.meta.env.VITE_API_URL)}
    />
  );
};
