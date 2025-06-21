import { motion } from "framer-motion";
// import { a } from "framer-motion/client";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
function Header() {
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.3,
          duration: 1.2,
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
      >
        {/* logo-header */}
        <div className="flex items-center">
          <div className="h-10 w-10  rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            M
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Yullia code
          </span>
        </div>
        {/* Desctop Navigation */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                className="relative text-gray-400 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                href="#"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300">
                  ffff
                </span>
              </motion.a>
            )
          )}
        </nav>
        {/* social-icons */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="#"
            className="text-gray-500 dark:text-gray-300 hover:text-violet-200 dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="#"
            className="text-gray-500 dark:text-gray-300 hover:text-violet-200 dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiTwitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="#"
            className="text-gray-500 dark:text-gray-300 hover:text-violet-200 dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
        </div>

        {/* header button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.8,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
        >
          button
        </motion.button>
      </motion.div>
    </header>
  );
}
export default Header;
