import { createFileRoute, redirect } from "@tanstack/react-router";
import { useAuth } from "react-oidc-context";
import { z } from "zod";

const fallback = "/records";
const loginPath = "/";

export const Route = createFileRoute("/callback")({
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  beforeLoad: ({ context,search }) => {
    console.log(context.auth)

    if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect || fallback })
    } else{
      throw redirect({ to: loginPath })
    }
  },
  component: RouteComponent,

});

function RouteComponent() {
  const auth = useAuth();
  return <div>Hello "/callback"! {auth.user?.id_token}</div>;
}
