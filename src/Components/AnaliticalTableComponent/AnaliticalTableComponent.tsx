import {
  Card,
  AnalyticalTable,
  CardHeader,
  Icon,
} from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import tableViewIcon from '@ui5/webcomponents-icons/dist/table-view.js';
import { tableColumns, tableData } from '../../data/tabledata';

export const AnalyticalTableComponent = () => {
  return (
    <Card
      header={
        <CardHeader
          titleText='AnalyticalTable'
          avatar={<Icon name={tableViewIcon} />}
        />
      }
      style={{ width: '900px', ...spacing.sapUiContentPadding }}
    >
      <AnalyticalTable
        data={tableData}
        columns={tableColumns}
        filterable
        groupable
      />
    </Card>
  );
};
