import React from "react";

interface HorizontalWrapperProps {
  children: React.ReactNode;
  className?: String;
}

const HorizontalWrapper: React.FC<HorizontalWrapperProps> = (props) => {
  const { children, className } = props;

  return (
    <div className={`px-6 md:max-w-5xl md:mx-auto xl:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default HorizontalWrapper;
