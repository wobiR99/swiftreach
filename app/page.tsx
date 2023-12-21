import Features from "@/components/features";
import Footer from "@/components/footer";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Services />
      <Features />
      <Footer />
    </div>
  );
}
