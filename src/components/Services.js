import Image from 'next/image'
import React from 'react'

function Services() {
    return (
        <div>
             <div className="flex block_ flex-row items-start justify-end pt-0 px-2.5 pb-[69.5px] box-border max-w-full text-center mq925:pb-[45px] mq925:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-6 max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[23px] box-border max-w-full">
                <div className="w-[932px] flex flex-col items-start justify-start gap-[15px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-[319px] mq925:pl-[79px] mq925:pr-[79px] mq925:box-border mq1350:pl-[159px] mq1350:pr-[159px] mq1350:box-border">
                    <h1
                      className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-[inherit] mq925:text-33xl mq450:text-20xl"
                      data-scroll-to="servicesText"
                    >
                      Services
                    </h1>
                  </div>
                  <div className="h-[101px] relative text-2xl tracking-[0.03em] inline-block shrink-0 mq450:text-mid">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[31px] max-w-full text-left text-13xl text-black mq925:gap-[15px]">
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
    )
}

export default Services
