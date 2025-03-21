import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import TextFilter from "@cloudscape-design/components/text-filter";
import Pagination from "@cloudscape-design/components/pagination";
import { useNavigate } from "@tanstack/react-router";
import { Link } from "@cloudscape-design/components";

type TableItem = {
  tenant_id: string;
  record_id: string;
  call_record: string;
};
type CommonTable = {
  data: TableItem[];
  loading: boolean;
  header?: React.ReactNode;
};
const CommonTable = ({ data, loading, header }: CommonTable) => {
  const navigate = useNavigate();
  return (
    <Table
      loading={loading}
      renderAriaLive={({ firstIndex, lastIndex, totalItemsCount }) =>
        `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
      }
      columnDefinitions={[
        {
          id: "record_id",
          header: "record_id",
          cell: (e) => (
            <Link onClick={() => navigate({ to: `/records/${e.record_id.replace('#','/')}` })}>
              {e.record_id}
            </Link>
          ),
          isRowHeader: true,
        },
        {
          id: "tenant_id",
          header: "tenant_id",
          cell: (e) => e.tenant_id,
        },
        {
          id: "call_record",
          header: "call_record",
          cell: (e) => {
            const parse = JSON.parse(e.call_record);

            const value = parse["callType"] as string;
            return value || "";
          },
        },
      ]}
      enableKeyboardNavigation
      items={data as TableItem[]}
      loadingText="Loading resources"
      empty={
        <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
          <SpaceBetween size="m">
            <b>No Results</b>
          </SpaceBetween>
        </Box>
      }
      filter={
        <TextFilter
          filteringPlaceholder="Find resources"
          filteringText=""
          countText="0 matches"
        />
      }
      header={header}
      pagination={<Pagination currentPageIndex={1} pagesCount={1} />}
    />
  );
};

export default CommonTable;
