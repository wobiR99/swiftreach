import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ClipboardList, Package, Plane } from "lucide-react";

const Services = () => {
  return (
    <div className="flex flex-col items-center space-y-14 p-10">
      <h3 className="font-bold text-4xl text-center">
        Uniform Delivery Services
      </h3>
      <div className="flex flex-col lg:flex-row lg:space-x-12 lg:space-y-0 space-y-12">
        <Card className="shadow-xl rounded-3xl h-fit py-4">
          <CardHeader className="flex flex-col space-y-8 justify-center items-center">
            <Package className="h-20 w-20" />
            <p className="font-bold text-4xl">Ship Now</p>
          </CardHeader>
          <CardContent className="font-normal text-sm text-center">
            Request Pick-up, Delivery or Express Dropoff
          </CardContent>
        </Card>
        <Card className="shadow-xl rounded-3xl">
          <CardHeader className="flex flex-col space-y-8 justify-center items-center">
            <Plane className="h-20 w-20" />
            <p className="font-bold text-4xl text-center leading-relaxed">
              International Shipping
            </p>
          </CardHeader>
          <CardContent className="font-normal text-sm text-center">
            Request Pick-up, Delivery or Express Dropoff
          </CardContent>
        </Card>
        <Card className="shadow-xl rounded-3xl h-fit py-4">
          <CardHeader className="flex flex-col space-y-8 justify-center items-center">
            <ClipboardList className="h-20 w-20" />
            <p className="font-bold text-4xl">Get a Quote</p>
          </CardHeader>
          <CardContent className="font-normal text-sm text-center">
            Request Pick-up, Delivery or Express Dropoff
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
