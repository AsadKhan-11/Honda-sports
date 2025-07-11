import React from "react";
import Honda from "../../assets/Honda.png";
import { FaArrowRight } from "react-icons/fa";

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

          <section className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] place-items-center">
            <div className="space-y-8">
              {" "}
              <h1 className="uppercase text-5xl lg:text-7xl font-bold leading-tight ">
                Honda <br></br>{" "}
                <span className="text-outline text-transparent">
                  {" "}
                  Sports Ev{" "}
                </span>
              </h1>
              <button className="outline-btn flex items-center justify-center gap-2 group">
                Explore{" "}
                <FaArrowRight className="group-hover:translate-x-2 duration-200" />
              </button>
              {/* Third section */}
              <div className="bg-black/40 space-y-2 p-6 lg:max-w-[350px] !mt-[60px]">
                <h1 className="text-xl upperccase">Vehicle Features</h1>
                <p className="text-sm leading-loose">
                  Experience the thrill of the open road with unmatched
                  performance and style. Our latest model combines sleek design
                  with cutting-edge technology, offering exceptional fuel
                  efficiency without compromising on power.
                </p>
              </div>
            </div>
            <div className="scale-[0.8]">
              <img src={Honda} alt="Honda car image" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;
