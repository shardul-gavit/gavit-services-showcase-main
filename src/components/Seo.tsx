import { Helmet } from "react-helmet-async";
import { DEFAULT_OG_DESCRIPTION, DEFAULT_TWITTER_DESCRIPTION, GLOBAL_KEYWORDS } from "@/constants/seo";

export const DEFAULT_OG_IMAGE = "https://www.gaviteservice.com/og-image.jpg";

export type SeoProps = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  robots?: string;
  ogImage?: string;
  children?: React.ReactNode;
};

const EMPTY_KEYWORDS: string[] = [];

export const Seo = ({
  title,
  description,
  canonical,
  keywords = EMPTY_KEYWORDS,
  robots = "index,follow",
  ogImage,
  children,
}: SeoProps) => {
  const resolvedOgImage = ogImage || DEFAULT_OG_IMAGE;
  const keywordString = [...keywords, ...GLOBAL_KEYWORDS].filter((k, i, arr) => arr.indexOf(k) === i).join(", ");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {keywordString && <meta name="keywords" content={keywordString} />}
      <link rel="canonical" href={canonical} />

      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Vadodara, Gujarat, India" />
      <meta name="geo.position" content="22.3114;73.1666" />
      <meta name="ICBM" content="22.3114, 73.1666" />
      <meta name="content-language" content="en-IN" />
      <meta name="distribution" content="global" />
      <meta name="target" content="all" />
      <meta name="rating" content="general" />
      <meta name="category" content="technology" />
      <meta name="creator" content="Gavit E-Services" />
      <meta name="publisher" content="Gavit E-Services Private Limited" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || DEFAULT_OG_DESCRIPTION} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_AU" />
      <meta property="og:locale:alternate" content="en_CA" />
      <meta property="og:locale:alternate" content="en_NZ" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || DEFAULT_TWITTER_DESCRIPTION} />
      <meta name="twitter:image" content={resolvedOgImage} />

      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />

      {children}
    </Helmet>
  );
};
