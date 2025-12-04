import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServicesAbout from "@/components/display/ServicesAbout";
import Engagement from "@/components/display/Engagement";
const About = () => {
  return (
    <main className="max-w-6xl container px-4 py-12">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold mb-4">
            Quincaillerie de confiance
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Matériaux & outillage de confiance depuis 1998. Vos projets, notre
            savoir-faire.
          </p>
          <div className="flex gap-3">
            <Button variant="default">Voir nos produits</Button>
            <Button variant="outline">Demander un devis</Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="facade.jpg"
            alt="Façade de la quincaillerie"
            className="w-full rounded-sm shadow-lg object-cover h-64 md:h-80"
          />
        </div>
      </section>

      {/* Histoire */}
      <section className="mb-10 grid md:grid-cols-2 gap-6">
        <article>
          <h2 className="text-2xl font-semibold mb-3">Notre histoire</h2>
          <p className="text-gray-700 mb-4">
            De l’atelier familial à la boutique de quartier, nous avons toujours
            gardé la même priorité : bien conseiller et fournir des produits
            durables.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>1998 — Ouverture de l’atelier</li>
            <li>2005 — Première boutique</li>
            <li>2017 — Extension du catalogue matériaux</li>
          </ul>
        </article>

        <article>
          <h3 className="text-xl font-medium mb-3">Nos engagements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Engagement />
          </div>
        </article>
      </section>

      {/* Services */}
      <ServicesAbout />

      {/* Produits phares */}
      <section className="mb-10"></section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Ils nous font confiance</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <Card className="p-4">
            <p className="italic">“Service rapide et conseils clairs.”</p>
            <p className="mt-3 font-semibold">— Jean M.</p>
          </Card>
          <Card className="p-4">
            <p className="italic">“Matériaux robustes et prix corrects.”</p>
            <p className="mt-3 font-semibold">— Aina R.</p>
          </Card>
          <Card className="p-4">
            <p className="italic">
              “Location d’une bétonnière, simple et efficace.”
            </p>
            <p className="mt-3 font-semibold">— Hery T.</p>
          </Card>
        </div>
      </section>

      {/* Map + contact rapide */}
      <section className="mb-10 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Où nous trouver</h3>
          <p className="text-gray-600">Rue Exemple, Antananarivo</p>
          <p className="mt-2 text-sm">Lun–Ven 8:00–18:00 · Sam 8:00–12:00</p>
        </div>
        <div>
          <div className="w-full h-64 bg-gray-100 rounded">
            <img
              src="map.jpg"
              alt="img-map"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
      </section>
      <section className="mb-10">
        <Card className="p-6 flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">
              Besoin d’un conseil ou d’un devis ?
            </h3>
            <p className="text-gray-600">Contactez-nous — réponse sous 24h</p>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default About;
