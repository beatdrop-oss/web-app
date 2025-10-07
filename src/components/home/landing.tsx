import Image from "next/image";
import gradient from "@/public/gradient.svg";
import beatdrop from "@/public/beatdrop.png";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white">
      <Image
        src={gradient}
        alt="Background"
        fill
        priority
        className="absolute inset-0 -z-10 overflow-hidden object-cover object-top"
      />
      <Image src={beatdrop} alt="Beatdrop" className="w-1/3 sm:w-1/4" />

      <div className="font-outfit text-2xl mt-2 mb-4">
        Hear the world from another perspective
      </div>

      <Link href="https://apps.apple.com/us/app/beatdrop-social-music/id6749929251?itscg=30200&itsct=apps_box_badge&mttnsubad=6749929251">
        <Image
          src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1758585600"
          alt="App Store"
          width={184}
          height={62}
          unoptimized
        />
      </Link>
    </div>
  );
};

export default Landing;
