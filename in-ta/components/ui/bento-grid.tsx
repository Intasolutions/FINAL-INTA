import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[9rem] grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
      style={{
        background: 'rgb(0,0,0)',
        backgroundColor: 'linear-gradient(0deg, rgba(57,69,74,1) 0%, rgba(14,28,42,1) 72%)'
      }}
    >

      {/* 🖼️ IMAGE BLOCK */}
      {img && (
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={img}
            alt="grid-item-image"
            className={cn(
              imgClassName,
              'object-cover object-center w-full h-full opacity-100 group-hover/bento:opacity-80 transition duration-300'
            )}
          />
        </div>
        
      )}
       {spareImg && (
        <div className="absolute bottom-2 right-2 rounded">
          <img
            src={spareImg}
            alt="spare-img"
            className="w-112 h-20 opacity-50 rounded-lg "
          />
        </div>
      )}

      {/* ✨ CONTENT BLOCK */}
      <div className="relative z-10 flex flex-col justify-center h-full">
        <div
          className={cn(
            'font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 ',
            titleClassName
          )}
        >
          {title}
        </div>

        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>

    
     
    </div>
  );
};
