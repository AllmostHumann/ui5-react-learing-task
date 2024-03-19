import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ShellBarComponent } from '../Components/ShellBarComponent/ShellBarComponent';

export const Route = createRootRoute({
  component: () => (
    <>
      <ShellBarComponent />
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
