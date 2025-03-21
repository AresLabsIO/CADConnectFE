import {
  AppLayout,
  BreadcrumbGroup,
  Button,
  ContentLayout,
  Header,
  Link,
  SpaceBetween,
} from "@cloudscape-design/components";
import { useNavigate } from "@tanstack/react-router";
import CommonTable from "../../components/CommonTable";
import { useCalls } from "../../hooks/useCalls";
import { Route } from "../../routes/__root";

function RecordsPage() {
  const { dataId } = Route.useParams();
  const calls = useCalls(dataId);

  const navigate = useNavigate();

  const handleSignOut = async () => {
    navigate({ to: "/logout", replace: true });
  };

  return (
    <AppLayout
      navigationHide
      toolsHide
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Dashboard", href: "/" },
            {
              text: dataId.toString().toUpperCase(),
              href: `/records/${dataId}`,
            }
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      content={
        <ContentLayout
          defaultPadding
          header={
            <SpaceBetween size="m">
              <Header
                variant="h1"
                info={<Link variant="info">Info</Link>}
                description="This is a generic description used in the header."
                actions={
                  <Button onClick={() => handleSignOut()}>Sign Out</Button>
                }
              >
                Welcome to your Dashboard, User!
              </Header>
            </SpaceBetween>
          }
        >
          <SpaceBetween size="l">
            <CommonTable
              header={<Header>{dataId?.toUpperCase()} Data</Header>}
              data={calls.data}
              loading={calls.isLoading || calls.isPending}
            />
          </SpaceBetween>
        </ContentLayout>
      }
    />
  );
}

export default RecordsPage;
