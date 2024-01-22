import React, { ReactNode, FC } from "react";

interface PaddingContainerProps {
  children: ReactNode;
}

const PaddingContainer: FC<PaddingContainerProps> = ({ children }) => {
  return <div className="max-w-screen-xl w-full px-36 m-auto">{children}</div>;
};

export default PaddingContainer;
