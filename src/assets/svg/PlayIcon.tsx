import React from "react";

interface PlayButtonProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  onClick?: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({
  size = 80,
  color = "#222",
  strokeWidth = 7,
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {/* Círculo */}
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* Icono play */}
      <path
        d="M42 35L68 50L42 65V35Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayButton;