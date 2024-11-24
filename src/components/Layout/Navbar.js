import React, { useState, useCallback} from 'react';
import Image from 'next/image';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };


    const onImageContainerClick = useCallback(() => {
      const anchor = document.querySelector("[data-scroll-to='groupContainer2']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }, []);
  
    const onSliderContainerClick = useCallback(() => {
      const anchor = document.querySelector("[data-scroll-to='groupContainer1']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }, []);
  
    const onServicesTextClick = useCallback(() => {
      const anchor = document.querySelector("[data-scroll-to='servicesText']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }, []);
  
    const onProjectsTestimonialsParentClick = useCallback(() => {
      const anchor = document.querySelector("[data-scroll-to='frameContainer']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }, []);
  
    const onProjectsTestimonialsParentClick1 = useCallback(() => {
      const anchor = document.querySelector(
        "[data-scroll-to='testimonialsContentContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }, []);
  
    const onFrameContainerClick = useCallback(() => {
      const anchor = document.querySelector("[data-scroll-to='groupContainer']");
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }, []);


    return (
        <div>

 <header className="w-[1426px] mq925:hidden mq450:hidden flex flex-row items-start justify-end pt-0 px-[3px] pb-[50.5px] box-border max-w-full text-left text-29xl text-bg-gray font-montserrat">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5">
              <div className="flex flex-row items-start justify-start gap-5">
                <Image
                  className="h-[67px] w-[67px] relative"
                  loading="lazy"
                  width={67}
                  height={67}
                  alt=""
                  src="/logo-nav.png"
                />
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <a className="[text-decoration:none] relative text-white">
                    <b>M</b>
                    <span>{`umair `}</span>
                  </a>
                </div>
              </div>
              <div className="w-[1019px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full text-2xl text-gray-50 font-nav-bar-text-21">
                <div className="self-stretch flex flex-row items-start justify-start gap-[26px] max-w-full">
                  <div className="flex flex-row items-start justify-start gap-3 mq1350:hidden">
                    <div
                      className="flex flex-row items-start justify-start py-2.5 pl-3.5 pr-[13px] cursor-pointer"
                      onClick={onImageContainerClick}
                    >
                      <a className="[text-decoration:none] relative tracking-[0.03em] text-[inherit]">
                        Home
                      </a>
                    </div>
                    <div
                      className="flex flex-row items-start justify-start py-2.5 pl-3.5 pr-[13px] cursor-pointer"
                      onClick={onSliderContainerClick}
                    >
                      <a className="[text-decoration:none] relative tracking-[0.03em] text-[inherit]">
                        About Me
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <a
                      className="[text-decoration:none] relative tracking-[0.03em] text-[inherit] cursor-pointer"
                      onClick={onServicesTextClick}
                    >
                      Services
                    </a>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-3 max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start gap-3 mq925:hidden">
                      <div
                        className="flex flex-row items-start justify-start py-2.5 pl-3.5 pr-[13px] cursor-pointer"
                        onClick={onProjectsTestimonialsParentClick}
                      >
                        <a className="[text-decoration:none] relative tracking-[0.03em] text-[inherit]">
                          Projects
                        </a>
                      </div>
                      <div
                        className="flex-1 flex flex-row items-start justify-start py-2.5 pl-3.5 pr-[13px] cursor-pointer text-snow"
                        onClick={onProjectsTestimonialsParentClick1}
                      >
                        <a className="[text-decoration:none] relative tracking-[0.03em] text-[inherit]">
                          Testimonials
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-3">
                      <div
                        className="flex flex-row items-start justify-start py-2.5 pl-3.5 pr-[13px] cursor-pointer"
                        onClick={onFrameContainerClick}
                      >
                        <a className="[text-decoration:none] relative tracking-[0.03em] text-[inherit]">
                          Contact
                        </a>
                      </div>
                    </div>
                    <div className="rounded-8xs bg-darkorange-100 flex flex-row items-start  justify-start  pt-[17px] px-[18px] pb-[18px] text-justify">
                      <div className="h-[52px] w-[188px] relative rounded-8xs bg-darkorange-100 hidden" />
                      <a className="[text-decoration:none] h-[17px]  relative tracking-[0.03em] text-[inherit] inline-block z-[1]">
                        Downlaod CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header> 

            <header className="flex flex-col hidden  mq450:flex mq925:flex items-start justify-between  max-w-full bg-bg-gray">
                <div className="flex flex-row gap-[176px] -mt-6 mb-16 items-center justify-between w-full md:w-auto">
                    <div className="flex items-center gap-5">
                        <Image
                            className="h-[50px] w-[50px] relative"
                            loading="lazy"
                            width={67}
                            height={67}
                            alt="Logo"
                            src="/logo-nav.png"
                        />
                        <div className="flex flex-col items-start">
                            <a className="text-white text-xl">
                                <b>M</b>
                                <span>{`umair `}</span>
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden cursor-pointer text-[29px]" onClick={toggleMenu}>
                        {/* Mobile Menu Icon */}
                        <span className="text-white">{isOpen ? '✖' : '☰'}</span>
                    </div>
                </div>
                {isOpen && (
                    <nav className="flex flex-col items-start justify-start text-2xl mb-[70px] md:hidden">
                        <a className="text-gray-50 hover:text-white cursor-pointer" onClick={closeMenu}>Home</a>
                        <a className="text-gray-50 hover:text-white cursor-pointer py-2" onClick={closeMenu}>About Me</a>
                        <a className="text-gray-50 hover:text-white cursor-pointer" onClick={closeMenu}>Services</a>
                        <a className="text-gray-50 hover:text-white cursor-pointer py-2" onClick={closeMenu}>Projects</a>
                        <a className="text-gray-50 hover:text-white cursor-pointer" onClick={closeMenu}>Testimonials</a>
                        <a className="text-gray-50 hover:text-white cursor-pointer py-2 mb-3" onClick={closeMenu}>Contact</a>
                        <a className="rounded-8xs bg-darkorange-100 py-2 px-4 text-gray-50 hover:text-white cursor-pointer" onClick={closeMenu}>
                            Download CV
                        </a>
                    </nav>
                )}
            </header>
        </div>
    );
}

export default Navbar;