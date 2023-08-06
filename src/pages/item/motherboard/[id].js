import RootLayout from "@/Components/Layouts/RootLayout";
import Meta from "@/Components/meta/meta";
import { addToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const MotherboardDetails = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart({ product: "motherboard", details: product }));
    router.push("/pc-build");
  };
  return (
    <>
      <Meta title={"Motherboard OurPC.com"} />
      <div className="card grid md:grid-cols-2 card-side bg-base-100 shadow-xl mt-10">
        <figure>
          <Image
            src={product.image}
            alt={product.productName}
            width={700}
            height={700}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-center mx-auto mt-8 mb-4 text-neutral text-3xl">
            {product.productName}
          </h2>
          <div className="text-md my-0">
            <span className="text-neutral text-lg font-bold">
              Description :{" "}
            </span>
            {product.description}
          </div>
          <div className="text-md">
            <span className="text-neutral text-lg font-bold">Category : </span>
            {product.category}
          </div>
          <div className="text-md">
            <span className="text-neutral text-lg font-bold">Status : </span>
            {product.status}
          </div>
          <div className="text-md">
            <span className="text-neutral text-lg font-bold">Price : </span>
            {product.price}
          </div>
          <div className="text-md">
            <span className="text-neutral text-lg font-bold">
              Average Rating :{" "}
            </span>
            {product.averageRating}
          </div>
          <div className="font-bold">
            <span className="text-neutral text-lg font-bold">Key Features</span>
            <div className="overflow-x-auto">
              <table className="table my-5">
                <thead>
                  <tr>
                    <th>Brand</th>
                    <th>Chipset</th>
                    <th>Memory Type</th>
                    <th>VGA Ports</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{product.keyFeatures.Brand}</td>
                    <td>{product.keyFeatures.Chipset}</td>
                    <td>{product.keyFeatures["Memory Type"]}</td>
                    <td>{product.keyFeatures["VGA Ports"]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="font-bold">
            <span className="text-neutral text-lg font-bold">Reviews</span>
            <div className="overflow-x-auto my-5">
              <ul className="list-disc ml-8">
                {product.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-neutral"
              onClick={() => addProduct(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotherboardDetails;
MotherboardDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-backend-mdminhazulislamkhan.vercel.app/motherboard"
  );
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { id: product._id },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-backend-mdminhazulislamkhan.vercel.app/motherboard/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
