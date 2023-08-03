import RootLayout from "@/Components/Layouts/RootLayout";
import Meta from "@/Components/meta/meta";
import { addToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ product }) => {
  const { monitor } = useSelector((state) => state.cart);
  console.log(monitor);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart({ product: "monitor", details: product }));
  };
  return (
    <>
      <Meta title={"Monitor OurPC.com"} />
      <div className="card card-side bg-base-100 shadow-xl mt-10">
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
                    <th>Model</th>
                    <th>Specification</th>
                    <th>Resolution</th>
                    <th>Port</th>
                    <th>Voltage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{product.keyFeatures.Brand}</th>
                    <td>{product.keyFeatures.Brand}</td>
                    <td>{product.keyFeatures.Specification}</td>
                    <td>{product.keyFeatures.Resolution}</td>
                    <td>{product.keyFeatures.Port}</td>
                    <td>{product.keyFeatures.Voltage}</td>
                  </tr>
                </tbody>
              </table>
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

export default Product;
Product.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-backend-mdminhazulislamkhan.vercel.app/monitor"
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
    `https://pc-builder-backend-mdminhazulislamkhan.vercel.app/monitor/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
