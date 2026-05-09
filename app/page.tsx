import { CatalogSection } from "@/components/catalog-section";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { HowItWorks } from "@/components/how-it-works";
import { UnboxingVideo } from "@/components/unboxing-video";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <CatalogSection />
      <HowItWorks />
      <UnboxingVideo />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
