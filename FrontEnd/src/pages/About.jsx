import React from "react";
import banner from "../assets/about-banner.png";
import about_img from "../assets/about-img.png";

const About = () => {
  return (
    <section className="font-Josefin">
      <div className="w-full h-[400px] bg-pink-50 relative flex items-end">
        <img
          src={banner}
          alt="about-us"
          className="z-10 h-[300px] object-cover"
        />
        <h2 className="absolute top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold underline z-0 text-6xl">
          About Us
        </h2>
      </div>
      <div className="w-full h-[600px] px-40 mt-20 grid lg:grid-cols-2">
        <div className="flex items-center justify-center w-full h-full">
          <img src={about_img} alt="about" className="h-[600px] object-cover" />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h3 className="font-semibold text-xl">
            Why can say we are your first choice?
          </h3>
          <p className="mt-6">
            People often discard clothing items when they are no longer in use.
            They buy clothing from malls, online retail stores, or regular
            neighborhood stores and later, when these clothes outgrow their
            utility, they throw them away or dump them in bins. This has even
            happened in the case of high cost clothing. People who can afford
            expensive fashion typically do not like to repeat their outfits.
            They move on to buy newer items barely after using current items on
            two or three occasions. The older ones are then just discarded. This
            causes burden on the planet because as the number of such discarded
            fashion (which is still in good condition, nevertheless) increases,
            the effort to dispose them also increases.
            <br /> These days, recycling, sustainability, and reuse are not just
            buzzwords, but actionable behaviors to support a better planet.
            Instead of discarding clothes that are still in good condition, but
            no longer required by the original buyers, these clothes can be sold
            as thrift fashion or pre-used clothing.
            <br /> In simple terms, shopping for thrift fashion is second hand
            purchases for fashionable clothing. <br /> This supports the theme
            of recycling and sustainability and is also affordable by many who
            could not purchase new fashionable clothing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
