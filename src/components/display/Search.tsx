import type { FilterParams } from "@/utils/type";
import { Input } from "../ui/input";

type Props = {
  fields: string[];
  params: FilterParams;
};
const Search: React.FC<Props> = ({ params, fields }) => {
  return (
    <div className="container py-8">
      <form className="flex gap-3">
        <Input
          type="text"
          name="search"
          className="w-full"
          placeholder="Rechercher des produits ..."
          defaultValue={params.search}
        />
        <select
          name="category"
          id="select_product"
          defaultValue={params.category}
          className="w-1/3"
        >
          {fields.map((field) => (
            <option key={field} value={field}>
              {field.replace(/^./, (str) => str.toUpperCase())}
            </option>
          ))}
        </select>
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default Search;
