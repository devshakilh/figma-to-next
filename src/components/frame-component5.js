import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent5 = ({
  className = "",
  websiteDesign,
  rectangleDivWidth,
  ellipseDivRight,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      width: rectangleDivWidth,
    };
  }, [rectangleDivWidth]);

  const ellipseDivStyle = useMemo(() => {
    return {
      right: ellipseDivRight,
    };
  }, [ellipseDivRight]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[18px] text-left text-5xl text-gray-50 font-nav-bar-text-21 ${className}`}
    >
      <div className="relative tracking-[0.03em] font-semibold mq450:text-lgi">
        {websiteDesign}
      </div>
      <div className="self-stretch h-3 relative rounded-md bg-whitesmoke-300">
        <div className="absolute top-[0px] left-[0px] rounded-md bg-whitesmoke-300 w-full h-full hidden" />
        <div
          className="absolute top-[0px] left-[0px] rounded-md bg-darkorange-100 w-[657px] h-3 z-[1]"
          style={rectangleDivStyle}
        />
        <div
          className="absolute top-[calc(50%_-_16px)] right-[84px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-300 border-darkorange-100 border-[0px] border-solid box-border w-8 h-8 z-[2]"
          style={ellipseDivStyle}
        />
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  websiteDesign: PropTypes.string,

  /** Style props */
  rectangleDivWidth: PropTypes.string,
  ellipseDivRight: PropTypes.string,
};

export default FrameComponent5;
