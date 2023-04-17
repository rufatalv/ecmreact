import { CKEditor } from "ckeditor4-react";
import React, { useState } from "react";
import { addProductsStart } from "../../redux/products/products.actions";
import { useDispatch } from "react-redux";
import "./styles.scss";
import { Input, Select } from "antd";

const AddNewProduct = () => {
  const [productCategory, setProductCategory] = useState("powertrain");
  const [productName, setProductName] = useState("");
  const [productThumbnail, setProductThumbnail] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const dispatch = useDispatch();
  const resetForm = () => {
    setProductCategory("");
    setProductName("");
    setProductThumbnail("");
    setProductPrice(0);
    setProductDescription("");
  };
  const options = [
    {
      value: "powertrain",
      label: "Powertrain & Performance",
    },
    {
      value: "chassis",
      label: "Chassis & Suspension",
    },
    {
      value: "interior",
      label: "Interior & Exterior",
    },
    {
      value: "electrical",
      label: "Electrical & HVAC",
    },
    {
      value: "maintenance",
      label: "Maintenance & Repair",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProductsStart({
        productCategory,
        productName,
        productThumbnail,
        productDescription,
        productPrice,
      })
    );
    resetForm();
  };
  const handleChangeSelect = (value) => {
    setProductCategory(value)
  }
  return (
    <div className="addNewProductForm">
      <form onSubmit={handleSubmit}>
        <h2>Add new product</h2>
        <div className="addNewProduct-inner">
          <Select
            style={{ width: "100%" }}
            defaultValue={productCategory}
            onChange={handleChangeSelect}
            options={options}
          />
          <Input
            placeholder="Name"
            onChange={(e) => setProductName(e.target.value)}
            defaultValue={productName}
          />
          <Input
            defaultValue={productThumbnail}
            placeholder="Main image URL"
            onChange={(e) => setProductThumbnail(e.target.value)}
          />
          <Input
            placeholder="Price"
            defaultValue={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <CKEditor
            onChange={(e) => setProductDescription(e.editor.getData())}
          />
          <br></br>
          <button className="button" type="submit">
            Add product
          </button>
        </div>
        {/* <FormSelect
              label="Category"
              options={[
                {
                  value: "mens",
                  name: "Mens",
                },
                {
                  value: "womens",
                  name: "Womens",
                },
              ]}
              handleChange={(e) => setProductCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={(e) => setProductName(e.target.value)}
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={(e) => setProductThumbnail(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={(e) => setProductPrice(e.target.value)}
            /> */}
      </form>
    </div>
  );
};

export default AddNewProduct;
