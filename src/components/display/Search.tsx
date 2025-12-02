import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

type Props = {
  fields: string[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const Search: React.FC<Props> = ({
  fields,
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
}) => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = {
      search: searchTerm,
      category,
    };
    navigate(`/product?${new URLSearchParams(params).toString()}`);
    console.log(searchTerm);
    console.log(category);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <div className="container py-8">
      <form className="flex gap-3" onSubmit={handleSearch}>
        <Input
          type="text"
          name="search"
          className="w-full"
          placeholder="Rechercher des produits ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          name="category"
          id="select_product"
          value={category}
          onChange={handleCategoryChange}
          className="w-1/3"
        >
          {fields.map((field) => (
            <option key={field} value={field}>
              {field.replace(/^./, (str) => str.toUpperCase())}
            </option>
          ))}
        </select>
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default Search;
