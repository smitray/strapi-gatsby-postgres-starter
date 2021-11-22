import React, { ReactNode } from 'react';

type LayoutProperties = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProperties) => (
  <div className="mx-auto container">{children}</div>
);

export default Layout;
