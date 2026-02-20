import { useState, type ChangeEvent, type FormEvent } from "react";
import Search from "../../assets/Icons/Search";
import type { SearchFieldProps } from "../../Utils/Interfaces";

const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-full max-w-lg mt-5 border border-custom-beige-100 rounded-md focus-within:ring-2 focus-within:ring-custom-teal-500 focus-within:border-custom-teal-500 bg-custom-violet-700"
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search"
        className="flex-1 px-4 py-4 bg-transparent focus:outline-none"
      />
      <button
        type="submit"
        className="flex items-center justify-center px-4 cursor-pointer"
      >
        <Search width={24} height={24} fill="#f2ede5" />
      </button>
    </form>
  );
};

export default SearchField;
