export type Product = {
  _id?: string;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
  stock: number;
  createdAt?: string;
  updateAt?: string;
  pourcentPromotion: number;
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

export type landingPageResponse = {
  featured: Product[] | null;
  promo: Product[] | null;
  latest: Product[] | null;
};
export type ProductPageResponse = {
  page?: number;
  limit?: number;
  totalProducts: number;
  products: Product[] | null;
  params: FilterParams;
};

export type FilterParams = {
  page?: string;
  search?: string;
  category?: string;
};
