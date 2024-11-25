import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-center relative overflow-hidden">
      <motion.div
        className="absolute bg-[#2a85af] rounded-full opacity-20 blur-3xl"
        style={{ width: "400px", height: "400px", top: "-50px", left: "-50px" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-[90%] md:max-w-[70%] grid gap-8 z-10">
        <motion.h1
          className="text-white font-bold text-5xl md:text-6xl xl:text-8xl drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Encuentra amantes de los juegos de mesa como tú
        </motion.h1>

        <motion.h3
          className="font-extralight text-[#0b2b3b] text-lg md:text-xl lg:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          MeepleTup, la app para encontrar jugadores de juegos de mesa
        </motion.h3>

        <motion.div
          className="grid md:flex justify-center gap-3 mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="https://play.google.com/store/apps/details?id=com.jmnzbrv.meepletup.prod" className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2a85af_0%,#2a85af_50%,#fff_100%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#468fb1] hover:bg-[#226d90] transition-all duration-300 px-7 text-sm font-semibold text-white backdrop-blur-3xl gap-2">
              <svg viewBox="30 336.7 120.9 129.2" className="w-3 sm:w-5">
                <path d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7 c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" fill="#FFD400"></path>
                <path d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3 c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" fill="#FF3333"></path>
                <path d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1 c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" fill="#48FF48"></path>
                <path d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6 c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" fill="#3BCCFF"></path>
              </svg>
              Google Play
            </span>
          </a>

          <a href="https://apps.apple.com/es/app/meepletup/id6449651933" className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2a85af_0%,#2a85af_50%,#fff_100%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#468fb1] hover:bg-[#226d90] transition-all duration-300 px-7 text-sm font-semibold text-white backdrop-blur-3xl gap-2">
              <svg viewBox="0 0 384 512" className="w-4 sm:w-5">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" fill="currentColor"></path>
              </svg>
              App Store
            </span>
          </a>
        </motion.div>
      </div>

      <motion.img
        src="/dados.png"
        alt="Dados"
        className="absolute bottom-0 left-0 max-w-[50%] md:max-w-[30%] xl:max-w-[30%]"
        loading="lazy"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ filter: "drop-shadow(0 0 20px #2a85af)" }}
      />

      <motion.img
        src="/caballo.png"
        alt="Caballo"
        className="absolute top-0 right-0 max-w-[40%] md:max-w-[20%] xl:max-w-[20%] "
        loading="lazy"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ filter: "drop-shadow(0 0 20px #2a85af)" }}
      />
    </div>
  );
};

export default Hero;
