import RootLayout from "@/Components/Layouts/RootLayout";
import Meta from "@/Components/meta/meta";
import { addToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const Ram = ({ allProducts }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart({ product: "ram", details: product }));
    router.push("/pc-build");
  };
  return (
    <>
      <Meta title={"Ram OurPC.com"} />
      <h1 className="text-center font-bold text-4xl my-8">All Ram</h1>
      <div className="grid grid-cols-1 items-center lg:grid-cols-3 sm:grid-cols-2 gap-12">
        {allProducts?.map((ram) => (
          <div
            key={ram._id}
            className="card h-[600px] sm:w-80 md:w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body items-center text-center pb-0">
              <h2 className="card-title font-bold">{ram.productName}</h2>
              <p className="font-bold">
                <span className="text-primary">Price</span> ${ram.price}
              </p>
              <p className="font-bold -mt-4">
                <span className="text-primary">Category</span> : {ram.category}
              </p>
            </div>
            <figure className="px-4 h-80">
              <Image
                width={320}
                height={320}
                src={ram.image}
                alt={ram.productName}
                className="rounded-xl max-h-72"
              />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <p className="pb-4 ">{ram.description}</p>
              <div className="card-actions flex justify-between w-full">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addProduct(ram)}
                >
                  Add to Cart
                </button>
                <Link
                  href={`/item/ram/${ram._id}`}
                  className="font-semibold hover:text-primary"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ram;
Ram.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      "https://pc-builder-backend-mdminhazulislamkhan.vercel.app/ram"
    );
    const data = await res.json();

    return {
      props: {
        allProducts: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        allProducts: [],
      },
      revalidate: 30,
    };
  }
};
