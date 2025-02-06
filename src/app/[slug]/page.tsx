import React from "react";
import ProductImages from "../components/ProductImages";
import CustomizeProduct from "../components/CustomizeProduct";
import Add from "../components/Add";

const SlugPage = () => {
  return (
    <div className="px-4 gap-16 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex relative flex-col lg:flex-row">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Products Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          ullam quo eligendi, itaque vitae cumque alias illum nesciunt placeat
          consequuntur laborum repellendus quod sed architecto tenetur culpa,
          error rerum voluptate.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProduct />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            a culpa est magnam doloremque eaque labore ab repellendus beatae.
            Illum debitis nostrum soluta error animi ducimus! Dolore dolor
            perspiciatis iure!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            a culpa est magnam doloremque eaque labore ab repellendus beatae.
            Illum debitis nostrum soluta error animi ducimus! Dolore dolor
            perspiciatis iure!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
