import { Hero, ProductPhares, Service } from "@/components/display";
import { productPhare } from "@/data/data";

const LandingPage = () => {
  return (
    <section className="py-4">
      <Hero />
      <Service />
      <ProductPhares productPhares={productPhare} />
    </section>
  );
};

export default LandingPage;
