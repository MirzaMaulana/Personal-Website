import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  image: StaticImageData;
  cardTitle: string;
  cardDescription: string;
  sourceCode?: string;
  demoApp?: string;
  tech: string[];
}

export default function ProjectCard({
  image,
  cardTitle,
  cardDescription,
  sourceCode,
  demoApp,
  tech,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg shadow-lg my-3 bg-white max-w-sm font-poppins">
      <Link href="#!">
        <Image className="rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="p-6">
        <h5 className="text-forest-green text-xl font-medium tracking-wide mb-2">
          {cardTitle}
        </h5>
        <p className="text-moss-green text-base mb-4">{cardDescription}</p>
        <span className="text-xs text-white">
          {tech.map((technology, index) => (
            <button
              key={index}
              className="px-3 py-1 bg-minty-fresh text-forest-green rounded mr-2"
            >
              {technology}
            </button>
          ))}
        </span>
        <div className="flex space-x-2">
          <a href={sourceCode} target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="inline-block px-6 py-2.5 mt-3 bg-moss-green text-white font-medium text-xs leading-tight uppercase  rounded shadoblue hover:shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:bg-forest-green active:shadow-lg transition duration-150 ease-in-out"
            >
              Source Code
            </button>
          </a>
          {demoApp && (
            <a href={demoApp} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="block px-6 py-2.5 mt-3 bg-pale-mint text-forest-green font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-md active:text-white  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-forest-green active:shadow-lg transition duration-150 ease-in-out"
              >
                Demo App
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
