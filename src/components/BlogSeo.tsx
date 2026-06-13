import { Helmet } from "react-helmet-async";
import type { ForesightPost } from "@/data/foresightPosts";
import { SITE_URL } from "@/data/foresightPosts";

type BlogSeoProps = {
  post: ForesightPost;
};

const toIst = (date: string) => `${date}T00:00:00+05:30`;

export const BlogSeo = ({ post }: BlogSeoProps) => {
  const canonical = post.seo.canonicalUrl;
  const ogImage = post.seo.ogImage.startsWith("http") ? post.seo.ogImage : `${SITE_URL}${post.seo.ogImage}`;
  const keywords = post.tags.join(", ");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    url: canonical,
    headline: post.title,
    description: post.excerpt,
    image: {
      "@type": "ImageObject",
      url: ogImage,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      url: post.author.linkedin,
      worksFor: {
        "@type": "Organization",
        name: "Gavit E-Services",
        url: SITE_URL,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Gavit E-Services",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: toIst(post.publishedAt),
    dateModified: toIst(post.updatedAt),
    mainEntityOfPage: canonical,
    keywords,
    articleSection: post.categoryLabel,
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.categoryLabel,
        item: `${SITE_URL}/blog/category/${post.category}`,
      },
      { "@type": "ListItem", position: 4, name: post.title, item: canonical },
    ],
  };

  return (
    <Helmet>
      <title>{post.seo.metaTitle}</title>
      <meta name="description" content={post.seo.metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={post.author.name} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={post.title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Gavit E-Services" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_AU" />
      <meta property="og:locale:alternate" content="en_CA" />
      <meta property="og:locale:alternate" content="en_NZ" />

      <meta property="article:published_time" content={toIst(post.publishedAt)} />
      <meta property="article:modified_time" content={toIst(post.updatedAt)} />
      <meta property="article:author" content={post.author.name} />
      <meta property="article:section" content={post.categoryLabel} />
      {post.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.excerpt} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@gaviteservice" />
      <meta name="twitter:creator" content="@gaviteservice" />

      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
};
