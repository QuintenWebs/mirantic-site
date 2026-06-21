import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Work from "@/pages/Work";
import Contact from "@/pages/Contact";
import PricingPage from "@/pages/Pricing";

// Scroll to top on navigation, or to the hash target if one is present.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
