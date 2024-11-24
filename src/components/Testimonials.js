import { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slides = ["/testi.png", "/testi.png", "/testi.png"]; // Add more images if needed

  // Handle auto slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // 3 seconds for auto slide

    return () => clearInterval(slideInterval); // Clean up interval on unmount
  }, []);

  // Handle progress bar update
  useEffect(() => {
    setProgress((activeSlide + 1) * (100 / slides.length)); // Update progress based on active slide
  }, [activeSlide]);

  return (
    <section
      className={`self-stretch items-center flex flex-col justify-center pt-12 pb-[552px] box-border gap-[139px] max-w-full text-center text-46xl text-gray-50 font-nav-bar-text-21 mq925:gap-[35px] mq925:pl113px] mq925:pr[113px] mq925:pb-[233px] mq925:box-border mq450:pb-[151px] mq450:box-border mq1350:gap-[69px] mq1350:pl[226px] mq1350:pr[226px] mq1350:pb-[359px] mq1350:box-border ${className}`}
    >
      <div
        className="flex flex-co items-center justify-center py-0 box-border gap-[87px] max-w-[334%] mq925:gap-[22px] mq925:box-border mq1350:gap-[43px] mq1350:box-border"
        data-scroll-to="testimonialsContentContainer"
      >
        <div className="self-stretch flex flex-col items-center justify-center gap-[72px] max-w-full mq925:gap-[18px] mq1350:gap-9">
          <div className="self-stretch flex flex-row items-center justify-center py-0 pl-5 pr-7 box-border max-w-full">
            <div className="w-[932px] flex flex-col items-center justify-center gap-[15px] max-w-full">
              <div className="flex flex-row items-center justify-center text-center py-0 px[242px] mq925:pl-[60px] mq925:pr-[60px] mq925:box-border mq1350:pl-[121px] mq1350:pr-[121px] mq1350:box-border">
                <h1 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] mq925:text-33xl mq450:text-20xl">
                  Testimonials
                </h1>
              </div>
              <div className="h-[101px] px-1 mq450:px-[279px] mq450:text-[20px] mq450:mb-12 text-center items-center justify-center relative text-2xl tracking-[0.03em] inline-block shrink-0 ">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="self-stretch flex flex-row  items-start justify-start py-0 px-[392px] box-border gap-[62px] max-w-full text-justify text-13xl text-darkorange-100 mq925:gap-[15px] mq925:pl-[98px] mq925:pr-[98px] mq925:box-border mq1350:gap-[31px] mq1350:pl-[196px] mq1350:pr-[196px] mq1350:box-border mq1825:flex-wrap mq1825:justify-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`w-[1087px] mq450:w-[400px] rounded-sm bg-whitesmoke-100 flex flex-row items-start justify-start pt-[55px] px-12 pb-[53px] box-border shrink-0 [row-gap:20px] max-w-full mq1350:flex-wrap mq1350:pl-6 mq1350:pr-6 mq1350:box-border ${
                  index === activeSlide ? "opacity-100" : "opacity-50 pointer-events-none"
                }`}
              >
                <div className="h-[344px]  w-[1087px] relative rounded-sm bg-whitesmoke-100 hidden max-w-full" />
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[11px]">
                  <Image
                    className="w-[235px] h-[235px] mq450:w-[150px] mq450:h-[150px] relative rounded-[50%] object-cover z-[1]"
                    loading="lazy"
                    width={235}
                    height={235}
                    alt=""
                    src={slide}
                  />
                </div>
                <h3 className="m-0 relative text-inherit tracking-[0.02em] font-bold font-[inherit] z-[1] mq925:text-7xl mq450:text-lgi">“</h3>
                <div className="w-[698px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border max-w-full text-2xl text-darkslategray-400">
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-col items-end justify-start max-w-full">
                      <div className="h-[146px]  relative mq450:tracking-[0] tracking-[0.02em] inline-block shrink-0 z-[1] mq450:text-mid">
                      Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[-8px] mq450:mt-4 text-5xl text-black">
                      <div className="relative tracking-[0.02em] font-medium z-[1] mq450:text-lgi">Name</div>
                      <div className="relative text-lgi tracking-[0.02em] z-[1]">CEO</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="self-stretch flex flex-row items-start justify-center py-0">
        <div className="w-[255px] flex flex-row items-start justify-start gap-[9px]">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-4 flex-1 relative rounded-lg ${
                index === activeSlide ? "bg-darkorange-100" : "bg-gainsboro-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
