import {
  AppLayout,
  Box,
  Container,
  Header,
  LiveRegion,
  SpaceBetween,
  Spinner,
} from "@cloudscape-design/components";
import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { cognitoAuthConfig } from "../../config/cognitoAuthConfig";

export default function LogoutPage() {
  const auth = useAuth();

  useEffect(() => {
    const clientId = cognitoAuthConfig.client_id;
    const cognitoDomain = cognitoAuthConfig.domain;
    const postLogoutUrl = cognitoAuthConfig.post_logout_uri;
    auth.removeUser();
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${postLogoutUrl}`;
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
        <Box margin="xxxl">
          <Container
            header={
              <Header variant="h2" description="please wait">
                Logging user out...
              </Header>
            }
          >
            <Box margin="xxxl">
              <SpaceBetween size="l">
                <Box textAlign="center">
                  <Spinner size="big" />
                </Box>
              </SpaceBetween>
            </Box>
          </Container>
        </Box>
      }
    />
  );
}
