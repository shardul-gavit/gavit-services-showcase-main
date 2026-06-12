/** Minimal route fallback — keeps layout stable while lazy chunks load. */
export const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center" aria-label="Loading page" role="status">
    <div className="h-8 w-8 rounded-full border-2 border-muted border-t-blue-600 animate-spin" />
  </div>
);
