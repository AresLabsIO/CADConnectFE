import { createFileRoute, redirect } from "@tanstack/react-router";
import DashboardPage from "../pages/dashboard";

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
  component: DashboardPage,
});
