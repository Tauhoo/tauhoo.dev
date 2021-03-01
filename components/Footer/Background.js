import React from "react"
import colors from "../../config/colors"

export default function Background({ darkMode = false, style }) {
  return (
    <svg
      preserveAspectRatio="none"
      width="1440"
      height="114"
      viewBox="0 0 1440 114"
      fill="none"
      style={style}
    >
      <path
        d="M0 114H1440V23.3772C877 -7.7924 579 -7.7924 0 23.3772V114Z"
        fill={darkMode ? colors.black : colors.lightBlack}
        style={{ transition: "0.3s" }}
      />
    </svg>
  )
}
