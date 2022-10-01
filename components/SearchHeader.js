import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value;
    if (!searchTerm) return;
    router.push(`/search?term=${searchTerm}&searchType=`);
  };

  return (
    <header className="sticky top-o bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          width="194"
          height="40"
          className="cursor-pointer"
          objectFit="cover"
          alt=""
          src="/images/not-google-logo.png"
        />
        <form
          className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
          onSubmit={search}
        >
          <input
            type="text"
            className="w-full focus:outline-none"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex  text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
        </form>
        <User styleClassName="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
