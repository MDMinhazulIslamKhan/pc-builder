import RootLayout from "@/Components/Layouts/RootLayout";
import React from "react";

const PowerSupply = () => {
  return (
    <div>
      <h1>This is from single PowerSupply</h1>
    </div>
  );
};

export default PowerSupply;

PowerSupply.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
