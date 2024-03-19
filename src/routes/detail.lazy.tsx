import { createLazyFileRoute } from '@tanstack/react-router';
import { Title } from '@ui5/webcomponents-react';

export const Route = createLazyFileRoute('/detail')({
  component: Detail,
});

function Detail() {
  return <Title>Hello World!</Title>;
}
