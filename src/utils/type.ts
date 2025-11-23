export type Product = {
  _id?: string;
  name: string;
  img: string;
  price: number;
  categorie: string;
  stock: number;
  createdAt?: string;
  updateAt?: string;
};
export type InvoceItem = {
  ProductId: string;
  name: string;
  price: number;
  qty: number;
  total: number;
};

export type Invoce = {
  _id?: string;
  customerName: string;
  items: InvoceItem[];
  totalAmount: number;
  cretedAt?: string;
};
