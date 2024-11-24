


import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";


const projectsData = [
  { id: 1, category: "Web Design", title: "AirCalling Landing Page Design", images: ["/project-web-.png", "/project-web-design.png"] },
  { id: 2, category: "Web Design", title: "Business Landing Page Design", images: ["/web-designs-2@2x.png", "/web-designs-3@2x.png"] },
  { id: 3, category: "Web Design", title: "Ecom Web Page Design", images: ["/web-designs-4@2x.png", "/web-designs-5@2x.png"] },

];

const Projects = ({ className = "" }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web Design", "UI/UX", "App Design", "Graphic Design"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (



     <div
      className={`w-[1423px] flex flex-col items-start justify-start gap-[106px] max-w-full text-center text-5xl text-black font-nav-bar-text-21 mq925:gap-[53px] mq450:gap-[26px] ${className}`}
      data-scroll-to="frameContainer"
    >
  <div className="self-stretch text-white flex flex-row items-start justify-center py-0 pl-5 pr-[23px] box-border max-w-full">
                <div className="w-[932px] flex flex-col items-start justify-start gap-[15px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 pl-[261px] pr-[260px] mq925:pl-[130px] mq925:pr-[130px] mq925:box-border mq450:pl-[65px] mq450:pr-[5px] mq450:box-border">
                    <h1
                      className="m-0 relative text-inherit lg:text-center lg:ml-[62px] mq925:-ml-5 text-[63px] tracking-[0.03em] font-semibold font-[inherit] mq925:text-33xl mq450:text-20xl"
                      data-scroll-to="servicesText"
                    >
                      My Projects
                    </h1>
                  </div>
                  <div className="h-[101px] relative text-2xl tracking-[0.03em] inline-block shrink-0 mq450:text-mid">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus in. Aliquet donec morbi convallis
                    pretium
                  </div>
                </div>
              </div>


      {/* Category Filter */}
      <div className="flex flex-row items-start  mq450:mt-12 justify-center gap-[17px] max-w-full text-center text-5xl text-black mq925:flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`cursor-pointer border-dimgray-300 font-Poppins tracking-[0.03em] text-[24px] border-[0.4px] inline-block  shrink-0 border-solid py-[9px] px-5 h-14 rounded-xl box-border ${
              activeCategory === category
                ? "bg-darkorange-100 text-gray-50"
                : "bg-whitesmoke-100 text-black"
            } hover:bg-orangered hover:border-gray-500 hover:text-white`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Display */}
      <div className="self-stretch flex flex-row items-start justify-center mq450:px-6 flex-wrap content-start gap-11 max-w-full text-left text-lgi text-darkorange-100 mq925:gap-[22px]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex-1 flex flex-col items-start justify-start gap-[37px] min-w-[334px] max-w-full mq450:gap-[18px]"
            >
              <div className="self-stretch rounded-xl bg-antiquewhite flex flex-row items-start justify-start py-0 pl-[39px] pr-[27px] box-border max-w-full">
                <div className="h-[489px] flex-1 relative max-w-full">
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[105px] max-h-full w-[274px] object-cover z-[1]"
                    loading="lazy"
                    width={274}
                    height={489}
                    alt=""
                     data-aos="fade-down"
                    src={project.images[0]}
                  />
                  <Image
                    className="absolute top-[84px] left-[0px] w-[274px] h-[405px] object-contain z-[2]"
                    width={274}
                    height={405}
                    alt=""
                    src={project.images[1]}
                     data-aos="fade-down"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2.5 max-w-full">
                <div className="relative tracking-[0.03em]">{project.category}</div>
                <b className="relative text-5xl tracking-[0.03em] text-gray-50 mq450:text-lgi">
                  {project.title}
                </b>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-5xl text-gray-500 mq450:mt-20">Not Found</div>
        )}
      </div>
    </div>

  );
};

Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;
