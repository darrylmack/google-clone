import React from "react";
import PaginationButtons from "./PaginationButtons";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ results }) => {
  if (!results) return <div>No Results</div>;

  if (results) {
    return (
      <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[15%] lg:pl-52">
        <p className="text-gray-600 text-sm mt-3 mb-5 ">
          About {results.searchInformation.formattedTotalResults} results(
          {results.searchInformation.formattedSearchTime} seconds)
        </p>
        {results.items.map((result) => (
          <SearchResultItem key={result.link} result={result} />
        ))}
        <PaginationButtons />
      </div>
    );
  }
};

export default SearchResults;
