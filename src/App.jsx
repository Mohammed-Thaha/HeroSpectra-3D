import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Model from "./components/Model";

function App() {
  const [hero, setHero] = useState("ironman");

  const heroDetails = {
    ironman: {
      title: "Iron Man Armor",
      description:
        "Explore the legendary Iron Man suit in 3D. Rotate, zoom, and admire every detail of Tony Stark's iconic armor.",
      modelPath: "/assets/iron_man/scene.gltf",
      themeColor: "#BF9658",
    },
    spiderman: {
      title: "Spiderman Suit",
      description:
        "Swing into action with Spiderman's suit in 3D. Inspect the fine web details and sleek design of the web-slinger.",
      modelPath: "/assets/spider_man/scene.gltf",
      themeColor: "#CD5C5C",
    },
    captain: {
      title: "Captain America Armor",
      description:
        "Dive into the 3D model of Captain America's Civil War suit. Rotate, zoom, and explore every detail of this iconic armor.",
      modelPath: "/assets/captain_america/scene.gltf",
      themeColor: "#194BA4",
    },
    hulk: {
      title: "Hulk Smash Armor",
      description:
        "Experience the raw power of Hulk’s transformation. Rotate, zoom, and explore the intricacies of this model in 3D.",
      modelPath: "/assets/hulk/scene.gltf",
      themeColor: "#006528",
    },
    thor: {
      title: "Thor's Battle Armor",
      description:
        "Witness the might of the God of Thunder in 3D. Rotate, zoom, and marvel at the intricate Asgardian design of Thor’s armor.",
      modelPath: "/assets/thor/scene.gltf",
      themeColor: "#46515B",
    },
  };

  const currentHero = heroDetails[hero];

  return (
    <motion.div
      className="min-h-screen transition-colors duration-500 ease-in-out"
      style={{ backgroundColor: currentHero.themeColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col md:flex-row text-white">
        <div className="md:w-1/2 h-[500px] md:h-screen flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={hero}
              initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <Model
                modelPath={currentHero.modelPath}
                bgColor={currentHero.themeColor}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="md:w-1/2 p-10 flex flex-col justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {currentHero.title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed drop-shadow-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {currentHero.description}
          </motion.p>

          <div className="flex gap-4 flex-wrap">
            {Object.keys(heroDetails).map((key) => (
              <motion.button
                key={key}
                onClick={() => setHero(key)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold shadow-lg transition-transform transform duration-300 ${
                  hero === key
                    ? "ring-4 ring-white scale-105"
                    : "hover:scale-105 hover:ring-2 hover:ring-white/60"
                }`}
                style={{
                  backgroundColor: heroDetails[key].themeColor,
                  color: "#fff",
                }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default App;
