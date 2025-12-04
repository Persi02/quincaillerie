import { Card } from "../ui/card";

const ServicesAbout = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Nos services</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <h4 className="font-medium">Découpe sur mesure</h4>
          <p className="text-sm text-gray-600">
            Bois, métal — coupe précise selon vos plans.
          </p>
        </Card>
        <Card className="p-4">
          <h4 className="font-medium">Location d’outils</h4>
          <p className="text-sm text-gray-600">
            Perceuses, scies, bétonnières — à la journée.
          </p>
        </Card>
        <Card className="p-4">
          <h4 className="font-medium">Conseils pro</h4>
          <p className="text-sm text-gray-600">
            Nous vous aidons à choisir la bonne solution.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ServicesAbout;
