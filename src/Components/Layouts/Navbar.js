import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center bg-accent">
      <div className="flex-1 flex py-2 items-center ml-5 ">
        <Link href="/" className="ml-5">
          <Image src="/logo.png" alt="logo" height={100} width={100} />
        </Link>
      </div>
      <div className="flex-1 hidden md:block">
        <h1 className="font-extrabold text-neutral sm:text-4xl text-xl sm:-ms-5">
          <Link href="/">OurPC.com</Link>
        </h1>
      </div>

      <div className="flex-col-reverse">
        <ul className="menu menu-horizontal mr-2">
          <li>
            <summary className="bg-neutral text-white">
              <Link href="/pc-build">PC Builder</Link>
            </summary>
          </li>
        </ul>
      </div>

      <div className="flex-col-reverse">
        <ul className="menu menu-horizontal mr-2 hidden sm:block">
          <li>
            <details>
              <summary className="bg-neutral text-white">Our Product</summary>
              <ul className="p-2 bg-neutral border-primary text-white border-2 z-10">
                <li>
                  <Link href="/item/monitor">Monitor</Link>
                </li>
                <li>
                  <Link href="/item/cpu">Cpu</Link>
                </li>
                <li>
                  <Link href="/item/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/item/hdd">Hard Disk</Link>
                </li>
                <li>
                  <Link href="/item/power-supply">Power Supply</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {session ? (
        <div className="flex-col-reverse">
          <ul className="menu menu-horizontal mr-2">
            <li>
              <details>
                <summary className="bg-neutral text-white">Your info</summary>
                <ul className="p-2 bg-neutral border-primary text-white border-2 z-10">
                  <li>
                    <Link href="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link href="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link href="/order">Order</Link>
                  </li>
                  <li>
                    <p onClick={() => signOut()}>Logout</p>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex-col-reverse">
          <ul className="menu menu-horizontal mr-2">
            <li>
              <summary className="bg-neutral text-white">
                <Link href="/login">Login</Link>
              </summary>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
