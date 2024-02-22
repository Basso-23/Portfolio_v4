import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion as m, AnimatePresence } from "framer-motion";
import { projects_en } from "@/json/projects_en";
import { projects_es } from "@/json/projects_es";
import { Link, animateScroll as scroll } from "react-scroll";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "copy-text-to-clipboard";
import { Slant as Hamburger } from "hamburger-react";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const Inicio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(true);
  const [filtered, setFiltered] = useState(projects_es);
  const [copyText, setCopyText] = useState("Correo electrónico copiado");
  const [pageTitle, setPageTitle] = useState("Portafolio - Carlos Baso");
  const [mtPixels, setMtPixels] = useState("mt-[115px]");
  const [resume, setResume] = useState(
    "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view"
  );

  {
    /* Notificacion correo copiado */
  }
  const notify = () => {
    toast.success(copyText, {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
    copy("carlos.baso23@gmail.com");
  };

  {
    /* Notificacion correo copiado (mobile */
  }
  const notify_mobile = () => {
    toast.success(copyText, {
      position: "bottom-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
    copy("carlos.baso23@gmail.com");
  };

  {
    /* Variables de cambio de idioma */
  }
  useEffect(() => {
    if (language) {
      setFiltered(projects_es);
      setCopyText("Correo electrónico copiado");
      setPageTitle("Portafolio - Carlos Baso");
      setResume(
        "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view"
      );
      setMtPixels("mt-[115px]");
    } else {
      setFiltered(projects_en);
      setCopyText("Email copied");
      setPageTitle("Portfolio - Carlos Baso");
      setResume(
        "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view"
      );
      setMtPixels("mt-[160px]");
    }
  }, [language]);

  {
    /* Scroll inicio de la pagina */
  }
  const refresh = () => {
    window.scrollTo(0, 0);
  };

  {
    /* Para el boton de scroll to top de abajo a la derecha */
  }
  const [setscroll, setScroll] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollTopButton = () => {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollTopButton);
  }

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Portafolio - Carlos Baso Ing. de Software, JavaScript, React JS, Next JS. ¡Echa un vistazo a mis proyectos!"
        />
      </Head>

      <main className="min-h-screen  max-w-[1500px] px-3 sm:px-8 mx-auto pt-10 sm:pt-[65px]">
        {/* Navbar container--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section className=" flex justify-between items-center relative ">
          <Navbar
            language={language}
            setLanguage={setLanguage}
            notify={notify}
            refresh={refresh}
            resume={resume}
          />

          {/* Menu icon */}
          <div className="lg:hidden flex">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={35} />
          </div>

          <Menu
            language={language}
            setLanguage={setLanguage}
            notify_mobile={notify_mobile}
            refresh={refresh}
            resume={resume}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </section>

        {/* Title container--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section>
          {/* Container de la notificacion de correo copiado */}
          <div className="text-[18px] w-10">
            <ToastContainer />
          </div>
          {/* Title */}
          <div className=" roboto-500 max-w-[1000px] text-[30px] sm:text-[55px] mt-10 sm:mt-[80px] sm:leading-[73px] leading-[45px]">
            {language ? (
              <div>
                ¡Bienvenido a mi portafolio de proyectos! Aquí encontrarás una
                muestra de mi trabajo.
              </div>
            ) : (
              <div className="sm:max-w-[900px]">
                Welcome to my project portfolio! Here you&apos;ll find a sample
                of my work.
              </div>
            )}
          </div>
        </section>

        {/* Tipos de trabajos--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section>
          <div className=" hidden sm:flex mt-10 sm:mt-[66px] sm:gap-5 gap-4 text-[17px] sm:text-[19px] sm:justify-start justify-center text-[#3b3b3b]">
            {language ? <div>Proyectos</div> : <div>Projects</div>}
            <div>/</div>
            {language ? <div>Diseños</div> : <div>Designs</div>}
            <div>/</div>
            {language ? <div>Sitios Web</div> : <div>Websites</div>}
            <div>/</div>
            {language ? <div>Desarrollo</div> : <div>Development</div>}
          </div>
        </section>

        {/* Projects container--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <section>
          {/* Projects */}
          <div
            className={
              isOpen
                ? `grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-9 sm:mt-[30px] ${mtPixels} transition-all duration-500`
                : `grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-9 sm:mt-[30px] mt-[30px] transition-all duration-500`
            }
          >
            {filtered
              .map((item) => (
                <div
                  key={item.id}
                  className={`${item.image} w-full h-[350px] sm:h-[500px] lg:h-[400px] border-[1px] border-[#e2e2e2] relative`}
                >
                  <div className="focus w-full h-full relative">
                    <a
                      target="_blank"
                      href={item.url}
                      className="w-full h-full z-50 absolute"
                    ></a>
                  </div>
                  <div className="focus-content sm:flex hidden justify-center flex-col gap-1 pl-10 tracking-wide">
                    <div className="text-[22px] roboto-light">{item.title}</div>
                    <div className="text-[16px] text-[#b0b0b0]">
                      {item.category}
                    </div>
                  </div>
                </div>
              ))
              .reverse()}
          </div>
        </section>
      </main>

      {/* Separador entre main y footer--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="bg-[#ededed] h-[1px] w-full sm:mt-32 mt-20"></section>

      {/* Footer--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <Footer
        language={language}
        setLanguage={setLanguage}
        notify={notify}
        refresh={refresh}
        resume={resume}
      />

      {/* Boton de scroll to top */}
      <AnimatePresence>
        {setscroll && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
            }}
            onClick={() => {
              scrollToTop();
            }}
            className="sm:w-[50px] sm:h-[50px]  w-[48px] h-[48px] fixed sm:bottom-4  sm:right-3 bottom-2 right-2 bg-black sm:text-[25px] text-[23px] z-[60] text-white flex justify-center items-center cursor-pointer"
          >
            <IoIosArrowUp />
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Inicio;