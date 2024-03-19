import { useState } from 'react';
import { Card, CardHeader, Text, Icon } from '@ui5/webcomponents-react';
import { BarChart, LineChart } from '@ui5/webcomponents-react-charts';
import { spacing } from '@ui5/webcomponents-react-base';
import lineChartIcon from '@ui5/webcomponents-icons/dist/line-chart.js';
import barChartIcon from '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';
import { dataset } from '../../data/dataset';

export const CardComponent = () => {
  const [toggleCharts, setToggleCharts] = useState<string>('lineChart');
  const [loading, setLoading] = useState<boolean>(false);
  const contentTitle = toggleCharts === 'lineChart' ? 'LineChart' : 'BarChart';
  const switchToChart = toggleCharts === 'lineChart' ? 'BarChart' : 'LineChart';

  const handleHeaderClick = () => {
    if (toggleCharts === 'lineChart') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts('barChart');
      }, 1000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts('lineChart');
      }, 1000);
    }
  };

  return (
    <>
      <Card
        header={
          <CardHeader
            titleText='Stock Prices'
            subtitleText={`Click here to switch to ${switchToChart}`}
            onClick={handleHeaderClick}
            interactive
            avatar={
              <Icon
                name={
                  toggleCharts === 'lineChart' ? lineChartIcon : barChartIcon
                }
              />
            }
          />
        }
        style={{ width: '300px', ...spacing.sapUiContentPadding }}
      >
        <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
        {toggleCharts === 'lineChart' ? (
          <LineChart
            measures={[{ accessor: 'data', label: 'Stock Price' }]}
            dimensions={[{ accessor: 'month' }]}
            dataset={dataset}
            loading={loading}
          />
        ) : (
          <BarChart
            dimensions={[{ accessor: 'month' }]}
            measures={[{ accessor: 'data', label: 'Stock Prime' }]}
            dataset={dataset}
            loading={loading}
          />
        )}
      </Card>
    </>
  );
};
