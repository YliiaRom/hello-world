import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
function HeroSectionRight() {
  const [Spline, setSpline] = useState(null);

  useEffect(() => {
    import("@splinetool/react-spline").then((mod) => {
      setSpline(() => mod.default);
    });
  }, []);

  if (!Spline) return <div>Загрузка 3D...</div>;
  return (
    <>
      {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}> */}
      {/* <div>
        <Spline
          className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
          scene="https://prod.spline.design/s2gYi5LkRVmxNt9i/scene.splinecode"
        />
      </div> */}
      <div>
        <Spline
          className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
          scene="https://prod.spline.design/s2gYi5LkRVmxNt9i/scene.splinecode"
        />
      </div>
    </>
  );
}
export default HeroSectionRight;
