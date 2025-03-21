import { RouterProvider } from "@tanstack/react-router";
import { applyMode, Mode } from '@cloudscape-design/global-styles';
import { router } from "./router";
import { AuthenticationProvider } from "./context/authContext";
import { useAuth } from "react-oidc-context";
import {
  Box,
  Container,
  ContentLayout,
  Header,
  SpaceBetween,
  Spinner,
} from "@cloudscape-design/components";

function InnerApp() {
  applyMode(Mode.Dark);
  const auth = useAuth();
  // Update the router context when the authentication state changes
  router.update({ context: { auth } });

  if (auth.isLoading) {
    return (
      <Box margin="xxxl">
          <SpaceBetween size="l">
          <Box margin="xxxl" textAlign="center">

            <Spinner size="big" />
            </Box>
          </SpaceBetween>

      </Box>
    );
  }
  if (auth.error) {
    return (
      <ContentLayout defaultPadding maxContentWidth={400}>
        <Box margin="xxxl">
          <Container
            header={
              <Header variant="h2" description="Please sign in">
                Error occurred
              </Header>
            }
          >
            <Box margin="xxxl">
              <h4> {auth.error.name}</h4>
              <p> {auth.error.message}</p>
            </Box>
          </Container>
        </Box>
      </ContentLayout>
    );
  }
  return <RouterProvider router={router} context={{ auth }} />;
}

export default function App() {
  return (
    <AuthenticationProvider>
      <InnerApp />
    </AuthenticationProvider>
  );
}
