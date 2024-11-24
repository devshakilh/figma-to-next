import { useCallback } from "react";
import Image from "next/image";
import Btn from "@/components/Btn";
import FrameComponent4 from "@/components/frame-componets4";
import FrameComponent5 from "@/components/frame-component5";


import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Projects from "@/components/Projects";

const LandingPage = () => {


  return (
    <div className="w-full  h[5600px] relative bg-bg-gray mx-auto items-center overflow-hidden flex flex-col items-start justify-start pt-[61px] px-0 pb-0 box-border gap-[139px] leading-[normal] tracking-[normal] mq925:gap-[35px] mq1350:h-auto mq1350:gap-[69px]">
      <section className="w-[1873px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-46xl text-gray-50 font-nav-bar-text-21">
        <div className="w-[1473px] flex flex-col items-end justify-start gap-[69.5px] max-w-full mq925:gap-[35px] mq450:gap-[17px]">
     

<Navbar/>

          <div className="w-[1446px] block_ flex flex-row items-start justify-end py-0 px-[23px] box-border max-w-full text-5xl">
            <div className="flex-1 flex flex-col items-end justify-start gap-[36.8px] max-w-full mq925:gap-[18px]">
              <div
                className="self-stretch flex flex-row items-end justify-start gap-[148px] max-w-full mq925:gap-[37px] mq450:gap-[18px] mq1350:gap-[74px] mq1350:flex-wrap"
                data-scroll-to="groupContainer2"
              >
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[25.2px] box-border min-w-[464px] max-w-full mq925:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-1.5 max-w-full">
                      <div className="flex flex-row items-start justify-start py-0 pl-[7px] pr-1.5">
                        <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[90px] mq450:text-lgi">{`Hi I am `}</div>
                      </div>
                      <div className="self-stretch block_ flex flex-col items-start justify-start max-w-full text-13xl text-darkorange-100">
                        <div className="flex flex-row items-start justify-start py-0 pl-1 pr-[3px] box-border max-w-full">
                          <h3 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] mq925:text-7xl mq450:text-lgi">{`Muhammad Umair `}</h3>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start max-w-full mt-[-13px] text-81xl text-gray-50">
                          <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[120%] font-bold font-[inherit] inline-block max-w-full mq925:text-31xl mq925:leading-[72px] mq450:text-11xl mq450:leading-[48px]">{`UI & UX`}</h1>
                          <div className="self-stretch flex flex-row items-start justify-end mt-[-25px]">
                            <h1 className="m-0 relative text-inherit tracking-[0.03em] leading-[120%] font-bold font-[inherit] mq925:text-31xl mq925:leading-[72px] mq450:text-11xl mq450:leading-[48px]">{`Designer `}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch block_ flex flex-row items-start justify-start py-0 pl-[7px] pr-[9px] box-border min-h-[101px] max-w-full text-justify text-2xl">
                      <div className="flex-1 relative tracking-[0.03em] inline-block max-w-full mq450:text-mid">
                        Lorem ipsum dolor sit amet consectetur. Tristique amet
                        sed massa nibh lectus netus in. Aliquet donec morbi
                        convallis pretium. Turpis tempus pharetra
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                      <Btn />
                    </div>
                  </div>
                </div>
                <div className="h-[617.2px] block_ relative min-w-[538px] max-w-full mq925:min-w-full mq1350:flex-1">
                  <Image
                    className="absolute top-[0px] left-[0px]  w-full h-full object-cover"
                    loading="lazy"
                    width={538}
                    height={617}
                    alt=""
                    src="/Group 2.png"
                  />
                  <div className="absolute top-[78px] left-[82px] bg-darkorange-200 w-[374px] h-[83px] z-[1]" />
                </div>
              </div>
              <div className="w-[559px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[25px]">
                  <Image
                    className="h-[32.5px] block_ w-[32.5px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={33}
                    height={33}
                    alt=""
                    src="/Facebook - Negative.png"
                  />
                  <Image
                    className="h-[32.5px] block_ w-[32.5px] relative overflow-hidden shrink-0"
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
                    className="h-[32.5px] block_ w-[32.5px] relative overflow-hidden shrink-0"
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
          <div className="self-stretch flex mq450:mt-20 flex-row items-start justify-end pt-0 pb-[69.5px] pl-0 pr-[3px] box-border max-w-full mq925:pb-[45px] mq925:box-border">
            <div
              className="flex-1 flex flex-row items-end justify-start gap-[33px] max-w-full mq925:gap-4 mq1350:flex-wrap"
              data-scroll-to="groupContainer1"
            >
              <div className="h-[675px] relative min-w-[681px] max-w-full mq925:min-w-full mq1350:flex-1">
                <Image
                  className="absolute top-[0px] block_ left-[0px] w-full h-full object-cover"
                  loading="lazy"
                  width={681}
                  height={675}
                  alt=""
                  src="/home-human-2.png"
                />
                <div className="absolute top-[111px] left-[153px] bg-darkorange-200 w-[374px] h-[83px] z-[3]" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[42px] box-border min-w-[491px] min-h-[620px] max-w-full mq925:pb-[27px] mq925:box-border mq925:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
                  <h1 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] inline-block max-w-full mq925:text-33xl mq450:text-20xl">{`About Me `}</h1>
                  <div className="relative text-2xl block_ tracking-[0.03em] mq450:text-mid">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium. Turpis tempus pharetra
                  </div>
                  <div className="self-stretch flex block_ flex-col items-start justify-start gap-[15px] max-w-full">
                    <FrameComponent4 uX="UX" />
                    <FrameComponent5 websiteDesign="Website Design" />
                    <FrameComponent5
                      websiteDesign="App Design "
                      rectangleDivWidth="721px"
                      ellipseDivRight="20px"
                    />
                    <FrameComponent4 uX="Graphic Design " />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex   flex-row  items-start justify-end pt-0 px-2.5 pb-[69.5px] box-border max-w-full text-center mq925:pb-[45px] mq925:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-6 max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[23px] box-border max-w-full">
                <div className="w-[932px] flex flex-col items-start justify-start gap-[15px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-[319px] mq925:pl-[79px] mq925:pr-[79px] mq925:box-border mq1350:pl-[159px] mq1350:pr-[159px] mq1350:box-border">
                    <h1
                      className="m-0 relative text-inherit block_ tracking-[0.03em] font-semibold font-[inherit] mq925:text-33xl mq450:text-20xl"
                      data-scroll-to="servicesText"
                    >
                      Services
                    </h1>
                  </div>
                  <div className="h-[101px] mq450:j relative block_ text-2xl tracking-[0.03em] inline-block shrink-0 mq450:text-mid">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium
                  </div>
                </div>
              </div>
              <div className="self-stretch mq450:mt-24 flex flex-row items-start justify-center flex-wrap content-start gap-[31px] max-w-full text-left text-13xl text-black mq925:gap-[15px]">
                <div className="flex-1 rounded-sm bg-whitesmoke-100 flex flex-col items-start justify-start pt-[57px] px-[18px] pb-2.5 box-border gap-[26px] min-w-[304px] max-w-full text-center">
                  <div className="w-[330px] h-[346px] relative rounded-sm bg-whitesmoke-100 hidden max-w-full" />
                  <div className="w-[70px] h-[70px] flex flex-row items-start justify-start relative">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                      <Image
                        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                        width={70}
                        height={70}
                        alt=""
                        src="/vector.svg"
                      />
                      <Image
                        className="absolute top-[23.8px] left-[56.3px] w-[2.7px] h-[2.7px] z-[2]"
                        width={3}
                        height={3}
                        alt=""
                        src="/vector-1.svg"
                      />
                      <Image
                        className="absolute top-[20.5px] left-[6.6px] w-[12.3px] h-[9.3px] z-[2]"
                        width={12}
                        height={9}
                        alt=""
                        src="/web-desing-icon.png"
                      />
                      <Image
                        className="absolute top-[20.5px] left-[22.7px] w-[16.9px] h-[2.7px] z-[2]"
                        width={17}
                        height={3}
                        alt=""
                        src="/vector-3.svg"
                      />
                      <Image
                        className="absolute top-[27.1px] left-[22.7px] w-[16.9px] h-[2.7px] z-[2]"
                        width={17}
                        height={3}
                        alt=""
                        src="/vector-4.svg"
                      />
                      <Image
                        className="absolute top-[46.8px] left-[30.3px] w-[12.3px] h-[9.3px] z-[2]"
                        width={12}
                        height={9}
                        alt=""
                        src="/vector-5.svg"
                      />
                      <Image
                        className="absolute top-[46.8px] left-[46.5px] w-[16.9px] h-[2.7px] z-[2]"
                        width={17}
                        height={3}
                        alt=""
                        src="/vector-6.svg"
                      />
                      <Image
                        className="absolute top-[53.3px] left-[46.5px] w-[16.9px] h-[2.7px] z-[2]"
                        width={17}
                        height={3}
                        alt=""
                        src="/vector-7.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                    <h3 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] z-[1] mq925:text-7xl mq450:text-lgi">
                      UI/UX
                    </h3>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 text-left text-lgi">
                      <div className="h-[120px] flex-1 relative tracking-[0.03em] inline-block z-[1]">
                        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
                        nam diam interdum
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-sm bg-whitesmoke-100 flex flex-col items-start justify-start pt-[54px] px-[18px] pb-2.5 box-border gap-4 min-w-[304px] max-w-full">
                  <div className="w-[330px] h-[346px] relative rounded-sm bg-whitesmoke-100 hidden max-w-full" />
                  <Image
                    className="w-[72px] h-[82px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    width={72}
                    height={82}
                    alt=""
                    src="/web-desing-icon.png"
                  />
                  <h3 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] z-[1] mq925:text-7xl mq450:text-lgi">{`Web Design `}</h3>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 text-lgi">
                    <div className="h-[120px] flex-1 relative tracking-[0.03em] inline-block z-[1]">
                      Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
                      nam diam interdum
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-sm bg-whitesmoke-100 flex flex-col items-start justify-start pt-[51px] px-[18px] pb-2.5 box-border gap-[19.5px] min-w-[304px] max-w-full">
                  <div className="w-[330px] h-[346px] relative rounded-sm bg-whitesmoke-100 hidden max-w-full" />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <Image
                      className="h-[82.5px] w-[47px] relative z-[1]"
                      loading="lazy"
                      width={47}
                      height={83}
                      alt=""
                      src="/app-desing-icon.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                    <h3 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] z-[1] mq925:text-7xl mq450:text-lgi">
                      App Design
                    </h3>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 text-lgi">
                      <div className="h-[120px] flex-1 relative tracking-[0.03em] inline-block z-[1]">
                        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
                        nam diam interdum
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-sm bg-whitesmoke-100 flex flex-col items-start justify-start pt-[57px] px-[18px] pb-2.5 box-border gap-[26px] min-w-[304px] max-w-full">
                  <div className="w-[330px] h-[346px] relative rounded-sm bg-whitesmoke-100 hidden max-w-full" />
                  <div className="w-[82px] h-[70px] flex flex-row items-start justify-start relative">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                      <Image
                        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                        width={82}
                        height={70}
                        alt=""
                        src="/grapic-desing-icon.png"
                      />
                      <Image
                        className="absolute top-[6.8px] left-[19.6px] w-[9.7px] h-[10.2px] z-[2]"
                        width={10}
                        height={10}
                        alt=""
                        src="/vector-9.svg"
                      />
                      <Image
                        className="absolute top-[6.8px] left-[6.6px] w-[9.7px] h-[10.2px] z-[2]"
                        width={10}
                        height={10}
                        alt=""
                        src="/vector-10.svg"
                      />
                      <Image
                        className="absolute top-[6.8px] left-[32.7px] w-[9.7px] h-[10.2px] z-[2]"
                        width={10}
                        height={10}
                        alt=""
                        src="/vector-11.svg"
                      />
                      <Image
                        className="absolute top-[36.3px] left-[39.4px] w-[3.2px] h-[3.4px] z-[2]"
                        width={3}
                        height={3}
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                    <h3 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] z-[1] mq925:text-7xl mq450:text-lgi">{`Graphic Design `}</h3>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 text-lgi">
                      <div className="h-[120px] flex-1 relative tracking-[0.03em] inline-block z-[1]">
                        Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
                        nam diam interdum
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      <Projects/>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
