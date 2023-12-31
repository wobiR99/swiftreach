import About from "@/components/about";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Services />
      <About />
      <Features />
      <Footer />
    </div>
  );
}
