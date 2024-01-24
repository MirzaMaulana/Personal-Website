import React from "react";
import Link from "next/link";
import Button from "../common/Button/Button";
import PaddingContainer from "../common/PaddingContainer/PaddingContainer";
import ProjectCard from "../common/ProjectCard/ProjectCard";
import BoxMovie from "@/assets/project/box-movie.jpg";
import Bubblebash from "@/assets/project/bubblebash.jpg";
import TebarinBerita from "@/assets/project/Tebarin.jpg";

export default function SomeProject() {
  return (
    <PaddingContainer>
      <div className="flex justify-center text-forest-green my-28 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-caret-down"
          viewBox="0 0 16 16"
        >
          <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
        </svg>
      </div>

      <section className="mt-20">
        <h2 className="text-lg my-4 text-forest-green md:text-2xl">
          Some of my project
        </h2>
        {/* card project */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 justify-items-center">
          <ProjectCard
            cardTitle="Box Movie"
            cardDescription="Search Popular Movie. made with next js and styled components."
            demoApp="search-box-movie.vercel.app"
            image={BoxMovie}
            sourceCode="https://github.com/MirzaMaulana/Box-Movie"
            tech={["Next JS", "Styled Components"]}
          />
          <ProjectCard
            cardTitle="Tebarin Berita"
            cardDescription="A news web project using Laravel 9 is a web application"
            image={TebarinBerita}
            sourceCode="https://github.com/MirzaMaulana/Magang-Laravel"
            tech={["Laravel 9", "Bootstrap 5", "Mysql"]}
          />
          <ProjectCard
            cardTitle="BubbleBash Profile"
            cardDescription="Create Simple Landing page using Create react app"
            demoApp="bubblebash-profile.vercel.app"
            image={Bubblebash}
            sourceCode="https://github.com/MirzaMaulana/Bubblebash"
            tech={["React JS", "Tailwind CSS"]}
          />
        </div>
      </section>
      <div className="flex justify-center my-10">
        <Link href={"/portofolio"} className="font-medium font-poppins">
          <Button
            background={"moss"}
            className="text-white hover:shadow-md transition-all active:bg-minty-fresh"
            rounded={"md"}
          >
            More Project
          </Button>
        </Link>
      </div>
    </PaddingContainer>
  );
}
