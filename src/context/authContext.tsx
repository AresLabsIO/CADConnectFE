import { AuthProvider } from "react-oidc-context";
import {PropsWithChildren } from "react";
import { cognitoAuthConfig } from "../config/cognitoAuthConfig";

export const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  return <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>;
};
