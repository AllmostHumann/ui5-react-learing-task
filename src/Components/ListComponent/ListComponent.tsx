import {
  List,
  CustomListItem,
  StandardListItem,
  ValueState,
  ProgressIndicator,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxDirection,
  Card,
  CardHeader,
  Icon,
  Text,
} from '@ui5/webcomponents-react';
import listIcon from '@ui5/webcomponents-icons/dist/list.js';
import { ThemingParameters, spacing } from '@ui5/webcomponents-react-base';
import { useNavigate } from '@tanstack/react-router';

export const ListComponent = () => {
  const navigate = useNavigate();

  return (
    <Card
      header={
        <CardHeader
          titleText='Progress'
          subtitleText='List'
          avatar={<Icon name={listIcon} />}
          interactive
          onClick={() => navigate({ to: '/detail' })}
        />
      }
      style={{ width: '300px', ...spacing.sapUiContentPadding }}
    >
      <List>
        <StandardListItem
          additionalText='finished'
          additionalTextState={ValueState.Success}
        >
          Activity 1
        </StandardListItem>
        <StandardListItem
          additionalText='failed'
          additionalTextState={ValueState.Error}
        >
          Activity 2
        </StandardListItem>
        <CustomListItem>
          <FlexBox
            direction={FlexBoxDirection.Column}
            style={{ width: '100%', ...spacing.sapUiSmallMarginTopBottom }}
          >
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
              <Text style={{ fontSize: ThemingParameters.sapFontLargeSize }}>
                Activity 3
              </Text>
              <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                in progress
              </Text>
            </FlexBox>
            <ProgressIndicator
              value={89}
              valueState={ValueState.Success}
              style={{ ...spacing.sapUiTinyMarginTop }}
            />
          </FlexBox>
        </CustomListItem>
        <CustomListItem>
          <FlexBox
            direction={FlexBoxDirection.Column}
            style={{ width: '100%', ...spacing.sapUiSmallMarginTopBottom }}
          >
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
              <Text style={{ fontSize: ThemingParameters.sapFontLargeSize }}>
                Activity 4
              </Text>
              <Text style={{ color: ThemingParameters.sapCriticalTextColor }}>
                in progress
              </Text>
            </FlexBox>
            <ProgressIndicator
              value={5}
              valueState={ValueState.Error}
              style={{ ...spacing.sapUiTinyMarginTop }}
            />
          </FlexBox>
        </CustomListItem>
      </List>
    </Card>
  );
};
