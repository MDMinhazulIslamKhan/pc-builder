import RootLayout from "@/Components/Layouts/RootLayout";
import { signIn } from "next-auth/react";
import Head from "next/head";
import React from "react";

const Login = () => {
  return (
    <div className="card w-fit sm:w-1/3 bg-accent mx-auto my-40 shadow-xl">
      <Head>
        <title>Login OurPC.com</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <div className="card-body">
        <h1 className="text-center font-bold text-lg mb-5">Please login</h1>
        <button
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000",
            })
          }
          className="btn hover:text-white btn-neutral"
        >
          Login WITH GITHUB
        </button>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000",
            })
          }
          className="btn hover:text-white btn-neutral"
        >
          Login WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
