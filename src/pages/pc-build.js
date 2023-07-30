import RootLayout from "@/Components/Layouts/RootLayout";
import React from "react";

const PCBuild = () => {
  return <div>dsfj</div>;
};

export default PCBuild;

PCBuild.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
