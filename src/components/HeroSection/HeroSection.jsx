import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import boy from "../../assets/img/boy.png";
import HeroSectionLeft from "./HeroSectionLeft";
import HeroSectionRight from "./HeroSectionRight";
function HeroSection() {
  return (
    // <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
    <section className="h-screen flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      {/* left section */}
      <HeroSectionLeft />

      {/* right section */}
      <HeroSectionRight />
    </section>
  );
}
export default HeroSection;
