import { useState } from "react";

const useSearch = () => {
  const [searchKey, setSearchKey] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(searchKey);
  };

  return {
    searchKey,
    handleChange,
    handleSubmit,
  };
};

export default useSearch;
