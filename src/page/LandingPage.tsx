import {
  Hero,
  Map,
  WrapProduct,
  Promotion,
  Service,
} from "@/components/display";
import { data, productPhare, productPromotion } from "@/data/data";

const LandingPage = () => {
  return (
    <section className="py-4">
      <Hero />
      <Service />
      <WrapProduct products={productPhare} title="Produits phares" />
      <Promotion productPromotion={productPromotion} />
      <WrapProduct products={data} title="Nouveau produits" />
      <Map />
    </section>
  );
};

export default LandingPage;
