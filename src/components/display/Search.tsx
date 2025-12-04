import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useMemo, useState } from "react";
import debounce from "lodash.debounce";

type Props = {
  onChange: (value: { search: string; category: string }) => void;
  fields: string[];
};

const Search: React.FC<Props> = ({ onChange, fields }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const debouncedOnChange: (value: {
    search: string;
    category: string;
  }) => void = useMemo(
    () => debounce((next) => onChange(next), 300),
    [onChange]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    debouncedOnChange({ search: value, category });
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    onChange({ search, category: value });
  };

  const handleReset = () => {
    setSearch("");
    setCategory("");
    onChange({ search: "", category: "" });
  };
  return (
    <div className="container py-8">
      <form className="flex gap-3">
        <Input
          type="text"
          name="search"
          className="w-full"
          placeholder="Rechercher des produits ..."
          value={search}
          onChange={handleSearch}
        />
        <select
          name="category"
          id="select_product"
          className="w-1/3"
          defaultValue={category}
          onChange={handleCategory}
        >
          {fields.map((field) => (
            <option key={field} value={field}>
              {field.replace(/^./, (str) => str.toUpperCase())}
            </option>
          ))}
        </select>
        <Button variant={"outline"} type="button" onClick={handleReset}>
          Reset
        </Button>
      </form>
    </div>
  );
};

export default Search;
