import RootLayout from "@/Components/Layouts/RootLayout";
import Meta from "@/Components/meta/meta";
import { addToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const Home = ({ cpu, monitor, ram, motherboard, storage, accessories }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart({ product: product.category, details: product }));
    router.push("/pc-build");
  };
  return (
    <>
      <Meta title={"OurPC.com"} />
      <div className="sm:w-2/5 w-2/3 mx-auto">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <Image
              width={320}
              height={320}
              src="https://www.cloud.ryanscomputers.com/cdn/products/medium/biostar-h81mhv3-lga-1150-socket-ddr3-motherboard-11685507407.webp"
              alt="banner cpu"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle  opacity-60">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle  opacity-60">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Image
              width={320}
              height={320}
              src="https://www.cloud.ryanscomputers.com/cdn/products/medium/havit-kb380l-rgb-wired-black-gaming-keyboard-11661064845.webp"
              alt="banner cpu"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle  opacity-60">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle  opacity-60">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <Image
              width={320}
              height={320}
              src="https://www.cloud.ryanscomputers.com/cdn/products/medium/acer-eb192q-185-inch-hd-led-vga-11664195071.webp"
              alt="banner cpu"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle  opacity-60">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle  opacity-60">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <Image
              width={320}
              height={320}
              src="https://www.cloud.ryanscomputers.com/cdn/products/medium/amd-ryzen-5-4600g-zen-2-11670657768.webp"
              alt="banner cpu"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle  opacity-60">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle  opacity-60">
                ❯
              </a>
            </div>
          </div>
        </div>
        <h1 className="text-center text-neutral font-bold text-4xl mb-8">
          Welcome to OurPc.com
        </h1>
      </div>
      <div className="grid grid-cols-1 items-center lg:grid-cols-3 sm:grid-cols-2 gap-12">
        {monitor?.slice(0, 3).map((singleMonitor) => (
          <div
            key={singleMonitor._id}
            className="card h-[600px] sm:w-80 md:w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body items-center text-center pb-0">
              <h2 className="card-title font-bold">
                {singleMonitor.productName}
              </h2>
              <p className="font-bold">
                <span className="text-primary">Price</span> $
                {singleMonitor.price}
              </p>
              <p className="font-bold -mt-4">
                <span className="text-primary">Category</span> :{" "}
                {singleMonitor.category}
              </p>
            </div>
            <figure className="px-4 h-80">
              <Image
                width={320}
                height={320}
                src={singleMonitor.image}
                alt={singleMonitor.productName}
                className="rounded-xl max-h-72"
              />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <p className="pb-4 ">{singleMonitor.description}</p>
              <div className="card-actions flex justify-between w-full">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addProduct(singleMonitor)}
                >
                  Add to Cart
                </button>
                <Link
                  href={`/item/${singleMonitor.category}/${singleMonitor._id}`}
                  className="font-semibold hover:text-primary"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
        {cpu?.slice(0, 3).map((singleCpu) => (
          <div
            key={singleCpu._id}
            className="card h-[600px] sm:w-80 md:w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body items-center text-center pb-0">
              <h2 className="card-title font-bold">{singleCpu.productName}</h2>
              <p className="font-bold">
                <span className="text-primary">Price</span> ${singleCpu.price}
              </p>
              <p className="font-bold -mt-4">
                <span className="text-primary">Category</span> :{" "}
                {singleCpu.category}
              </p>
            </div>
            <figure className="px-4 h-80">
              <Image
                width={320}
                height={320}
                src={singleCpu.image}
                alt={singleCpu.productName}
                className="rounded-xl max-h-72"
              />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <p className="pb-4 ">{singleCpu.description}</p>
              <div className="card-actions flex justify-between w-full">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addProduct(singleCpu)}
                >
                  Add to Cart
                </button>
                <Link
                  href={`/item/${singleCpu.category}/${singleCpu._id}`}
                  className="font-semibold hover:text-primary"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
        {motherboard?.slice(0, 3).map((singleMotherboard) => (
          <div
            key={singleMotherboard._id}
            className="card h-[600px] sm:w-80 md:w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body items-center text-center pb-0">
              <h2 className="card-title font-bold">
                {singleMotherboard.productName}
              </h2>
              <p className="font-bold">
                <span className="text-primary">Price</span> $
                {singleMotherboard.price}
              </p>
              <p className="font-bold -mt-4">
                <span className="text-primary">Category</span> :{" "}
                {singleMotherboard.category}
              </p>
            </div>
            <figure className="px-4 h-80">
              <Image
                width={320}
                height={320}
                src={singleMotherboard.image}
                alt={singleMotherboard.productName}
                className="rounded-xl max-h-72"
              />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <p className="pb-4 ">{singleMotherboard.description}</p>
              <div className="card-actions flex justify-between w-full">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addProduct(singleMotherboard)}
                >
                  Add to Cart
                </button>
                <Link
                  href={`/item/${singleMotherboard.category}/${singleMotherboard._id}`}
                  className="font-semibold hover:text-primary"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
        {storage?.slice(0, 3).map((singleStorage) => (
          <div
            key={singleStorage._id}
            className="card h-[600px] sm:w-80 md:w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body items-center text-center pb-0">
              <h2 className="card-title font-bold">
                {singleStorage.productName}
              </h2>
              <p className="font-bold">
                <span className="text-primary">Price</span> $
                {singleStorage.price}
              </p>
              <p className="font-bold -mt-4">
                <span className="text-primary">Category</span> :{" "}
                {singleStorage.category}
              </p>
            </div>
            <figure className="px-4 h-80">
              <Image
                width={320}
                height={320}
                src={singleStorage.image}
                alt={singleStorage.productName}
                className="rounded-xl max-h-72"
              />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <p className="pb-4 ">{singleStorage.description}</p>
              <div className="card-actions flex justify-between w-full">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addProduct(singleStorage)}
                >
                  Add to Cart
                </button>
                <Link
                  href={`/item/${singleStorage.category}/${singleStorage._id}`}
                  className="font-semibold hover:text-primary"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
        {ram?.slice(0, 3).map((singleRam) => (
          <div
            key={singleRam._id}
            className="card h-[600px] sm:w-80 md:w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body items-center text-center pb-0">
              <h2 className="card-title font-bold">{singleRam.productName}</h2>
              <p className="font-bold">
                <span className="text-primary">Price</span> ${singleRam.price}
              </p>
              <p className="font-bold -mt-4">
                <span className="text-primary">Category</span> :{" "}
                {singleRam.category}
              </p>
            </div>
            <figure className="px-4 h-80">
              <Image
                width={320}
                height={320}
                src={singleRam.image}
                alt={singleRam.productName}
                className="rounded-xl max-h-72"
              />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <p className="pb-4 ">{singleRam.description}</p>
              <div className="card-actions flex justify-between w-full">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addProduct(singleRam)}
                >
                  Add to Cart
                </button>
                <Link
                  href={`/item/${singleRam.category}/${singleRam._id}`}
                  className="font-semibold hover:text-primary"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
        {accessories?.slice(0, 3).map((singleAccessories) => (
          <div
            key={singleAccessories._id}
            className="card h-[600px] sm:w-80 md:w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body items-center text-center pb-0">
              <h2 className="card-title font-bold">
                {singleAccessories.productName}
              </h2>
              <p className="font-bold">
                <span className="text-primary">Price</span> $
                {singleAccessories.price}
              </p>
              <p className="font-bold -mt-4">
                <span className="text-primary">Category</span> :{" "}
                {singleAccessories.category}
              </p>
            </div>
            <figure className="px-4 h-80">
              <Image
                width={320}
                height={320}
                src={singleAccessories.image}
                alt={singleAccessories.productName}
                className="rounded-xl max-h-72"
              />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <p className="pb-4 ">{singleAccessories.description}</p>
              <div className="card-actions flex justify-between w-full">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => addProduct(singleAccessories)}
                >
                  Add to Cart
                </button>
                <Link
                  href={`/item/${singleAccessories.category}/${singleAccessories._id}`}
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
    const cpuRes = await fetch(
      "https://pc-builder-backend-mdminhazulislamkhan.vercel.app/cpu"
    );
    const cpu = await cpuRes.json();

    const monitorRes = await fetch(
      "https://pc-builder-backend-mdminhazulislamkhan.vercel.app/monitor"
    );
    const monitor = await monitorRes.json();
    const ramRes = await fetch(
      "https://pc-builder-backend-mdminhazulislamkhan.vercel.app/ram"
    );
    const ram = await ramRes.json();
    const motherboardRes = await fetch(
      "https://pc-builder-backend-mdminhazulislamkhan.vercel.app/motherboard"
    );
    const motherboard = await motherboardRes.json();
    const storageRes = await fetch(
      "https://pc-builder-backend-mdminhazulislamkhan.vercel.app/storage"
    );
    const storage = await storageRes.json();
    const accessoriesRes = await fetch(
      "https://pc-builder-backend-mdminhazulislamkhan.vercel.app/accessories"
    );
    const accessories = await accessoriesRes.json();

    return {
      props: {
        cpu,
        monitor,
        ram,
        motherboard,
        storage,
        accessories,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        cpu: [],
        monitor: [],
        ram: [],
        motherboard: [],
        storage: [],
        accessories: [],
      },
      revalidate: 30,
    };
  }
};
