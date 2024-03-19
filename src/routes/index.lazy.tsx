import { createLazyFileRoute } from '@tanstack/react-router';
import { CardComponent } from '../Components/CardComponent/CardComponent';
import { ListComponent } from '../Components/ListComponent/ListComponent';
import { AnalyticalTableComponent } from '../Components/AnaliticalTableComponent/AnaliticalTableComponent';
import {
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
} from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={spacing.sapUiContentPadding}
      >
        <CardComponent />
        <ListComponent />
        <AnalyticalTableComponent />
      </FlexBox>
    </div>
  );
}
