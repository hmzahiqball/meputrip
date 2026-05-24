import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TripSection } from "@/components/site/TripSection";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { FloatingWA } from "@/components/site/FloatingWA";
import { Loader } from "@/components/site/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MepuTrip — Open Trip, Healing & Adventure Indonesia" },
      {
        name: "description",
        content:
          "MepuTrip merancang open trip, healing journey, dan adventure trip ke destinasi alam Indonesia dengan rasa personal. Reservasi sekarang.",
      },
      { property: "og:title", content: "MepuTrip — Cinematic Travel Experience" },
      {
        property: "og:description",
        content: "Vendor travel modern untuk open trip, gathering, dan healing trip.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <TripSection />
        <Gallery />
        <About />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWA />
      <Toaster position="top-center" richColors />
    </>
  );
}
