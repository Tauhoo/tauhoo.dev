import React from "react"
import colors from "../../config/colors"

export default function Background({ darkMode = false, style }) {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 1440 115"
      fill="none"
      style={style}
    >
      <path
        d="M0 0H1440V91.4177C877 122.861 579 122.861 0 91.4177V0Z"
        fill={darkMode ? colors.black : colors.lightBlack}
        style={{ transition: "0.3s" }}
      />
    </svg>
  )
}
