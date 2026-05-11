import { CatalogSection } from "@/components/catalog-section";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Journey } from "@/components/journey";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <CatalogSection />
      <Journey />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
