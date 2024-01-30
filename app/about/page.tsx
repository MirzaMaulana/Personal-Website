import PaddingContainer from "@/components/common/PaddingContainer/PaddingContainer";
import React from "react";
import Profile from "@/assets/profile.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <PaddingContainer>
      <section className=" mt-16 justify-between sm:flex sm:items-center font-poppins">
        <div className="shadow-lg w-60 mx-auto rounded-lg md:order-2 md:w-2/6 md:mx-3 overflow-hidden">
          <Image src={Profile} alt="profile-image" />
        </div>
        <div className="mt-10 basis-1/2">
          <h1 className="font-bold text-2xl sm:mb-8 text-moss-green md:text-start md:text-4xl lg:text-5xl text-center my-6">
            Mirza Maulana Fauzian Risky
          </h1>
          <p className="text-forest-green mb-5 mt-2 font-poppins text-justify">
            I'm an 18-year-old Software Engineering student from SMK
            Muhammadiyah 1 Sukoharjo, Indonesia, born on January 15, 2006. I
            developed a passion for coding at 16, though I admit struggling with
            logic and algorithms. Beyond coding, I love Pop, Jazz, Rhythm and
            Blues, and Reggae music. MMORPGs are my go-to in gaming, and I
            occasionally enjoy anime. Adding humor to my online life, I spend
            time on Facebook sharing memes and enjoying shitposts.
          </p>
        </div>
      </section>
      <section className="my-8 mt-8 pt-10 text-center font-poppins">
        <p className="mb-4 text-forest-green">
          You can reach me out via email at{" "}
          <i className="text-blue-400 underline">mirzamaulana506@gmail.com</i>{" "}
          or via socials below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5">
          <button
            type="button"
            className="block w-full py-2.5 bg-blue-800 shadow text-white mt-2 font-mediums leading-tight uppercase rounded text-xs"
          >
            <Link href="https://web.facebook.com/profile.php?id=100058546485490">
              Facebook
            </Link>
          </button>

          <button
            type="button"
            className="block w-full py-2.5 bg-black text-white shadow mt-2 font-mediums leading-tight uppercase rounded text-xs"
          >
            <Link href="https://github.com/MirzaMaulana">Github</Link>
          </button>

          <button
            type="button"
            className="block w-full py-2.5 bg-purple-800 text-white shadow mt-2 font-mediums leading-tight uppercase rounded text-xs"
          >
            <Link href="https://www.instagram.com/mirzaa65_/">Instagram</Link>
          </button>
        </div>
      </section>
    </PaddingContainer>
  );
}
