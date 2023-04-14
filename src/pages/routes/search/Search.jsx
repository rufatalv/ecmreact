import React from "react";
import { FormSelect, ProductsResults } from "../../../components";
import { useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { filterType } = useParams();
  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    navigate(`/search/${nextFilter}`);
  };
  const configFilters = {
    defaultValue: filterType,
    options: [
      {
        name: "Show all",
        value: "",
      },
      {
        name: "Mens",
        value: "mens",
      },
      {
        name: "Womens",
        value: "womens",
      },
    ],
    handleChange: handleFilter,
  };

  return (
    <>
      <FormSelect {...configFilters} />
      
      <ProductsResults />
    </>
  );
};

export default Search;
