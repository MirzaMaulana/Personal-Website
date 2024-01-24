import React, { ReactNode } from "react";

enum ColorProps {
  forest = "forest-green",
  moss = "moss-green",
  minty = "minty-fresh",
  pearl = "pearl-white",
}

enum RoundedProps {
  md,
  lg,
  full,
}

interface ButtonProps {
  border?: boolean;
  background?: keyof typeof ColorProps;
  borderColor?: keyof typeof ColorProps;
  rounded?: keyof typeof RoundedProps;
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  border,
  background,
  children,
  className,
  borderColor,
  rounded,
}) => {
  return (
    <button
      className={`px-5 py-3 outline-none ${
        rounded ? `rounded-${rounded}` : ""
      } ${background ? `bg-${ColorProps[background]}` : ""}  ${
        border ? "border-2" : ""
      } ${borderColor ? `border-${ColorProps[borderColor]}` : ""} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
