import { Bike, Star, Webhook } from "lucide-react";

const Features = () => {
  return (
    <div className="flex flex-col items-center w-full space-y-12 p-10">
      <h2 className="font-semibold text-primary text-2xl lg:text-start text-center">
        Making Delivery <span className="uppercase text-[#A4C5D0]">easy</span>{" "}
        for you
      </h2>
      <div className="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-12 justify-center">
        <div className="flex flex-col lg:items-start items-center space-y-8 max-w-lg">
          <div className="flex flex-col lg:items-start items-center space-y-4">
            <Star color="#A4C5D0" className="h-10 w-10" />
            <p className="font-extrabold text-xl lg:text-start text-center">
              First Mover Advantage
            </p>
          </div>
          <p className="font-medium max-w-md">
            Providing a distinct first-mover advantage in underdeveloped markets
            positioning our clients at the forefront of emerging opportunities
            in these untapped regions
          </p>
        </div>
        <div className="flex flex-col lg:items-start items-center space-y-8 max-w-lg">
          <div className="flex flex-col lg:items-start items-center space-y-4">
            <Bike color="#A4C5D0" className="h-10 w-10" />
            <p className="font-extrabold text-xl lg:text-start text-center">
              First Mover Advantage
            </p>
          </div>
          <p className="font-medium max-w-md">
            Offers a versatile fleet that caters to a wide array of
            transportation needs, ensuring flexibility and efficiency in meeting
            the diverse requirements of our valued clients
          </p>
        </div>
        <div className="flex flex-col lg:items-start items-center space-y-8 max-w-lg">
          <div className="flex flex-col lg:items-start items-center space-y-4">
            <Webhook color="#A4C5D0" className="h-10 w-10" />
            <p className="font-extrabold text-xl lg:text-start text-center">
              First Mover Advantage
            </p>
          </div>
          <p className="font-medium max-w-md">
            Seamlessly integrating cutting-edge technology to ensure the highest
            standards of efficiency and reliability in our services, setting a
            new benchmark for the industry
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
