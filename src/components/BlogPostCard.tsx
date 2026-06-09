import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";
import type { ForesightPost } from "@/data/foresightPosts";

type BlogPostCardProps = {
  post: ForesightPost;
  featured?: boolean;
};

const categoryColors: Record<string, string> = {
  "tech-foresight": "from-violet-600 to-purple-600",
  "ai-insights": "from-blue-600 to-cyan-600",
  "software-trends": "from-indigo-600 to-blue-600",
  "india-tech": "from-emerald-600 to-teal-600",
  "ceo-desk": "from-orange-500 to-rose-600",
};

export const BlogPostCard = ({ post, featured = false }: BlogPostCardProps) => {
  const gradient = categoryColors[post.category] ?? "from-blue-600 to-purple-600";

  if (featured) {
    return (
      <Card className="overflow-hidden border-0 shadow-2xl group">
        <div className="md:grid md:grid-cols-2">
          <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
            <OptimizedImage
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/20" />
            <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 gap-1">
              <Sparkles className="w-3 h-3" />
              Featured
            </Badge>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center space-y-5 bg-slate-950 text-white">
            <Badge className={`w-fit bg-gradient-to-r ${gradient} text-white border-0 uppercase tracking-[0.15em] text-xs`}>
              {post.categoryLabel}
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug group-hover:text-blue-300 transition-colors">
              {post.title}
            </h2>
            <p className="text-white/75 leading-relaxed">{post.excerpt}</p>
            <PostMeta post={post} light />
            <Button asChild className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
              <Link to={`/blog/${post.slug}`}>
                Read Article <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden flex flex-col h-full group border-border/60 hover:border-blue-300/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Badge
          className={`absolute top-3 left-3 bg-gradient-to-r ${gradient} text-white border-0 text-xs`}
        >
          {post.categoryLabel}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </CardTitle>
        <CardDescription className="line-clamp-3 leading-relaxed">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto space-y-4 pt-0">
        <PostMeta post={post} />
        <Button
          variant="outline"
          size="sm"
          asChild
          className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all"
        >
          <Link to={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 w-3 h-3" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const PostMeta = ({ post, light = false }: { post: ForesightPost; light?: boolean }) => (
  <div className={`flex flex-wrap items-center gap-3 text-xs ${light ? "text-white/60" : "text-muted-foreground"}`}>
    <div className="flex items-center gap-2">
      <img
        src={post.author.avatar}
        alt={post.author.name}
        className="w-7 h-7 rounded-full object-cover ring-2 ring-white/20"
        loading="lazy"
      />
      <span className={`font-medium ${light ? "text-white" : "text-foreground"}`}>{post.author.name}</span>
    </div>
    <span>·</span>
    <time dateTime={post.publishedAt}>
      {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
    </time>
    <span>·</span>
    <span className="flex items-center gap-1">
      <Clock className="w-3 h-3" />
      {post.readTime}
    </span>
  </div>
);
