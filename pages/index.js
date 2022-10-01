/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const search = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    router.push(`/search?term=${searchTerm}&searchType=`);
  };

  const randomSearch = async (e) => {
    e.preventDefault();
    const randomWord = await fetch(
      "https://random-word-api.herokuapp.com/word"
    ).then((response) => response.json());
    router.push(`/search?term=${randomWord}&searchType=`);
  };

  return (
    <div>
      <Head>
        <title>Not Google</title>
        <meta name="description" content="Google clone build using Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center mt-40">
        <Image
          width={388}
          height={80}
          alt=""
          src="/images/not-google-logo.png"
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-300 px-5 hover:shadow-lg items-center rounded-full py-3 focus:shadow-lg sm:max-w-lg lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 mt-7  sm:space-x-4 sm:space-y-0">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button onClick={randomSearch} className="btn">
            I&apos;m feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
