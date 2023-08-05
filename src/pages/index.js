import RootLayout from "@/Components/Layouts/RootLayout";
import Meta from "@/Components/meta/meta";
import { addToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const Home = ({ allProducts }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart({ product: product.category, details: product }));
    router.push("/pc-build");
  };
  return (
    <>
      <Meta title={"OurPC.com"} />
      <h1 className="text-center font-bold text-4xl my-8">
        Welcome to pc builder
      </h1>
      <div className="grid grid-cols-1 items-center lg:grid-cols-3 sm:grid-cols-2 gap-12">
        {allProducts?.map((cpu) => (
          <div
            key={cpu._id}
            className="card h-[600px] sm:w-80 md:w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body items-center text-center pb-0">
              <h2 className="card-title font-bold">{cpu.productName}</h2>
              <p className="font-bold">
                <span className="text-primary">Price</span> ${cpu.price}
              </p>
              <p className="font-bold -mt-4">
                <span className="text-primary">Category</span> : {cpu.category}
              </p>
            </div>
            <figure className="px-4 h-80">
              <Image
                width={320}
                height={320}
                src={cpu.image}
                alt={cpu.productName}
                className="rounded-xl max-h-72"
              />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <p className="pb-4 ">{cpu.description}</p>
              <div className="card-actions flex justify-between w-full">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addProduct(cpu)}
                >
                  Add to Cart
                </button>
                <Link
                  href={`/item/cpu/${cpu._id}`}
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

export default Home;
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      "https://pc-builder-backend-mdminhazulislamkhan.vercel.app/cpu"
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
