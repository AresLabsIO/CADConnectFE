import { createFileRoute } from "@tanstack/react-router";
import LogoutPage from "../pages/logout";

export const Route = createFileRoute("/logout")({
  component: LogoutPage,
});

