import React from "react";
import ImageResultItem from "./ImageResultItem";
import PaginationButtons from "./PaginationButtons";

const ImageResults = ({ results }) => {
  return (
    <div className="mt-4 sm:pl-[5%] md:pl-[15%] lg:pl-52">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items.map((result) => {
          return <ImageResultItem result={result} key={result.link} />;
        })}
      </div>
      <PaginationButtons />
    </div>
  );
};

export default ImageResults;
