import React from "react";
import ProductCategory from "./ProductCategory.js";

function Products() {
  return (
    <div className="product-categories">
      <ProductCategory
        title="Today"
        url="https://api.producthunt.com/v1/posts"
      />
      <ProductCategory
        title="Yesterday"
        url="https://api.producthunt.com/v1/posts?days_ago=1"
      />
      <ProductCategory
        title="Thursday"
        url="https://api.producthunt.com/v1/posts?days_ago=2"
      />
      <ProductCategory
        title="Wednesday"
        url="https://api.producthunt.com/v1/posts?days_ago=3"
      />
    </div>
  );
}

export default Products;
