import Image from "next/image";
import PropTypes from "prop-types";
import { useCallback } from "react";
const Footer = ({ className = "" }) => {
  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='letsDesignTogether']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);



  return (
    <section
      className={`ml-[-5px]  bg-bg-gray flex flex-col items-center text-white justify-center pt-0 pb[552px] pl-[5px] pr-0 box-border gap-[62px] max-w-full text-left text-29xl mq450:pb-6 font-montserrat mq925:h-auto mq925:gap-[15px] mq925:pb[233px] mq925:box-border mq1350:gap-[31px] mq1350:pb-[359px] mq1350:box-border ${className}`}
    >

<div
        className="w-[932px] flex flex-col mq450:mt-16 lg:mt-[5px] -mt-[500px] mq450:mb-[130px] mb-[200px] items-start justify-start gap-12 max-w-full cursor-pointer mq925:gap-6"
        onClick={onFrameContainerClick}
      >
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[15px]"
          data-scroll-to="groupContainer"
        >
          <div className="flex flex-row items-start justify-start py-0 px-[103px] mq925:pl-[25px] mq925:pr-[25px] mq925:box-border mq1350:pl-[51px] mq1350:pr-[51px] mq1350:box-border">
            <h1
              className="m-0 relative text-inherit tracking-[0.03em] lg:text-center lg:ml-12 mq450:text-5xl mq450:mx-auto  font-semibold font-[inherit] mq925:text-33xl "
              data-scroll-to="letsDesignTogether"
            >
              Lets Design Together
            </h1>
          </div>
          <div className="h-[101px] mq450:mx-6 items-center text-center relative text-2xl tracking-[0.03em] inline-block shrink-0 mq450:text-mid">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus  netus in. Aliquet donec morbi convallis pretium
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[25px] max-w-full">
            <div className="flex-1 rounded-sm bg-whitesmoke-100 border-darkgray-300 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-5 px-[26px] pb-[19px] min-w-[179px] min-h-[75px] max-w-full">
              <div className="h-[75px] w-[627px] relative rounded-sm bg-whitesmoke-100 border-darkgray-300 border-[1px] border-solid box-border hidden max-w-full" />
              <input
                className="w-[179px] [border:none] [outline:none] font-nav-bar-text-21 text-2xl bg-[transparent] relative tracking-[0.03em] text-gray-600 text-center inline-block p-0 z-[1] mq450:text-mid"
                placeholder="Enter Your Email"
                type="text"
              />
            </div>
            <button className="cursor-pointer  [border:none] pt-5 px-9 pb-[19px] bg-darkorange-100 w-[222px] rounded-sm flex flex-row items-start justify-start box-border hover:bg-orangered">
              <div className="h-[75px] w-[222px] relative rounded-sm bg-darkorange-100 hidden" />
              <div className="flex-1 relative text-5xl tracking-[0.03em] font-semibold font-nav-bar-text-21 text-gray-50 text-center z-[1]">{`Contact Me `}</div>
            </button>
          </div>
        </div>
      </div>

      <div className="self-stretch h-[552px] relative bg-bg-gray hidden" />
      <div className="mt[-443px] w-[1909px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[779px] flex flex-col items-start justify-start gap-[90.5px] shrink-0 max-w-full mq925:gap-[45px] mq450:gap-[23px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[75px] mq925:gap-[37px] mq450:gap-[19px]">
            <div className="self-stretch flex flex-row items-center justify-center py-0 pl-5 pr-[22px]">
              <div className="flex flex-row items-start justify-start gap-5">
                <Image
                  className="h-[67px] w-[67px] mt-6  mq450:mt-0 relative z-[1]"
                  width={67}
                  height={67}
                  alt=""
                  src="/logo-nav.png"
                />
                <div className="flex flex-col items-start justify-start lg:mt-4 pt-[15.4px] px-0 pb-0">
                  <h1 className="m-0 h-[35.9px] relative text-white inline-block shrink-0 z-[1] font-[inherit] mq925:text-19xl mq450:text-10xl">
                    <b>M</b>
                    <span className='text-[44p] font-mono font-semibold text-gray-500'>{`umair `}</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="self-stretch mq450:my-6 mq450:px-4 flex flex-row items-start justify-between gap-5 text-2xl text-gray-50 font-nav-bar-text-21 mq925:flex-wrap">
              <div className="relative tracking-[0.03em] z-[1] mq450:text-mid">
                Home
              </div>
              <div className="relative tracking-[0.03em] z-[1] mq450:text-mid">
                About Me
              </div>
              <div className="relative tracking-[0.03em] z-[1] mq450:text-mid">
                Services
              </div>
              <div className="relative tracking-[0.03em] z-[1] mq450:text-mid">
                Projects
              </div>
              <div className="relative tracking-[0.03em] z-[1] mq450:text-mid">
                Testimonials
              </div>
              <div className="relative tracking-[0.03em] z-[1] mq450:text-mid">
                Contact
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 ">
            <div className="flex flex-row items-start justify-start gap-[25px]">
            <Image
                    className="h-[32.5px] w-[32.5px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={33}
                    height={33}
                    alt=""
                    src="/Facebook - Negative.png"
                  />
                  <Image
                    className="h-[32.5px] w-[32.5px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={33}
                    height={33}
                    alt=""
                    src="/Twitter - Negative.png"
                  />
                  <Image
                    className="h-[32.5px] w-[32.5px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={33}
                    height={33}
                    alt=""
                    src="/Instagram - Negative.png"
                  />
                  <Image
                    className="h-[32.5px] w-[32.5px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={33}
                    height={33}
                    alt=""
                    src="/LinkedIn - Negative.png"
                  />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 flex flex-row items-start justify-start lg:px-6 lg:mt-12 py-[26px] mq450:mt-6 mq450:px-3 px-[565px] box-border shrink-0 max-w-full z-[1] text-left text-2xl text-gray-50 font-nav-bar-text-21 mq925:pl-[183px] mq925pr-[183px] mq925:box-border mq1350:pl-[367px] mq1350:pr-[367px] mq1350:box-border">
        <div className="h-84px] w-[1921px] relative bg-gray-800 hidden max-w-full" />
        <div className="relative   tracking-[0.03em] z-[2] mq450:text-mid">
          <span>{`© 2023  `}</span>
          <b className="text-darkorange-100">{`Mumair `}</b>
          <span>All Rights Reserved , Inc.</span>
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
