import { Helmet } from "react-helmet-async";
import type { ForesightPost } from "@/data/foresightPosts";
import { SITE_URL } from "@/data/foresightPosts";

type BlogSeoProps = {
  post: ForesightPost;
};

export const BlogSeo = ({ post }: BlogSeoProps) => {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.seo.ogImage.startsWith("http") ? post.seo.ogImage : `${SITE_URL}${post.seo.ogImage}`;
  const publishedIso = new Date(post.publishedAt).toISOString();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: ogImage,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        "@type": "Organization",
        name: "Gavit E-Services",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Gavit E-Services",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: publishedIso,
    dateModified: publishedIso,
    mainEntityOfPage: url,
  };

  return (
    <Helmet>
      <title>{post.seo.metaTitle}</title>
      <meta name="description" content={post.seo.metaDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Gavit E-Services" />
      <meta property="og:locale" content="en_IN" />

      <meta property="article:published_time" content={publishedIso} />
      <meta property="article:author" content={post.author.name} />
      <meta property="article:section" content={post.categoryLabel} />
      {post.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.excerpt} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@gaviteservices" />

      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    </Helmet>
  );
};
