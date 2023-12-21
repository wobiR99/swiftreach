import { image } from "@/public/images";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-center lg:space-x-32 items-center lg:space-y-0 space-y-8 bg-[#262626] px-10 py-12">
      <div className="flex flex-col space-y-4 items-center h-full text-white">
        <h3 className="font-bold text-3xl">SwiftReach</h3>
        <p className="font-semibold max-w-lg text-center">
          empowering underdeveloped communities by seamlessly connecting them to
          the global marketplace through innovative and reliable transportation
          solutions
        </p>
      </div>
      <Image src={image} alt="image" width={300} height={300} />
    </div>
  );
};

export default About;
