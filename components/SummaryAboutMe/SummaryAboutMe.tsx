import React from "react";
import PaddingContainer from "../common/PaddingContainer/PaddingContainer";
import Link from "next/link";
import Button from "../common/Button/Button";
import Profile from "@/assets/profile.jpg";
import Image from "next/image";

type Props = {};

export default function SummaryAboutMe({}: Props) {
  return (
    <section className="bg-forest-green py-20 font-poppins">
      <PaddingContainer>
        <div className="flex flex-col md:flex-row gap-20 font-poppins items-center">
          <Image
            src={Profile}
            alt="profile-image"
            className="rounded md:basis-1/2 md:w-72 md:h-72 md:order-2"
          />
          <div>
            <h2 className="text-white">Hello World!</h2>
            <h1 className="text-lg mt-3 md:text-2xl text-white">
              My name is{" "}
              <b className="text-minty-fresh">Mirza Maulana Fauzian Risky</b>
            </h1>
            <p className="my-5 text-white">
              As a passionate software engineering student at SMK Muhammadiyah 1
              Sukoharjo, my focus is on web development. I&apos;ve been hooked
              on coding since the tender age of 16 and have since
              <br />
              dedicated myself to mastering the craft of creating dynamic and
              responsive web applications.
            </p>
            <Link href="/about">
              <Button
                background="minty"
                rounded="lg"
                className="text-forest-green"
              >
                More About
              </Button>
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </section>
  );
}
