import React, { useState } from "react";
import AdminProducts from "../../../components/Admin/AdminProducts";
import AdminSettings from "../../../components/Admin/AdminSettings";
import AddNewProduct from "../../../components/Admin/AddNewProduct";

const NewAdminPanel = () => {
  const [activeTab, setActiveTab] = useState("addnew");

  return (
    <div className="admin">
      <div className="sidebar">
        <ul>
          <li onClick={() => {setActiveTab('addnew')}} className={activeTab === "addnew" ? "active" : ""}>Add new product</li>
          <li onClick={() => {setActiveTab('products')}} className={activeTab === "products" ? "active" : ""}>Products</li>
          <li onClick={() => {setActiveTab('settings')}} className={activeTab === "settings" ? "active" : ""}>Settings</li>
        </ul>
      </div>
      <div className="admin-content">
          {activeTab === 'addnew' && <AddNewProduct />}
          {activeTab === 'products' && <AdminProducts />}
          {activeTab === 'settings' && <AdminSettings />}
      </div>
    </div>
  );
};

export default NewAdminPanel;
