import {
  painceau,
  screws,
  tournevise,
  vane,
  vise,
  viseCarenage,
} from "@/assets/images";
import type { Product } from "@/utils/type";
export const data: Product[] = [
  {
    name: "vane",
    image: vane,
    price: 4000,
    categorie: "matériau de construction",
    stock: 30,
    description: "made in vietnam",
  },
  {
    name: "vise",
    image: vise,
    price: 3000,
    categorie: "oulils et equipement",
    stock: 100,
    description: "made in vietnam",
  },
  {
    name: "Clé mix",
    image: viseCarenage,
    price: 200,
    categorie: "oulils et equipement",
    stock: 300,
    description: "made in vietnam",
  },
  {
    name: "tournevise",
    image: tournevise,
    price: 9000,
    categorie: "oulils et equipement",
    stock: 100,
    description: "made in vietnam",
  },
  {
    name: "painceau",
    image: painceau,
    price: 1500,
    categorie: "peinture et bricolage",
    stock: 40,
    description: "made in vietnam",
  },
  {
    name: "screws",
    image: screws,
    price: 4000,
    categorie: "equipement electrique",
    stock: 200,
    description: "made in vietnam",
  },
];

export const productPhare: Product[] = [
  {
    name: "vise",
    image: vise,
    price: 3000,
    categorie: "oulils et equipement",
    stock: 100,
    description: "made in vietnam",
  },
  {
    name: "vane",
    image: vane,
    price: 4000,
    categorie: "matériau de construction",
    stock: 30,
    description: "made in vietnam",
  },
  {
    name: "screws",
    image: screws,
    price: 4000,
    categorie: "equipement electrique",
    stock: 200,
    description: "made in vietnam",
  },
  {
    name: "painceau",
    image: painceau,
    price: 1500,
    categorie: "peinture et bricolage",
    stock: 40,
    description: "made in vietnam",
  },
];

export const productPromotion: Product = {
  name: "tournevise",
  image: tournevise,
  price: 9000,
  categorie: "oulils et equipement",
  stock: 100,
  description: "made in vietnam",
};
