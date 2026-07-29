import React from "react";

function ImgCardBtn({ Icon, name, bg = "transparent", textColor, iconColor }) {
  const wrapperStyle = bg && bg !== "none" ? { backgroundColor: bg } : undefined;
  const textStyle = textColor ? { color: textColor } : undefined;
  const iconProps = iconColor || textColor ? { color: iconColor || textColor } : {};

  return (
    <div
      className="flex items-center gap-2 sm:gap-3 border w-fit px-3 sm:px-4 py-1.5 cursor-pointer border-zinc-200 rounded-lg shadow-sm text-xs sm:text-sm"
      style={wrapperStyle}
    >
      <Icon {...iconProps} />
      <span className="whitespace-nowrap" style={textStyle}>
        {name}
      </span>
    </div>
  );
}

export default ImgCardBtn;
