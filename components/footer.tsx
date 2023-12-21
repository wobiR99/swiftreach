import Link from "next/link";
import SectionList from "./section-list";

const Footer = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 lg:justify-between bg-[#262626] py-10 px-10 sm:px-20 md:px-32 lg:px-40">
      <SectionList title="Company" className="space-y-4 text-white">
        <Link href="">About</Link>
        <Link href="">Privacy Policy</Link>
        <Link href="">Terms of Service</Link>
        <Link href="">Terms for Drivers & Partners</Link>
      </SectionList>
      <SectionList title="Products" className="space-y-4 text-white">
        <Link href="">Business</Link>
        <Link href="">Track your Items</Link>
      </SectionList>
      <SectionList title="Learn More" className="space-y-4 text-white">
        <Link href="">Blog</Link>
      </SectionList>
      <SectionList title="Contact" className="space-y-4 text-white">
        <Link href="tel:+2347080639090">+2347080639090</Link>
        <Link href="mailto:contact@mytruq.com">contact@mytruq.com</Link>
      </SectionList>
    </div>
  );
};

export default Footer;
