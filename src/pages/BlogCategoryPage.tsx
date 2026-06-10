import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { BlogPostCard } from "@/components/BlogPostCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import NotFound from "@/pages/NotFound";
import {
  SITE_URL,
  getCategoryMeta,
  getPostsByCategory,
  type ForesightCategory,
} from "@/data/foresightPosts";

const BlogCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const meta = category ? getCategoryMeta(category as ForesightCategory) : undefined;

  if (!category || !meta || meta.id === "all") return <NotFound />;

  const posts = getPostsByCategory(category as ForesightCategory);

  return (
    <Layout>
      <Seo
        title={`${meta.label} | Gavite Foresight — Gavit E-Services`}
        description={meta.description}
        canonical={`${SITE_URL}/blog/category/${category}`}
        keywords={[meta.label, "Gavite Foresight", "tech blog India"]}
      />

      <section className="py-16 bg-muted/30 text-center space-y-4">
        <div className="container mx-auto px-4">
          <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
            Gavite Foresight
          </Badge>
          <h1 className="text-4xl font-bold mt-4">{meta.label} — Gavite Foresight</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{meta.description}</p>
          <Link to="/blog" className="text-sm text-blue-600 hover:underline mt-4 inline-block">
            ← All articles
          </Link>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <NewsletterSignup compact />
      </section>
    </Layout>
  );
};

export default BlogCategoryPage;
