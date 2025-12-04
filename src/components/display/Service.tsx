import CardService from "./CardService";

const Service = () => {
  return (
    <div className="container py-8">
      <h2 className="text-2xl font-bold mb-3">Nos type de produits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <CardService text="outils" titleSize="text-xl font-bold" />
        <CardService text="peintures" titleSize="text-xl font-bold" />
        <CardService text="electrique" titleSize="text-xl font-bold" />
        <CardService text="materiaux" titleSize="text-xl font-bold" />
      </div>
    </div>
  );
};

export default Service;
