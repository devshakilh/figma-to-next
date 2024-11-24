import { useCallback } from "react";
import PropTypes from "prop-types";

const Btn = ({ className = "" }) => {
  const onBtnClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='letsDesignTogether']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <button
      className={`cursor-pointer [border:none] pt-[17px] pb-[18px] pl-[53px] pr-[52px] bg-[transparent] h-[52px] w-[188px] flex flex-row items-start justify-start box-border relative ${className}`}
      onClick={onBtnClick}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs bg-darkorange-100 z-[0]" />
      <div className="h-[17px] w-[84px] relative text-2xl tracking-[0.03em] font-nav-bar-text-21 text-gray-50 text-justify inline-block shrink-0 z-[1]">{`Hire Me `}</div>
    </button>
  );
};

Btn.propTypes = {
  className: PropTypes.string,
};

export default Btn;
