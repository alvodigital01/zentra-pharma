import { CatalogSection } from "@/components/catalog-section";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ProductTestimonials } from "@/components/product-testimonials";
import { Products } from "@/components/products";
import { UnboxingVideo } from "@/components/unboxing-video";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Products />
      <CatalogSection />
      <HowItWorks />
      <UnboxingVideo />
      <ProductTestimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
