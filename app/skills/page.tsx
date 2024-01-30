import PaddingContainer from "@/components/common/PaddingContainer/PaddingContainer";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <PaddingContainer>
      <section className="font-poppins text-center my-16 text-forest-green">
        <p className="text-md">Why Choose Me ?</p>
        <h1 className="text-4xl font-bold">My Expertise Area</h1>
      </section>
      <section className="md:max-w-6xl md:m-auto">
        <ul className="font-poppins list-decimal text-forest-green">
          <p className="font-bold text-moss-green text-lg">Front/Backend</p>
          <li className="mx-6 my-2 flex justify-between">
            <p>HTML 5</p>
            <p>Intermediate</p>
          </li>
          <li className="mx-6 my-2 flex justify-between">
            <p>CSS 3</p>
            <p>Intermediate</p>
          </li>
          <li className="mx-6 flex my-2 justify-between">
            <p>JavaScript</p>
            <p>Intermediate</p>
          </li>
          <li className="mx-6 flex my-2 justify-between">
            <p>TypeScript</p>
            <p>Beginner</p>
          </li>
          <li className="mx-6 flex my-2 justify-between">
            <p>PHP</p>
            <p>Beginner</p>
          </li>
        </ul>
        <ul className="font-poppins list-decimal my-3">
          <p className="font-bold text-moss-green text-lg">Framework</p>
          <li className="mx-6 my-2 flex justify-between">
            <p>Bootstrap</p>
            <p>Intermediate</p>
          </li>
          <li className="mx-6 my-2 flex justify-between">
            <p>TailwindCSS</p>
            <p>Intermediate</p>
          </li>
          <li className="mx-6 my-2 flex justify-between">
            <p>Styled Component</p>
            <p>Beginner</p>
          </li>
          <li className="mx-6 flex my-2 justify-between">
            <p>Laravel</p>
            <p>Beginner</p>
          </li>
          <li className="mx-6 flex my-2 justify-between">
            <p>React JS</p>
            <p>Beginner</p>
          </li>
          <li className="mx-6 flex my-2 justify-between">
            <p>Next JS</p>
            <p>Beginner</p>
          </li>
        </ul>
        <ul className="font-poppins list-decimal my-3">
          <p className="font-bold text-moss-green text-lg">Version Control</p>
          <li className="mx-6 my-2 flex justify-between">
            <p>Git</p>
          </li>
        </ul>
        <ul className="font-poppins list-decimal my-3">
          <p className="font-bold text-moss-green text-lg">Support</p>
          <li className="mx-6 my-2 flex justify-between">
            <p>Figma</p>
            <p>Ok</p>
          </li>
          <li className="mx-6 my-2 flex justify-between">
            <p>Adobe Premiere pro</p>
            <p>Ok</p>
          </li>
          <li className="mx-6 flex my-2 justify-between">
            <p>Adobe After effect</p>
            <p>Ok</p>
          </li>
        </ul>
      </section>
    </PaddingContainer>
  );
}
