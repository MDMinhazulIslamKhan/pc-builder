import RootLayout from "@/Components/Layouts/RootLayout";
import Meta from "@/Components/meta/meta";
import { addToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const PowerSupply = ({ allProducts }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart({ product: "powerSupply", details: product }));
    router.push("/pc-build");
  };
  return (
    <>
      <Meta title={"Power Supply OurPC.com"} />
      <h1 className="text-center font-bold text-4xl my-8">Power Supply</h1>
      <div className="grid grid-cols-1 items-center lg:grid-cols-3 sm:grid-cols-2 gap-12">
        {allProducts?.map((powerSupply) => (
          <div
            key={powerSupply._id}
            className="card h-[600px] sm:w-80 md:w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body items-center text-center pb-0">
              <h2 className="card-title font-bold">
                {powerSupply.productName}
              </h2>
              <p className="font-bold">
                <span className="text-primary">Price</span> ${powerSupply.price}
              </p>
              <p className="font-bold -mt-4">
                <span className="text-primary">Category</span> :{" "}
                {powerSupply.category}
              </p>
            </div>
            <figure className="px-4 h-80">
              <Image
                width={320}
                height={320}
                src={powerSupply.image}
                alt={powerSupply.productName}
                className="rounded-xl max-h-72"
              />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <p className="pb-4 ">{powerSupply.description}</p>
              <div className="card-actions flex justify-between w-full">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addProduct(powerSupply)}
                >
                  Add to Cart
                </button>
                <Link
                  href={`/item/power-supply/${powerSupply._id}`}
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

export default PowerSupply;
PowerSupply.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      "https://pc-builder-backend-mdminhazulislamkhan.vercel.app/powersupply"
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
