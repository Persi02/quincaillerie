import {
  Hero,
  Map,
  WrapProduct,
  Promotion,
  Service,
} from "@/components/display";
import type { landingPageResponse } from "@/utils/type";
import { useLoaderData } from "react-router-dom";

const LandingPage = () => {
  const { featured, promo, latest } = useLoaderData() as landingPageResponse;

  return (
    <section className="py-4">
      <Hero />
      <Service />
      {featured && <WrapProduct products={featured} title="Produits phares" />}
      {promo && <Promotion productPromotion={promo[0]} />}
      {latest && (
        <WrapProduct products={latest} title="Nouveau produits" />
      )}{" "}
      <Map />
    </section>
  );
};

export default LandingPage;
