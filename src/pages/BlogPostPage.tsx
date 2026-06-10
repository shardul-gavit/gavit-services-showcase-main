import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { BlogSeo } from "@/components/BlogSeo";
import { ShareButtons } from "@/components/ShareButtons";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Clock, ChevronRight } from "lucide-react";
import BlogNotFound from "@/pages/BlogNotFound";
import { getPostBySlug, getRelatedPosts } from "@/data/foresightPosts";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <BlogNotFound />;

  const related = getRelatedPosts(post);
  const truncatedTitle =
    post.title.length > 40 ? `${post.title.slice(0, 40)}…` : post.title;

  return (
    <Layout>
      <BlogSeo post={post} />

      {/* Article hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <OptimizedImage
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      </section>

      <article className="py-10 container mx-auto px-4 max-w-3xl -mt-20 relative z-10">
        <nav className="flex flex-wrap items-center gap-1 text-sm text-white/70 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/blog" className="hover:text-white">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to={`/blog/category/${post.category}`} className="hover:text-white">
            {post.categoryLabel}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white/90">{truncatedTitle}</span>
        </nav>

        <header className="space-y-5 mb-10 text-white">
          <Badge className="bg-white/10 text-white border-white/20 uppercase tracking-[0.2em]">
            {post.categoryLabel}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{post.title}</h1>
          <p className="text-lg text-white/80 leading-relaxed">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 pt-2">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white/30" />
              <div>
                <p className="font-medium text-white">{post.author.name}</p>
                <p className="text-xs">{post.author.role}</p>
              </div>
            </div>
            <span>·</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </time>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="rounded-2xl bg-background border shadow-lg p-6 md:p-10">
          <div
            className="prose prose-slate dark:prose-invert max-w-none prose-lg prose-headings:font-bold prose-a:text-blue-600 prose-blockquote:border-l-4 prose-blockquote:border-l-blue-600 prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: post.content.trim() }}
          />
        </div>

        <div className="mt-12 pt-8 border-t">
          <ShareButtons slug={post.slug} title={post.title} />
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag) => (
            <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`}>
              <Badge variant="outline" className="hover:bg-muted cursor-pointer">
                {tag}
              </Badge>
            </Link>
          ))}
        </div>

        <Card className="mt-10 border-blue-100 dark:border-blue-900/30">
          <CardHeader className="flex flex-row items-center gap-4">
            <img src={post.author.avatar} alt={post.author.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <CardTitle>{post.author.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{post.author.role}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {post.author.bio ??
                "Shardul leads Gavit E-Services with a focus on building technology that's 5 years ahead of the market. He writes about AI, software trends, and the future of business technology."}
            </p>
            {post.author.linkedin && (
              <Button variant="outline" size="sm" asChild>
                <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 space-y-8">
            <h2 className="text-2xl font-bold text-center">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <BlogPostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 container mx-auto px-4">
        <NewsletterSignup
          heading="Enjoyed this? Get our next insight before everyone else."
          subtext="Gavite Foresight — free tech predictions for business owners and developers."
        />
      </section>
    </Layout>
  );
};

export default BlogPostPage;
