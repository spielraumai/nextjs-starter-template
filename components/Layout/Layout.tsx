import React, { Fragment, ReactNode } from 'react';
import Head from 'next/head';

import 'tailwindcss/tailwind.css';

type LayoutProps = {
  children: ReactNode;
  title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </Fragment>
  );
};
