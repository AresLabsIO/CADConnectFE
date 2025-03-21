import { createFileRoute, Link, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/records/")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: RouteComponent,
});
function RouteComponent() {
  return <div><Link to={'/records/cad'}>CAD DATA</Link><Link to={'/records/dui'}>CAD DATA</Link></div>;
}
