import RootLayout from "@/Components/Layouts/RootLayout";
import React from "react";

const Motherboard = () => {
  return (
    <div>
      <h1>This is from single Motherboard</h1>
    </div>
  );
};

export default Motherboard;

Motherboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
