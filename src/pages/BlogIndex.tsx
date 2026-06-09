import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPostCard } from "@/components/BlogPostCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  BLOG_OG_IMAGE,
  FORESIGHT_CATEGORIES,
  SITE_URL,
  foresightPosts,
  getFeaturedPost,
  shardulAuthor,
  type ForesightCategory,
} from "@/data/foresightPosts";
import { ArrowRight, BookOpen, Radar, Sparkles, TrendingUp } from "lucide-react";

const BlogIndex = () => {
  const [activeCategory, setActiveCategory] = useState<ForesightCategory | "all">("all");
  const featured = getFeaturedPost();
  const ceoPost = foresightPosts.find((p) => p.category === "ceo-desk");

  const gridPosts =
    activeCategory === "all"
      ? foresightPosts.filter((p) => p.slug !== featured.slug)
      : foresightPosts.filter((p) => p.category === activeCategory);

  const trendingTopics = ["World Models", "Custom ERP", "Agentic AI", "GST Billing", "VA Outsourcing"];

  return (
    <Layout>
      <Seo
        title="Gavite Foresight — Tech Insights 5 Years Ahead | Gavit E-Services"
        description="Tech predictions, AI foresight, and software trends from Gavit E-Services CEO & CTO. Stay ahead of LLMs, World Models, Agentic AI and custom software trends."
        canonical={`${SITE_URL}/blog`}
        keywords={["Gavite Foresight", "AI predictions", "tech trends India", "CEO tech blog"]}
      >
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gavite Foresight Blog | Gavit E-Services" />
        <meta
          property="og:description"
          content="AI predictions, tech trends, and software foresight — written for Indian and global business owners."
        />
        <meta property="og:image" content={BLOG_OG_IMAGE} />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={BLOG_OG_IMAGE} />
      </Seo>

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80"
            alt="AI and technology insights"
            className="w-full h-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/90 to-purple-950/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white space-y-6">
          <Badge className="bg-white/10 text-white border-white/20 uppercase tracking-[0.3em] gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Gavite Foresight
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            5 Years{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ahead
            </span>{" "}
            of the Industry
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Tech predictions, AI insights, and software trends — written by our CEO & CTO for builders and business owners in India and worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {trendingTopics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-white/90"
              >
                #{topic.replace(/\s+/g, "")}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links bar */}
      <section className="py-6 bg-slate-950 text-white border-b border-white/10">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/tech-radar" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <Radar className="w-4 h-4 text-blue-400" />
            Tech Radar Q2 2026
          </Link>
          <span className="text-white/20 hidden sm:inline">|</span>
          <span className="flex items-center gap-2 text-white/80">
            <BookOpen className="w-4 h-4 text-purple-400" />
            {foresightPosts.length} articles
          </span>
          <span className="text-white/20 hidden sm:inline">|</span>
          <span className="flex items-center gap-2 text-white/80">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            Updated weekly
          </span>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8 container mx-auto px-4 sticky top-[90px] z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 -mb-px">
        <div className="flex flex-wrap justify-center gap-2">
          {FORESIGHT_CATEGORIES.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              size="sm"
              className={`rounded-full ${
                activeCategory === cat.id ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-md" : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Featured */}
      {activeCategory === "all" && featured && (
        <section className="py-10 container mx-auto px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Editor's pick</p>
          <BlogPostCard post={featured} featured />
        </section>
      )}

      {/* CEO's Desk spotlight */}
      {activeCategory === "all" && ceoPost && (
        <section className="py-10 container mx-auto px-4">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="grid md:grid-cols-[auto_1fr] gap-0">
              <div className="p-8 md:p-10 bg-gradient-to-br from-slate-950 to-blue-950 text-white flex flex-col justify-center items-center md:items-start text-center md:text-left min-w-[200px]">
                <img
                  src={shardulAuthor.avatar}
                  alt={shardulAuthor.name}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-white/20 mb-4"
                />
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">CEO's Desk</p>
                <p className="font-bold text-lg">{shardulAuthor.name}</p>
                <p className="text-sm text-white/70">{shardulAuthor.role}</p>
              </div>
              <CardContent className="p-8 md:p-10 flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold leading-snug">{ceoPost.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{ceoPost.excerpt}</p>
                <Button asChild variant="outline" className="w-fit">
                  <Link to={`/blog/${ceoPost.slug}`}>
                    From the CEO's Desk <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </section>
      )}

      {/* Post grid */}
      <section className="py-12 container mx-auto px-4">
        {activeCategory !== "all" && (
          <div className="mb-8 text-center space-y-2">
            <h2 className="text-2xl font-bold">
              {FORESIGHT_CATEGORIES.find((c) => c.id === activeCategory)?.label}
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              {FORESIGHT_CATEGORIES.find((c) => c.id === activeCategory)?.description}
            </p>
          </div>
        )}
        {activeCategory === "all" && (
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Latest articles</p>
        )}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
        {gridPosts.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No articles in this category yet.</p>
        )}
      </section>

      {/* Tech Radar CTA */}
      <section className="py-12 container mx-auto px-4">
        <div className="rounded-2xl border bg-muted/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <Badge variant="secondary" className="uppercase tracking-[0.2em]">Tech Radar</Badge>
            <h3 className="text-2xl font-bold">What's hot & what's outdated in Q2 2026</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Our quarterly radar for Indian and global SMBs — adopt, trial, assess, or drop.
            </p>
          </div>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 shrink-0">
            <Link to="/tech-radar">
              View Tech Radar <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 container mx-auto px-4">
        <NewsletterSignup
          heading="Get tech insights 5 years before they go mainstream"
          subtext="Subscribe to Gavite Foresight. No spam. Unsubscribe anytime."
        />
      </section>
    </Layout>
  );
};

export default BlogIndex;
