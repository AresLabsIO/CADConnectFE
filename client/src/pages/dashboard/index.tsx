import {
    AppLayout,
    BreadcrumbGroup,
    Button,
    ContentLayout,
    CopyToClipboard,
    Header,
    KeyValuePairs,
    Link,
    ProgressBar,
    SpaceBetween,
    StatusIndicator,
  } from "@cloudscape-design/components";
  import { useNavigate } from "@tanstack/react-router";
  import { Route } from "../../routes/__root";
  import { useCall } from "../../hooks/useCall";
  
  function DashboardPage() {
    const navigate = useNavigate();
  
    const handleSignOut = async () => {
      navigate({ to: "/logout", replace: true });
    };
  
    return (
      <AppLayout
        navigationHide
        toolsHide
        content={
          <ContentLayout
            defaultPadding
            header={
              <SpaceBetween size="m">
                <Header
                  variant="h1"
                  actions={
                    <Button onClick={() => handleSignOut()}>Sign Out</Button>
                  }
                >
                  Welcome to your dashboard!
                </Header>
              </SpaceBetween>
            }
          >
            <KeyValuePairs
              columns={3}
              items={[

                {
                    label: "CAD Data",
                    value: (
                      <Link onClick={() => navigate({to:'/records/cad'})}>View</Link>
                    ),
                  },
                {
                  label: "DUI Data",
                  value: (
                    <Link onClick={() => navigate({to:'/records/dui'})}>View</Link>
                  ),
                },
              ]}
            />
          </ContentLayout>
        }
      />
    );
  }
  
  export default DashboardPage;
  