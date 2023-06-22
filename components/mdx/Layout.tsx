import React from "react";

import { MetaProps } from "../../types/layout";

// import Head from './Head';
import Navigation from "./Navigation";
import ThemeSwitch from "./ThemeSwitch";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = "https://nextjs-typescript-mdx-blog.vercel.app";

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      {/* <Head customMeta={customMeta} /> */}
      <header>
        <div className="mx-auto max-w-5xl px-8">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-5xl px-8 py-4">{children}</div>
      </main>
      <footer className="py-8">
        <div className="mx-auto max-w-5xl px-8">
          Built by{" "}
          <a className="text-gray-900 dark:text-white" href="https://twitter.com/hunterhchang">
            Hunter Chang
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;