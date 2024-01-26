import Link from "next/link";
import React from "react";
import PaddingContainer from "../PaddingContainer/PaddingContainer";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-forest-green md:py-12 font-poppins">
      <PaddingContainer>
        <div>
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <div className="w-10 h-10 rounded-md font-poppins-bold text-forest-green flex justify-center items-center bg-minty-fresh">
                M
              </div>
              <p className="text-minty-fresh ms-3 text-xl font-poppins-bold">
                Mirza Maulana
              </p>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-pearl-white sm:mb-0">
              <li>
                <Link href="#" className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline me-4 md:me-6">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <span className="block text-sm text-pearl-white sm:text-center ">
            © 2024{" "}
            <a
              href="https://mirza-maulana.vercel.app/"
              className="hover:underline"
            >
              Mirza Maulana
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </PaddingContainer>
    </footer>
  );
}
