import { Input } from "../ui/input";

type Props = {
  fields: string[];
  setSelectValue: (v: string) => void;
  selectValue: string;
};
const Search: React.FC<Props> = ({ fields, selectValue, setSelectValue }) => {
  return (
    <div className="container py-8">
      <form className="flex gap-3">
        <Input
          type="text"
          className="w-full"
          placeholder="Rechercher des produits ..."
        />
        <select
          name="select_product"
          id="select_product"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          {fields.map((field) => (
            <option key={field} value={field}>
              {field.replace(/^./, (str) => str.toUpperCase())}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Search;
