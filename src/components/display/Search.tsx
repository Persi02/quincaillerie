import { Input } from "../ui/input";

type Props = {
  fields: string[];
  setSelectValue: (v: string) => void;
  selectValue: string;
  inputValue: string;
  setInputValue: (v: string) => void;
};
const Search: React.FC<Props> = ({
  fields,
  selectValue,
  setSelectValue,
  setInputValue,
  inputValue,
}) => {
  return (
    <div className="container py-8">
      <form className="flex gap-3">
        <Input
          type="text"
          className="w-full"
          placeholder="Rechercher des produits ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select
          name="select_product"
          id="select_product"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          className="w-1/3"
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
