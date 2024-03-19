import { ShellBar, ShellBarItem, Avatar } from '@ui5/webcomponents-react';
import addIcon from '@ui5/webcomponents-icons/dist/add.js';
import { useNavigate } from '@tanstack/react-router';

export const ShellBarComponent = () => {
  const navigate = useNavigate();

  return (
    <ShellBar
      logo={<img src='reactLogo.png' />}
      profile={
        <Avatar>
          <img src='profilePictureExample.png' />
        </Avatar>
      }
      primaryTitle='UI5 React Test App'
      onClick={() => navigate({ to: '/home' })}
    >
      <ShellBarItem
        icon={addIcon}
        text='Add'
      />
    </ShellBar>
  );
};
