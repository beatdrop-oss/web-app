import Image from "next/image";
import Link from "next/link";
import React from "react";
import headphones from "@/public/headphones.png";

const Navigation = () => {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full z-10 mt-8">
      <div className="w-10/12 bg-white/20 flex justify-between items-center rounded-full py-3 px-8">
        <Link href="/">
          <Image src={headphones} alt="Headphones" height={32} />
        </Link>
        <div className="gap-4 flex font-outfit text-xl">
          <Link href="/contact" className="hover:font-bold">
            Contact
          </Link>
          <Link href="/privacy" className="hover:font-bold">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
