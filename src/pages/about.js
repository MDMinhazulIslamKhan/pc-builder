import RootLayout from "@/Components/Layouts/RootLayout";
import React from "react";

const About = () => {
  return (
    <div>
      <h1>This is from About</h1>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
