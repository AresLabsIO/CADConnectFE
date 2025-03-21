import {
  AppLayout,
  Box,
  Button,
  Container,
  Header,
  LiveRegion,
  SpaceBetween,
  Spinner,
} from "@cloudscape-design/components";
import { useSearch } from "@tanstack/react-router";
import { useAuth } from "react-oidc-context";
export default function LoginPage() {
  const auth = useAuth();
  const { redirect } = useSearch({
    from: "/",
  });

  if (auth.error) {
    return (
      <Box textAlign="center" margin={"xxxl"}>
        <LiveRegion>
          <h3>Encountering error...</h3>
          <p>{auth.error.message}</p>
          <Spinner />
        </LiveRegion>
      </Box>
    );
  }

  return (
    <AppLayout
      maxContentWidth={400}
      toolsHide
      navigationHide
      content={
        <Box margin="xxxl" textAlign="center">
          <Container
            header={
              <Header variant="h2" description="Please sign in">
                CAD Connect
              </Header>
            }
          >
            <Box margin="xxxl">
              <SpaceBetween size="l">
                <Button
                  fullWidth
                  onClick={() =>
                    auth.signinRedirect({
                      extraQueryParams: {
                        redirect: encodeURIComponent(
                          `${window.location.origin}${redirect}`
                        ),
                      },
                    })
                  }
                >
                  Sign In
                </Button>
              </SpaceBetween>
            </Box>
          </Container>
        </Box>
      }
    />
  );
}
