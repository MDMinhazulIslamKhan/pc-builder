import RootLayout from "@/Components/Layouts/RootLayout";
import Meta from "@/Components/meta/meta";

const About = () => {
  return (
    <div className="card md:w-1/2 w-3/4 bg-base-100 mx-auto shadow-xl">
      <Meta />
      <div className="card-body mt-10">
        <h2 className="text-center text-3xl mt-8 font-bold text-neutral">
          Md. Minhazul Islam Khan
        </h2>
        <h2 className="text-center text-lg font-bold text-neutral">
          Fullstack developer
        </h2>
        <div className="grid grid-cols-4 gap-4 w-full md:w-1/2 my-20 mx-auto">
          <div className="text-neutral font-bold">Email:</div>
          <a
            href="mailto:minhazulislamkhan@gmail.com"
            target="_blank"
            className="col-span-3 text-neutral font-semibold"
          >
            minhazulislamkhan@gmail.com
          </a>
          <div className="text-neutral font-bold">Contact:</div>
          <a
            href="tel:+8801521438469"
            target="_blank"
            className="col-span-3 text-neutral font-semibold"
          >
            +8801521438469
          </a>
          <div className="text-neutral font-bold">Skills:</div>
          <div className="col-span-3 text-neutral font-semibold ml-3">
            <ul className="list-disc">
              <li>JavaScript | ES6</li>
              <li>TypeScript</li>
              <li>Node.Js | Express.js</li>
              <li>NoSQL Database (Mongodb,Mongoose)</li>
              <li>MySQL Database</li>
              <li>React.Js</li>
              <li>Next.Js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
