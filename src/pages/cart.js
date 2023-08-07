import RootLayout from "@/Components/Layouts/RootLayout";
import Meta from "@/Components/meta/meta";
import Image from "next/image";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart, cartTotal } = useSelector((state) => state.cart);
  return (
    <div className="overflow-x-auto sm:mx-10 mx-0 mt-20">
      <Meta title="My Cart : OurPC.com" />
      <table className="table">
        <thead>
          <tr className="text-neutral font-bold text-lg">
            <th></th>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((singleProduct, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center flex-col sm:flex-row space-x-3">
                  <div className="avatar">
                    <div className="mask w-12 h-12">
                      <Image
                        src={singleProduct.image}
                        alt={singleProduct.productName}
                        width={900}
                        height={900}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{singleProduct.productName}</div>
                    <div className="text-sm opacity-100">
                      <span className="text-neutral font-semibold">Price</span>{" "}
                      : {singleProduct.price}
                    </div>
                  </div>
                </div>
              </td>
              <td>{singleProduct.category}</td>
              <td>{singleProduct.price}</td>
              <th>{singleProduct.keyFeatures.Brand} </th>
            </tr>
          ))}
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td className="text-neutral font-bold text-lg">Total Price</td>
            <td className="text-neutral font-bold text-lg">{cartTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Cart;
Cart.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
