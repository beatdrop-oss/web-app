import Image from "next/image";
import React from "react";
import beatdrop from "@/public/beatdrop.png";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-beatdrop-primary py-8 flex justify-between px-4 items-center">
      <div>
        <Image src={beatdrop} alt="Beatdrop" className="w-1/3" />
      </div>
      <Link href="https://www.instagram.com/beatdrop.live/">
        <SiInstagram size={32} />
      </Link>
    </div>
  );
};

export default Footer;
