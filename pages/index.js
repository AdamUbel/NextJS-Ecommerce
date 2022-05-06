import React from "react";

import { client } from "../lib/client";
import { HeroBanner, FooterBanner, Product } from "../components/Index";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>All Available Speakers</p>
      </div>
      <div className="products-container">
        {products?.map((p) => (
          <Product key={p._id} product={p} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
