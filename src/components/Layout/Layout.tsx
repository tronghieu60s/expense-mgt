import Head from 'next/head';
import React from 'react';
import { NAME_WEBSITE } from 'src/constant/text';

interface Props {
  title: string;
  children: JSX.Element;
}

const Layout: React.FC<Props> = (props) => {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>
          {NAME_WEBSITE} – {title}
        </title>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.png" />
        {/* Font Open Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        {/* Bootstrap, Font Awesome 4.7 */}
        <link rel="stylesheet" href="/css/argon.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
