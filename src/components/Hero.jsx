import React from "react";
import { Desktop, Mobile } from "../assets";
import styles, { layout } from "../style";
import { Button } from "./Button";
import { clients } from "../constants";

function Hero() {
  return (
    <section className={layout.sectionReverse}>
      <div className={`${layout.sectionInfo}`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2} xs:text-[12px]`}>
            Make <br className="sm:block hidden" /> remote work
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-10`}>
          Get your team in sync, no matter your location.{" "}
          <br className="sm:block hidden" />
          Streamline processes, create team rituals, and{" "}
          <br className="sm:block hidden" /> watch productivity soar.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 justify-center items-center">
          <Button />
        </div>

        <div className={`${styles.flexCenter} my-4 "`}>
          <div className={`${styles.flexCenter} w-full flex`}>
            {clients.map((client) => (
              <div
                key={client.id}
                className={` flex-1 sm:min-w-[152px] min-w-[120px] client py-8 rounded-[20px] max-w-[270px] md:mr-10 sm:mr-5 mr-0 `}
              >
                <img
                  src={client.logo}
                  alt="clients"
                  className="w-[110px] object-contain cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={layout.sectionImgReverse}>
        <picture>
          <source media="(min-width: 768px)" srcSet={Desktop} />
          <img
            src={Mobile}
            alt="snap-img"
            className="w-[100%] h-[100%] relative z-[5] mb-[3rem]"
          />
        </picture>
      </div>
    </section>
  );
}

export default Hero;
