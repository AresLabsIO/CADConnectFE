import { createFileRoute, redirect } from "@tanstack/react-router";
import LoginPage from "../pages/login";
import { z } from "zod";

const fallback = "/records";

const loginSearchSchema = z.object({
  redirect: z.string().catch(""),
});

export type LoginSearch = z.infer<typeof loginSearchSchema>;

export const Route = createFileRoute("/")({
  validateSearch: loginSearchSchema,
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: fallback });
    }
  },
  component: LoginPage,
});
