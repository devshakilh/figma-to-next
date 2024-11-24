import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "", uX }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-2 max-w-full text-left text-5xl text-gray-50 font-nav-bar-text-21 ${className}`}
    >
      <div className="relative tracking-[0.03em] font-semibold mq450:text-lgi">
        {uX}
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="h-8 flex-1 relative max-w-full">
          <div className="absolute top-[10px] left-[0px] rounded-md bg-whitesmoke-300 w-[753px] h-3" />
          <div className="absolute top-[10px] left-[0px] rounded-md bg-darkorange-100 mq450:w-[243px] w-[687px] h-3 z-[1]" />
          <div className="absolute top-[0px] left-[669px] shadow-[0px_4px_7px_rgba(0,_0,_0,_0.2)] rounded-[50%] bg-whitesmoke-300 border-darkorange-100 border-[0px] border-solid box-border w-8 h-8 z-[2]" />
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  uX: PropTypes.string,
};

export default FrameComponent4;
