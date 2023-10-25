import RootLayout from "@/Components/Layouts/RootLayout";
import Meta from "@/Components/meta/meta";
import { removeOne, removeAll } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const PCBuild = () => {
  const allProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const addProductIntoCart = () => {
    dispatch(removeAll());
    router.push("/cart");
  };
  return (
    <>
      <Meta title="PC-Build OurPC.com" />

      <div className="overflow-x-auto my-20 sm:mx-20">
        {allProduct.cart.length ? (
          <h1 className="text-neutral font-bold text-center text-2xl mb-10">
            Your Pc is ready, Go to your{" "}
            <Link
              href="/cart"
              className="btn btn-outline btn-secondary font-bold btn-sm"
            >
              Cart
            </Link>
          </h1>
        ) : (
          ""
        )}

        <table className="table">
          <thead>
            <tr>
              <th className="font-bold text-neutral text-center text-lg">
                Components
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {allProduct.monitor.length == 0 ? (
                <th className="font-semibold text-neutral pl-10">Monitor</th>
              ) : (
                <td>
                  {allProduct.monitor.map((singleProduct, index) => (
                    <div key={index} className="overflow-x-auto">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="flex justify-evenly items-center">
                                <div className="avatar">
                                  <div className="mask w-20 mr-5">
                                    <Image
                                      src={singleProduct.image}
                                      alt={singleProduct.productName}
                                      width={900}
                                      height={900}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">
                                    {singleProduct.productName}
                                  </div>
                                  <div className="text-sm opacity-100">
                                    <span className="text-neutral font-semibold">
                                      Price
                                    </span>{" "}
                                    : {singleProduct.price}
                                  </div>
                                  <div className="text-sm opacity-100 w-fit">
                                    <span className="text-neutral font-semibold">
                                      Category
                                    </span>{" "}
                                    : {singleProduct.category}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="grid justify-items-end sm:mt-0 mt-5">
                              <Link
                                href={`/item/${singleProduct.category}/${singleProduct._id}`}
                                className="btn btn-outline btn-primary btn-xs mb-3"
                              >
                                details
                              </Link>
                              <button
                                onClick={() =>
                                  dispatch(
                                    removeOne({
                                      product: singleProduct.category,
                                      details: singleProduct,
                                    })
                                  )
                                }
                                className="btn btn-outline btn-error btn-xs"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </td>
              )}
              <td>
                {allProduct.monitor.length >= 1 ? (
                  ""
                ) : (
                  <button
                    onClick={() => router.push("/item/monitor")}
                    className="btn btn-accent bg-neutral hover:text-neutral text-white btn-sm"
                  >
                    Add monitor
                  </button>
                )}
              </td>
            </tr>
            <tr>
              {allProduct.cpu.length == 0 ? (
                <th className="font-semibold text-neutral pl-10">
                  CPU / Processor
                </th>
              ) : (
                <td>
                  {allProduct.cpu.map((singleProduct, index) => (
                    <div key={index} className="overflow-x-auto">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="flex justify-evenly items-center">
                                <div className="avatar">
                                  <div className="mask w-20 mr-5">
                                    <Image
                                      src={singleProduct.image}
                                      alt={singleProduct.productName}
                                      width={900}
                                      height={900}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">
                                    {singleProduct.productName}
                                  </div>
                                  <div className="text-sm opacity-100">
                                    <span className="text-neutral font-semibold">
                                      Price
                                    </span>{" "}
                                    : {singleProduct.price}
                                  </div>
                                  <div className="text-sm opacity-100 w-fit">
                                    <span className="text-neutral font-semibold">
                                      Category
                                    </span>{" "}
                                    : {singleProduct.category}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="grid justify-items-end sm:mt-0 mt-5">
                              <Link
                                href={`/item/${singleProduct.category}/${singleProduct._id}`}
                                className="btn btn-outline btn-primary btn-xs mb-3"
                              >
                                details
                              </Link>
                              <button
                                onClick={() =>
                                  dispatch(
                                    removeOne({
                                      product: singleProduct.category,
                                      details: singleProduct,
                                    })
                                  )
                                }
                                className="btn btn-outline btn-error btn-xs"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </td>
              )}
              <td>
                {allProduct.cpu.length >= 1 ? (
                  ""
                ) : (
                  <button
                    onClick={() => router.push("/item/cpu")}
                    className="btn btn-accent bg-neutral hover:text-neutral text-white btn-sm"
                  >
                    Add cpu
                  </button>
                )}
              </td>
            </tr>
            <tr>
              {allProduct.motherboard.length == 0 ? (
                <th className="font-semibold text-neutral pl-10">
                  Motherboard
                </th>
              ) : (
                <td>
                  {allProduct.motherboard.map((singleProduct, index) => (
                    <div key={index} className="overflow-x-auto">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="flex justify-evenly items-center">
                                <div className="avatar">
                                  <div className="mask w-20 mr-5">
                                    <Image
                                      src={singleProduct.image}
                                      alt={singleProduct.productName}
                                      width={900}
                                      height={900}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">
                                    {singleProduct.productName}
                                  </div>
                                  <div className="text-sm opacity-100">
                                    <span className="text-neutral font-semibold">
                                      Price
                                    </span>{" "}
                                    : {singleProduct.price}
                                  </div>
                                  <div className="text-sm opacity-100 w-fit">
                                    <span className="text-neutral font-semibold">
                                      Category
                                    </span>{" "}
                                    : {singleProduct.category}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="grid justify-items-end sm:mt-0 mt-5">
                              <Link
                                href={`/item/${singleProduct.category}/${singleProduct._id}`}
                                className="btn btn-outline btn-primary btn-xs mb-3"
                              >
                                details
                              </Link>
                              <button
                                onClick={() =>
                                  dispatch(
                                    removeOne({
                                      product: singleProduct.category,
                                      details: singleProduct,
                                    })
                                  )
                                }
                                className="btn btn-outline btn-error btn-xs"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </td>
              )}
              <td>
                {allProduct.motherboard.length >= 1 ? (
                  ""
                ) : (
                  <button
                    onClick={() => router.push("/item/motherboard")}
                    className="btn btn-accent bg-neutral hover:text-neutral text-white btn-sm"
                  >
                    Add motherboard
                  </button>
                )}
              </td>
            </tr>
            <tr>
              {allProduct.ram.length == 0 ? (
                <th className="font-semibold text-neutral pl-10">RAM</th>
              ) : (
                <td>
                  {allProduct.ram.map((singleProduct, index) => (
                    <div key={index} className="overflow-x-auto">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="flex justify-evenly items-center">
                                <div className="avatar">
                                  <div className="mask w-20 mr-5">
                                    <Image
                                      src={singleProduct.image}
                                      alt={singleProduct.productName}
                                      width={900}
                                      height={900}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">
                                    {singleProduct.productName}
                                  </div>
                                  <div className="text-sm opacity-100">
                                    <span className="text-neutral font-semibold">
                                      Price
                                    </span>{" "}
                                    : {singleProduct.price}
                                  </div>
                                  <div className="text-sm opacity-100 w-fit">
                                    <span className="text-neutral font-semibold">
                                      Category
                                    </span>{" "}
                                    : {singleProduct.category}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="grid justify-items-end sm:mt-0 mt-5">
                              <Link
                                href={`/item/${singleProduct.category}/${singleProduct._id}`}
                                className="btn btn-outline btn-primary btn-xs mb-3"
                              >
                                details
                              </Link>
                              <button
                                onClick={() =>
                                  dispatch(
                                    removeOne({
                                      product: singleProduct.category,
                                      details: singleProduct,
                                    })
                                  )
                                }
                                className="btn btn-outline btn-error btn-xs"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </td>
              )}
              <td>
                {allProduct.ram.length == 3 ? (
                  ""
                ) : (
                  <button
                    onClick={() => router.push("/item/ram")}
                    className="btn btn-accent bg-neutral hover:text-neutral text-white btn-sm"
                  >
                    {allProduct.monitor.length == 0 ? "Add ram" : "Add more"}
                  </button>
                )}
              </td>
            </tr>
            <tr>
              {allProduct.powerSupply.length == 0 ? (
                <th className="font-semibold text-neutral pl-10">
                  Power Supply Unit
                </th>
              ) : (
                <td>
                  {allProduct.powerSupply.map((singleProduct, index) => (
                    <div key={index} className="overflow-x-auto">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="flex justify-evenly items-center">
                                <div className="avatar">
                                  <div className="mask w-20 mr-5">
                                    <Image
                                      src={singleProduct.image}
                                      alt={singleProduct.productName}
                                      width={900}
                                      height={900}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">
                                    {singleProduct.productName}
                                  </div>
                                  <div className="text-sm opacity-100">
                                    <span className="text-neutral font-semibold">
                                      Price
                                    </span>{" "}
                                    : {singleProduct.price}
                                  </div>
                                  <div className="text-sm opacity-100 w-fit">
                                    <span className="text-neutral font-semibold">
                                      Category
                                    </span>{" "}
                                    : {singleProduct.category}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="grid justify-items-end sm:mt-0 mt-5">
                              <Link
                                href={`/item/power-supply/${singleProduct._id}`}
                                className="btn btn-outline btn-primary btn-xs mb-3"
                              >
                                details
                              </Link>
                              <button
                                onClick={() =>
                                  dispatch(
                                    removeOne({
                                      product: singleProduct.category,
                                      details: singleProduct,
                                    })
                                  )
                                }
                                className="btn btn-outline btn-error btn-xs"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </td>
              )}
              <td>
                {allProduct.powerSupply.length >= 1 ? (
                  ""
                ) : (
                  <button
                    onClick={() => router.push("/item/power-supply")}
                    className="btn btn-accent bg-neutral hover:text-neutral text-white btn-sm"
                  >
                    Add powerSupply
                  </button>
                )}
              </td>
            </tr>
            <tr>
              {allProduct.storage.length == 0 ? (
                <th className="font-semibold text-neutral pl-10">
                  Storage Device
                </th>
              ) : (
                <td>
                  {allProduct.storage.map((singleProduct, index) => (
                    <div key={index} className="overflow-x-auto">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="flex justify-evenly items-center">
                                <div className="avatar">
                                  <div className="mask w-20 mr-5">
                                    <Image
                                      src={singleProduct.image}
                                      alt={singleProduct.productName}
                                      width={900}
                                      height={900}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">
                                    {singleProduct.productName}
                                  </div>
                                  <div className="text-sm opacity-100">
                                    <span className="text-neutral font-semibold">
                                      Price
                                    </span>{" "}
                                    : {singleProduct.price}
                                  </div>
                                  <div className="text-sm opacity-100 w-fit">
                                    <span className="text-neutral font-semibold">
                                      Category
                                    </span>{" "}
                                    : {singleProduct.category}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="grid justify-items-end sm:mt-0 mt-5">
                              <Link
                                href={`/item/${singleProduct.category}/${singleProduct._id}`}
                                className="btn btn-outline btn-primary btn-xs mb-3"
                              >
                                details
                              </Link>
                              <button
                                onClick={() =>
                                  dispatch(
                                    removeOne({
                                      product: singleProduct.category,
                                      details: singleProduct,
                                    })
                                  )
                                }
                                className="btn btn-outline btn-error btn-xs"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </td>
              )}
              <td>
                {allProduct.storage.length == 3 ? (
                  ""
                ) : (
                  <button
                    onClick={() => router.push("/item/storage")}
                    className="btn btn-accent bg-neutral hover:text-neutral text-white btn-sm"
                  >
                    {allProduct.monitor.length == 0
                      ? "Add storage"
                      : "Add more"}
                  </button>
                )}
              </td>
            </tr>
            <tr>
              {allProduct.accessories.length == 0 ? (
                <th className="font-semibold text-neutral pl-10">
                  Accessories
                </th>
              ) : (
                <td>
                  {allProduct.accessories.map((singleProduct, index) => (
                    <div key={index} className="overflow-x-auto">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="flex justify-evenly items-center">
                                <div className="avatar">
                                  <div className="mask w-20 mr-5">
                                    <Image
                                      src={singleProduct.image}
                                      alt={singleProduct.productName}
                                      width={900}
                                      height={900}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">
                                    {singleProduct.productName}
                                  </div>
                                  <div className="text-sm opacity-100">
                                    <span className="text-neutral font-semibold">
                                      Price
                                    </span>{" "}
                                    : {singleProduct.price}
                                  </div>
                                  <div className="text-sm opacity-100 w-fit">
                                    <span className="text-neutral font-semibold">
                                      Category
                                    </span>{" "}
                                    : {singleProduct.category}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="grid justify-items-end sm:mt-0 mt-5">
                              <Link
                                href={`/item/${singleProduct.category}/${singleProduct._id}`}
                                className="btn btn-outline btn-primary btn-xs mb-3"
                              >
                                details
                              </Link>
                              <button
                                onClick={() =>
                                  dispatch(
                                    removeOne({
                                      product: singleProduct.category,
                                      details: singleProduct,
                                    })
                                  )
                                }
                                className="btn btn-outline btn-error btn-xs"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </td>
              )}
              <td>
                {allProduct.accessories.length == 3 ? (
                  ""
                ) : (
                  <button
                    onClick={() => router.push("/item/accessories")}
                    className="btn btn-accent bg-neutral hover:text-neutral text-white btn-sm"
                  >
                    {allProduct.accessories.length == 0
                      ? "Add accessories"
                      : "Add more"}
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        title="Add at least 3 components"
        className="font-bold text-2xl text-neutral mt-20 mb-5 text-center pl-10"
      >
        Total : {allProduct.total} taka
        <button
          onClick={addProductIntoCart}
          className={`${
            allProduct.components < 3 && "btn-disabled"
          } btn btn-accent bg-neutral hover:text-neutral block mt-10 text-white btn-sm mx-auto`}
        >
          Complete & Make your pc.
        </button>
      </div>
    </>
  );
};

export default PCBuild;

PCBuild.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
