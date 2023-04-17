import React from "react";
import { FormSelect, ProductsResults } from "../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { ConfigProvider, Select } from "antd";
import './styles.scss'
const Search = () => {
  const navigate = useNavigate();
  const { filterType } = useParams();
  const handleFilter = (e) => {
    // const nextFilter = e.target.value;
    navigate(`/search/${e}`);
  };
  const options = [
    {
      value: "",
      label: "Show all",
    },
    {
      value: "powertrain",
      label: "Powertrain",
    },
  ];
  const configFilters = {
    defaultValue: filterType,
    options: [
      {
        name: "Show all",
        value: "",
      },
      {
        name: "Powertrain",
        value: "powertrain",
      },
      {
        name: "Womens",
        value: "womens",
      },
    ],
    handleChange: handleFilter,
  };

  return (
    <div className="search">
      <ProductsResults />

      <div className="search-filters">
        <ConfigProvider>
          <Select
            options={options}
            style={{
              width: "100%",
            }}
            onChange={handleFilter}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Search;
