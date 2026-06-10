import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { BlogPostCard } from "@/components/BlogPostCard";
import { SITE_URL, getLatestPosts } from "@/data/foresightPosts";
import { ArrowRight } from "lucide-react";

const BlogNotFound = () => {
  const latest = getLatestPosts(3);

  return (
    <Layout>
      <Seo
        title="Article Not Found | Gavite Foresight — Gavit E-Services"
        description="This article doesn't exist or may have moved. Browse all Gavite Foresight articles."
        canonical={`${SITE_URL}/blog/404`}
        robots="noindex, follow"
      />

      <section className="py-20 container mx-auto px-4 text-center space-y-6 max-w-2xl">
        <h1 className="text-4xl font-bold">Article Not Found</h1>
        <p className="text-muted-foreground text-lg">
          This article doesn&apos;t exist or may have moved.
        </p>
        <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
          <Link to="/blog">
            Browse All Articles <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-2xl font-bold text-center">Latest articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {latest.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogNotFound;
