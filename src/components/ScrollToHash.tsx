// src/components/ScrollToHash.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash(): null {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      // use smooth scrolling
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // If element isn't yet in DOM (route change), wait for it
    const obs = new MutationObserver(() => {
      const e = document.getElementById(id);
      if (e) {
        e.scrollIntoView({ behavior: "smooth", block: "start" });
        obs.disconnect();
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });

    return () => obs.disconnect();
  }, [hash, pathname]);

  return null;
}
