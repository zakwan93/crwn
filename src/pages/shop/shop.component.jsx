import React from "react";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
