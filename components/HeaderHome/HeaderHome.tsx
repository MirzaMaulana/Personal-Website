import React from "react";
import PaddingContainer from "../common/PaddingContainer/PaddingContainer";
import Link from "next/link";
import Button from "../common/Button/Button";

export default function HeaderHome() {
  return (
    <PaddingContainer>
      <section className="mt-20 font-poppins">
        <p className="text-forest-green font-poppins font-medium tracking-wider">
          Hi, Welcome I'm
        </p>
        <h1 className="font-poppins-bold text-moss-green my-5 text-4xl md:text-6xl ">
          Mirza Maulana
        </h1>
        <p className="my-4 text-md text-forest-green">
          I’m a Software Engineering Student,
          <br />
          focusing in Web Development.
        </p>
        <div className="flex gap-5 items-center">
          <Link href={"/contact"} className="font-semibold tracking-wide">
            <Button background={"moss"} className="text-white" rounded={"lg"}>
              Contact Me
            </Button>
          </Link>
          <Link
            href={"/portfolio"}
            className="flex items-center gap-2 text-forest-green"
          >
            View Portfolio{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
            </svg>
          </Link>
        </div>
      </section>
    </PaddingContainer>
  );
}
