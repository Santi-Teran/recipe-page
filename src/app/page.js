import Footer from "@/components/Footer";
import Ingridients from "@/components/Ingridients";
import Instructions from "@/components/Instructions";
import Landing from "@/components/Landing";
import Nutrition from "@/components/Nutrition";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col bg-white rounded-2xl mx-auto md:w-3/4 lg:w-2/3 xl:w-1/2 md:p-8 lg:p-10 md:my-12">
        <Landing />
        <Ingridients />
        <Instructions />
        <Nutrition />
      </div>
      <Footer />
    </div>
  );
}