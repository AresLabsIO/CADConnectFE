// // Your OIDC configuration

export const cognitoAuthConfig = {
  redirect_uri: "https://localhost:5173/callback",
  response_type: "code",
  scope: "cadconnect-resource-server/auth",
  domain: "https://cadconnect-agency.auth.us-west-2.amazoncognito.com",
  post_logout_uri: "https://localhost:5173",
  // UPDATE BELOW
  client_id: "5djdcvmvvmg48mg45m4rq0gijh",
  authority: "https://cognito-idp.us-west-2.amazonaws.com/us-west-2_guzWTyjKS",

};
