import {
  Hero,
  Map,
  WrapProduct,
  Promotion,
  Service,
} from "@/components/display";
import { Spinner } from "@/components/ui/spinner";
import type { landingPageResponse } from "@/utils/type";
import { useLoaderData, useNavigation } from "react-router-dom";

const LandingPage = () => {
  const { featured, promo, latest } = useLoaderData() as landingPageResponse;
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <section className="section flex justify-center items-center h-64">
        <Spinner className="size-9" />
      </section>
    );
  }

  return (
    <section className="py-4">
      <Hero />
      <Service />
      {featured && <WrapProduct products={featured} title="Produits phares" />}
      {promo && promo.length > 0 && <Promotion productPromotion={promo[0]} />}
      {latest && (
        <WrapProduct products={latest} title="Nouveau produits" />
      )}{" "}
      <Map />
    </section>
  );
};

export default LandingPage;
