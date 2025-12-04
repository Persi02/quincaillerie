import {
  Hero,
  Map,
  WrapProduct,
  Promotion,
  Service,
} from "@/components/display";
import { Spinner } from "@/components/ui/spinner";
import {
  productFeturedFetcher,
  productLatestFetcher,
  productPromoFetcher,
} from "@/utils/landingLoader";
import { useQuery } from "@tanstack/react-query";
import { ShieldX } from "lucide-react";

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
  if (
    featuredQuery.isLoading ||
    promoQuery.isLoading ||
    latestQuery.isLoading
  ) {
    return (
      <div className="h-[30vh] w-full flex justify-center items-center text-secondary font-extrabold">
        <Spinner className="size-9" />
      </div>
    );
  }
  if (featuredQuery.isError || promoQuery.isError || latestQuery.isError) {
    return (
      <div className="h-[30vh] w-full flex flex-col justify-center items-center text-red-500 font-extrabold">
        <p>
          Produits indisponible, veuillez verifier votre connexion et recharger
          la page
        </p>
        <div>
          <ShieldX className="size-20" />
        </div>
      </div>
    );
  }
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
