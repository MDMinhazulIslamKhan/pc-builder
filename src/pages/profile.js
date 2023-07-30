import RootLayout from "@/Components/Layouts/RootLayout";
import React from "react";

const Profile = () => {
  return <div>sdf</div>;
};

export default Profile;

Profile.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
