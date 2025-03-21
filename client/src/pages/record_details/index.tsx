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

function RecordDetailsPage() {
  const { recordId, dataId } = Route.useParams();
  const call = useCall(recordId)
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
            },
            {
              text: `${dataId}-${recordId}`.toUpperCase(),
              href: "#components/breadcrumb-group",
            },
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
                description={call.data?.callType}
                actions={
                  <Button onClick={() => handleSignOut()}>Sign Out</Button>
                }
              >
                RecordID {dataId?.toString().toUpperCase()}-{recordId}
              </Header>
            </SpaceBetween>
          }
        >
          <KeyValuePairs
            columns={3}
            items={[
              {
                label: "Distribution ID",
                value: "E1WG1ZNPRXT0D4",
                info: (
                  <Link variant="info" href="#">
                    Info
                  </Link>
                ),
              },
              {
                label: "ARN",
                value: (
                  <CopyToClipboard
                    copyButtonAriaLabel="Copy ARN"
                    copyErrorText="ARN failed to copy"
                    copySuccessText="ARN copied"
                    textToCopy="arn:service23G24::111122223333:distribution/23E1WG1ZNPRXT0D4"
                    variant="inline"
                  />
                ),
              },
              {
                label: "Status",
                value: <StatusIndicator>Available</StatusIndicator>,
              },
              {
                label: "SSL Certificate",
                id: "ssl-certificate-id",
                value: (
                  <ProgressBar
                    value={30}
                    additionalInfo="Additional information"
                    description="Progress bar description"
                    ariaLabelledby="ssl-certificate-id"
                  />
                ),
              },
              {
                label: "Price class",
                value: "Use only US, Canada, Europe",
              },
              {
                label: "CNAMEs",
                value: (
                  <Link external={true} href="#">
                    abc.service23G24.xyz
                  </Link>
                ),
              },
            ]}
          />
        </ContentLayout>
      }
    />
  );
}

export default RecordDetailsPage;
