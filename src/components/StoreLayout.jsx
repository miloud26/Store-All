import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function StoreLayout() {
  const location = useLocation();

  // React Router does not scroll to #anchors on client-side navigation.
  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.slice(1);
    let attempts = 0;
    let timer = 0;

    // The page body is code-split, so the anchor may not be in the DOM yet.
    const look = () => {
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        return;
      }

      attempts += 1;

      if (attempts < 20) {
        timer = window.setTimeout(look, 60);
      }
    };

    look();

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="ui-shell" dir="rtl">
      <Navbar />

      <main className="ui-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default StoreLayout;
