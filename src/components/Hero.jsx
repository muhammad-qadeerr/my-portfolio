import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full min-h-[88vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#10B981]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#10B981]"> Qadeer</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full‑stack engineer crafting performant web apps with .NET, Angular,
            and React. I focus on clean UX, scalability, and real business value.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-[#10B981] text-black font-semibold shadow-card hover:opacity-90"
            >
              View Projects
            </a>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-secondary">
              <span>
                Email: 
                <a href="mailto:muhammadqadeerr456@gmail.com" className="text-white hover:underline ml-1">
                  muhammadqadeerr456@gmail.com
                </a>
              </span>
              <span>
                Phone: 
                <a href="tel:+923225481756" className="text-white hover:underline ml-1">
                  +92‑322‑5481756
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
