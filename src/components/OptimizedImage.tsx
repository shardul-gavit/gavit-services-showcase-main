import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  sizes?: string;
}

/**
 * OptimizedImage – renders an <img> with:
 * • Native lazy loading (unless priority)
 * • Responsive srcSet for Unsplash images
 * • Intersection Observer fade-in
 * • Blur placeholder option
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder = "empty",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate srcSet for Unsplash URLs
  const generateSrcSet = (url: string): string | undefined => {
    if (!url.includes("unsplash.com")) return undefined;
    const base = url.split("?")[0];
    const widths = [400, 640, 800, 1024, 1280, 1920];
    return widths
      .map((w) => `${base}?auto=format&fit=crop&w=${w}&q=75 ${w}w`)
      .join(", ");
  };

  useEffect(() => {
    if (priority) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.01 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const srcSet = generateSrcSet(src);

  return (
    <div
      ref={imgRef}
      className={cn(
        "overflow-hidden",
        placeholder === "blur" && !isLoaded && "bg-slate-200 animate-pulse",
        className
      )}
      style={{ width, height }}
    >
      {isInView && (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
};

export default OptimizedImage;

