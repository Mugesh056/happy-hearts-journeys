import { createFileRoute } from "@tanstack/react-router";
import { TravelLandingPage } from "@/components/travel/TravelLandingPage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Happy Hearts Holidays | Personalized Travel Packages" },
      { name: "description", content: "Plan unforgettable domestic and international holidays with Happy Hearts Holidays. Explore personalized travel packages, honeymoon trips, family holidays and more." },
      { property: "og:title", content: "Happy Hearts Holidays | Personalized Travel Packages" },
      { property: "og:description", content: "Plan unforgettable domestic and international holidays, designed around your dreams and travel style." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: "Happy Hearts Holidays",
        description: "Personalized domestic and international holiday planning.",
      }),
    }],
  }),
});

function Index() {
  return <TravelLandingPage />;
}
