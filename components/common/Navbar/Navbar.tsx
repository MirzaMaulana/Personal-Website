import React from "react";
import PaddingContainer from "../PaddingContainer/PaddingContainer";
import Link from "next/link";

export default function Navbar({}) {
  return (
    <nav className="w-full py-6 border-b-2">
      <PaddingContainer>
        <div className="flex justify-between items-center">
          <Link href={"/"} className="flex items-center">
            <div className="w-10 h-10 rounded-md font-poppins-bold text-white flex justify-center items-center bg-moss-green">
              M
            </div>
            <p className="text-moss-green ms-3 text-xl font-poppins-bold">
              Mirza Maulana
            </p>
          </Link>
          <ul className="flex font-poppins space-x-5 list-none">
            <li>
              <Link href={"/"} className="text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="text-sm">
                About
              </Link>
            </li>
            <li>
              <Link href={"/skills"} className="text-sm">
                Skills
              </Link>
            </li>
            <li>
              <Link href={"/portfolio"} className="text-sm">
                Portfolio
              </Link>
            </li>
          </ul>
          <div className="px-6 py-2 border-2 border-moss-green rounded-lg hover:bg-moss-green hover:text-white text-sm font-semibold tracking-wide">
            <p className="font-poppins">Download CV</p>
          </div>
        </div>
      </PaddingContainer>
    </nav>
  );
}
