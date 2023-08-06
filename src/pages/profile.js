import RootLayout from "@/Components/Layouts/RootLayout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const { data } = useSession();
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-32 text-neutral-content">
      <div className="card-body items-center text-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary mb-10 ring-offset-base-100 ring-offset-2">
            <Image
              alt="profile"
              src={data?.user.image}
              width={400}
              height={400}
            />
          </div>
        </div>
        <h2 className="card-title text-neutral font-bold">{data?.user.name}</h2>
        <p className="text-black">
          <span className="text-neutral font-bold">Email : </span>
          {data?.user.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
