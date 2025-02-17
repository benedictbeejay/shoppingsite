import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProductList = () => {
  return (
    // <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
    //   <Link href="/test" className="w-full flex flex-col gap-4">
    //     <div className="relative w-full h-80">
    //       <Image
    //         src="/pexels.jpg"
    //         alt=""
    //         fill
    //         sizes="25vw"
    //         className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500 "
    //       />
    //       <Image
    //         src="/profile.png"
    //         alt=""
    //         fill
    //         sizes="25vw"
    //         className="absolute object-cover rounded-md"
    //       />
    //     </div>
    //   </Link>
    // </div>

    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/2844468/pexels-photo-2844468.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md bg-zinc-100 z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />

          <Image
            src="https://images.pexels.com/photos/30434968/pexels-photo-30434968/free-photo-of-cozy-scene-with-a-green-scarf-and-marigolds.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl w-max ease-in duration-300 ring-1 ring-lama text-lama py-1 px-4 text-xs hover:bg-lama hover:text-white ">
          Add To Cart
        </button>
      </Link>
      {/* <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/2844468/pexels-photo-2844468.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md bg-zinc-100 z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />

          <Image
            src="https://images.pexels.com/photos/30434968/pexels-photo-30434968/free-photo-of-cozy-scene-with-a-green-scarf-and-marigolds.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl w-max ease-in duration-300 ring-1 ring-lama text-lama py-1 px-4 text-xs hover:bg-lama hover:text-white ">
          Add To Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/2844468/pexels-photo-2844468.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md bg-zinc-100 z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />

          <Image
            src="https://images.pexels.com/photos/30434968/pexels-photo-30434968/free-photo-of-cozy-scene-with-a-green-scarf-and-marigolds.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl w-max ease-in duration-300 ring-1 ring-lama text-lama py-1 px-4 text-xs hover:bg-lama hover:text-white ">
          Add To Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/2844468/pexels-photo-2844468.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md bg-zinc-100 z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />

          <Image
            src="https://images.pexels.com/photos/30434968/pexels-photo-30434968/free-photo-of-cozy-scene-with-a-green-scarf-and-marigolds.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl w-max ease-in duration-300 ring-1 ring-lama text-lama py-1 px-4 text-xs hover:bg-lama hover:text-white ">
          Add To Cart
        </button>
      </Link> */}
    </div>
  );
};

export default ProductList;
