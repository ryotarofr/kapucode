import NextHead from "next/head";
import { useRouter } from "next/router";
import React from "react";

import { MetaProps } from "../../types/layout";

export const WEBSITE_HOST_URL = "https://nextjs-typescript-mdx-blog.vercel.app";

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  // anyにしてるけど修正したい
  const meta: any = {
    description: "Sleep Deprived Father. Senior Web Developer. Lover of all things Ramen and Kpop.",
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    title: "Hunter Chang - Website",
    type: "website",
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta content={`${WEBSITE_HOST_URL}${router.asPath}`} property="og:url" />
      <link href={`${WEBSITE_HOST_URL}${router.asPath}`} rel="canonical" />
      <meta content={meta.type} property="og:type" />
      <meta content="Hunter Chang - Website" property="og:site_name" />
      <meta content={meta.description} property="og:description" />
      <meta content={meta.title} property="og:title" />
      <meta content={meta.image} property="og:image" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="@huntarosan" name="twitter:site" />
      <meta content={meta.title} name="twitter:title" />
      <meta content={meta.description} name="twitter:description" />
      <meta content={meta.image} name="twitter:image" />
      {meta.date && <meta content={meta.date} property="article:published_time" />}
    </NextHead>
  );
};

export default Head;
