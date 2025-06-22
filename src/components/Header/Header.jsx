import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// import { a } from "framer-motion/client";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import ContactInputForm from "../ContactInputForm/ContactInputForm";
import ContactFormWrap from "../ContactFormWrap/ContactFormWrap";
import LogoHeader from "../LogoHeader/LogoHeader";
import { headerNav } from "../../helpers/headerNav.js";
import HeaderNavDesktop from "../NavDesktop/HeaderNavDesktop";
import HeaderSocIcon from "../HeaderSocIcon/HeaderSocIcon.jsx";
import HeaderModalButton from "../HeaderModalButton/HeaderModalButton.jsx";
import HeaderMobileNavBtn from "../HeaderMobileNavBtn/HeaderMobileNavBtn.jsx";
import HeaderMobileMenu from "../HeaderMobileMenu/HeaderMobileMenu.jsx";

function Header() {
  //Toggle menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const [contactFormIsOpen, setContactFormIsOpen] = useState(false);

  //--toggle
  function toggleMenu() {
    setIsOpen((v) => !v);
  }

  //--contact Form open/close
  const openContactForm = () => setContactFormIsOpen(true);
  const closeContactForm = () => setContactFormIsOpen(false);
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
        <LogoHeader logoContent={"M"} logoTitle="Yullia code" />

        {/* Desctop Navigation */}
        <HeaderNavDesktop list={headerNav} contentNavItem={"prop"} />

        {/* social-icons */}
        <HeaderSocIcon />

        {/* header button = OPEN MODAL*/}
        <HeaderModalButton
          btnText={"contact form"}
          openContactForm={openContactForm}
        />

        {/* mobile-menu-btn */}
        <HeaderMobileNavBtn toggleMenu={toggleMenu}>
          {isOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </HeaderMobileNavBtn>
      </motion.div>

      {/* mobile-menu */}
      <HeaderMobileMenu
        isOpen={isOpen}
        list={headerNav}
        toggleMenu={toggleMenu}
        openContactForm={openContactForm}
      />
      {/* <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-gray-800 dark:bg-gray-900 shadow-lg px-4 py-5 space-e-5"
      >
        <nav className="flex flex-col space-e-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                onClick={toggleMenu}
                key={item}
                href="#"
                className="text-gray-300 font-medium py-2"
              >
                {item}
              </a>
            )
          )}
        </nav>
      

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="#">
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#">
              <FiTwitter className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#">
              <FiLinkedin className="h-5 w-5 text-gray-300" />
            </a>
          </div>
          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full px-4 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold"
          >
            Contact me
          </button>
        </div>
      </motion.div> */}
      {/* contact form */}
      {/* {contactFormIsOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div className="bg-gray-600 dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full  p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold  text-gray-300">
                Get in Touch
              </h2>
              <button onClick={() => closeContactForm()}>
                <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
              </button>
            </div>
      
            <ContactInputForm />
          </div>
        </motion.div>
      )} */}
      {contactFormIsOpen && (
        <ContactFormWrap
          titleContent="Get in Touch"
          closeContactForm={closeContactForm}
        >
          <ContactInputForm />
        </ContactFormWrap>
      )}
    </header>
  );
}
export default Header;
