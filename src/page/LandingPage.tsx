import {
  Hero,
  Map,
  WrapProduct,
  Promotion,
  Service,
} from "@/components/display";
import {
  productFeturedFetcher,
  productLatestFetcher,
  productPromoFetcher,
} from "@/utils/landingLoader";
import { useQuery } from "@tanstack/react-query";

const LandingPage = () => {
  const latestQuery = useQuery({
    queryKey: ["products", "latest"],
    queryFn: productLatestFetcher,
  });

  const featuredQuery = useQuery({
    queryKey: ["products", "featured"],
    queryFn: productFeturedFetcher,
  });

  const promoQuery = useQuery({
    queryKey: ["products", "promo"],
    queryFn: productPromoFetcher,
  });

  return (
    <section className="py-4">
      <Hero />
      <Service />
      {featuredQuery.data && (
        <WrapProduct products={featuredQuery.data} title="Produits phares" />
      )}
      {promoQuery.data && promoQuery.data.length > 0 && (
        <Promotion productPromotion={promoQuery.data[0]} />
      )}
      {latestQuery.data && (
        <WrapProduct products={latestQuery.data} title="Nouveau produits" />
      )}
      <Map />
    </section>
  );
};

export default LandingPage;
