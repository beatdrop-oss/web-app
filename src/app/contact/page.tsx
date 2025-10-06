import Image from "next/image";
import gradient from "@/public/gradient.svg";
import { SiInstagram } from "@icons-pack/react-simple-icons";
// import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src={gradient}
        alt="Background"
        fill
        className="absolute top-0 left-0 -z-10 overflow-hidden object-cover object-top"
      />

      <div className="font-outfit text-4xl">CONTACT US</div>
      <div className="font-outfit text-xl">connect and chat with us</div>

      <div className="flex gap-4 mt-4">
        <Link href="https://www.instagram.com/beatdrop.live/">
          <SiInstagram size={32} />
        </Link>

        {/* <Link href="">
          <FaLinkedin size={32} />
        </Link> */}
      </div>
    </div>
  );
};

export default Page;
