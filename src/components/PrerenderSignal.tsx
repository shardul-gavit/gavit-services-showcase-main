import { useEffect } from "react";

/** Dispatches when the SPA has mounted — used by post-build prerender script. */
export const PrerenderSignal = () => {
  useEffect(() => {
    document.dispatchEvent(new Event("prerender-ready"));
  }, []);
  return null;
};
