// src/components/SEO.jsx
//
// Drop <SEO .../> once near the top of any page/route component.
// It sets the document title + meta description + canonical URL +
// Open Graph / Twitter card tags, and (optionally) injects a JSON-LD
// <script> block for structured data.
//
// Usage:
//   <SEO
//     title="About Us"
//     description="Global Infoventures is an NVIDIA Elite Partner..."
//   />
//
// With structured data:
//   <SEO title="..." description="..." jsonLd={{ "@type": "Event", ... }} />

import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "Global Infoventures";
const SITE_URL = "https://www.globalinfoventures.com"; // TODO: confirm production domain
const DEFAULT_DESCRIPTION =
  "Global Infoventures (GIIndia) is an NVIDIA Elite Partner based in Noida, delivering AI infrastructure, DGX systems, and enterprise AI solutions across India.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`; // TODO: add a real 1200x630 image at public/og-default.jpg

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",           // e.g. "/about" — leave empty for homepage
  image = DEFAULT_OG_IMAGE,
  type = "website",    // "website" | "article" | "event"
  keywords = [],        // array of strings, e.g. ["NVIDIA", "DGX", "AI infrastructure"]
  noindex = false,
  jsonLd = null,        // pass an object (or array of objects) for structured data
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — NVIDIA Elite Partner`;
  const canonical = `${SITE_URL}${path}`;
  const jsonLdBlocks = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const keywordsContent = Array.isArray(keywords) ? keywords.filter(Boolean).join(", ") : keywords;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywordsContent && <meta name="keywords" content={keywordsContent} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLdBlocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", ...block })}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
export { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION };
