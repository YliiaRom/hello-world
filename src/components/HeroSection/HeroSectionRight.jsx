import { motion } from "framer-motion";
import boy02 from "../../assets/img/boy02.png";
// import Spline from "@splinetool/react-spline";
// import { useEffect, useState } from "react";
function HeroSectionRight() {
  // const [Spline, setSpline] = useState(null);

  // useEffect(() => {
  //   import("@splinetool/react-spline").then((mod) => {
  //     setSpline(() => mod.default);
  //   });
  // }, []);

  // if (!Spline) return <div>Загрузка 3D...</div>;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute xl:right-[-28%] right-0 bottom-[-10%] lg:bottom-[-10%] flex  justify-center items-center w-full h-full "
      >
        <div className="max-w-[900px] w-full aspect-[3/4] flex justify-center items-center border border-violet-200">
          <img
            src={boy02}
            alt="boy02"
            className="w-full h-full object-contain"
          />
        </div>
        {/* <div>
        <Spline
          className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
          scene="https://prod.spline.design/s2gYi5LkRVmxNt9i/scene.splinecode"
        />
      </div> */}
      </motion.div>
      {/* <Spline
          className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
          scene="https://prod.spline.design/s2gYi5LkRVmxNt9i/scene.splinecode"
        /> */}
      {/* </div> */}
    </>
  );
}
export default HeroSectionRight;
