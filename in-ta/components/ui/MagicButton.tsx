import React from 'react';

const MagicButton = ({
  title,
  icon,
  position,
  handleclick,
  otherclasses // Fixed the prop name
}: {
  title: string;
  icon?: React.ReactNode;
  position: string;
  handleclick?: () => void;
  otherclasses?: string; // Fixed the prop name
}) => {
  return (
    <button
      onClick={handleclick}
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[2px] focus:outline-none md:w-60 md:mt-10"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherclasses}`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
