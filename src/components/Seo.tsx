import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  robots?: string;
  children?: React.ReactNode;
};

export const Seo = ({
  title,
  description,
  canonical,
  keywords = [],
  robots = "index,follow",
  children,
}: SeoProps) => {
  const keywordString = keywords.join(", ");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {keywordString && <meta name="keywords" content={keywordString} />}
      <link rel="canonical" href={canonical} />
      {/* Favicon links - ensure correct favicon on all pages, order matters for browser priority */}
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      {children}
    </Helmet>
  );
};

