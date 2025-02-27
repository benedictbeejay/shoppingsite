"use client";
import CategoryList from "@/components/CategoryList";
import Footer from "@/components/Footer";
import ProductList from "./components/ProductList";
import Slider from "@/components/Slider";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      {/* <ProductList /> */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
