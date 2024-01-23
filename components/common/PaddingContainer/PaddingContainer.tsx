import React, { ReactNode, FC } from "react";

interface PaddingContainerProps {
  children: ReactNode;
}

const PaddingContainer: FC<PaddingContainerProps> = ({ children }) => {
  return (
    <div className="max-w-screen-xl w-full md:px-36 m-auto px-8">
      {children}
    </div>
  );
};

export default PaddingContainer;
