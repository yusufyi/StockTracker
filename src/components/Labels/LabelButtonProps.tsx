import React from "react";
interface LabelButtonPropsProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const LabelButtonProps: React.FC<LabelButtonPropsProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-50 text-black  m-4 px-4 py-2 rounded-full hover:bg-slate-200 ${className}`}
    >
      {label}
    </button>
  );
};

export default LabelButtonProps;
