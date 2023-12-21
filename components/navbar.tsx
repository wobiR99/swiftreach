import { logo } from "@/public/images";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const routes = [
  {
    label: "Shipping",
    href: "#shipping",
  },
  {
    label: "Tracking",
    href: "#tracking",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Help",
    href: "#help",
  },
];

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 flex justify-between px-4 lg:px-10 py-4 bg-white">
      <Image src={logo} alt="logo" width={150} height={150} />
      <div className="flex space-x-10 items-center">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className="hover:text-neutral-600 sm:block hidden"
          >
            {route.label}
          </Link>
        ))}
        <div className="group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-white sm:hidden">
          <span className="inline-flex h-[2px] w-full transform bg-black transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:bg-neutral-600 group-active:bg-neutral-600"></span>
          <span className="group-focus:inline-flex h-[2px] w-full translate-x-3 transform bg-black transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:bg-neutral-600 group-active:bg-neutral-600"></span>
          <span className="inline-flex h-[2px] w-full translate-x-1 transform bg-black transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:bg-neutral-600"></span>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="h-6 w-6" fill="black" />
          <Button className="bg-[#A4C5D0] text-black font-semibold hover:bg-[#A4C5D0]/50">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
