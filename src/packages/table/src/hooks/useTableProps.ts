import { TTableProps } from "../types";
import { merge } from "lodash-es";
import { useXphExtendCompProps } from "@xph-form/common";

const useTableProps = (props: TTableProps) => {
  const { extendProps } = useXphExtendCompProps();
  const baseTableProps: Partial<TTableProps> = {
    table: {
      columns: [],
      fullHeight: false,
      autoRequest: true,
      pagination: {
        pageSize: 20,
        total: 0,
        showTotal: (total) => `共：${total} 条`,
        current: 1,
        pageSizeOptions: [10, 20, 50, 100],
        showSizeChanger: true,
        showQuickJumper: true,
      },
    },
    crudForm: {
      items: [],
    },
    searchForm: {
      showSearch: true,
      items: [],
    },
  };

  const newTableProps: TTableProps = {
    ...merge(merge(baseTableProps, extendProps?.table), props),
  };

  return {
    tableProps: newTableProps,
  };
};

export default useTableProps;
