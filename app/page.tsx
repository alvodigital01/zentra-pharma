import { About } from "@/components/about";
import { Differentials } from "@/components/differentials";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Products } from "@/components/products";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <About />
      <Products />
      <Differentials />
      <HowItWorks />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
