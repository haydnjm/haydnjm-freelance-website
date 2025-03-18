const Carousel = ({ elements }: { elements: React.ReactNode[] }) => {
  const firstRowElements = elements.filter((_, index) => index % 2 === 0);
  const secondRowElements = elements.filter((_, index) => index % 2 === 1);

  return (
    <div className="w-full">
      <div
        className="overflow-x-auto pb-4 hide-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="w-full min-w-max">
          {/* First row with offset */}
          <div className="flex">{firstRowElements}</div>

          {/* Second row */}
          <div className="flex pl-[100px]">{secondRowElements}</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
