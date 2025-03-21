import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { AuthState } from "react-oidc-context";

interface MyRouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  auth: AuthState;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => <Outlet />,
});
