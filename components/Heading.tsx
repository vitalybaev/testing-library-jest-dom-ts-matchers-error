import { FC, PropsWithChildren } from "react";

interface Props {
  tag?: 'h1' | 'h2';
}

export const Heading: FC<PropsWithChildren<Props>> = ({ tag = 'h1', children }) => {
  const Component = tag || 'h1';

  return <Component>{children}</Component>
}