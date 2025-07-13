import { motion, scale } from "framer-motion";
import Honda from "../../assets/Honda.png";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

const bgImage = {
  backgroundImage: `url()`,
  backgroundSize: "cover",
  backgrounPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  return (
    <main className="text-white">
      <div className="bg-gradient-to-r from-[#2b9de6] to-[#124175]/90">
        <div className="container">
          {/* navbar section */}
          <Navbar />
          <section className="grid grid-cols-1 md:grid-cols-2 min-h-[800px] place-items-center">
            <div className="space-y-8 mt-[100px] md:mt-[20px]">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  delay: 1.2,
                  duration: 0.4,
                }}
              >
                {" "}
                <h1 className="uppercase text-5xl lg:text-7xl font-bold leading-tight ">
                  Honda <br></br>{" "}
                  <span className="text-outline text-transparent">
                    {" "}
                    Sports Ev{" "}
                  </span>
                </h1>
                <button className="outline-btn flex items-center justify-center gap-2 group cursor-pointer">
                  Explore{" "}
                  <FaArrowRight className="group-hover:translate-x-2 duration-200" />
                </button>
              </motion.div>

              {/* Features section */}
              <motion.div
                className="bg-black/40 space-y-2 p-6 lg:max-w-[350px] !mt-[60px]"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  delay: 1.5,
                  duration: 0.5,
                }}
              >
                <h1 className="text-xl upperccase">Vehicle Features</h1>
                <p className="text-sm leading-loose">
                  Experience the thrill of the open road with unmatched
                  performance and style. Our latest model combines sleek design
                  with cutting-edge technology, offering exceptional fuel
                  efficiency without compromising on power.
                </p>
              </motion.div>
            </div>
            <div className="relative md:mt-[100px] max-w-[500px]  mt-[20px]">
              <motion.img
                src={Honda}
                alt="Honda car image"
                className="relative z-30 w-full mx-auto object-cover"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 1,
                }}
              />
              {/* Glowing ring */}
              <motion.div
                className="border-[20px] w-[60%] aspect-square rounded-full border-cyan-200 absolute
                -top-8 left-1/2 z-10 glowing-shadow mx-auto"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  delay: 0.8,
                  duration: 0.8,
                }}
              ></motion.div>
              <motion.div
                className="z-[1] absolute md:-top-40 left-10 top-0 hidden md:block "
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  delay: 1.4,
                  duration: 0.8,
                }}
              >
                <h1 className="text-[120px] lg:text-[160px] text-cyan-200/10 font-bold scale-120 leading-none">
                  Sport
                </h1>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;
