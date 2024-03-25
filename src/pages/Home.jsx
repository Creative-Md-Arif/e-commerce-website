import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useEffect, useState } from "react";

const Home = () => {
  const [products , setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(()=>{
  setProducts(data.data);
  },[data]);
    return (
        <div>
          <Banner/>
          <Products products={products} />
        </div>
    );
};

export default Home;