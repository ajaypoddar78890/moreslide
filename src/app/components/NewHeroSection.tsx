import React from "react";
import Link from "next/link";
import FlipWordsDemo from "../components/newhero";

const NewHeroSection = () => {
  return (
    <div className="container  h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      <div className=" container mt-28 p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Present better Always
        </h1>
        <p className=" mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg  mx-auto">
          MoreSlides is a creative agency that helps brands to develop and
          deliver unique and memorable presentations, trainings and pitches.
        </p>
        <Link className=" p-5 " href="#">
          Explore
        </Link>
      </div>

      <FlipWordsDemo />
    </div>
  );
};

export default NewHeroSection;
