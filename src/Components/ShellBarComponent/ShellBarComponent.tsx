import {
  ShellBar,
  ShellBarItem,
  Avatar,
  StandardListItem,
  ResponsivePopover,
  ShellBarItemPropTypes,
  ResponsivePopoverDomRef,
  List,
  ListPropTypes,
} from '@ui5/webcomponents-react';
import addIcon from '@ui5/webcomponents-icons/dist/add.js';
import palleteIcon from '@ui5/webcomponents-icons/dist/palette.js';
import {
  getTheme,
  setTheme,
} from '@ui5/webcomponents-base/dist/config/Theme.js';
import '@ui5/webcomponents-react/dist/Assets';
import { useNavigate } from '@tanstack/react-router';
import { useRef, useState } from 'react';

const THEMES = [
  { key: 'sap_horizon', value: 'Morning Horizon (Light)' },
  { key: 'sap_horizon_dark', value: 'Evening Horizon (Dark)' },
  { key: 'sap_horizon_hcb', value: 'Horizon High Contrast Black' },
  { key: 'sap_horizon_hcw', value: 'Horizon High Contrast White' },
];

export const ShellBarComponent = () => {
  const [currentTheme, setCurrentTheme] = useState(getTheme);
  const navigate = useNavigate();
  const popoverRef = useRef<ResponsivePopoverDomRef>(null);
  const handleOpenThemesList: ShellBarItemPropTypes['onClick'] = (event) => {
    popoverRef.current?.showAt(event.detail.targetRef);
  };
  const handleThemeSwitch: ListPropTypes['onSelectionChange'] = (e) => {
    const { targetItem } = e.detail;
    setTheme(targetItem.dataset.key!);
    setCurrentTheme(targetItem.dataset.key!);
  };

  return (
    <>
      <ShellBar
        logo={<img src='reactLogo.png' />}
        profile={
          <Avatar>
            <img src='profilePictureExample.png' />
          </Avatar>
        }
        primaryTitle='UI5 React Test App'
        onClick={() => navigate({ to: '/' })}
      >
        <ShellBarItem
          icon={addIcon}
          text='Add'
        />
        <ShellBarItem
          icon={palleteIcon}
          text='Theme'
          onClick={handleOpenThemesList}
        />
      </ShellBar>
      <ResponsivePopover ref={popoverRef}>
        <List
          onSelectionChange={handleThemeSwitch}
          headerText='Change theme'
          mode='SingleSelect'
        >
          {THEMES.map((theme) => (
            <StandardListItem
              key={theme.key}
              data-key={theme.key}
              selected={currentTheme === theme.key}
            >
              {theme.value}
            </StandardListItem>
          ))}
        </List>
      </ResponsivePopover>
    </>
  );
};
